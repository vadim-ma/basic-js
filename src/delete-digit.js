const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const s = n.toString();
  const n1 = +(s.slice(1));
  const minChar = s
    .split('')
    .reduce((min, char) => (min = char < min ? char : min), s[0]);
  const index = s.indexOf(minChar);
  const n2 = +(s.slice(0, index) + s.slice(index + 1));
  return n1 > n2 ? n1 : n2;
}

module.exports = {
  deleteDigit
};
