const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'} = options;
  let addStr = addition + (additionSeparator + addition).repeat(additionRepeatTimes > 1 ? additionRepeatTimes - 1 : 0);
  let retStr = '' + str + addStr + (separator + str + addStr).repeat(repeatTimes > 1 ? repeatTimes - 1 : 0);
  return retStr;
}

module.exports = {
  repeater
};
