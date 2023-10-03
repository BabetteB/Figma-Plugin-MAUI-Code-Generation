export class ContentView {
    startTag:   string;
    startEndTag: string = '>';
    endTag:     string;
    name:       string;
    controls :  string = '';

    constructor(className : string) {
        this.startTag = FormatPageStartTag(className);
        this.endTag = '\n</ContentView>';
        this.name = className;
    }

    getStartTag() {
        return this.startTag + this.startEndTag;
    }

    getEndTag() {
        return this.endTag;
    }
}

function FormatPageStartTag(className : string) {
    return `
    //Create a folder under Resources called "CustomControls" and make a new "ContentView" in there 
    <ContentView xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
                    xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                    x:Class=CustomControls.${className}
                    x:Name=${className}\n`;
}

