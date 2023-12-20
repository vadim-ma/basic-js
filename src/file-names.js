const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function getNewName(name, set){
  let newName = name;
  let n = 1;
  while (set.has(newName)) {
    newName = `${name}(${n})`;
    n += 1;
  }

  return newName;
}
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  
  const set = new Set();
  return names
    .map((name) => {
      const newName = getNewName(name, set);
      set.add(newName);
      return newName;
    });
}

module.exports = {
  renameFiles
};
