import { Element, ElementName } from "../../Element";
import { Property, PropertyName } from "../../Property";
import { formatEndTag, formatStartTag } from "../../XamlParser";

export function TranslateRectangleElement(node: RectangleNode): string {
    const rectangleProperties: Property[] = [
      { name: PropertyName.Width, value: node.width.toString() },
      { name: PropertyName.Height, value: node.height.toString() }
      // Add other rectangle-related properties as needed
    ];
  
    const rectangleElement: Element = { name: ElementName.Rectangle, properties: rectangleProperties };
    return formatStartTag(rectangleElement) + formatEndTag(rectangleElement);
  }