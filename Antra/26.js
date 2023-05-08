function longestSubstring(str) {
    var maxLength = 0;
    var currentLength = 0;
    var start = 0;
    var map = {};
    
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      if (map[char] !== undefined && map[char] >= start) {
        start = map[char] + 1;
        currentLength = i - start;
      }
      map[char] = i;
      currentLength++;
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
    }
    
    return str.substr(start, maxLength);
  }
  