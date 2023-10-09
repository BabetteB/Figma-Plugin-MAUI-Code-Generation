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
  let node = nn.parent.node;
  // Check the node's type using the 'type' property
  switch (node.type) {
    case 'FRAME':
      let frameNode = node as FrameNode;
      let nestedFrameNodes = '';
      nn.children.forEach(n => nestedFrameNodes += checkNodeType(n) + `\n`);
      let frameElement = TranslateFigmaFrameToXamlLayout(frameNode);
      return formatStartTag(frameElement) + `\t${nestedFrameNodes}` + formatEndTag(frameElement);

    case 'GROUP':
      let groupNode = node as GroupNode;
      let nestedGroupNodes = '';
      nn.children.forEach(n => nestedGroupNodes += checkNodeType(n) + `\n`);
      return nestedGroupNodes;

    case 'TEXT':
      let textNode = node as TextNode;
      let textElement = TranslateTextElement(textNode);
      return formatShortTag(textElement);

    case 'ELLIPSE':
      let ellipseNode = node as EllipseNode;
      let ellipseElement = TranslateEllipseElement(ellipseNode);
      return formatShortTag(ellipseElement);

    case 'LINE':
      let lineNode = node as LineNode;
      let lineElement = TranslateLineElement(lineNode);
      return formatShortTag(lineElement);

    case 'RECTANGLE':
      let rectangleNode = node as RectangleNode;
      let rectangleElement = TranslateRectangleElement(rectangleNode); 
      return formatShortTag(rectangleElement);

    case 'POLYGON':
      let polygonNode = node as PolygonNode;
      return 'Polygon';

    case 'INSTANCE':
      let instanceNode = node as InstanceNode;
      let bindings : Binding[] = [] //TODO: children
      let customControl = new CustomControl(instanceNode.name, bindings);
      return customControl.getStartTag() + customControl.getEndTag();

    case 'COMPONENT':
      let componentNode = node as ComponentNode;
      // TODO: Make new resource file / new window
      let contentView = new ContentView(node.name);
      let nestedComponent = '';
      nn.children.forEach(n => nestedComponent += `\t${checkNodeType(n)}\n`);
      return contentView.getStartTag() + `\n${nestedComponent}` + contentView.getEndTag();

    //Are not getting castet 
    case 'VECTOR':
      let vectorNode = node as VectorNode;
      let vectorNote = `// Please export ${vectorNode.name} as a .png- or .svg file and place in the Resource/Images/ folder\n`
      let vectorElement = TranslateVectorElement(vectorNode); 
      return vectorNote + formatShortTag(vectorElement);

    case 'STAR':
      let starNode = node as StarNode;
    case 'BOOLEAN_OPERATION':
      let booleanOperationNode = node as BooleanOperationNode;
    case 'SLICE':
      let sliceNode = node as SliceNode;
    default:
      return `<!-- This plugin is unfortuanately unable to cast ${node.type}s as MAUI elements. -->`;
  }
}

function parseUtypeNodes(nn : NestedNode) : string {
  let node = nn.parent;
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

    case 'LISTVIEW':
      let collectionNode = node.node as SceneNode;
      let collectionElement = TranslateCollectionElement(collectionNode);
      let nestedCollection : NestedElements = {parent: collectionElement, children : []};

      if (nn.children.length > 0) {
        nn.children.forEach ( n => {
          nestedCollection.children.push(checkNodeType(n));
        });
      }

      return nestedCollection;

    default:
      return '';
  }
}

export function ParseFigma(nodes: NestedNode[]) : string {
  let xamlCode = "";
  let rootnode = nodes[0];
  let contentPage = new ContentPage(rootnode.parent.node.name);
  xamlCode += contentPage.getStartTag() + newline();

  rootnode.children.forEach( c => {
    xamlCode += checkNodeType(c); //check if it is a user defined node or not
  });

  xamlCode += contentPage.getEndTag();

  return xamlCode;
}

function formatStartTag(element: Element): string {
  const propertyString = element.properties
    .filter((prop) => (prop.value !== 'None')) // Exclude properties with value 'None' because then it is set to default value
    .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
    .join(" ");

  return `<${ElementName[element.name]} ${propertyString}>` + newline();
}

function formatShortTag(element : Element): string {
  const propertyString = element.properties
    .filter((prop) => prop.value !== 'None') // Exclude properties with value 'None' because then it is set to default value
    .map((prop) => `${PropertyName[prop.name]}="${prop.value}"`)
    .join(" " + newline() + `\t`);

  return `<${ElementName[element.name]} ${propertyString}/>` + newline();
}

function formatEndTag(element: Element): string {
  return `</${ElementName[element.name]}>`;
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

