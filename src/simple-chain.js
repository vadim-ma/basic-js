const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let data = [];
const chainMaker = {
  getLength() {
    return data.length;
  },
  addLink(value = '') {
    data.push(`${value}`);
    return chainMaker;
  },
  removeLink(position) {
    if (position < 1 || position > data.length || !isFinite(position) || position !== Math.trunc(position)) {
      throw new Error("You can't remove incorrect link!"); 
    }
    try {
      data.splice(position - 1, 1);
    } catch (error) {
      throw new Error("You can't remove incorrect link!"); 
    }
    return chainMaker;
  },
  reverseChain() {
    data.reverse();
    return chainMaker;
  },
  finishChain() {
    let s = '';
    data.forEach((element, index) => {
      s += (index > 0 ? '~~' : '') + `( ${element} )`;
    });
    data = [];
    return s;
  }
};

module.exports = {
  chainMaker
};
