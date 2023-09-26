// src/plugin.ts
figma.showUI(__html__, { width: 600, height: 400 });
function makeDisplayNode(_node) {
    return { name: _node.name, type: _node.type, node: _node };
}
function childrenToNestedNodes(cn) {
    const list = [];
    cn.forEach((c) => {
        const nn = traverse(c);
        list.push(nn);
    });
    return list;
}
function traverse(cn) {
    const dn = makeDisplayNode(cn);
    const nn = {
        parent: dn,
        children: [],
    };
    if ('children' in cn) {
        // If the child has children, we must go through them and make them into nested nodes
        nn.children = childrenToNestedNodes(cn.children);
    }
    return nn;
}
const currentPage = figma.currentPage;
const rootNode = makeDisplayNode(currentPage);
console.log('rootnode :' + rootNode);
const selection = currentPage.selection;
console.log('selection :', selection);
const nodes = [
    {
        parent: rootNode,
        children: childrenToNestedNodes(currentPage.children),
    },
];
console.log('node:', nodes);
figma.ui.postMessage(nodes);

