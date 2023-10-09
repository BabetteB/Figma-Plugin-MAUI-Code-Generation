import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";


export function TranslateCollectionElement(node : SceneNode) : Element {
    const listviewProperties: Property[] = [
        { name: PropertyName.HeightRequest,     value: node.height.toString() },
        { name: PropertyName.WidthRequest,      value: node.width.toString() }
      ]
      const listviewElement: Element = { name: ElementName.CollectionView, properties: listviewProperties };
      return listviewElement;
}