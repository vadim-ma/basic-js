const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length < 1) {
    return '';
  }
  let prevChar = str[0];
  let count = 0;
  let retStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === prevChar) {
      count += 1;
    } else {
      retStr += `${count > 1 ? count.toString() : ''}${prevChar}`
      prevChar = char;
      count = 1;
    }
  }
  retStr += `${count > 1 ? count.toString() : ''}${prevChar}`
  return retStr;
}

module.exports = {
  encodeLine
};
