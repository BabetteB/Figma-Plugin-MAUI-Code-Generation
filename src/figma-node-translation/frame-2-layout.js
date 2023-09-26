import { ElementName } from "../Element";
import { PropertyName } from "../src/Property";
import { formatEndTag, formatStartTag } from "../XamlParser";
export function TranslateFigmaFrameToXamlLayout(node) {
    switch (node.layoutMode) {
        case "HORIZONTAL":
            return TranslateHorizontalStackLayoutElement(node);
        case "VERTICAL":
            return TranslateVerticalStackLayoutElement(node);
        default:
            return TranslateFlexLayoutElement(node);
    }
}
function TranslateFlexLayoutElement(node) {
    const flexLayoutProperties = [
        { name: PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: PropertyName.HeightRequest, value: node.height.toString() },
        { name: PropertyName.WidthRequest, value: node.width.toString() },
        { name: PropertyName.Padding, value: translateFigmaPaddingToXAMLPadding(node) },
        { name: PropertyName.AlignContent, value: translateFigmaAlignContent(node.primaryAxisAlignItems) },
        { name: PropertyName.AlignItems, value: translateFigmaAlignItemsToXamlAlignItems(node.primaryAxisAlignItems) },
        { name: PropertyName.Wrap, value: translateFigmaWrapToXamlWrap(node.layoutWrap) },
        { name: PropertyName.Grow, value: node.layoutGrow.toString() },
        { name: PropertyName.Shrink, value: node.rescale.toString() },
        { name: PropertyName.AlignSelf, value: translateFigmaAlignItemsToXamlAlignItems(node.layoutAlign) },
        //{ name: PropertyName.Order,             value: node. },
        //{ name: PropertyName.Basis,             value:   },
        //{ name: PropertyName.Direction,         value: node.layoutMode },
        //{ name: PropertyName.JustifyContent,    value: node. },
        //{ name: PropertyName.Position,          value: node. },
        //{ name: PropertyName.VerticalOptions,   value: node.primaryAxisAlignItems},
        //{ name: PropertyName.HorizontalOptions, value: node.letterSpacing.toString() }
    ];
    const flexLayoutElement = { name: ElementName.FlexLayout, properties: flexLayoutProperties };
    return formatStartTag(flexLayoutElement) + formatEndTag(flexLayoutElement);
}
function TranslateHorizontalStackLayoutElement(node) {
    const horizontalStackLayoutProperties = [
        { name: PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: PropertyName.HeightRequest, value: node.height.toString() },
        { name: PropertyName.WidthRequest, value: node.width.toString() },
        { name: PropertyName.Padding, value: translateFigmaPaddingToXAMLPadding(node) },
        //{ name: PropertyName.VerticalOptions,   value: node.primaryAxisAlignItems},
        //{ name: PropertyName.HorizontalOptions, value: node.letterSpacing.toString() }
    ];
    const horizontalStackLayoutElement = { name: ElementName.HorizontalStackLayout, properties: horizontalStackLayoutProperties };
    return formatStartTag(horizontalStackLayoutElement) + formatEndTag(horizontalStackLayoutElement);
}
function TranslateVerticalStackLayoutElement(node) {
    const verticalStackLayoutProperties = [
        { name: PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: PropertyName.HeightRequest, value: node.height.toString() },
        { name: PropertyName.WidthRequest, value: node.width.toString() },
        { name: PropertyName.Padding, value: translateFigmaPaddingToXAMLPadding(node) },
        //{ name: PropertyName.VerticalOptions,   value: node.primaryAxisAlignItems},
        //{ name: PropertyName.HorizontalOptions, value: node.letterSpacing.toString() }
    ];
    const vertivalStackLayoutElement = { name: ElementName.VerticalStackLayout, properties: verticalStackLayoutProperties };
    return formatStartTag(vertivalStackLayoutElement) + formatEndTag(vertivalStackLayoutElement);
}
function translateFigmaPaddingToXAMLPadding(node) {
    if (node.paddingLeft == node.paddingRight && node.paddingLeft == node.paddingTop && node.paddingLeft == node.paddingBottom) {
        return node.paddingLeft.toString();
    }
    else {
        return `${node.paddingLeft}, ${node.paddingTop}, ${node.paddingRight}, ${node.paddingBottom},`;
    }
}
function translateFigmaAlignItemsToXamlAlignItems(value) {
    switch (value) {
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
function translateFigmaWrapToXamlWrap(value) {
    switch (value) {
        case 'WRAP':
            return 'Wrap';
        case 'NO_WRAP':
        default:
            return 'NoWrap';
    }
}
function translateFigmaAlignContent(value) {
    switch (value) {
        case 'SPACE_BETWEEN':
            return 'SpaceBetween';
        default:
            return 'Stretch';
    }
}
