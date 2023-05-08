function isPalindrome(str) {
    var cleanedStr = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
    var strArray = cleanedStr.split('');
    var reversedArray = strArray.reverse();
    var reversedStr = reversedArray.join('');
    return cleanedStr === reversedStr;
  }