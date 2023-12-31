import { ElementName } from "../../Element";
import { PropertyName } from "../../Property";
import { formatEndTag, formatStartTag } from "../../XamlParser";
export function TranslateEllipseElement(node) {
    const ellipseProperties = [
        { name: PropertyName.Width, value: node.width.toString() },
        { name: PropertyName.Height, value: node.height.toString() },
        { name: PropertyName.Fill, value: node.fills.toString() },
        { name: PropertyName.StrokeThickness, value: node.strokeWeight.toString() },
        { name: PropertyName.Stroke, value: '#000000' },
        // Add other ellipse-related properties as needed
    ];
    const ellipseElement = { name: ElementName.Ellipse, properties: ellipseProperties };
    return formatStartTag(ellipseElement) + formatEndTag(ellipseElement);
}
