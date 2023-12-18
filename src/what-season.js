const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  if (new Date(date).toString() === 'Invalid Date'){
    throw new Error('Invalid date!');
  }
  try {
    if (isNaN(date)) {
      throw new Error('Invalid date!');
    }
  } catch (error) {
    throw new Error('Invalid date!');
  }

  const seasons = ['spring', 'summer', 'autumn', 'winter'];
  const seasonNumbers = [3, 3, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3];
  return seasons[seasonNumbers[date.getMonth()]];
}

module.exports = {
  getSeason
};
