function some(array, predicate) {
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        return true;
      }
    }
    
    return false;
  }