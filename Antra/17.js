function countCharacters(str) {
    var charCount = {};
  
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
  
    return charCount;
  }
  