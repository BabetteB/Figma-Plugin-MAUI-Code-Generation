import { Element, ElementName } from "../Element";
import { Property, PropertyName } from "../Property";
import { TranslateCommonProperties } from "../commonPropertyParser";


export function TranslateSliderElement(node : SceneNode) : Element {
    const sliderProperties: Property[] = [
        { name: PropertyName.Maximum,     value: "10" }
      ]
      const sliderElement: Element = { name: ElementName.Slider, properties: sliderProperties.concat(TranslateCommonProperties(node)) };
      return sliderElement;
}