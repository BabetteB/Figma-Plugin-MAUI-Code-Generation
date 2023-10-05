import { Element, ElementName } from "../../Element";
import { Property, PropertyName } from "../../Property";
import { TranslateCommonShapeProperties } from "./common-shape-properties";



export function TranslateEllipseElement(node: EllipseNode): Element {
  let commonShapeProps = TranslateCommonShapeProperties(node);


  const ellipseProperties: Property[] = [
    { name: PropertyName.Fill,    value: node.fills.toString() },
    { name: PropertyName.StrokeThickness,  value: node.strokeWeight.toString()},
    { name: PropertyName.Stroke,  value: '#000000'},
    // Add other ellipse-related properties as needed
  ];

  const ellipseElement: Element = { name: ElementName.Ellipse, properties: ellipseProperties };
  return ellipseElement;
}

function commonShapePropsType(s : any) {
  
}