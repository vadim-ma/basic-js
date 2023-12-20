const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0));
  for (let row = 0; row < matrix.length; row++) {
    const rowArr = matrix[row];
    for (let col = 0; col < rowArr.length; col++) {
      const cell = rowArr[col];
      if (row > 0) {
        if (col > 0) {
          res[row - 1][col - 1] += (cell ? 1 : 0);
        }
        res[row - 1][col] += (cell ? 1 : 0);
        if (col < rowArr.length - 1) {
          res[row - 1][col + 1] += (cell ? 1 : 0);
        }
      }

      if (col > 0) {
        res[row][col - 1] += (cell ? 1 : 0);
      }
      if (col < rowArr.length - 1) {
        res[row][col + 1] += (cell ? 1 : 0);
      }

      if (row < matrix.length - 1) {
        if (col > 0) {
          res[row + 1][col - 1] += (cell ? 1 : 0);
        }
        res[row + 1][col] += (cell ? 1 : 0);
        if (col < rowArr.length - 1) {
          res[row + 1][col + 1] += (cell ? 1 : 0);
        }
      }
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
