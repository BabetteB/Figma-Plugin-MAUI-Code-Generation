import { DisplayNode, NestedNode } from "./code";
import { Property, PropertyName } from "./Property";
import { Element, ElementName } from "./Element";


function checkNodeType(node: BaseNode): string {
  // Check the node's type using the 'type' property
  switch (node.type) {
    case 'FRAME':
      let frameNode = node as FrameNode;
      return '';
    case 'GROUP':
      let groupNode = node as GroupNode;
      return 'Group';
    case 'INSTANCE':
      let instanceNode = node as InstanceNode;
      return '';//TranslateInstanceElement(instanceNode);
    case 'RECTANGLE':
      let rectangleNode = node as RectangleNode;
      return ''; //TranslateRectangleElement(rectangleNode);
    case 'TEXT':
      let textNode = node as TextNode;
      return ''; //TranslateTextElement(textNode);
    case 'ELLIPSE':
      let ellipseNode = node as EllipseNode;
      return ''; //TranslateEllipseElement(ellipseNode);
    case 'VECTOR':
      let vectorNode = node as VectorNode;
      return 'Vector';
    case 'LINE':
      let lineNode = node as LineNode;
      return '';
    case 'STAR':
      let starNode = node as StarNode;
      return 'Star';
    case 'POLYGON':
      let polygonNode = node as PolygonNode;
      return 'Polygon';
    case 'BOOLEAN_OPERATION':
      let booleanOperationNode = node as BooleanOperationNode;
      return 'BooleanOperation';
    case 'COMPONENT':
      let componentNode = node as ComponentNode;
      return 'Component';
    case 'SLICE':
      let sliceNode = node as SliceNode;
      return 'Slice';
    default:
      return 'Unknown';
  }
}


function ParseFigma(nodes: NestedNode[]): string {
  let xamlCode = "";

  nodes.forEach((node) => {
    xamlCode += checkNodeType(node.parent.node)
  });

  return xamlCode;
}





// Add translation functions for other Figma node types as needed

function formatStartTag(element: Element): string {
  const propertyString = element.properties
    .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
    .join(" ");

  return `<${ElementName[element.name]} ${propertyString}>`;
}

function formatEndTag(element: Element): string {
  return `</${ElementName[element.name]}>`;
}
