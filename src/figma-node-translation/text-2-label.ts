import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";
import { TranslateCommonProperties } from "../commonPropertyParser";

export function TranslateTextElement(node: TextNode): Element {
    const textProperties: Property[] = [
      { name: PropertyName.CharacterSpacing,        value: translateLetterSpacing(node) ?? 'None'},
      { name: PropertyName.FontAttributes,          value: translateFontWeightToFontAttributes(node.fontWeight as number)}, 
      { name: PropertyName.FontAutoScalingEnabled,  value: translateTextAutoResizeToFontAutoScalingEnabled(node.textAutoResize) },
      { name: PropertyName.FontSize,                value: node.fontSize.toString() },
      { name: PropertyName.HorizontalTextAlignment, value: translateHorizontalAlignment(node.textAlignHorizontal) },
      { name: PropertyName.LineBreakMode,           value: translateTextTruncationToLineBreakMode(node.textTruncation) },
      { name: PropertyName.LineHeight,              value: translateLineHeight(node) ?? 'None' },
      { name: PropertyName.MaxLines,                value: node.maxLines?.toString() ?? 'None' }, 
      { name: PropertyName.Text,                    value: node.characters},
      { name: PropertyName.TextColor,               value: getHexColorFromFill(node) ?? 'None'}, 
      { name: PropertyName.TextDecorations,         value: translateTextDecorationToXAML(node.textDecoration as string) || 'None' },
      { name: PropertyName.TextTransform,           value: translateTextCaseToXAML(node.textCase as string) || 'None' },
  
    ];
  
    const textElement: Element = { name: ElementName.Label, properties: textProperties.concat(TranslateCommonProperties(node)) };
    return textElement;
  }

  function translateLineHeight(node : TextNode): string | null {
    let lh = node.lineHeight as LineHeight;
    if ("value" in lh) {
      return lh.value.toString();
    }
    return null;
  }

  export function translateLetterSpacing(node : TextNode) : string | null {
    let ls = (node.letterSpacing as LetterSpacing).value;

    if (ls !== 0){
      return ls.toString();
    } 

    return null;
  }

  export function getHexColorFromFill(textNode: TextNode): string | null {
    if (!textNode || !textNode.fills || (textNode.fills as Paint[]).length === 0) {
      return null;
    }

    const fill = (textNode.fills as Paint[])[0]; // We assume the first fill is the one we want

    if(fill === undefined) return null;

    if (fill.type === 'SOLID') {
      const solidFill = fill as SolidPaint;
      return rgbToHex(solidFill.color);
    } else if (fill.type.startsWith('GRADIENT')) {
      // Handle gradient fills (if needed)
      // You can add logic here to handle gradient fills
      return null;
    }
  
    return null;
  }
  
  function rgbToHex(rgb: RGB): string {
    const r = Math.round(rgb.r * 255).toString(16).padStart(2, '0');
    const g = Math.round(rgb.g * 255).toString(16).padStart(2, '0');
    const b = Math.round(rgb.b * 255).toString(16).padStart(2, '0');

    let color = `#${r}${g}${b}`;
    if (color === '#000000') {
      return 'None';
    }
    return color ;
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

  export function translateTextTruncationToLineBreakMode(figmaTextTruncation: string): string {
    //OBS ! Do not fulfill all LineBreakModes of Xaml. See following link for more info about LineBreakMode: https://learn.microsoft.com/en-us/dotnet/api/microsoft.maui.linebreakmode?view=net-maui-7.0
    switch (figmaTextTruncation) {
      case "ENDING":
        return "TailTruncation";
      default:
        return "None"; // Default to NoWrap if the value is not recognized
    }
  }
  
  export function translateTextAutoResizeToFontAutoScalingEnabled(figmaTextAutoResize: string) : string {
    switch (figmaTextAutoResize) {
      case "NONE":
        return "false";
      default:
        return "None"; // when returning none it will not be included in the final xaml text, since it is the default value
    }
  }
  
  // Helper function to translate Figma horizontal text alignment to XAML
  function translateHorizontalAlignment(align: string): string {
     //TODO: fix this to correct xaml
    switch (align) {
      case "CENTER":
        return "Center";
      case "RIGHT":
        return "Right";
      default:
        return "None";
    }
  }
  
  export function translateFontWeightToFontAttributes(figmaFontWeight: number): string {
    if (figmaFontWeight > 400) {
      return 'Bold';
    } else {
      return 'None';
    }
  }