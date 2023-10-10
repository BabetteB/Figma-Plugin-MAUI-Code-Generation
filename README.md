# Figma-Plugin-MAUI-Code-Generation


## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Exporting Code](#exporting-code)
- [Design Rules](#design-rules-when-using-the-plugin)
- [License](#license)

## Overview
The Figma Code Generation Plugin is a tool that simplifies the process of converting designs into code implimentations. It allows you to specify different design element types and generate code snippets for them. This README provides instructions on how to open and use the plugin.

## Installation
To use the Figma Code Generation Plugin, follow these installation steps:

1. **Install Figma**: If you haven't already, download and install [Figma](https://www.figma.com/downloads/).

2. **Open Figma**: Launch Figma and open your design project.

3. **Access Plugins**: In Figma, click on the "Plugins" menu in the top menu bar.

4. **Import from manifest**: Find the "Developemnt" tab in the drop-down, and then click on the "import plugin from manifest..." tab

5. **Find and open**: Find the "manifest.json" file in the "Figma-Plugin-MAUI-Code-Generation" project and click on it. Then click on the open button and the plugin is now installed

## Usage
Once you've installed the Figma Code Generation Plugin and made your design, here's how to use it:

1. **Select Design Elements**: In your Figma design project, select the frame with all the design elements iside it, that you want to convert into code.

2. **Open the Plugin**: In the Figma menu, go to "Plugins" > "Code Generation Plugin" to open the plugin interface.

3. **Specify Element Types**: For each selected design element, use the drop-down menu provided in the plugin interface to specify the corresponding element type (e.g. button, image, etc.).

4. **Review Selection**: Double-check your selections and make sure all elements are correctly assigned types.

5. **Generate Code**: Once you're satisfied with your selections, press the "Export design" button within the plugin interface.

6. **Screen shot**: When you have exported the code, please take a screen shot where alle the type declerations are viseble.

## Exporting Code

After generating code snippets for your design elements, follow these steps to export the code:

1. **Review Generated Code**: The generated code snippets will be displayed in the plugin interface. Review the code to ensure it matches your design.

2. **Copy to Clipboard**: Click the "Copy to Clipboard" button to copy the generated code.

## Design rules when using the plugin

1. Make sure to give all possible elements there corosponding type, when possible.

2. When making any complex element (such as buttuns or input fields) please use frames when designing the prodotype

3. If you input any elements from outside figma (e.g a logo) please mark it as an image

4. When possible please use the puto layout when spacing out items and choose the corresponding layout type in Figma

5. When exporting the design please choose one frame at a time and mark it before activating the plug-in

## License
This Figma Code Generation Plugin is licensed under the [MIT License](LICENSE).
