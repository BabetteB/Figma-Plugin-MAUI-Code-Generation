import { toCamelCase } from "../commonPropertyParser";

export type Binding = {
    name: string,
    value: string
}

export class CustomControl {
    startTag:   string;
    endTag:     string = '/>\n';
    name:       string;
    bindings :  Binding[];

    constructor(controlName : string, bindings : Binding[]){
        this.name = toCamelCase(controlName);
        this.bindings = bindings;
        this.startTag = this.FormatStartTag();
    }
    
    getStartTag() {
        return this.startTag + this.name;
    }

    getEndTag() {
        return this.endTag;
    }

    private FormatStartTag() {
        let setBindings = '';
        this.bindings.forEach( b => setBindings + `${b.name} = ${b.value}\n`);
        return `
        <control:${this.name} ${setBindings}`;
    }
}
