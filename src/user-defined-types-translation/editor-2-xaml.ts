import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";
import { TranslateCommonProperties } from "../commonPropertyParser";


export function TranslateEditorElement(node : SceneNode) : Element {
    const editorProperties: Property[] = [];
      const editorElement: Element = { name: ElementName.Editor, properties: editorProperties.concat(TranslateCommonProperties(node)) };
      return editorElement;
}