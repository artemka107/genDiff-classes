import fs from 'fs';
import _ from 'lodash';
import getFileParser from './fileParsers/getFileParser';
import getRender from './renderers';
import buildNode from './nodes/buildNode';


const parse = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  return keys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    return buildNode(key, value1, value2, parse);
  });
};


const getObj = (filePath) => {
  const file = fs.readFileSync(filePath, 'utf8');
  const parser = getFileParser(file, filePath);
  return parser.parse();
};

const genDiff = (path1, path2, renderFormat) => {
  const obj1 = getObj(path1);
  const obj2 = getObj(path2);
  const render = getRender(renderFormat);

  const ast = parse(obj1, obj2);
  const result = render(ast);
  return result;
};

export default genDiff;
