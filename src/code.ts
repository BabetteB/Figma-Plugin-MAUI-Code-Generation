import { ParseFigma } from "./XamlParser";

// src/plugin.ts
figma.showUI(__html__, { width: 600, height: 400 });

export type DisplayNode = {
  name: string,
  type : string,
  node: BaseNode
}

export type NestedNode = {
  parent: DisplayNode,
  children: NestedNode[]
}

function makeDisplayNode(_node : BaseNode) : DisplayNode {
  return {name: _node.name, type: _node.type, node: _node}
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

const currentPage = figma.currentPage;
const selection = currentPage.selection[0];

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


figma.ui.postMessage(nodes);

ParseFigma(nodes);