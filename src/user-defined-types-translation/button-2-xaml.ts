import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";
import { TranslateCommonProperties } from "../commonPropertyParser";
import { translateDefaultNumberValue, translateFigmaPaddingToXAMLPadding, getHexColorFromFillFrame } from "../figma-node-translation/frame-2-layout";
import { getHexColorFromFill, translateFontWeightToFontAttributes, translateLetterSpacing, translateTextAutoResizeToFontAutoScalingEnabled, translateTextTruncationToLineBreakMode } from "../figma-node-translation/text-2-label";


export function TranslateButtonElement(node : SceneNode) : Element {
  let buttonProperties: Property[] = []
  let buttonElement : Element ;
  if ('children' in node) {
    node.children.forEach( c => {
      switch (c.type){
        case 'TEXT': 
        buttonProperties = buttonProperties.concat(textProps(c as TextNode));
      }
    });
  }
  let frameProperties : Property[] = [
      { name: PropertyName.Background, value: getHexColorFromFillFrame(node)?? 'None'},
      { name: PropertyName.BorderColor,       value: translateStrokesToFigma(node)?? 'None' },
      { name: PropertyName.BorderWidth,       value: translateStrokeWeight(node)  },
      { name: PropertyName.CornerRadius,      value: checkCornerRadius(node) },
      { name: PropertyName.Padding,           value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
    ]
    buttonProperties = buttonProperties.concat(frameProperties);
    buttonElement = { name: ElementName.Button, properties: buttonProperties.concat(TranslateCommonProperties(node)) };
    return buttonElement;
}

export function translateStrokesToFigma(node: SceneNode) : string | null {
  if ('strokes' in node) {
    const strokes: ReadonlyArray<Paint> = node.strokes as ReadonlyArray<Paint>;
    if (strokes && strokes.length > 0) {
      strokes.forEach((stroke) => {
            if (stroke.type === 'SOLID') {
                // Handle Solid Paint
                const solidPaint = stroke as SolidPaint;
                return `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;

            } });
    }
  }
 return null;
}

export function translateStrokeWeight(node : SceneNode) : string {
  if ('strokeWeight' in node){
    return (node.strokeWeight as number).toString()
  }
  return 'None'
}

export function checkCornerRadius(node : SceneNode) : string  {
  if ('cornerRadius' in node) {
    if (node.cornerRadius !== undefined && node.cornerRadius !== 0) {
      return node.cornerRadius.toString()
    }
  }
  return 'None';
}

function textProps(node : TextNode) : Property[] {
  let textProp : Property[] = [
    { name: PropertyName.CharacterSpacing,  value: translateLetterSpacing(node) ?? 'None' },
    { name: PropertyName.FontSize,          value: node.fontSize.toString()  },
    { name: PropertyName.Text,              value: node.characters},
    { name: PropertyName.TextColor,         value: getHexColorFromFill(node) ?? 'None'  },
    { name: PropertyName.FontAttributes,    value: translateFontWeightToFontAttributes(node.fontWeight as number)  },
    { name: PropertyName.FontAutoScalingEnabled,     value: translateTextAutoResizeToFontAutoScalingEnabled(node.textAutoResize) },
    { name: PropertyName.LineBreakMode,     value: translateTextTruncationToLineBreakMode(node.textTruncation)},
  ];
  return textProp;
}