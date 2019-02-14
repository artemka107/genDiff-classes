import yaml from 'js-yaml';

import Parser from './Parser';

class YmlParser extends Parser {
  parse() {
    return yaml.safeLoad(this.getFile());
  }
}

export default YmlParser;
