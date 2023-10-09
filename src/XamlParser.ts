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
import { TranslateCollectionElement } from "./user-defined-types-translation/collection-2-xaml";
import { type } from "os";
import { TranslatePolygonElement } from "./figma-node-translation/shapes/polygon-2-polygon";


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

  rootnode.children.forEach( c => {
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
      // Create frame element -> becaomes a xaml layout element 
      let frameNode = node as FrameNode;
      let frameElement = TranslateFigmaFrameToXamlLayout(frameNode);

      let nestedFrame : NestedElements = {parent: frameElement, children : []};
      nn.children.forEach(n => nestedFrame.children.push(checkNodeType(n)));
   
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

    case 'POLYGON':
      let polygonNode = node as PolygonNode;
      let polygonElement = TranslatePolygonElement(polygonNode); 
      let nestedPolygon : NestedElements = {parent: polygonElement, children : []};

      return nestedPolygon;

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
  console.log('translating : ', node.utype);
  // Check the node's type using the 'type' property
  switch (node.utype) {
    case 'BUTTON':
      let buttonNode = node.node as SceneNode;
      let buttonElement = TranslateButtonElement(buttonNode);
      
      let nestedButton : NestedElements = {parent: buttonElement, children : []};

      if (nn.children.length > 0) {
        nn.children.forEach ( n => {
          let childNode = n.parent.node;
          if (childNode.type === 'TEXT') {
            let textElement = TranslateTextElement(childNode as TextNode);
            buttonElement.properties.concat(textElement.properties);

          } else if (childNode.type === 'VECTOR') {
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
      let nestedEditor : NestedElements = {parent: editorElement, children : []};

      if (nn.children.length > 0) {
        nn.children.forEach ( n => {
          let childNode = n.parent.node;
          if (childNode.type === 'TEXT') {
            let placeholderProp : Property = { name: PropertyName.Placeholder, value: (childNode as TextNode).characters};
            editorElement.properties.push(placeholderProp);
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
          if (childNode.type === 'TEXT') {
            let placeholderProp : Property = { name: PropertyName.Placeholder, value: (childNode as TextNode).characters};
            editorElement.properties.push(placeholderProp);
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

    case 'CHECHBOX':
      let checkBoxNode = node.node as SceneNode;
      let checkBoxElement = TranslateButtonElement(checkBoxNode);
      let nestedCheckBox : NestedElements = {parent: checkBoxElement, children : []};
      return nestedCheckBox;

    case 'SWITCH':
      let switchNode = node.node as SceneNode;
      let switchElement = TranslateButtonElement(switchNode);
      let nestedSwitch: NestedElements = {parent: switchElement, children : []};
      return nestedSwitch;

    case 'SWITCH':
      let sliderNode = node.node as SceneNode;
      let sliderElement = TranslateButtonElement(sliderNode);
      let nestedSlider: NestedElements = {parent: sliderElement, children : []};
      return nestedSlider;

    default:
      let element = {name: ElementName.none, properties: []}
      let nested = {parent: element, children: []}
      return nested;
  }
}

function formatProperties(properties : Property[]) : string{
  const propertyString = properties
    .filter((prop) => (prop.value !== 'None')) // Exclude properties with value 'None' because then it is set to default value
    .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
    .join(" ");
  return propertyString;
}

function formatStartTag(element: Element): string {
  const propertyString = element.properties
    .filter((prop) => (prop.value !== 'None')) // Exclude properties with value 'None' because then it is set to default value
    .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
    .join(" ");

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

function TranslateFillsToFigma(parentElementName : string, node: SceneNode, fill : boolean) : NestedElements | Property {
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


            } else if (fill.type === 'GRADIENT_LINEAR') {
                const gradientPaint = fill as GradientPaint;

                let linearGradientBrushProp : Property[] = [
                  {name: PropertyName.EndPoint, value: '1,0'}
                ];
                let linearGradientBrushElement : Element =
                  {name : ElementName.LinearGradientBrush, properties: linearGradientBrushProp}

                if (gradientPaint.gradientStops) {
                  let gradProps = [] as Element[];
                    gradientPaint.gradientStops.forEach(stop => {
                        let gradProp : Property[]= [
                          {name: PropertyName.OffSet, value: `${stop.position}`},
                          {name: PropertyName.Color, value: `#${stop.color.r}${stop.color.g}${stop.color.b}`}
                        ];
                        gradProps.push({name: ElementName.GradientStop, properties: gradProp});
                    });
                    return {parent : linearGradientBrushElement, children : [gradProps]}
                }
                
            } else if (fill.type === 'GRADIENT_RADIAL') {
              // Handle Gradient Paint (Linear or Radial)
              const gradientPaint = fill as GradientPaint;

              let radialGradientBrushProp : Property[] = [
                {name: PropertyName.Center, value: '0.5, 0.5'},
                {name: PropertyName.Radius, value: '0.5'}
              ];
              let radialGradientBrushElement : Element =
                {name : ElementName.RadialGradientBrush, properties: radialGradientBrushProp};

              if (gradientPaint.gradientStops) {
                let gradProps = [] as Element[];
                gradientPaint.gradientStops.forEach(stop => {
                    let gradProp : Property[]= [
                      {name: PropertyName.OffSet, value: `${stop.position}`},
                      {name: PropertyName.Color, value: `#${stop.color.r}${stop.color.g}${stop.color.b}`}
                    ];
                    gradProps.push({name: ElementName.GradientStop, properties: gradProp});
                });
              return {parent : radialGradientBrushElement, children : [gradProps]}
            }
    }});
    }
  }
  let element : Element = {name: ElementName.none, properties : []} 
 return {parent : element, children : []};
}



