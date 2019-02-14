import Node from './Node';

class ChangedNode extends Node {
  constructor(key, oldValue, newValue) {
    super(key);
    this.type = 'changed';
    this.oldValue = oldValue;
    this.newValue = newValue;
  }

  treeRender(indents) {
    const tab = this.setTab(indents);
    return `${tab}+ ${this.key}: ${this.newValue}\n${tab}- ${this.key}: ${this.oldValue}`;
  }

  planeRender(path) {
    const propName = path.concat(this.key).join('.');
    return `Property '${propName}' was updated. From '${this.oldValue}' to '${this.newValue}'`;
  }
}

export default ChangedNode;
