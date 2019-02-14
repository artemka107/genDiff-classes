import ini from 'ini';

import Parser from './Parser';

class IniParser extends Parser {
  parse() {
    return ini.parse(this.getFile());
  }
}

export default IniParser;
