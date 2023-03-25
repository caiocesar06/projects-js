/**
 * @param {Array<number>} array
 * @returns {Array<number>}
 */
function findMaxAnd2nd(array) {
  const max = Math.max(...array);
  const secMax = Math.max(...array.filter((value) => value != max));

  return [max, secMax];
}

console.log(findMaxAnd2nd([5, 2, 3, 99, 17, 4, 9, 11, 23, 1]));