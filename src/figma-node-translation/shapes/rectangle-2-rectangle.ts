import { Element, ElementName } from "../../Element";
import { Property, PropertyName } from "../../Property";
import { TranslateCommonProperties } from "../../commonPropertyParser";

export function TranslateRectangleElement(node: RectangleNode): Element {
  let commonProperties = TranslateCommonProperties(node);
    const rectangleProperties: Property[] = [
      { name: PropertyName.RadiusX, value: node.topLeftRadius.toString() },
      { name: PropertyName.RadiusY, value: node.bottomRightRadius.toString() }
    ];
    const rectangleElement: Element = { name: ElementName.Rectangle, properties: rectangleProperties.concat(commonProperties) };
    return rectangleElement; 
  }