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


function checkNodeType(node: BaseNode): string {
  // Check the node's type using the 'type' property
  switch (node.type) {
    case 'FRAME':
      let frameNode = node as FrameNode;
      let nestedFrameNodes = '';
      frameNode.children.forEach(n => nestedFrameNodes += checkNodeType(n) + `\n`);
      let frameElement = TranslateFigmaFrameToXamlLayout(node);
      return formatStartTag(frameElement) + `\t${nestedFrameNodes}` + formatEndTag(frameElement);

    case 'GROUP':
      let groupNode = node as GroupNode;
      let nestedGroupNodes = '';
      groupNode.children.forEach(n => nestedGroupNodes += checkNodeType(n) + `\n`);
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
      componentNode.children.forEach(n => nestedComponent += `\t${checkNodeType(n)}\n`);
      return contentView.getStartTag() + `\n${nestedComponent}` + contentView.getEndTag();

    //Are not getting castet 
    case 'VECTOR':
      let vectorNode = node as VectorNode;
    case 'STAR':
      let starNode = node as StarNode;
    case 'BOOLEAN_OPERATION':
      let booleanOperationNode = node as BooleanOperationNode;
    case 'SLICE':
      let sliceNode = node as SliceNode;
    default:
      return `This plugin is unfortuanately unable to cast ${node.type}s as MAUI elements.`;
  }
}

export function ParseFigma(node: BaseNode) {
  let xamlCode = "";

  let contentPage = new ContentPage(node.name);
  xamlCode += contentPage.getStartTag() + newline();

  if('children' in node) {
    node.children.forEach((c) => {
      xamlCode += checkNodeType(c) + newline();
    });
  }

  xamlCode += contentPage.getEndTag();

  console.log(xamlCode);
}

export function formatStartTag(element: Element): string {
  const propertyString = element.properties
    .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
    .join(" " );

  return `<${ElementName[element.name]} ${propertyString}>` + newline();
}

function formatShortTag(element : Element): string {
  const propertyString = element.properties
    .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
    .join(" " + newline() + `\t`);

  return `<${ElementName[element.name]} ${propertyString}/>` + newline();
}

export function formatEndTag(element: Element): string {
  return `</${ElementName[element.name]}>`;
}

function newline() : string {
  return `\n`
}

