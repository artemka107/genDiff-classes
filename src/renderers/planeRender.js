const render = (tree) => {
  const result = tree
    .map(node => node.planeRender([]))
    .filter(Boolean)
    .join('\n');
  return `${result}\n`;
};

export default render;
