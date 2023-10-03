import { Element, ElementName } from "../../Element";
import { Property, PropertyName } from "../../Property";

export function TranslateEllipseElement(node: EllipseNode): Element {
    const ellipseProperties: Property[] = [
      { name: PropertyName.Width,   value: node.width.toString() },
      { name: PropertyName.Height,  value: node.height.toString() },
      { name: PropertyName.Fill,    value: node.fills.toString() },
      { name: PropertyName.StrokeThickness,  value: node.strokeWeight.toString()},
      { name: PropertyName.Stroke,  value: '#000000'},
      // Add other ellipse-related properties as needed
    ];
  
    const ellipseElement: Element = { name: ElementName.Ellipse, properties: ellipseProperties };
    return ellipseElement;
  }