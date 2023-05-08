function reduce(array, reducer, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    
    for (let i = 0; i < array.length; i++) {
      if (accumulator === undefined) {
        accumulator = array[i];
      } else {
        accumulator = reducer(accumulator, array[i], i, array);
      }
    }
    
    return accumulator;
  }