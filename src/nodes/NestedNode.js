import Node from './Node';
import _ from 'lodash';

class NestedNode extends Node {
  constructor(key, oldValue, newValue, fn) {
    super(key);
    this.type = 'nested';
    this.children = fn(oldValue, newValue);
  }

  treeRender(indents) {
    const tab = this.setTab(indents);
    const bracketsTab = this.setTab(indents + 2);
    return `${tab}  ${this.key}: {\n${this.children
      .map(c => c.treeRender(indents + 4)).join('\n')}\n${bracketsTab}}`;
  }

  planeRender(path) {
    return this.children
      .map(c => c.planeRender(path.concat(this.key)))
      .filter(Boolean)
      .join('\n');
  }
}

export default NestedNode;
