import { Element, ElementName } from "../../Element";
import { Property, PropertyName } from "../../Property";
import { formatEndTag, formatStartTag } from "../../XamlParser";

export function TranslateLineElement(node: LineNode): string {
    const lineProperties: Property[] = [
      { name: PropertyName.X1,      value: '0' },
      { name: PropertyName.Y1,      value: '0' },
      { name: PropertyName.X2,      value: '50' },
      { name: PropertyName.Y2,      value: '0'},
      { name: PropertyName.Stroke,  value: '#000000'},
      // Add other line-related properties as needed
    ];
  
    const lineElement: Element = { name: ElementName.Line, properties: lineProperties };
    return formatStartTag(lineElement) + formatEndTag(lineElement);
  }