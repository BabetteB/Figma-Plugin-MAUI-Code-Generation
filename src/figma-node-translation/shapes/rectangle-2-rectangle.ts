import { Element, ElementName } from "../../Element";
import { Property, PropertyName } from "../../Property";

export function TranslateRectangleElement(node: RectangleNode): Element {
    const rectangleProperties: Property[] = [
      { name: PropertyName.Width, value: node.width.toString() },
      { name: PropertyName.Height, value: node.height.toString() }
      // Add other rectangle-related properties as needed
    ];
  
    const rectangleElement: Element = { name: ElementName.Rectangle, properties: rectangleProperties };
    return rectangleElement; 
  }