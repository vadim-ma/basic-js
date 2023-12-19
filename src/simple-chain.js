const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
function getLocalChainMaker(that) {
  let local;
  if (that === chainMaker) {
    local = {data: []};
    Object.assign(local, chainMaker);
  } else {
    local = that;
  }
  return local;
}
const chainMaker = {
  getLength() {
    return this?.data.length;
  },
  addLink(value = '') {
    const local = getLocalChainMaker(this);
    local.data.push(`${value}`);
    return local;
  },
  removeLink(position) {
    const local = getLocalChainMaker(this);
    if (position < 1 || position > local.data.length || !isFinite(position) || position !== Math.trunc(position)) {
      throw new Error("You can't remove incorrect link!"); 
    }
    try {
      local.data.splice(position - 1, 1);
    } catch (error) {
      throw new Error("You can't remove incorrect link!"); 
    }
    return local;
  },
  reverseChain() {
    const local = getLocalChainMaker(this);
    local.data.reverse();
    return local;
  },
  finishChain() {
    const local = getLocalChainMaker(this);

    let s = '';
    local.data.forEach((element, index) => {
      s += (index > 0 ? '~~' : '') + `( ${element} )`;
    });
    return s;
  }
};

module.exports = {
  chainMaker
};
