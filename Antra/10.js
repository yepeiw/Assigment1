function identityMatrix(n) {
    var matrix = [];
  
    for (var i = 0; i < n; i++) {
      var row = [];
      for (var j = 0; j < n; j++) {
        row.push(i === j ? 1 : 0);
      }
      matrix.push(row);
    }
  
    return matrix;
  }