const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCounted(str) {
  const o = {};
  for (let char of str) {
    if (o.hasOwnProperty(char)) {
      o[char] += 1;
    } else {
      o[char] = 1;
    }
  }
  return o;
}
function getCommonCharacterCount(s1, s2) {
  const sCounted1 = getCounted(s1);
  const sCounted2 = getCounted(s2);
  let count = 0;
  for (const char in sCounted1) {
    count += Math.min(sCounted1[char], sCounted2[char] || 0);
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
