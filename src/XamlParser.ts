import { Property, PropertyName } from "./Property";
import { Element, ElementName } from "./Element";

import { TranslateFigmaFrameToXamlLayout } from "./figma-node-translation/frame-2-layout";
import { TranslateEllipseElement } from "./figma-node-translation/shapes/ellipse-2-ellipse";
import { TranslateTextElement } from "./figma-node-translation/text-2-label";
import { ContentView } from "./xaml-views-classes/xaml-view";
import { Binding, CustomControl } from "./xaml-views-classes/xaml-custom-control";
import { TranslateRectangleElement } from "./figma-node-translation/shapes/rectangle-2-rectangle";
import { TranslateLineElement } from "./figma-node-translation/shapes/line-2-line";
import { NestedNode } from "./code";
import { ContentPage } from "./xaml-views-classes/xaml-page";
import { TranslateVectorElement } from "./figma-node-translation/shapes/vector-2-icon";
import { TranslateButtonElement } from "./user-defined-types-translation/button-2-xaml";
import { TranslateEditorElement } from "./user-defined-types-translation/editor-2-xaml";
import { TranslateEntryElement } from "./user-defined-types-translation/entry-2-xaml";
import { TranslateSliderElement } from "./user-defined-types-translation/slider-2-xaml";
import { TranslateSwitchElement } from "./user-defined-types-translation/switch-2-xaml";
import { TranslateCheckBoxElement } from "./user-defined-types-translation/checkBox-2-xaml";
import { TranslateCollectionElement } from "./user-defined-types-translation/collection-2-xaml";
import { type } from "os";


type NestedElements = {
  parent : Element | CustomControl | ContentView,
  children : NestedElements[]
}

export function ParseFigma(nodes: NestedNode[]) : string {
  console.log('Parsing Nodes: ', nodes);
  let xamlCode = "";
  let rootnode = nodes[0];
  let contentPage = new ContentPage(rootnode.parent.node.name);
  let rootLayout = TranslateFigmaFrameToXamlLayout(rootnode.parent.node as FrameNode)

  xamlCode += contentPage.getStartTag() + `\n${formatStartTag(rootLayout)}\n`;

  rootnode.children.reverse().forEach( c => {
    //Traslate the Nested elements to 
    xamlCode += formatNestedElement(checkNodeType(c));
  });

  xamlCode += `\n${formatEndTag(rootLayout)}\n` + contentPage.getEndTag();

  return xamlCode;
}

function formatNestedElement(element: NestedElements): string {
  let result = '';

  if (element.parent instanceof CustomControl) {
    result +=  element.parent.getStartTag() + element.parent.getEndTag();
    
  } else if (element.parent instanceof ContentView) {
    result += element.parent.getStartTag() + /*`\n${nestedComponent}` +*/ element.parent.getEndTag();

  } else {
    if (element.parent.name === ElementName.none) {
      return '';
    }
    if (element.children.length > 0) {
      // Start tag
      result += formatStartTag(element.parent);

      // Iterate over children and recursively call formatNestedElement on each child
      element.children.forEach( c => { 
        result += formatNestedElement(c);
      })

      result += formatEndTag(element.parent);
    } else {
      result += formatShortTag(element.parent);
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
      if (nn.children.length === 1 && nn.children[0].parent.node.type === 'VECTOR') {
        // Skip the frame and return the vector directly
        return checkNodeType(nn.children[0]);
    } else {
      // Create frame element -> becaomes a xaml layout element 
      let frameNode = node as FrameNode;
      let frameElement = TranslateFigmaFrameToXamlLayout(frameNode);

      frameElement.properties.push(TranslateFillsToFigma(node, false));
      let nestedFrame : NestedElements = {parent: frameElement, children : []};
      nn.children.forEach(n => nestedFrame.children.push(checkNodeType(n)));

   
      return nestedFrame;
    }
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

    case 'COMPONENT':
      let componentNode = node as ComponentNode;
      // TODO: Make new resource file / new window
      let contentView = new ContentView(node.name);
      let nestedComponent : NestedElements = {parent: contentView, children : []};
      nn.children.forEach(n => nestedComponent.children.push(checkNodeType(n)));
      return nestedComponent;

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
  let isTextPropertySet = false;   
  console.log('translating : ', node.utype);
  // Check the node's type using the 'type' property
  switch (node.utype) {
    case 'BUTTON':
      let buttonNode = node.node as SceneNode;
      let buttonElement = TranslateButtonElement(buttonNode);
      buttonElement.properties.push(TranslateFillsToFigma(node.node as SceneNode, false))    
      let nestedButton : NestedElements = {parent: buttonElement, children : []};

      if (nn.children.length > 0) {
        nn.children.forEach ( n => {
          let childNode = n.parent.node;
          if (childNode.type === 'TEXT' && !isTextPropertySet) {
            let textElement = TranslateTextElement(childNode as TextNode);
            buttonElement.properties.concat(textElement.properties);
            isTextPropertySet = true;

          } else if ((childNode.type === 'VECTOR') || (n.parent.utype === 'IMAGE')) {
            let vectorElement = TranslateVectorElement(childNode as VectorNode);
            buttonElement.properties.concat(vectorElement.properties);

          } else {
            nestedButton.children.push(checkNodeType(n));
          }
        });
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
          if (childNode.type === 'TEXT' && !isTextPropertySet) {
            let placeholderProp : Property = { name: PropertyName.Placeholder, value: (childNode as TextNode).characters};
            editorElement.properties.push(placeholderProp);
            isTextPropertySet = true;
          } else {
            nestedEditor.children.push(checkNodeType(n));
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
          if (childNode.type === 'TEXT' && !isTextPropertySet) {
            let placeholderProp : Property = { name: PropertyName.Placeholder, value: (childNode as TextNode).characters};
            editorElement.properties.push(placeholderProp);
            isTextPropertySet = true;
          } else {
            nestedEntry.children.push(checkNodeType(n));
          }
        });
      }

      return nestedEntry;

    case 'COLLECTION':
      let collectionNode = node.node as SceneNode;
      let collectionElement = TranslateCollectionElement(collectionNode);
      let nestedCollection : NestedElements = {parent: collectionElement, children : []};

      if (nn.children.length > 0) {
        nn.children.forEach ( n => {
          nestedCollection.children.push(checkNodeType(n));
        });
      }
      return nestedCollection;
    
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

function formatStartTag(element: Element): string {
  const propertyString = element.properties
    .filter((prop) => (prop.value !== 'None')) // Exclude properties with value 'None' because then it is set to default value
    .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
    .join(` \n\t`);

  return `<${ElementName[element.name]} ${propertyString}>\n`;
}

function formatShortTag(element : Element): string {
  const propertyString = element.properties
    .filter((prop) => prop.value !== 'None') // Exclude properties with value 'None' because then it is set to default value
    .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
    .join(" " + `\n\t`);

  return `<${ElementName[element.name]} ${propertyString}/>\n`;
}

function formatEndTag(element: Element): string {
  return `</${ElementName[element.name]}>\n`;
}

function TranslateFillsToFigma(node: SceneNode, fill : boolean) :  Property {
  if ('fills' in node) {
    const fills: ReadonlyArray<Paint> = node.fills as ReadonlyArray<Paint>;
    if (fills && fills.length > 0) {
        fills.forEach((fill) => {
            if (fill.type === 'SOLID') {
                // Handle Solid Paint
                const solidPaint = fill as SolidPaint;
                const color = `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;

                if (fill) {
                  return { name: PropertyName.Fill, value: color } as Property;
                }
                return { name: PropertyName.Background, value: color } as Property;
            } 
          });
    }
  }
  return { name : PropertyName.none, value: 'None'}
}



