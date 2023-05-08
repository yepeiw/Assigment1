function extractUniqueChars(str) {
    var charSet = new Set();
  
    for (var i = 0; i < str.length; i++) {
      charSet.add(str[i]);
    }
   res=Array.from(charSet)
    return res.join('');
  }