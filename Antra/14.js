function convertToCoins(amount, coins) {
    coins.sort(function(a, b) { return b - a; });
  
    var result = [];
    var i = 0;
  
    while (amount > 0 && i < coins.length) {
      if (amount >= coins[i]) {
        result.push(coins[i]);
        amount -= coins[i];
      } else {
        i++;
      }
    }
  
    if (amount > 0) {
      return "Cannot convert the amount using the available coins";
    } else {
      return result;
    }
  }
  