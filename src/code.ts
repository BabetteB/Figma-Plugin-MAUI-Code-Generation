import { ParseFigma } from "./XamlParser";
import  * as fs from 'fs';

// src/plugin.ts
figma.showUI(__html__, { width: 600, height: 400 });

export type DisplayNode = {
  name: string,
  utype : string,
  node: BaseNode
}

export type NestedNode = {
  parent: DisplayNode,
  children: NestedNode[]
}

function makeDisplayNode(_node : BaseNode) : DisplayNode {
  return {name: _node.name, utype: 'None', node: _node}
}

function childrenToNestedNodes(cn: SceneNode[]): NestedNode[] {
  const list: NestedNode[] = [];

  cn.forEach((c) => {
    const nn = traverse(c);
    list.push(nn);
  });

  return list;
}

function traverse(cn: SceneNode): NestedNode {
  const dn: DisplayNode = makeDisplayNode(cn);
  const nn: NestedNode = {
    parent: dn,
    children: [],
  };

  if ('children' in cn) {
    // If the child has children, we must go through them and make them into nested nodes
    nn.children = childrenToNestedNodes(cn.children as SceneNode[]);
  }

  return nn;
}

const selection = figma.currentPage.selection[0];

const rootNode: DisplayNode = makeDisplayNode(selection as BaseNode);
let list : SceneNode[] = [];
if ('children' in selection){
  selection.children.forEach( c => list.push(c));
}
const nodes: NestedNode[] = [
  {
    parent: rootNode,
    children: childrenToNestedNodes(list),
  },
];

let nodes2Parse: NestedNode[] = [];

figma.ui.postMessage({ type: 'init', nodes });

figma.ui.onmessage = (message) => {
  console.log("got this from the UI", message);
  nodes2Parse = updateDisplayNodeUType(nodes, message);

  function updateDisplayNodeUType(selection: NestedNode[], message: { node: NestedNode; selectedValue: string }[]): NestedNode[] {
    // Create a mapping of BaseNode.id to selectedValue
    const selectedValueMap: Record<string, string> = {};
    message.forEach((item) => {
      selectedValueMap[item.node.parent.node.id] = item.selectedValue;
    });

    // Create a new array to hold the updated selection
    const updatedSelection: NestedNode[] = [];

    // Recursive function to update nodes
    function updateChildren(node: NestedNode): NestedNode {
      const selectedValue = selectedValueMap[node.parent.node.id];
      if (selectedValue !== undefined) {
        // Create a new node with updated utype
        const updatedParent = { ...node.parent, utype: selectedValue };
        return { parent: updatedParent, children: node.children.map((child) => updateChildren(child)) };
      } else {
        // If no update is needed, return the original node
        return { parent: node.parent, children: node.children.map((child) => updateChildren(child)) };
      }
  }

  // Iterate through the selection and update nodes based on the message
  selection.forEach((nestedNode) => {
    const updatedNode = updateChildren(nestedNode);
    updatedSelection.push(updatedNode);
  });  

  return updatedSelection;
  }
  
  const textContent = ParseFigma(nodes2Parse);

  figma.ui.postMessage({type: "fileInfo", textContent });

}


