import { Element, ElementName } from "../../Element";
import { Property, PropertyName } from "../../Property";

export function TranslateLineElement(node: LineNode): Element {
    const lineProperties: Property[] = [
      { name: PropertyName.X1,      value: '0' },
      { name: PropertyName.Y1,      value: '0' },
      { name: PropertyName.X2,      value: node.width.toString() },
      { name: PropertyName.Y2,      value: getYforX(node).toString() },
      { name: PropertyName.Stroke,  value: translateFillsToFigma(node) ?? 'None'},
      { name: PropertyName.StrokeDashArray,  value: translateDash(node)},
      // Add other line-related properties as needed
    ];
  
    const lineElement: Element = { name: ElementName.Line, properties: lineProperties };
    return lineElement; 
  }

  function translateDash(node : LineNode) {
    return `${node.dashPattern[0]},${node.dashPattern[1]}`
  }

  function getYforX(node : LineNode): number{
    let length = node.width;
    let rotation = node.rotation;
    // Convert the rotation angle from degrees to radians
    // Convert the rotation angle from degrees to radians
    let theta = rotation * (Math.PI / 180);
    
    // Calculate the y-change using sine of the angle
    let h = length * Math.sin(theta);
    
    return h;
  }

  function translateFillsToFigma(node: SceneNode) : string | null {
    if ('fills' in node) {
      const fills: ReadonlyArray<Paint> = node.fills as ReadonlyArray<Paint>;
      if (fills && fills.length > 0) {
          fills.forEach((fill) => {
              if (fill.type === 'SOLID') {
                  // Handle Solid Paint
                  const solidPaint = fill as SolidPaint;
                  return `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;
              }
            });
      }
    }
    return null;
  }