import Node from './Node';
import _ from 'lodash';

class DeletedNode extends Node {
  constructor(key, oldValue, newValue) {
    super(key);
    this.type = 'deleted';
    this.oldValue = oldValue;
  }

  treeRender(indents) {
    const tab = this.setTab(indents);
    return `${tab}- ${this.key}: ${_.isObject(this.oldValue) ?
      this.renderObj(this.oldValue, indents) : this.oldValue}`;
  }

  planeRender(path) {
    const propName = path.concat(this.key).join('.');
    return `Property '${propName}' was removed`;
  }
}

export default DeletedNode;
