import { Element, ElementName } from "../../Element";
import { Property, PropertyName } from "../../Property";
import { formatEndTag, formatStartTag } from "../../XamlParser";

function TranslateEllipseElement(node: EllipseNode): string {
    const ellipseProperties: Property[] = [
      { name: PropertyName.Width, value: node.width.toString() },
      { name: PropertyName.Height, value: node.height.toString() },
      // Add other ellipse-related properties as needed
    ];
  
    const ellipseElement: Element = { name: ElementName.Ellipse, properties: ellipseProperties };
    return formatStartTag(ellipseElement) + formatEndTag(ellipseElement);
  }