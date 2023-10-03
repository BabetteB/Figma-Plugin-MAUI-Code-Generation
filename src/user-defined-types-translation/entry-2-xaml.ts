import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";


export function TranslateEntryElement(node : SceneNode) : Element {
    const entryProperties: Property[] = [
        { name: PropertyName.HeightRequest,     value: node.height.toString() },
        { name: PropertyName.WidthRequest,      value: node.width.toString() }
      ]
      const entryElement: Element = { name: ElementName.Entry, properties: entryProperties };
      return entryElement;
}