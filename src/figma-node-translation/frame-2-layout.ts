import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";
import { TranslateCommonProperties, toCamelCase } from "../commonPropertyParser";
import { rgbToHex } from "./text-2-label";

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
      /* Determines whether this layer uses auto-layout to position its children. Defaults to "NONE". */
      { name: PropertyName.Background,          value: getHexColorFromFillFrame(node) ?? 'None' },
        { name: PropertyName.Padding,           value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
        { name: PropertyName.AlignContent,      value: translateFigmaAlignContent(node.primaryAxisAlignItems) },
        { name: PropertyName.AlignItems,        value: translateFigmaAlignItemsToXamlAlignItems(node.primaryAxisAlignItems) },
        { name: PropertyName.Wrap,              value: translateFigmaWrapToXamlWrap(node.layoutWrap) },
        { name: PropertyName.Grow,              value: translateDefaultNumberValue(node.layoutGrow.toString()) },
        { name: PropertyName.AlignSelf,         value: translateFigmaAlignItemsToXamlAlignItems(node.layoutAlign) },
      ]

      const flexLayoutElement: Element = { name: ElementName.FlexLayout, properties: flexLayoutProperties.concat(TranslateCommonProperties(node)) };
      return flexLayoutElement;
}

export function translateDefaultNumberValue(value : string): string {
  if (value === '0') {
    return 'None';
  }
  return value.toString();
}

function TranslateHorizontalStackLayoutElement(node : FrameNode) : Element {
    const horizontalStackLayoutProperties: Property[] = [
      { name: PropertyName.Background,          value: getHexColorFromFillFrame(node) ?? 'None' },
      { name: PropertyName.Spacing,           value: node.itemSpacing.toString() },
      { name: PropertyName.Padding,           value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },

    ];

    const horizontalStackLayoutElement: Element = { name: ElementName.HorizontalStackLayout, properties: horizontalStackLayoutProperties.concat(TranslateCommonProperties(node)) };
    return horizontalStackLayoutElement;
  }
  
function TranslateVerticalStackLayoutElement(node : FrameNode) : Element {
    const verticalStackLayoutProperties: Property[] = [
      { name: PropertyName.Background,          value: getHexColorFromFillFrame(node) ?? 'None' },
        { name: PropertyName.Spacing,           value: node.itemSpacing.toString() },
        { name: PropertyName.Padding,           value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
    ];
    const vertivalStackLayoutElement: Element = { name: ElementName.VerticalStackLayout, properties: verticalStackLayoutProperties.concat(TranslateCommonProperties(node)) };
    return vertivalStackLayoutElement;
}

export function translateFigmaPaddingToXAMLPadding(node: SceneNode): string {
  if ('paddingLeft' in node) {
    if (node.paddingLeft == node.paddingRight && node.paddingLeft == node.paddingTop && node.paddingLeft == node.paddingBottom){
      return node.paddingLeft.toString()
    } else {
      return `${node.paddingLeft}, ${node.paddingTop}, ${node.paddingRight}, ${node.paddingBottom},`;
    }
  }
  return 'None';
  }

function translateFigmaAlignItemsToXamlAlignItems(value: string) {
    switch(value) {
        case "MAX":
            return 'End';
        case "CENTER":
            return 'Center';
        default:
            return 'None';
    }
}

function translateFigmaWrapToXamlWrap(value: string) {
    switch(value) {
        case 'WRAP':
            return 'Wrap'
        case 'NO_WRAP':
        default:
            return 'None';
    }
}

function translateFigmaAlignContent(value: string) {
    switch (value) {
        case 'SPACE_BETWEEN':
            return 'SpaceBetween';
        default:
            return 'None';
    }
}


export function getHexColorFromFillFrame(node: SceneNode): string | null {
  if ('fills' in node) {
    const fill = (node.fills as Paint[])[0]; // We assume the first fill is the one we want

    if(fill === undefined) return null;

    if (fill.type === 'SOLID') {
      const solidFill = fill as SolidPaint;
      return rgbToHex(solidFill.color);
    } else if (fill.type.startsWith('GRADIENT')) {
      // Handle gradient fills (if needed)
      // You can add logic here to handle gradient fills
      return null;
    }
  }
  return null;
}
