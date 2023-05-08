function generateRandomString(n) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var result = "";
  
    for (var i = 0; i < n; i++) {
      var randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
  
    return result;
  }
  