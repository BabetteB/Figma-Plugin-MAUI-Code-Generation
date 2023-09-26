import { PropertyName } from "./Property";
import { ElementName } from "./Element";
function checkNodeType(node) {
    // Check the node's type using the 'type' property
    switch (node.type) {
        case 'FRAME':
            let frameNode = node;
            return '';
        case 'GROUP':
            let groupNode = node;
            return 'Group';
        case 'INSTANCE':
            let instanceNode = node;
            return ''; //TranslateInstanceElement(instanceNode);
        case 'RECTANGLE':
            let rectangleNode = node;
            return ''; //TranslateRectangleElement(rectangleNode);
        case 'TEXT':
            let textNode = node;
            return ''; //TranslateTextElement(textNode);
        case 'ELLIPSE':
            let ellipseNode = node;
            return ''; //TranslateEllipseElement(ellipseNode);
        case 'VECTOR':
            let vectorNode = node;
            return 'Vector';
        case 'LINE':
            let lineNode = node;
            return '';
        case 'STAR':
            let starNode = node;
            return 'Star';
        case 'POLYGON':
            let polygonNode = node;
            return 'Polygon';
        case 'BOOLEAN_OPERATION':
            let booleanOperationNode = node;
            return 'BooleanOperation';
        case 'COMPONENT':
            let componentNode = node;
            return 'Component';
        case 'SLICE':
            let sliceNode = node;
            return 'Slice';
        default:
            return 'Unknown';
    }
}
function ParseFigma(nodes) {
    let xamlCode = "";
    nodes.forEach((node) => {
        xamlCode += checkNodeType(node.parent.node);
    });
    return xamlCode;
}
// Add translation functions for other Figma node types as needed
function formatStartTag(element) {
    const propertyString = element.properties
        .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
        .join(" ");
    return `<${ElementName[element.name]} ${propertyString}>`;
}
function formatEndTag(element) {
    return `</${ElementName[element.name]}>`;
}
