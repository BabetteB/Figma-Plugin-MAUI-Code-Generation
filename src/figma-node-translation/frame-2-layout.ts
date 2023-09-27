import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";

export function TranslateFigmaFrameToXamlLayout(node : FrameNode) {
    switch(node.layoutMode){
      case "HORIZONTAL":
        return TranslateHorizontalStackLayoutElement(node);
      case "VERTICAL":
        return TranslateVerticalStackLayoutElement(node);
      default:
        return TranslateFlexLayoutElement(node);
    }
  }


function TranslateFlexLayoutElement(node : FrameNode) : Element {
    const flexLayoutProperties: Property[] = [
        { name: PropertyName.Spacing,           value: node.itemSpacing.toString() },
        { name: PropertyName.HeightRequest,     value: node.height.toString() },
        { name: PropertyName.WidthRequest,      value: node.width.toString() },
        { name: PropertyName.Padding,           value: translateFigmaPaddingToXAMLPadding(node) },
        { name: PropertyName.AlignContent,      value: translateFigmaAlignContent(node.primaryAxisAlignItems) },
        { name: PropertyName.AlignItems,        value: translateFigmaAlignItemsToXamlAlignItems(node.primaryAxisAlignItems) },
        { name: PropertyName.Wrap,              value: translateFigmaWrapToXamlWrap(node.layoutWrap) },
        { name: PropertyName.Grow,              value: node.layoutGrow.toString() },
        { name: PropertyName.Shrink,            value: node.rescale.toString() },
        { name: PropertyName.AlignSelf,         value: translateFigmaAlignItemsToXamlAlignItems(node.layoutAlign) },
        //{ name: PropertyName.Order,             value: node. },
        //{ name: PropertyName.Basis,             value:   },
        //{ name: PropertyName.Direction,         value: node.layoutMode },
        //{ name: PropertyName.JustifyContent,    value: node. },
        //{ name: PropertyName.Position,          value: node. },
        //{ name: PropertyName.VerticalOptions,   value: node.primaryAxisAlignItems},
        //{ name: PropertyName.HorizontalOptions, value: node.letterSpacing.toString() }
      ]
      const flexLayoutElement: Element = { name: ElementName.FlexLayout, properties: flexLayoutProperties };
      return flexLayoutElement//formatStartTag(flexLayoutElement)  + formatEndTag(flexLayoutElement);
}

function TranslateHorizontalStackLayoutElement(node : FrameNode) : Element {
    const horizontalStackLayoutProperties: Property[] = [
      { name: PropertyName.Spacing,           value: node.itemSpacing.toString() },
      { name: PropertyName.HeightRequest,     value: node.height.toString() },
      { name: PropertyName.WidthRequest,      value: node.width.toString() },
      { name: PropertyName.Padding,           value: translateFigmaPaddingToXAMLPadding(node) },
      //{ name: PropertyName.VerticalOptions,   value: node.primaryAxisAlignItems},
      //{ name: PropertyName.HorizontalOptions, value: node.letterSpacing.toString() }
    ]
    const horizontalStackLayoutElement: Element = { name: ElementName.HorizontalStackLayout, properties: horizontalStackLayoutProperties };
    return horizontalStackLayoutElement;//formatStartTag(horizontalStackLayoutElement)  + formatEndTag(horizontalStackLayoutElement);
  }
  
function TranslateVerticalStackLayoutElement(node : FrameNode) : Element {
    const verticalStackLayoutProperties: Property[] = [
        { name: PropertyName.Spacing,           value: node.itemSpacing.toString() },
        { name: PropertyName.HeightRequest,     value: node.height.toString() },
        { name: PropertyName.WidthRequest,      value: node.width.toString() },
        { name: PropertyName.Padding,           value: translateFigmaPaddingToXAMLPadding(node) },
        //{ name: PropertyName.VerticalOptions,   value: node.primaryAxisAlignItems},
        //{ name: PropertyName.HorizontalOptions, value: node.letterSpacing.toString() }
    ]
    const vertivalStackLayoutElement: Element = { name: ElementName.VerticalStackLayout, properties: verticalStackLayoutProperties };
    return vertivalStackLayoutElement;//formatStartTag(vertivalStackLayoutElement)  + formatEndTag(vertivalStackLayoutElement);
}

function translateFigmaPaddingToXAMLPadding(node: FrameNode): string {
    if (node.paddingLeft == node.paddingRight && node.paddingLeft == node.paddingTop && node.paddingLeft == node.paddingBottom){
      return node.paddingLeft.toString()
    } else {
      return `${node.paddingLeft}, ${node.paddingTop}, ${node.paddingRight}, ${node.paddingBottom},`;
    }
  }

function translateFigmaAlignItemsToXamlAlignItems(value: string) {
    switch(value) {
        case "MAX":
            return 'End';
        case "CENTER":
            return 'Center';
        case "MIN":
            return 'Start';
        default:
            return 'Stretch';
    }
}

function translateFigmaWrapToXamlWrap(value: string) {
    switch(value) {
        case 'WRAP':
            return 'Wrap'
        case 'NO_WRAP':
        default:
            return 'NoWrap';
    }
}

function translateFigmaAlignContent(value: string) {
    switch (value) {
        case 'SPACE_BETWEEN':
            return 'SpaceBetween';
    
        default:
            return 'Stretch';
    }
}
