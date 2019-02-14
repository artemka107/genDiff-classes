import _ from 'lodash';

import UnchangedNode from './UnchangedNode';
import ChangedNode from './ChangedNode';
import AddedNode from './AddedNode';
import DeletedNode from './DeletedNode';
import NestedNode from './NestedNode';

const actionNode = [
  {
    check: (value1, value2) => _.isObject(value1) && _.isObject(value2),
    Node: NestedNode,
  },
  {
    check: (value1, value2) => value1 === value2,
    Node: UnchangedNode,
  },
  {
    check: (value1, value2) => value1 && !value2,
    Node: DeletedNode,
  },
  {
    check: (value1, value2) => !value1 && value2,
    Node: AddedNode,
  },
  {
    check: (value1, value2) => (value1 && value2) && (value1 !== value2),
    Node: ChangedNode,
  },
];

const buildNode = (key, value1, value2, fn) => {
  const { Node } = actionNode.find(({ check }) => check(value1, value2));
  return new Node(key, value1, value2, fn);
};

export default buildNode;
