import { Element, ElementName } from "../../Element";
import { Property, PropertyName } from "../../Property";
import { formatShortTag, formatStartTag } from "../../XamlParser";
import { FigmaNode } from "../../figmaNodeTypes";


export function TranslateCommonShapeProperties(node : SceneNode) : string {

    return ''//translateFillsToFigma(node);
}

function translateFillsToFigma(node: SceneNode): Property[] | { parent: Element; children: Element[]; }[] | null{
    let elements : {parent: Element, children: Element[]}[] = [];
  
    if ('fills' in node) {
        const fills: ReadonlyArray<Paint> = node.fills as ReadonlyArray<Paint>;
        if (fills && fills.length > 0) {
            fills.forEach((fill) => {
                if (fill.type === 'SOLID') {
                    // Handle Solid Paint
                    const solidPaint = fill as SolidPaint;
                    const color = `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;
  
                    return ([{ name: PropertyName.Background, value: color }] as Property[]);
  
                } else if (fill.type === 'GRADIENT_LINEAR') {
                    const gradientPaint = fill as GradientPaint;
  
                    let linearGradientBrushProp : Property[] = [
                      {name: PropertyName.EndPoint, value: '1,0'}
                    ];
                    let linearGradientBrushElement : Element =
                      {name : ElementName.LinearGradientBrush, properties: linearGradientBrushProp}
  
  
                    if (gradientPaint.gradientStops) {
                      let gradProps = [] as Element[];
                        gradientPaint.gradientStops.forEach(stop => {
                            let gradProp : Property[]= [
                              {name: PropertyName.OffSet, value: `${stop.position}`},
                              {name: PropertyName.Color, value: `#${stop.color.r}${stop.color.g}${stop.color.b}`}
                            ];
                            gradProps.push({name: ElementName.GradientStop, properties: gradProp});
                        });
                        elements.push({parent: linearGradientBrushElement, children: gradProps})
                    }
                } else if (fill.type === 'GRADIENT_RADIAL') {
                  // Handle Gradient Paint (Linear or Radial)
                  const gradientPaint = fill as GradientPaint;
  
                  let radialGradientBrushProp : Property[] = [
                    {name: PropertyName.Center, value: '0.5, 0.5'},
                    {name: PropertyName.Radius, value: '0.5'}
                  ];
                  let radialGradientBrushElement : Element =
                    {name : ElementName.RadialGradientBrush, properties: radialGradientBrushProp};
  
                  if (gradientPaint.gradientStops) {
                    let gradProps = [] as Element[];
                      gradientPaint.gradientStops.forEach(stop => {
                          let gradProp : Property[]= [
                            {name: PropertyName.OffSet, value: `${stop.position}`},
                            {name: PropertyName.Color, value: `#${stop.color.r}${stop.color.g}${stop.color.b}`}
                          ];
                          let gradStop : Element = {name: ElementName.GradientStop, properties: gradProp};
                          gradProps.push({name: ElementName.GradientStop, properties: gradProp});
                      });
                      elements.push({parent: radialGradientBrushElement, children: gradProps})
  
                  }
                }
            });
        }
    }
  
    if (elements.length !== 0) {
      return elements;
    }
    return null;
  }