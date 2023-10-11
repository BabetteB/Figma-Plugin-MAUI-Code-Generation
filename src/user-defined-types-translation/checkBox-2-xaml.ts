import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";
import { TranslateCommonProperties } from "../commonPropertyParser";


export function TranslateCheckBoxElement(node : SceneNode) : Element {
    const checkBoxProperties: Property[] = [
        { name: PropertyName.IsChecked,     value: "false" }
      ]
      const checkBoxElement: Element = { name: ElementName.CheckBox, properties: checkBoxProperties.concat(TranslateCommonProperties(node)) };
      return checkBoxElement;
}