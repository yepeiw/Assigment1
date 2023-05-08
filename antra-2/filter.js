function filter(array, predicate) {
    const filteredArray = [];
    
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        filteredArray.push(array[i]);
      }
    }
    
    return filteredArray;
  }
  