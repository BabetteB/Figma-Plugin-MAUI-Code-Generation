import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";
import { TranslateCommonProperties } from "../commonPropertyParser";


export function TranslateEntryElement(node : SceneNode) : Element {
    const entryProperties: Property[] = [];
      const entryElement: Element = { name: ElementName.Entry, properties: entryProperties.concat(TranslateCommonProperties(node)) };
      return entryElement;
}