import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";
import { TranslateCommonProperties } from "../commonPropertyParser";


export function TranslateImageElement(node : SceneNode) : Element {
    const imageProperties: Property[] = [
        { name: PropertyName.HeightRequest,     value: node.height.toString() },
        { name: PropertyName.WidthRequest,      value: node.width.toString() }
      ]
      const editorElement: Element = { name: ElementName.Editor, properties: imageProperties.concat(TranslateCommonProperties(node)) };
      return editorElement;
}