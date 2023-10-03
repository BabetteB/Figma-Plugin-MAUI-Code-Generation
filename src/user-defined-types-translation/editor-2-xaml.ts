import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";


export function TranslateEditorElement(node : SceneNode) : Element {
    const editorProperties: Property[] = [
        { name: PropertyName.HeightRequest,     value: node.height.toString() },
        { name: PropertyName.WidthRequest,      value: node.width.toString() }
      ]
      const editorElement: Element = { name: ElementName.Editor, properties: editorProperties };
      return editorElement;
}