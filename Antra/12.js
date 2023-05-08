function isPerfect(number) {
    var divisors = [];
  
    for (var i = 1; i < number; i++) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }
  
    var sumOfDivisors = divisors.reduce(function (a, b) {
      return a + b;
    }, 0);
  
    return sumOfDivisors === number;
  }