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
import { TranslateListViewElement } from "./user-defined-types-translation/listview-2-xaml";
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
    if (element.children.length > 0) {
      // Start tag
      result += formatStartTag(element.parent);

      // Iterate over children and recursively call formatNestedElement on each child
      element.children.forEach( c => { 
        result += formatNestedElement(c);
      })

      // End tag (only if the element isn't self-closing)
      if (element.parent.name !== ElementName.none && element.children.length > 0) {
        result += formatEndTag(element.parent);
      }
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
            let textElement = TranslateTextElement(childNode as TextNode);
            editorElement.properties.concat(textElement.properties);
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
            let textElement = TranslateTextElement(childNode as TextNode);
            entryElement.properties.concat(textElement.properties);
          } else {
            nestedEntry.children.push(checkNodeType(n));
          }
        });
      }

      return nestedEntry;

    case 'LISTVIEW':
      let listViewNode = node.node as SceneNode;
      let collectionElement = TranslateListViewElement(listViewNode);
      let nestedCollection : NestedElements = {parent: collectionElement, children : []};

      if (nn.children.length > 0) {
        nn.children.forEach ( n => {
          nestedCollection.children.push(checkNodeType(n));
        });
      }

      return nestedCollection;

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

function translateFillsToFigma(elementName : string, node: SceneNode) {
  if ('fills' in node) {
    let xamlString = `.${ElementName.Background}`;

    const fills: ReadonlyArray<Paint> = node.fills as ReadonlyArray<Paint>;
    if (fills && fills.length > 0) {
        fills.forEach((fill) => {
            if (fill.type === 'SOLID') {
                // Handle Solid Paint
                const solidPaint = fill as SolidPaint;
                const color = `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;

                let backgroundProp = { name: PropertyName.Background, value: color } as Property;

                xamlString += `${formatProperties([backgroundProp])}/>`;

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
                    let stopsString = gradProps.forEach(g => formatShortTag(g));
                  xamlString += `>\n${formatStartTag(linearGradientBrushElement)}>${stopsString}${formatEndTag(linearGradientBrushElement)}`;
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
                let stopsString = gradProps.forEach(g => formatShortTag(g));
                xamlString += `>\n${formatStartTag(radialGradientBrushElement)}>${stopsString}${formatEndTag(radialGradientBrushElement)}`;
            }
    }});
    }
    return xamlString;
  }
 return '';
}



