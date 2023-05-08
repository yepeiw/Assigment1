function longestPalindrome(str) {
    let maxLength = 0;
    let result = '';
  
    // Check every possible substring
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        let substring = str.slice(i, j);
        if (isPalindrome(substring) && substring.length > maxLength) {
          maxLength = substring.length;
          result = substring;
        }
      }
    }
  
    return result;
  }
  
  // Helper function to check if a string is a palindrome
  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }