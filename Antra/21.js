function generateSubsets(arr, k) {
    if (k > arr.length) {
      return [];
    }
  
    if (k === arr.length) {
      return [arr];
    }
  
    if (k === 1) {
      return arr.map(function(item) { return [item]; });
    }
  
    var result = [];
    var rest = arr.slice(1);
  
    generateSubsets(rest, k-1).forEach(function(subset) {
      result.push([arr[0]].concat(subset));
    });
  
    generateSubsets(rest, k).forEach(function(subset) {
      result.push(subset);
    });
  
    return result;
  }