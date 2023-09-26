import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";
import { formatEndTag, formatStartTag } from "../XamlParser";

export function TranslateTextElement(node: TextNode): string {
    const textProperties: Property[] = [
      { name: PropertyName.CharacterSpacing,        value: node.letterSpacing.toString() },
      { name: PropertyName.FontAttributes,          value: translateFontWeightToFontAttributes(node.fontWeight as number) || 'None'}, 
      { name: PropertyName.FontAutoScalingEnabled,  value: translateTextAutoResizeToFontAutoScalingEnabled(node.textAutoResize) },
      { name: PropertyName.FontSize,                value: node.fontSize.toString() },
      { name: PropertyName.HorizontalTextAlignment, value: translateHorizontalAlignment(node.textAlignHorizontal) },
      { name: PropertyName.LineBreakMode,           value: translateTextTruncationToLineBreakMode(node.textTruncation) },
      { name: PropertyName.LineHeight,              value: node.lineHeight?.toString() ?? '' },
      { name: PropertyName.MaxLines,                value: node.maxLines?.toString() ?? '' }, 
      { name: PropertyName.Text,                    value: node.characters },
      { name: PropertyName.TextColor,               value: translateFillsToTextColor(node.fills as Paint[]) || '#000000'}, 
      { name: PropertyName.TextDecorations,         value: translateTextDecorationToXAML(node.textDecoration as string) || 'None' },
      { name: PropertyName.TextTransform,           value: translateTextCaseToXAML(node.textCase as string) || 'None' },
      //{ name: PropertyName.TextType,                value: 'Text' } // Set appropriately based on Figma properties
      //{ name: PropertyName.Padding,                 value: '0' }, // Set appropriately based on Figma properties
      //{ name: PropertyName.FontFamily,              value: node.fontName }, // Set appropriately based on Figma properties
      //{ name: PropertyName.FormattedText,           value: '' }, // Set appropriately based on Figma properties
    ];
  
    const textElement: Element = { name: ElementName.Label, properties: textProperties };
    return formatStartTag(textElement) + formatEndTag(textElement);
  }
  
  function translateTextCaseToXAML(textCase: string): string {
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
  
  function translateTextDecorationToXAML(textDecoration: string): string {
    switch (textDecoration) {
      case "STRIKETHROUGH":
        return "Strikethrough";
      case "UNDERLINE":
        return "Underline";
      default:
        return "None";
    }
  }
  
  function translateFillsToTextColor(fills: readonly Paint[]): string {
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
  
  function translateTextTruncationToLineBreakMode(figmaTextTruncation: string): string {
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
  
  function translateTextAutoResizeToFontAutoScalingEnabled(figmaTextAutoResize: string) : string {
    switch (figmaTextAutoResize) {
      case "NONE":
        return "false";
      default:
        return "true";
    }
  }
  
  // Helper function to translate Figma horizontal text alignment to XAML
  function translateHorizontalAlignment(align: string): string {
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
  
  function translateFontWeightToFontAttributes(figmaFontWeight: number): string {
    if (figmaFontWeight > 400) {
      return 'Bold';
    } else {
      return 'None';
    }
  }