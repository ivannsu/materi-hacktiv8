function isBigEnough(value) {
  return value >= 10;
}

let arr = [12, 5, 8, 130, 44];

let filteredBig = arr.filter(isBigEnough);
console.log(filteredBig);

let filteredSmall = arr.filter(function(value) {
  return value < 10;
});
console.log(filteredSmall);