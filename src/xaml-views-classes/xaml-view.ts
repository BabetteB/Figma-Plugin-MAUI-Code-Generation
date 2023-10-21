import { toCamelCase } from "../commonPropertyParser";

export class ContentView {
    startTag:   string;
    startEndTag: string = '>\n';
    endTag:     string;
    name:       string;
    controls:   string = '';

    constructor(className: string) {
        this.name = toCamelCase(className);
        this.startTag = formatPageStartTag(className);
        this.endTag = '\n</ContentView>';
    }

    getStartTag(level: number = 0) {
        const indent = getIndentation(level);
        return indent + this.startTag + this.startEndTag;
    }

    getEndTag(level: number = 0) {
        const indent = getIndentation(level);
        return indent + this.endTag;
    }
}

function formatPageStartTag(className: string) {
    return `
    // Create a folder under Resources called "CustomControls" and make a new "ContentView" in there 
    <ContentView xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
                 xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                 x:Class=CustomControls.${toCamelCase(className)}
                 x:Name="${className}"`;
}

// Helper function to return indentation
export function getIndentation(level: number): string {
    return '    '.repeat(level); // Assuming 4 spaces per level
}