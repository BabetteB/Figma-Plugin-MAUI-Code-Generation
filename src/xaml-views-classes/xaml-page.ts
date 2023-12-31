import { toCamelCase } from "../commonPropertyParser";

export class ContentPage {
    startTag:   string;
    startEndTag: string = '>';
    endTag:     string;
    name:       string;
    controls :  string = '';

    constructor(className : string) {
        this.name = toCamelCase(className);
        this.startTag = FormatPageStartTag(className);
        this.endTag = '\n</ContentPage>';
    }

    getStartTag() {
        return this.startTag + this.startEndTag;
    }

    getEndTag() {
        return this.endTag;
    }
}

function addControl(page : ContentPage) {
    page.startTag = `${page.startTag}
                    xmlns:controls=clr-namespace:CustomControls\n`
}

function FormatPageStartTag(className : string) {
    return `<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
                    xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                    x:Class=${className}Page
                    x:Name=${className}\n`;
}

