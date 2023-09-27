import { ElementName } from "../../Element";
import { PropertyName } from "../../Property";
import { formatEndTag, formatStartTag } from "../../XamlParser";
export function TranslateRectangleElement(node) {
    const rectangleProperties = [
        { name: PropertyName.Width, value: node.width.toString() },
        { name: PropertyName.Height, value: node.height.toString() }
        // Add other rectangle-related properties as needed
    ];
    const rectangleElement = { name: ElementName.Rectangle, properties: rectangleProperties };
    return formatStartTag(rectangleElement) + formatEndTag(rectangleElement);
}
