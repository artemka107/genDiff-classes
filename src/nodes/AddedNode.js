import Node from './Node';
import _ from 'lodash';

class AddedNode extends Node {
  constructor(key, oldValue, newValue) {
    super(key);
    this.type = 'added';
    this.newValue = newValue;
  }

  treeRender(indents) {
    const tab = this.setTab(indents);
    return `${tab}+ ${this.key}: ${_.isObject(this.newValue) ?
      this.renderObj(this.newValue, indents) :
      this.newValue}`;
  }

  planeRender(path) {
    const propName = path.concat(this.key).join('.');
    return `Property '${propName}' was added with ${_.isObject(this.newValue) ? 'complex value' : `value: '${this.newValue}'`}`;
  }
}

export default AddedNode;
