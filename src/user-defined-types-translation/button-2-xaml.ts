import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";


export function TranslateButtonElement(node : SceneNode) : Element {
    const buttonProperties: Property[] = [
      //common stuff
      //Frame stuff
        { name: PropertyName.HeightRequest,     value: node.height.toString() },
        { name: PropertyName.WidthRequest,      value: node.width.toString()  },
        { name: PropertyName.BorderColor,       value: node.height.toString() },
        { name: PropertyName.BorderWidth,       value: node.width.toString()  },
        { name: PropertyName.CharacterSpacing,  value: node.height.toString() },
        { name: PropertyName.ContentLayout,     value: node.width.toString()  },
        { name: PropertyName.CornerRadius,      value: node.height.toString() },
        { name: PropertyName.FontAttributes,    value: node.width.toString()  },
        { name: PropertyName.FontAutoScalingEnabled,     value: node.height.toString() },
      //text stuff
        { name: PropertyName.FontSize,          value: node.width.toString()  },
        { name: PropertyName.LineBreakMode,     value: node.height.toString() },
        { name: PropertyName.Padding,           value: node.width.toString()  },
        { name: PropertyName.Text,              value: node.height.toString() },
        { name: PropertyName.TextColor,         value: node.width.toString()  },
      ]
      const buttonElement: Element = { name: ElementName.Button, properties: buttonProperties };
      return buttonElement;
}