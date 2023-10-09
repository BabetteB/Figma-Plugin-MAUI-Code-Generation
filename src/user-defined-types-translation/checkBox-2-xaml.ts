import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";


export function TranslateCheckBoxElement(node : SceneNode) : Element {
    const checkBoxProperties: Property[] = [
        { name: PropertyName.IsChecked,     value: "false" }
      ]
      const checkBoxElement: Element = { name: ElementName.CheckBox, properties: checkBoxProperties };
      return checkBoxElement;
}