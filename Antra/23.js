function firstNonRepeatChar(str) {
    var charCount = {};
  
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    for (var j = 0; j < str.length; j++) {
      var char = str.charAt(j);
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    return null;
  }