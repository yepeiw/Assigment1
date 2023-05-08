function push(array, ...elements) {
    const newLength = array.length + elements.length;
    
    for (let i = array.length, j = 0; i < newLength; i++, j++) {
      array[i] = elements[j];
    }
    
    return newLength;
  }