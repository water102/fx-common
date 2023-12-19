export const isJSON = function (json: any, traceError = true) {
  let is_json = true; //true at first
  //Try-catch and JSON.parse function is used here.
  try {
    JSON.parse(json);
  } catch (error) {
    is_json = false;
    if (traceError) {
      console.log('Might be a problem in key or value data type');
    }
  }

  if (traceError && !is_json) {
    const countCharacter = (str: string, character: string) => {
      let count = 0;
      for (let i = str.length; i >= 0; i--) {
        if (str.charAt(i) == character) {
          //counting : or ,
          count++;
        }
      }
      return count;
    };

    json = json.trim(); // remove whitespace, start and end spaces

    if (json.charAt(0) === '{' && json.charAt(json.length - 1) !== '}') {
      console.log('Brackets {} are not balanced');
    } else if (json.charAt(0) === '[' && json.charAt(json.length - 1) !== ']') {
      console.log('Brackets [] are not balanced');
    } else if (!(countCharacter(json, ':') - 1 == countCharacter(json, ','))) {
      console.log('Comma or colon are not balanced');
    } else {
      json = json.substring(1, json.length - 1); //remove first and last brackets
      json = json.split(',');
      for (let i = 0; i < json.length; i++) {
        const pairs = json[i];
        if (pairs.indexOf(':') == -1) {
          //if colon not exist in b/w
          console.log('No colon b/w key and value');
        }
      }
    }
  }
  return is_json;
};
