import { Element, ElementName } from "../../Element";
import { Property, PropertyName } from "../../Property";

export function TranslateVectorElement(node: VectorNode): Element {
    const vectorProperties: Property[] = [
      { name: PropertyName.WidthRequest,           value: node.width.toString() },
      { name: PropertyName.HeightRequest,          value: node.height.toString() },
      { name: PropertyName.Source,          value: translateSource(node) },
      // Add other ellipse-related properties as needed
    ];
  
    const vectorElement: Element = { name: ElementName.Image, properties: vectorProperties };
    return vectorElement;
  }

function translateSource(node : VectorNode) : string {
    return `${node.name}.png`
}