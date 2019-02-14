import Parser from './Parser';

class JsonParser extends Parser {
  parse() {
    return JSON.parse(this.getFile());
  }
}

export default JsonParser;
