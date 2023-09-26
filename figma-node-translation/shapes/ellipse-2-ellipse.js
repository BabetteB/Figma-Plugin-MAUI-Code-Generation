import { ElementName } from "../../Element";
import { PropertyName } from "../../Property";
import { formatEndTag, formatStartTag } from "../../XamlParser";
function TranslateEllipseElement(node) {
    const ellipseProperties = [
        { name: PropertyName.Width, value: node.width.toString() },
        { name: PropertyName.Height, value: node.height.toString() },
        // Add other ellipse-related properties as needed
    ];
    const ellipseElement = { name: ElementName.Ellipse, properties: ellipseProperties };
    return formatStartTag(ellipseElement) + formatEndTag(ellipseElement);
}
