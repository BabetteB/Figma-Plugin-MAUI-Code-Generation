import { Element, ElementName } from "../../Element";
import { Property, PropertyName } from "../../Property";
import { TranslateCommonProperties } from "../../commonPropertyParser";

export function TranslateRectangleElement(node: RectangleNode): Element {
    const rectangleProperties: Property[] = [
      { name: PropertyName.RadiusX, value: translateDefaultNumberValue(node.topLeftRadius) },
      { name: PropertyName.RadiusY, value: translateDefaultNumberValue(node.bottomRightRadius) },
      { name: PropertyName.Fill,    value: translateFillsToFigma(node) ?? 'None'}
    ];
    const rectangleElement: Element = { name: ElementName.Rectangle, properties: rectangleProperties.concat(TranslateCommonProperties(node)) };
    return rectangleElement; 
  }

  function translateDefaultNumberValue(n : number) : string {
    if (n === 0) {
      return 'None'
    } else {
      return n.toString();
    }
  }

  function translateFillsToFigma(node: SceneNode) : string | null {
    if ('fills' in node) {
      let xamlString = `.${ElementName.Background}`;
  
      const fills: ReadonlyArray<Paint> = node.fills as ReadonlyArray<Paint>;
      if (fills && fills.length > 0) {
          fills.forEach((fill) => {
              if (fill.type === 'SOLID') {
                  // Handle Solid Paint
                  const solidPaint = fill as SolidPaint;
                  return `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;
  
              } });
      }
    }
   return null;
  }