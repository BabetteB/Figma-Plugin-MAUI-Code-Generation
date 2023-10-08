import { Element, ElementName } from "../../Element";
import { Property, PropertyName } from "../../Property";
import { TranslateCommonProperties } from "../../commonPropertyParser";

export function TranslateEllipseElement(node: EllipseNode): Element {

  const ellipseProperties: Property[] = [
    { name: PropertyName.Fill,    value: node.fills.toString() },
    { name: PropertyName.StrokeThickness,  value: node.strokeWeight.toString()},
    { name: PropertyName.Stroke,  value: translateFillsToFigma(node) ?? 'None'},
  ];

  const ellipseElement: Element = { name: ElementName.Ellipse, properties: ellipseProperties.concat(TranslateCommonProperties(node)) };
  return ellipseElement;
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