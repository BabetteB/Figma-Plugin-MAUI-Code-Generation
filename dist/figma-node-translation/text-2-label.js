import { ElementName } from "../Element";
import { PropertyName } from "../Property";
import { formatEndTag, formatStartTag } from "../XamlParser";
export function TranslateTextElement(node) {
    var _a, _b, _c, _d;
    const textProperties = [
        { name: PropertyName.CharacterSpacing, value: node.letterSpacing.toString() },
        { name: PropertyName.FontAttributes, value: translateFontWeightToFontAttributes(node.fontWeight) || 'None' },
        { name: PropertyName.FontAutoScalingEnabled, value: translateTextAutoResizeToFontAutoScalingEnabled(node.textAutoResize) },
        { name: PropertyName.FontSize, value: node.fontSize.toString() },
        { name: PropertyName.HorizontalTextAlignment, value: translateHorizontalAlignment(node.textAlignHorizontal) },
        { name: PropertyName.LineBreakMode, value: translateTextTruncationToLineBreakMode(node.textTruncation) },
        { name: PropertyName.LineHeight, value: (_b = (_a = node.lineHeight) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '' },
        { name: PropertyName.MaxLines, value: (_d = (_c = node.maxLines) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '' },
        { name: PropertyName.Text, value: node.characters },
        { name: PropertyName.TextColor, value: translateFillsToTextColor(node.fills) || '#000000' },
        { name: PropertyName.TextDecorations, value: translateTextDecorationToXAML(node.textDecoration) || 'None' },
        { name: PropertyName.TextTransform, value: translateTextCaseToXAML(node.textCase) || 'None' },
        //{ name: PropertyName.TextType,                value: 'Text' } // Set appropriately based on Figma properties
        //{ name: PropertyName.Padding,                 value: '0' }, // Set appropriately based on Figma properties
        //{ name: PropertyName.FontFamily,              value: node.fontName }, // Set appropriately based on Figma properties
        //{ name: PropertyName.FormattedText,           value: '' }, // Set appropriately based on Figma properties
    ];
    const textElement = { name: ElementName.Label, properties: textProperties };
    return formatStartTag(textElement) + formatEndTag(textElement);
}
function translateTextCaseToXAML(textCase) {
    switch (textCase) {
        case "UPPER":
            return "Uppercase";
        case "LOWER":
            return "Lowercase";
        case "TITLE":
            return "Capitalize";
        // Figma "ORIGINAL" corresponds to "None" in XAML, which leaves the text case as is.
        case "ORIGINAL":
        default:
            return "None"; // Default to no transformation
    }
}
function translateTextDecorationToXAML(textDecoration) {
    switch (textDecoration) {
        case "STRIKETHROUGH":
            return "Strikethrough";
        case "UNDERLINE":
            return "Underline";
        default:
            return "None";
    }
}
function translateFillsToTextColor(fills) {
    if (!fills || fills.length === 0) {
        // If no fills are defined or the fills array is empty, return a default color (e.g., black).
        return "#000000"; // Default to black
    }
    // Figma's `fills` property typically contains a list of paint objects.
    // We'll assume the first paint object in the list represents the text color.
    const fill = fills[0];
    if (fill.type === "SOLID" && fill.visible) {
        // If it's a solid paint and it's visible, convert its color to a valid XAML color code.
        const r = Math.round(fill.color.r * 255).toString(16);
        const g = Math.round(fill.color.g * 255).toString(16);
        const b = Math.round(fill.color.b * 255).toString(16);
        return `#${(r.length < 2 ? "0" : "")}${r}${(g.length < 2 ? "0" : "")}${g}${(b.length < 2 ? "0" : "")}${b}`;
    }
    // Default to black if the fill is not a solid visible color.
    return "#000000"; // Default to black
}
function translateTextTruncationToLineBreakMode(figmaTextTruncation) {
    //OBS ! Do not fulfill all LineBreakModes of Xaml. See following link for more info about LineBreakMode: https://learn.microsoft.com/en-us/dotnet/api/microsoft.maui.linebreakmode?view=net-maui-7.0
    switch (figmaTextTruncation) {
        case "DISABLED":
            return "NoWrap";
        case "ENDING":
            return "TailTruncation";
        default:
            return "NoWrap"; // Default to NoWrap if the value is not recognized
    }
}
function translateTextAutoResizeToFontAutoScalingEnabled(figmaTextAutoResize) {
    switch (figmaTextAutoResize) {
        case "NONE":
            return "false";
        default:
            return "true";
    }
}
// Helper function to translate Figma horizontal text alignment to XAML
function translateHorizontalAlignment(align) {
    //TODO: fix this to correct xaml
    switch (align) {
        case "LEFT":
            return "Left";
        case "CENTER":
            return "Center";
        case "RIGHT":
            return "Right";
        default:
            return "Left"; // Default to Left alignment
    }
}
function translateFontWeightToFontAttributes(figmaFontWeight) {
    if (figmaFontWeight > 400) {
        return 'Bold';
    }
    else {
        return 'None';
    }
}
