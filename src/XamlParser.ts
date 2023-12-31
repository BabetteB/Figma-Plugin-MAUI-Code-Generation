import { Property, PropertyName } from "./Property";
import { Element, ElementName } from "./Element";

import { TranslateFigmaFrameToXamlLayout, getHexColorFromFillFrame } from "./figma-node-translation/frame-2-layout";
import { TranslateEllipseElement } from "./figma-node-translation/shapes/ellipse-2-ellipse";
import { TranslateTextElement } from "./figma-node-translation/text-2-label";
import { ContentView } from "./xaml-views-classes/xaml-view";
import { Binding, CustomControl } from "./xaml-views-classes/xaml-custom-control";
import { TranslateRectangleElement } from "./figma-node-translation/shapes/rectangle-2-rectangle";
import { TranslateLineElement } from "./figma-node-translation/shapes/line-2-line";
import { NestedNode } from "./code";
import { ContentPage } from "./xaml-views-classes/xaml-page";
import { TranslateVectorElement } from "./figma-node-translation/shapes/vector-2-icon";
import { TranslateButtonElement, checkCornerRadius, translateStrokeWeight, translateStrokesToFigma } from "./user-defined-types-translation/button-2-xaml";
import { TranslateEditorElement } from "./user-defined-types-translation/editor-2-xaml";
import { TranslateEntryElement } from "./user-defined-types-translation/entry-2-xaml";
import { TranslateSliderElement } from "./user-defined-types-translation/slider-2-xaml";
import { TranslateSwitchElement } from "./user-defined-types-translation/switch-2-xaml";
import { TranslateCheckBoxElement } from "./user-defined-types-translation/checkBox-2-xaml";
import { TranslateImageButtonElement } from "./user-defined-types-translation/button-2-imagebutton";


type NestedElements = {
  parent : Element | CustomControl | ContentView,
  children : NestedElements[]
}

const INDENTATION_SPACES = 4;

export function ParseFigma(nodes: NestedNode[]) : string {
  console.log('Parsing Nodes: ', nodes);
  let xamlCode = "";
  let rootnode = nodes[0];
  let contentPage = new ContentPage(rootnode.parent.node.name);
  let rootView : Element= {name: ElementName.ScrollView, properties: []}
  let rootLayout : Element= {name: ElementName.VerticalStackLayout, properties: []};

  xamlCode += contentPage.getStartTag() + `\n${formatStartTag(rootView)}\n` + `\n${formatStartTag(rootLayout)}\n`;

  rootnode.children.reverse().forEach(c => {
    xamlCode += formatNestedElement(checkNodeType(c), 2); // starting at level 2 for children of rootLayout
  });

  xamlCode += `\n${formatEndTag(rootLayout)}\n` + `\n${formatEndTag(rootView)}\n` + contentPage.getEndTag();

  return xamlCode;
}

function formatNestedElement(element: NestedElements, level: number = 0): string {
  let result = '';

  if (element.parent instanceof CustomControl) {
      // Assuming CustomControl's getStartTag and getEndTag methods handle indentation internally
      result += element.parent.getStartTag(level) + element.parent.getEndTag(level);
      
  } else if (element.parent instanceof ContentView) {
      // Assuming ContentView's getStartTag and getEndTag methods handle indentation internally
      let nestedComponent = '';
      
      element.children.forEach(c => { 
        nestedComponent += formatNestedElement(c, level + 1); // Increment the level
      });
      result += element.parent.getStartTag(level) + `\n${nestedComponent}` + element.parent.getEndTag(level);

  } else {
      if (element.parent.name === ElementName.none) {
          return '';
      }
      if (element.children.length > 0) {
          // Start tag
          result += formatStartTag(element.parent, level);

          // Iterate over children and recursively call formatNestedElement on each child
          element.children.forEach(c => { 
              result += formatNestedElement(c, level + 1); // Increment the level
          });

          // End tag
          result += formatEndTag(element.parent, level);
      } else {
          // For elements without children
          result += formatShortTag(element.parent, level);
      }
  }

  return result;
}


function checkNodeType(nn: NestedNode): NestedElements {
  //Check if the node has been assigned a custom value
  if (nn.parent.utype !== 'None') {
    return parseUtypeNodes(nn);
  } 

  // take the top node
  let node = nn.parent.node;

  // Check the node's type using the 'type' property
  switch (node.type) {
    case 'FRAME':
      let frameNode = node as FrameNode;
      let frameElement = TranslateFigmaFrameToXamlLayout(frameNode);

      // This will serve as the main nested element to return
      let nestedFrame : NestedElements = {parent: frameElement, children : []};

      // Assign children directly to frameElement first
      nn.children.forEach(n => nestedFrame.children.push(checkNodeType(n)));

      // Handle the case when the frameNode has cornerRadius
      if (frameNode.cornerRadius !== 0) {
        let cornerRadius: Property = { name: PropertyName.StrokeShape, value: `RoundRectangle ${frameNode.topLeftRadius} ${frameNode.topRightRadius} ${frameNode.bottomLeftRadius} ${frameNode.bottomRightRadius}` }
        let borderElement = { name: ElementName.Border, properties: [cornerRadius] };

        // In this setup, the borderElement wraps the frameElement (which already has the children)
        nestedFrame = {
          parent: borderElement,
          children: [nestedFrame] // Note that we're wrapping the existing nestedFrame
        };
      }

      // Translate and add frame stroke if exists
      let frameStroke = translateStroke(frameNode);
      if (frameStroke !== null) {
        nestedFrame.children.push({parent: frameStroke.parent, children: frameStroke.children})
      }

      return nestedFrame;
    
    case 'GROUP':
      let groupElement : Element = {name: ElementName.none, properties: []};

      let nestedGroup : NestedElements = {parent: groupElement, children : []};
      nn.children.forEach(n => nestedGroup.children.push(checkNodeType(n)));

      return nestedGroup;

    case 'TEXT':
      let textNode = node as TextNode;
      let textElement = TranslateTextElement(textNode);

      let nestedText : NestedElements = {parent: textElement, children : []};

      return nestedText;

    case 'ELLIPSE':
      let ellipseNode = node as EllipseNode;
      let ellipseElement = TranslateEllipseElement(ellipseNode);

      let nestedElipse : NestedElements = {parent: ellipseElement, children : []};

      return nestedElipse;

    case 'LINE':
      let lineNode = node as LineNode;
      let lineElement = TranslateLineElement(lineNode);
      let nestedLine : NestedElements = {parent: lineElement, children : []};

      return nestedLine;

    case 'RECTANGLE':
      let rectangleNode = node as RectangleNode;
      let rectangleElement = TranslateRectangleElement(rectangleNode); 
      let nestedRectangle : NestedElements = {parent: rectangleElement, children : []};

      return nestedRectangle;

    case 'VECTOR':
      let vectorNode = node as VectorNode;
      let vectorElement = TranslateVectorElement(vectorNode); 
      let nestedVector : NestedElements = {parent: vectorElement, children : []};

      return nestedVector;

    case 'INSTANCE':
      let instanceNode = node as InstanceNode;
      let bindings : Binding[] = [] //TODO: children
      let customControl = new CustomControl(instanceNode.name, bindings);
      let nestedControl : NestedElements = {parent: customControl, children : []};

      return nestedControl;
    
    case 'COMPONENT_SET':
      let componentSetNode = node.defaultVariant as ComponentNode;
      console.log('componentSetNode: ', componentSetNode)
      // TODO: Make new resource file / new window
      let contentSetView = new ContentView(node.name);
      let rootLayout : Element= {name: ElementName.VerticalStackLayout, properties: []};
      let nestedComponentSet : NestedElements = {parent: contentSetView, children : [{parent : rootLayout, children: []}]};
      nn.children[0].children.forEach(n => nestedComponentSet.children.push(checkNodeType(n)));
      return nestedComponentSet;

    case 'COMPONENT':
    case 'STAR':
    case 'BOOLEAN_OPERATION':
    case 'SLICE':
    default:
      let element = {name: ElementName.none, properties: []}
      let nested = {parent: element, children: []}
      return nested;
  }
}

function parseUtypeNodes(nn : NestedNode) : NestedElements {
  let node = nn.parent;
  //console.log('translating : ', node.utype);
  // Check the node's type using the 'type' property
  switch (node.utype) {
    case 'BUTTON':
      if (node.node.type === 'INSTANCE') {
        nn.parent.utype = 'None';
        return checkNodeType(nn);
      }

      let buttonNode = node.node as SceneNode;
      let buttonElement = TranslateButtonElement(buttonNode);
      buttonElement.properties.push(TranslateFillsToFigma(node.node as SceneNode, false));

      let nestedButton : NestedElements = {parent: {name: ElementName.none, properties: []}, children : []};

      if (nn.children.length > 0) {
        nn.children.forEach(n => {
          let childNode = n.parent.node;

          if (childNode.type === 'TEXT') {
            let textElement = TranslateTextElement(childNode as TextNode);
            buttonElement.properties.concat(textElement.properties);
            nestedButton = { parent: buttonElement, children: [] };

          } else if ((childNode.type === 'VECTOR') || (n.parent.utype === 'IMAGE')) {
            let vectorElement = TranslateVectorElement(childNode as VectorNode);
            let imageButtonElement = TranslateImageButtonElement(buttonNode);
            imageButtonElement.properties.concat(vectorElement.properties);
            nestedButton = { parent: imageButtonElement, children: [] };

          } else if (childNode.type === 'ELLIPSE') {
            let cp = [
              { name: PropertyName.Background, value: getHexColorFromFillFrame(childNode) ?? 'None' },
              { name: PropertyName.BorderColor, value: translateStrokesToFigma(childNode) ?? 'None' },
              { name: PropertyName.BorderWidth, value: translateStrokeWeight(childNode) },
            ]

            buttonElement.properties.concat(cp);

            let width = childNode.width;
            let cornerRadius: Property = { name: PropertyName.StrokeShape, value: `RoundRectangle ${(width / 2).toString()}` }

            let borderElement = { name: ElementName.Border, properties: [cornerRadius] };
            nestedButton = { parent: borderElement, children: [{ parent: buttonElement, children: [] }] };

          } else if (childNode.type === 'RECTANGLE') {
            let cp = [
              { name: PropertyName.Background, value: getHexColorFromFillFrame(childNode) ?? 'None' },
              { name: PropertyName.BorderColor, value: translateStrokesToFigma(childNode) ?? 'None' },
              { name: PropertyName.BorderWidth, value: translateStrokeWeight(childNode) },
            ]

            buttonElement.properties.concat(cp);
            let cornerRadius: Property = { name: PropertyName.StrokeShape, value: `RoundRectangle ${checkCornerRadius(childNode)}` }
            let borderElement = { name: ElementName.Border, properties: [cornerRadius] };

            nestedButton = { parent: borderElement, children: [{ parent: buttonElement, children: [] }] }; 
          }
        });
      } else {
        nestedButton = { parent: buttonElement, children: [] };
      }
      return nestedButton;


    case 'EDITOR':
      let editorNode = node.node as SceneNode;
      let editorElement = TranslateEditorElement(editorNode);
      editorElement.properties.push(TranslateFillsToFigma(node.node as SceneNode, false)) 
      let nestedEditor : NestedElements = {parent: editorElement, children : []};

      if (nn.children.length > 0) {
        nn.children.forEach ( n => {
          let childNode = n.parent.node;
          if (childNode.type === 'TEXT') {
            let placeholderProp : Property = { name: PropertyName.Placeholder, value: (childNode as TextNode).characters};
            editorElement.properties.push(placeholderProp);
          }
        });
      }

      return nestedEditor;

    case 'ENTRY':
      let entryNode = node.node as SceneNode;
      let entryElement = TranslateEntryElement(entryNode);
      let nestedEntry : NestedElements = {parent: entryElement, children : []};

      if (nn.children.length > 0) {
        nn.children.forEach ( n => {
          let childNode = n.parent.node;
          if (childNode.type === 'TEXT') {
            let placeholderProp : Property = { name: PropertyName.Placeholder, value: (childNode as TextNode).characters};
            entryElement.properties.push(placeholderProp);

          }
        });
      }

      return nestedEntry;
    
    case 'IMAGE':
      let vectorNode = node.node as VectorNode;
      let vectorElement = TranslateVectorElement(vectorNode); 
      let nestedVector : NestedElements = {parent: vectorElement, children : []};

      return nestedVector;

    case 'CHECKBOX':
      let checkBoxNode = node.node as SceneNode;
      let checkBoxElement = TranslateCheckBoxElement(checkBoxNode);
      let nestedCheckBox : NestedElements = {parent: checkBoxElement, children : []};
      return nestedCheckBox;

    case 'SWITCH':
      let switchNode = node.node as SceneNode;
      let switchElement = TranslateSwitchElement(switchNode);
      let nestedSwitch: NestedElements = {parent: switchElement, children : []};
      return nestedSwitch;

    case 'SLIDER':
      let sliderNode = node.node as SceneNode;
      let sliderElement = TranslateSliderElement(sliderNode);
      let nestedSlider: NestedElements = {parent: sliderElement, children : []};
      return nestedSlider;

    default:
      let element = {name: ElementName.none, properties: []}
      let nested = {parent: element, children: []}
      return nested;
  }
}

function formatStartTag(element: Element, level: number = 0): string {
  const indent = ' '.repeat(level * INDENTATION_SPACES);
  const propertyString = element.properties
      .filter((prop) => (prop.value !== 'None'))
      .map((prop) => `\n${indent}    ${PropertyName[prop.name]}="${prop.value}"`)
      .join('');

  return `${indent}<${ElementName[element.name]}${propertyString}>\n`;
}

function formatShortTag(element: Element, level: number = 0): string {
  const indent = ' '.repeat(level * INDENTATION_SPACES);
  const propertyString = element.properties
      .filter((prop) => prop.value !== 'None')
      .map((prop) => `\n${indent}    ${PropertyName[prop.name]}="${prop.value}"`)
      .join('');

  return `${indent}<${ElementName[element.name]}${propertyString}/>\n`;
}

function formatEndTag(element: Element, level: number = 0): string {
  const indent = ' '.repeat(level * INDENTATION_SPACES);
  return `${indent}</${ElementName[element.name]}>\n`;
}

function TranslateFillsToFigma(node: SceneNode, fill: boolean): Property {
  let property: Property = {name: PropertyName.none, value: 'None'};

  if ('fills' in node) {
      const fills: ReadonlyArray<Paint> = node.fills as ReadonlyArray<Paint>;
      if (fills && fills.length > 0) {
          const paint: Paint = fills[0]; // Take the first paint/fill for simplicity

          if (paint.type === 'SOLID') {
              const color = paint.color;
              const alpha = (paint.opacity || 1) * 255;
              property.value = `#${Math.round(alpha).toString(16).padStart(2, '0')}${Math.round(color.r * 255).toString(16).padStart(2, '0')}${Math.round(color.g * 255).toString(16).padStart(2, '0')}${Math.round(color.b * 255).toString(16).padStart(2, '0')}`;
              property.name = fill ? PropertyName.Fill : PropertyName.Background;
          }
          // TODO: Handle other paint types if necessary
      }
  }

  return property;
}

function translateStroke(node : SceneNode) : NestedElements | null {
  //color
  let borderElement = {name: ElementName.Border, properties: [] as Property[]};
  if ('strokes' in node ) {
    node.strokes.forEach(stroke => {
      if(stroke.type === 'SOLID' && ((node.strokeWeight as number) !== 0)){
        let col = stroke.color;      
        let strokeColor : Property =
          {name: PropertyName.Stroke,    value: `#${col.r}${col.g}${col.b}`};

        borderElement.properties.push(strokeColor);
       
        let strokeWeight : Property =
        {name: PropertyName.StrokeThickness, value: `${node.strokeWeight as number}`};
    
        borderElement.properties.push(strokeWeight);
        let innerLayout = {name : ElementName.VerticalStackLayout, properties: [] as Property[]}

        return {parent : borderElement, children: [innerLayout]};
      }
    });
  }
  return null
}



