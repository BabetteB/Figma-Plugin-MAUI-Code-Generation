import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";


export function TranslateButtonElement(node : SceneNode) : Element {
    const buttonProperties: Property[] = [
        { name: PropertyName.HeightRequest,     value: node.height.toString() },
        { name: PropertyName.WidthRequest,      value: node.width.toString() }
      ]
      const buttonElement: Element = { name: ElementName.Button, properties: buttonProperties };
      return buttonElement;
}