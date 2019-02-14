const render = (ast) => {
  const result = ast.map(node => node.treeRender(2)).join('\n');
  return `{\n${result}\n}\n`;
};

export default render;
