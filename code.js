"use strict";
// src/plugin.ts
figma.showUI(__html__, { width: 300, height: 400 });
function populateElementList() {
    const nodeList = [];
    // Iterate through the nodes on the current page
    const allFrames = figma.currentPage.children;
    allFrames.forEach(node => {
        // Access the name of each node and add it to the list
        nodeList.push({ name: node.name, node });
    });
    console.log('sendding data to ui file');
    figma.ui.postMessage(nodeList);
}
populateElementList();
