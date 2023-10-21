import { toCamelCase } from "../commonPropertyParser";
import { getIndentation } from "./xaml-view";

export type Binding = {
    name: string,
    value: string
}
export class CustomControl {
    startTag:   string;
    endTag:     string = '/>\n';
    name:       string;
    bindings :  Binding[];

    constructor(controlName: string, bindings: Binding[]) {
        this.name = toCamelCase(controlName);
        this.bindings = bindings;
        this.startTag = this.formatStartTag();
    }

    getStartTag(level: number = 0) {
        const indent = getIndentation(level);
        return indent + this.startTag + this.name;
    }

    getEndTag(level: number = 0) {
        const indent = getIndentation(level);
        return indent + this.endTag;
    }

    private formatStartTag() {
        let setBindings = '';
        this.bindings.forEach(b => setBindings += `${b.name} = ${b.value}\n`);
        return `
        <control:${this.name} ${setBindings}`;
    }
}