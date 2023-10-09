import { Element, ElementName } from "../../Element";
import { Property, PropertyName } from "../../Property";
import { TranslateCommonProperties } from "../../commonPropertyParser";

export function TranslateVectorElement(node: VectorNode): Element {
    const vectorProperties: Property[] = [
      { name: PropertyName.Source,          value: translateSource(node) },
    ];
  
    const vectorElement: Element = { name: ElementName.Image, properties: vectorProperties.concat(TranslateCommonProperties(node)) };
    return vectorElement;
  }

function translateSource(node : VectorNode) : string {
    return `${node.name.toLowerCase}.png`
}