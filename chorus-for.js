function howManyHundreds(num) {
  var div = num / 100;
  return Math.floor(div);
}

console.log(howManyHundreds(1000), "=?", 10);
