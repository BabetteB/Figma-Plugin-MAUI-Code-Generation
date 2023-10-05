import { Element, ElementName } from "./Element";
import { Property, PropertyName } from "./Property";
import { formatShortTag, formatStartTag } from "./XamlParser";
import { FigmaNode } from "./figmaNodeTypes";

let borderElement = {name: ElementName.Border, properties: [] as Property[]};
let background    = {name: ElementName.Background, properties: [] as Property[]}; 

export function TranslateCommonProperties(node : SceneNode) : Property[] {
    const commonProperties: Property[] = [
        { name: PropertyName.HeightRequest,     value: node.height.toString() },
        { name: PropertyName.WidthRequest,      value: node.width.toString()  },
        { name: PropertyName.Opacity,           value: translateOpacity(node) ?? 'None'  },
        { name: PropertyName.IsVisible,         value: boolToDefault(node.visible, true)},
        { name: PropertyName.HorizontalOptions, value: translateLayoutAlign(node) ?? 'None' },
        { name: PropertyName.VerticalOptions,   value: translateLayoutAlign(node) ?? 'None' },
      ]
      return commonProperties;
}

function translateLayoutAlign(node : SceneNode) : string | null{
  if ('layoutAlign' in node){
    switch(node.layoutAlign){
      case "CENTER":
        return 'Center';
      case "MAX":
        return 'End';
      case "STRETCH":
        return 'Fill';
      default:
        return 'Start';
    }
  }
  return null
}

function translateFillsToFigma(node: SceneNode): Property[] | { parent: Element; children: Element[]; }[] | null{
  let elements : {parent: Element, children: Element[]}[] = [];
  const backgroundProperties: Property[] = [];

  if ('fills' in node) {
      const fills: ReadonlyArray<Paint> = node.fills as ReadonlyArray<Paint>;
      if (fills && fills.length > 0) {
          fills.forEach((fill) => {
              if (fill.type === 'SOLID') {
                  // Handle Solid Paint
                  const solidPaint = fill as SolidPaint;
                  const color = `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;

                  backgroundProperties.push({ name: PropertyName.Background, value: color });

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

  if (backgroundProperties.length !== 0){
    return backgroundProperties;
  } else if (elements.length !== 0) {
    return elements;
  }
  return null;
}

function translateStroke(node : SceneNode) {
  //color
  if ('strokes' in node ) {
    node.strokes.forEach(stroke => {
      if(stroke.type === 'SOLID' && ((node.strokeWeight as number) !== 0)){
        let col = stroke.color;      
        let strokeColor : Property =
          {name: PropertyName.Stroke,    value: `#${col.r}${col.g}${col.b}`};

        borderElement.properties.push(strokeColor);
       
        let strokeWeight : Property =
        {name: PropertyName.StrokeThickness, value: `${node.strokeWeight as number}`};
    
        borderElement.properties.push(strokeWeight);
      }
    });
  }
}

function boolToDefault(value : boolean, defaultValue : boolean) : string {
  if (value === defaultValue) {
    return 'None';
  }
  return value.toString();
}

function translateOpacity(node : BaseNode) : string | null{
  if ('opacity' in node){
    return node.opacity.toString()
  }
  return null
}

function translateCornerRadius(node : BaseNode) {
  if (node.type !== (FigmaNode.COMPONENT || FigmaNode.COMPONENT_SET || FigmaNode.FRAME || FigmaNode.INSTANCE || FigmaNode.RECTANGLE)) {
    return 
  }
  let strokeShape : Property =
      {name: PropertyName.StrokeShape, value: `RoundRectangle  ${node.topLeftRadius}, ${node.topRightRadius}, ${node.bottomLeftRadius}, ${node.bottomRightRadius}`};
  
  borderElement.properties.push(strokeShape);
}

function translateShadow(node : BaseNode) : Element | null {
  if ('effects' in node){
    node.effects.forEach( effect => {
      if (effect.type === 'DROP_SHADOW') {
        let col = effect.color;
        let off = effect.offset;        
        let shadowProperties : Property[] = [
          {name: PropertyName.Brush,    value: `#${col.r}${col.g}${col.b}`},
          {name: PropertyName.OffSet,   value: `${off.x}, ${off.y}`},
          {name: PropertyName.Opacity,  value: `${col.a}`},
          {name: PropertyName.Radius,  value: `${effect.radius}`},
        ];

        return {name: ElementName.Shadow, properties: shadowProperties};

      }
    });
  }
  return null

}