function generateContinuousCombinations(str) {
    var results = [];
  
    for (var i = 0; i < str.length; i++) {
      for (var j = i + 1; j <= str.length; j++) {
        results.push(str.slice(i, j));
      }
    }
  
    return results;
  }