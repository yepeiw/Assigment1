function countVowels(str) {
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      if (vowels.indexOf(char.toLowerCase()) !== -1) {
        count++;
      }
    }
  
    return count;
  }