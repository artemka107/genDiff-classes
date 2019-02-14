import modulePath from 'path';

import IniParser from './IniParser';
import JsonParser from './JsonParser';
import YmlParser from './YmlParser';

const getFileParser = (file, filePath) => {
  const ext = modulePath.extname(filePath);

  if (ext === '.yml' || ext === '.yaml') {
    return new YmlParser(file);
  }
  if (ext === '.json') {
    return new JsonParser(file);
  }
  return new IniParser(file);
};

export default getFileParser;
