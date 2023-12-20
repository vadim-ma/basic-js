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
function getNewName(name, map){
  const curCount = map.get(name) || 0;
  if (curCount === 0) {
    return name;
  }
  let newName = `${name}(${curCount.toString()})`;
  if (map.has(newName)) {
    newName = getNewName(newName);
  }
  return newName;
}
function renameFiles(names) {
  const map = new Map();
  return names
    .map((name) => {
      const newName = getNewName(name, map);
      map.set(newName, 1);
      return newName;
    });
}

module.exports = {
  renameFiles
};
