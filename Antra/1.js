function reverseNumber(num) {
    
    var numArray = num.toString().split(''); 
    var reversedArray = numArray.reverse();
    var reversedNum = parseInt(reversedArray.join(''));
    return reversedNum;
  }