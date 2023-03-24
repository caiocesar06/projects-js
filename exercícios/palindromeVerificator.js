/**
 * @param {string} text 
 * @returns {boolean}
 */
function isPalindrome(text) {
  const cleanText = text.trim().toLowerCase().replace(/[\W_]/g, '');
  const reverseText = cleanText.split('').reverse().join('');

  return cleanText == reverseText;
}

console.log(isPalindrome('desenvolvedor'));
console.log(isPalindrome('race car'));
console.log(isPalindrome('subi no onibus'));
console.log(isPalindrome('A man, a plan, a canal. Panama'));
