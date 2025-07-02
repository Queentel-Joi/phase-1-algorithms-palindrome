function isPalindrome(word) {
  // Reverse the word and compare with original
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

module.exports = isPalindrome;

