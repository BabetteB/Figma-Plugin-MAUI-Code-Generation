import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";


export function TranslateSwitchElement(node : SceneNode) : Element {
    const switchProperties: Property[] = [
        { name: PropertyName.IsToggled,     value: "false" }
      ]
      const switchElement: Element = { name: ElementName.Switch, properties: switchProperties };
      return switchElement;
}