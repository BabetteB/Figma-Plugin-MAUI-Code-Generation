import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";


export function TranslateCollectionElement(node : SceneNode) : Element {
    const listviewProperties: Property[] = [
        { name: PropertyName.IsToggled,     value: "false" }
      ]
      const listviewElement: Element = { name: ElementName.CollectionView, properties: listviewProperties };
      return listviewElement;
}