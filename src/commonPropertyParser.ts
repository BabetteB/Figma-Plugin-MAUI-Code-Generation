import { Element, ElementName } from "./Element";
import { Property, PropertyName } from "./Property";
import { FigmaNode } from "./figmaNodeTypes";

let borderElement = {name: ElementName.Border, properties: [] as Property[]};
let background    = {name: ElementName.Background, properties: [] as Property[]}; 

export function TranslateCommonProperties(node : SceneNode) : Property[] {
    const commonProperties: Property[] = [
        { name: PropertyName["x:Name"],         value: toCamelCase(node.name) },
        { name: PropertyName.HeightRequest,     value: node.height.toString() },
        { name: PropertyName.WidthRequest,      value: node.width.toString()  },
        { name: PropertyName.Opacity,           value: translateOpacity(node) ?? 'None'  },
        { name: PropertyName.IsVisible,         value: boolToDefault(node.visible, true)},
        { name: PropertyName.HorizontalOptions, value: translateLayoutAlign(node) ?? 'None' },
        { name: PropertyName.VerticalOptions,   value: translateLayoutAlign(node) ?? 'None' },
      ]
      return commonProperties;
}

export function toCamelCase(str: string): string {
  return str.split(' ')  // Split the string by spaces
      .map((word, index) => {
          // Convert the first word to lowercase and others to capitalize the first letter
          if (index === 0) {
              return word.toLowerCase();
          }
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');  // Join all parts together
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
        return 'None';
    }
  }
  return null
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
    if (node.opacity === 1) {
      return 'None';
    }
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