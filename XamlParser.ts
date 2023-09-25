import { DisplayNode, NestedNode } from "./code";
import { Property, PropertyName } from "./Property";
import { Element, ElementName } from "./Element";


function checkNodeType(node: BaseNode): string {
  // Check the node's type using the 'type' property
  switch (node.type) {
    case 'FRAME':
      let frameNode = node as FrameNode;
      return '';
    case 'GROUP':
      let groupNode = node as GroupNode;
      return 'Group';
    case 'INSTANCE':
      let instanceNode = node as InstanceNode;
      return '';//TranslateInstanceElement(instanceNode);
    case 'RECTANGLE':
      let rectangleNode = node as RectangleNode;
      return TranslateRectangleElement(rectangleNode);
    case 'TEXT':
      let textNode = node as TextNode;
      return TranslateTextElement(textNode);
    case 'ELLIPSE':
      let ellipseNode = node as EllipseNode;
      return TranslateEllipseElement(ellipseNode);
    case 'VECTOR':
      let vectorNode = node as VectorNode;
      return 'Vector';
    case 'LINE':
      let lineNode = node as LineNode;
      return '';
    case 'STAR':
      let starNode = node as StarNode;
      return 'Star';
    case 'POLYGON':
      let polygonNode = node as PolygonNode;
      return 'Polygon';
    case 'BOOLEAN_OPERATION':
      let booleanOperationNode = node as BooleanOperationNode;
      return 'BooleanOperation';
    case 'COMPONENT':
      let componentNode = node as ComponentNode;
      return 'Component';
    case 'SLICE':
      let sliceNode = node as SliceNode;
      return 'Slice';
    default:
      return 'Unknown';
  }
}


function ParseFigma(nodes: NestedNode[]): string {
  let xamlCode = "";

  nodes.forEach((node) => {
    xamlCode += checkNodeType(node.parent.node)
  });

  return xamlCode;
}

/* function TranslateFrameElement(node: FrameNode): string {
  const frameProperties: Property[] = [
    { name: PropertyName.X, value: node.x.toString() },
    { name: PropertyName.Y, value: node.y.toString() },
    { name: PropertyName.Width, value: node.width.toString() },
    { name: PropertyName.Height, value: node.height.toString() }
    // Add other frame-related properties as needed
  ];

  const frameElement: Element = { name: ElementName.Frame, properties: frameProperties };
  return formatStartTag(frameElement) + formatEndTag(frameElement);
} */

/* function TranslateInstanceElement(node: InstanceNode): string {
  const instanceProperties: Property[] = [
    { name: PropertyName.X, value: node.x.toString() },
    { name: PropertyName.Y, value: node.y.toString() },
    // Add other instance-related properties as needed
  ];

  const instanceElement: Element = { name: ElementName.Instance, properties: instanceProperties };
  return formatStartTag(instanceElement) + formatEndTag(instanceElement);
} */

function TranslateTextElement(node: TextNode): string {
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



/* function TranslateLineElement(node: LineNode): string {
  const lineProperties: Property[] = [
    { name: PropertyName.X1, value: node.x.toString() },
    { name: PropertyName.Y1, value: node.y.toString() },
    { name: PropertyName.X2, value: (node.x + node.width).toString() },
    { name: PropertyName.Y2, value: (node.y + node.height).toString() }
    // Add other line-related properties as needed
  ];

  const lineElement: Element = { name: ElementName.Line, properties: lineProperties };
  return formatStartTag(lineElement) + formatEndTag(lineElement);
} */

/* function TranslateSliceElement(node: SliceNode): string {
  const sliceProperties: Property[] = [
    { name: PropertyName.X, value: node.x.toString() },
    { name: PropertyName.Y, value: node.y.toString() },
    { name: PropertyName.Width, value: node.width.toString() },
    { name: PropertyName.Height, value: node.height.toString() }
    // Add other slice-related properties as needed
  ];

  const sliceElement: Element = { name: ElementName.Slice, properties: sliceProperties };
  return formatStartTag(sliceElement) + formatEndTag(sliceElement);
} */



function TranslateRectangleElement(node: RectangleNode): string {
  const rectangleProperties: Property[] = [
    { name: PropertyName.Width, value: node.width.toString() },
    { name: PropertyName.Height, value: node.height.toString() }
    // Add other rectangle-related properties as needed
  ];

  const rectangleElement: Element = { name: ElementName.Rectangle, properties: rectangleProperties };
  return formatStartTag(rectangleElement) + formatEndTag(rectangleElement);
}

function TranslateEllipseElement(node: EllipseNode): string {
  const ellipseProperties: Property[] = [
    { name: PropertyName.Width, value: node.width.toString() },
    { name: PropertyName.Height, value: node.height.toString() },
    // Add other ellipse-related properties as needed
  ];

  const ellipseElement: Element = { name: ElementName.Ellipse, properties: ellipseProperties };
  return formatStartTag(ellipseElement) + formatEndTag(ellipseElement);
}


// Add translation functions for other Figma node types as needed

function formatStartTag(element: Element): string {
  const propertyString = element.properties
    .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
    .join(" ");

  return `<${ElementName[element.name]} ${propertyString}>`;
}

function formatEndTag(element: Element): string {
  return `</${ElementName[element.name]}>`;
}
