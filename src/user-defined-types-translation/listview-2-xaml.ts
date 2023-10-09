import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";


export function TranslateListViewElement(node : SceneNode) : Element {
    const listviewProperties: Property[] = [
        { name: PropertyName.HeightRequest,     value: node.height.toString() },
        { name: PropertyName.WidthRequest,      value: node.width.toString() }
      ]
      const listviewElement: Element = { name: ElementName.ListView, properties: listviewProperties };
      return listviewElement;
}