const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const ret = [];
  let discardNext = false;
  let doubleNext = false;
  let prevNotExist = true;

  arr.forEach(v => {
    switch (v) {
      case '--discard-next':
        discardNext = true;
        doubleNext = false;
        break;

      case '--double-next':
        discardNext = false;
        doubleNext = true;
        break;
    
      case '--discard-prev':
        discardNext = false;
        doubleNext = false;
        if (!prevNotExist){
          if (ret.length > 0) {
            ret.pop();
            prevNotExist = true;
          }
        }
        break;

      case '--double-prev':
        if (!prevNotExist) {
          if (ret.length > 0) {
            ret.push(ret[ret.length - 1]);
            prevNotExist = false;
          }
        }
        discardNext = false;
        doubleNext = false;
        break;
  
      default:
        if (discardNext) {
          prevNotExist = true;
          discardNext = false;
          doubleNext = false;
          break;
        }
        ret.push(v);
        prevNotExist = false;
        if (doubleNext) {
          ret.push(v);
        }

        discardNext = false;
        doubleNext = false;
        break;
    }
  });
  return ret;
}

module.exports = {
  transform
};
