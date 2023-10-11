import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";
import { TranslateCommonProperties } from "../commonPropertyParser";
import { TranslateButtonElement } from "./button-2-xaml";


export function TranslateImageButtonElement(node : SceneNode) : Element {
  let buttonElement = TranslateButtonElement(node)
  let imageButtonProperties : Property[] = [
    {name: PropertyName.ImageSource, value: translateSource(node)}
  ];
  
  let imageButtonElement = { name: ElementName.ImageButton, properties: buttonElement.properties.concat(imageButtonProperties) };
  return imageButtonElement;
}

function translateSource(node : SceneNode) : string {
  return `${node.name.toLowerCase()}.png`
}