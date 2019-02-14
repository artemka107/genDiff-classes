import _ from 'lodash';

class Node {
  constructor(key) {
    this.key = key;
  }

  renderObj(obj, indents) {
    const tab = this.setTab(indents + 4);
    const bracketsTab = this.setTab(indents + 2);
    const result = _.keys(obj).map(key => `${tab}  ${key}: ${obj[key]}`).join('\n');
    return `{\n${result}\n${bracketsTab}}`;
  };

  setTab(spaces) {
    return ' '.repeat(spaces);
  };
}

export default Node;
