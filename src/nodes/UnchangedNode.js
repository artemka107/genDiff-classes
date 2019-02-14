import Node from './Node';

class UnchangedNode extends Node {
  constructor(key, oldValue, newValue) {
    super(key);
    this.type = 'unchanged';
    this.oldValue = oldValue;
    this.newValue = newValue;
  }

  treeRender(indents) {
    const tab = this.setTab(indents);
    return `${tab}  ${this.key}: ${this.oldValue}`;
  }

  planeRender() {
    return false;
  }
}

export default UnchangedNode;
