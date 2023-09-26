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
const rootNode: DisplayNode = makeDisplayNode(currentPage);
console.log('rootnode :' + rootNode);

const selection = currentPage.selection;
console.log('selection :', selection);

const nodes: NestedNode[] = [
  {
    parent: rootNode,
    children: childrenToNestedNodes(currentPage.children as SceneNode[]),
  },
];

console.log('node:', nodes);

figma.ui.postMessage(nodes);