function computePower(base, exponent) {
    if (exponent < 0) {
      base = 1 / base;
      exponent = -exponent;
    }
  
    var result = 1;
    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result *= base;
      }
      base *= base;
      exponent = Math.floor(exponent / 2);
    }
    return result;
  }