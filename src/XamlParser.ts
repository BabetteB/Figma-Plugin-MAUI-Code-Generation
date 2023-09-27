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


function checkNodeType(node: BaseNode): string {
  // Check the node's type using the 'type' property
  switch (node.type) {
    case 'FRAME':
      let frameNode = node as FrameNode;
      let nestedNodes = '';
      frameNode.children.forEach(n => nestedNodes += checkNodeType(n) + `\n`);
      return TranslateFigmaFrameToXamlLayout(node) + nestedNodes;

    case 'GROUP':
      let groupNode = node as GroupNode;
      //TODO: Translate Children
      return 'Group';

    case 'TEXT':
      let textNode = node as TextNode;
      return TranslateTextElement(textNode);

    case 'ELLIPSE':
      let ellipseNode = node as EllipseNode;
      return TranslateEllipseElement(ellipseNode);

    case 'LINE':
      let lineNode = node as LineNode;
      return TranslateLineElement(lineNode);

    case 'RECTANGLE':
      let rectangleNode = node as RectangleNode;
      return TranslateRectangleElement(rectangleNode);

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
      // TODO: Translate children and append to contentview
      return contentView.getStartTag() + '\n TODO: parsleXaml(children)' + contentView.getEndTag();

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

export function ParseFigma(nodes: NestedNode[]) {
  let xamlCode = "";

  nodes.forEach((node) => {
    xamlCode += checkNodeType(node.parent.node)
  });

  console.log(xamlCode);
}
export function formatStartTag(element: Element): string {
  const propertyString = element.properties
    .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
    .join(" ");

  return `<${ElementName[element.name]} ${propertyString}>`;
}

export function formatEndTag(element: Element): string {
  return `</${ElementName[element.name]}>`;
}

