function every(array, predicate) {
    for (let i = 0; i < array.length; i++) {
      if (!predicate(array[i], i, array)) {
        return false;
      }
    }
    
    return true;
  }