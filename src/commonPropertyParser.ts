import { Property, PropertyName } from "./Property";

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


