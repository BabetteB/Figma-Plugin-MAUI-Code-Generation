import { PropertyName } from "./Property";
import { ElementName } from "./Element";
import { TranslateFigmaFrameToXamlLayout } from "./figma-node-translation/frame-2-layout";
import { TranslateEllipseElement } from "./figma-node-translation/shapes/ellipse-2-ellipse";
import { TranslateTextElement } from "./figma-node-translation/text-2-label";
import { ContentView } from "./xaml-views-classes/xaml-view";
import { CustomControl } from "./xaml-views-classes/xaml-custom-control";
import { TranslateRectangleElement } from "./figma-node-translation/shapes/rectangle-2-rectangle";
import { TranslateLineElement } from "./figma-node-translation/shapes/line-2-line";
function checkNodeType(node) {
    // Check the node's type using the 'type' property
    switch (node.type) {
        case 'FRAME':
            let frameNode = node;
            //TODO: Translate Children
            return TranslateFigmaFrameToXamlLayout(node);
        case 'GROUP':
            let groupNode = node;
            //TODO: Translate Children
            return 'Group';
        case 'TEXT':
            let textNode = node;
            return TranslateTextElement(textNode);
        case 'ELLIPSE':
            let ellipseNode = node;
            return TranslateEllipseElement(ellipseNode);
        case 'LINE':
            let lineNode = node;
            return TranslateLineElement(lineNode);
        case 'RECTANGLE':
            let rectangleNode = node;
            return TranslateRectangleElement(rectangleNode);
        case 'POLYGON':
            let polygonNode = node;
            return 'Polygon';
        case 'INSTANCE':
            let instanceNode = node;
            let bindings = []; //TODO: children
            let customControl = new CustomControl(instanceNode.name, bindings);
            return customControl.getStartTag() + customControl.getEndTag();
        case 'COMPONENT':
            let componentNode = node;
            // TODO: Make new resource file / new window
            let contentView = new ContentView(node.name);
            // TODO: Translate children and append to contentview
            return contentView.getStartTag() + 'parsleXaml(children)' + contentView.getEndTag();
        //Are not getting castet 
        case 'VECTOR':
            let vectorNode = node;
        case 'STAR':
            let starNode = node;
        case 'BOOLEAN_OPERATION':
            let booleanOperationNode = node;
        case 'SLICE':
            let sliceNode = node;
        default:
            return `This plugin is unfortuanately unable to cast ${node.type}s as MAUI elements.`;
    }
}
export function ParseFigma(nodes) {
    let xamlCode = "";
    nodes.forEach((node) => {
        xamlCode += checkNodeType(node.parent.node);
    });
    console.log(xamlCode);
}
export function formatStartTag(element) {
    const propertyString = element.properties
        .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
        .join(" ");
    return `<${ElementName[element.name]} ${propertyString}>`;
}
export function formatEndTag(element) {
    return `</${ElementName[element.name]}>`;
}
