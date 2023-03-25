/**
 * @param {number} initialNumber
 * @param {number} finalNumber
 * @returns {number}
 */
function pairCounter(initialNumber, finalNumber) {
  let acm = 0;
  for (let i = initialNumber; i <= finalNumber; i++) {
    if (i % 2 == 0) 
      acm += i;
  }
  return acm;
}
console.log(pairCounter(2, 7));