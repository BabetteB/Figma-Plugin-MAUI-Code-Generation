import { Property, PropertyName } from "./Property";
import { Element, ElementName } from "./Element";

import { TranslateFigmaFrameToXamlLayout } from "./figma-node-translation/frame-2-layout";
import { TranslateEllipseElement } from "./figma-node-translation/shapes/ellipse-2-ellipse";
import { TranslateTextElement } from "./figma-node-translation/text-2-label";
import { ContentView } from "./xaml-views-classes/xaml-view";
import { Binding, CustomControl } from "./xaml-views-classes/xaml-custom-control";
import { TranslateRectangleElement } from "./figma-node-translation/shapes/rectangle-2-rectangle";
import { TranslateLineElement } from "./figma-node-translation/shapes/line-2-line";
import { NestedNode } from "./code";
import { ContentPage } from "./xaml-views-classes/xaml-page";
import { TranslateVectorElement } from "./figma-node-translation/shapes/vector-2-icon";
import { TranslateButtonElement } from "./user-defined-types-translation/button-2-xaml";
import { TranslateEditorElement } from "./user-defined-types-translation/editor-2-xaml";
import { TranslateEntryElement } from "./user-defined-types-translation/entry-2-xaml";
import { TranslateListViewElement } from "./user-defined-types-translation/listview-2-xaml";


function checkNodeType(nn: NestedNode): string {
  if (nn.parent.utype !== 'None') {
    return parseUtypeNodes(nn);
  } 
  let node = nn.parent.node;
  // Check the node's type using the 'type' property
  switch (node.type) {
    case 'FRAME':
      let frameNode = node as FrameNode;
      let nestedFrameNodes = '';
      nn.children.forEach(n => nestedFrameNodes += checkNodeType(n) + `\n`);
      let frameElement = TranslateFigmaFrameToXamlLayout(frameNode);
      return formatStartTag(frameElement) + `\t${nestedFrameNodes}` + formatEndTag(frameElement);

    case 'GROUP':
      let groupNode = node as GroupNode;
      let nestedGroupNodes = '';
      nn.children.forEach(n => nestedGroupNodes += checkNodeType(n) + `\n`);
      return nestedGroupNodes;

    case 'TEXT':
      let textNode = node as TextNode;
      let textElement = TranslateTextElement(textNode);
      return formatShortTag(textElement);

    case 'ELLIPSE':
      let ellipseNode = node as EllipseNode;
      let ellipseElement = TranslateEllipseElement(ellipseNode);
      return formatShortTag(ellipseElement);

    case 'LINE':
      let lineNode = node as LineNode;
      let lineElement = TranslateLineElement(lineNode);
      return formatShortTag(lineElement);

    case 'RECTANGLE':
      let rectangleNode = node as RectangleNode;
      let rectangleElement = TranslateRectangleElement(rectangleNode); 
      return formatShortTag(rectangleElement);

    case 'POLYGON':
      let polygonNode = node as PolygonNode;
      return 'Polygon';

    case 'INSTANCE':
      let instanceNode = node as InstanceNode;
      let bindings : Binding[] = [] //TODO: children
      let customControl = new CustomControl(instanceNode.name, bindings);
      return customControl.getStartTag() + customControl.getEndTag();

    case 'COMPONENT':
      let componentNode = node as ComponentNode;
      // TODO: Make new resource file / new window
      let contentView = new ContentView(node.name);
      let nestedComponent = '';
      nn.children.forEach(n => nestedComponent += `\t${checkNodeType(n)}\n`);
      return contentView.getStartTag() + `\n${nestedComponent}` + contentView.getEndTag();

    //Are not getting castet 
    case 'VECTOR':
      let vectorNode = node as VectorNode;
      let vectorNote = `// Please export ${vectorNode.name} as a .png- or .svg file and place in the Resource/Images/ folder\n`
      let vectorElement = TranslateVectorElement(vectorNode); 
      return vectorNote + formatShortTag(vectorElement);

    case 'STAR':
      let starNode = node as StarNode;
    case 'BOOLEAN_OPERATION':
      let booleanOperationNode = node as BooleanOperationNode;
    case 'SLICE':
      let sliceNode = node as SliceNode;
    default:
      return `<!-- This plugin is unfortuanately unable to cast ${node.type}s as MAUI elements. -->`;
  }
}

function parseUtypeNodes(nn : NestedNode) : string {
  let node = nn.parent;
  // Check the node's type using the 'type' property
  switch (node.utype) {
    case 'BUTTON':
      let buttonNode = node.node as SceneNode;
      let buttonElement = TranslateButtonElement(buttonNode);
      return formatShortTag(buttonElement);

    case 'EDITOR':
      let editorNode = node.node as SceneNode;
      let editorElement = TranslateEditorElement(editorNode);
      return formatShortTag(editorElement);

    case 'ENTRY':
      let entryNode = node.node as SceneNode;
      let entryElement = TranslateEntryElement(entryNode);
      return formatShortTag(entryElement);

    case 'LISTVIEW':
      let listViewNode = node.node as SceneNode;
      let listViewElement = TranslateListViewElement(listViewNode);
      return formatShortTag(listViewElement);

    default:
      return '';
  }
}

export function ParseFigma(nodes: NestedNode[]) : string {
  let xamlCode = "";
  let rootnode = nodes[0];
  let contentPage = new ContentPage(rootnode.parent.node.name);
  xamlCode += contentPage.getStartTag() + newline();

  rootnode.children.forEach( c => {
    xamlCode += checkNodeType(c); //check if it is a user defined node or not
  });

  xamlCode += contentPage.getEndTag();

  return xamlCode;
}

function formatStartTag(element: Element): string {
  const propertyString = element.properties
    .filter((prop) => (prop.value !== 'None')) // Exclude properties with value 'None' because then it is set to default value
    .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
    .join(" ");

  return `<${ElementName[element.name]} ${propertyString}>` + newline();
}

function formatShortTag(element : Element): string {
  const propertyString = element.properties
    .filter((prop) => prop.value !== 'None') // Exclude properties with value 'None' because then it is set to default value
    .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
    .join(" " + newline() + `\t`);

  return `<${ElementName[element.name]} ${propertyString}/>` + newline();
}

function formatEndTag(element: Element): string {
  return `</${ElementName[element.name]}>`;
}

function newline() : string {
  return `\n`
}

