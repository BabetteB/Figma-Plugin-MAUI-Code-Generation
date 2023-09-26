export type Binding = {
    name: string,
    value: string
}

export class CustomControl {
    startTag:   string;
    endTag:     string = '/>';
    name:       string;
    bindings :  Binding[];

    constructor(controlName : string, bindings : Binding[]){
        this.bindings = bindings;
        this.startTag = this.FormatStartTag();
        this.name = controlName;
    }
    
    getStartTag() {
        return this.startTag;
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
