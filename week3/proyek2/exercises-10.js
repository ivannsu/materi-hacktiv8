function perkalianUnik(arr) {
  let results = [];

  for(let i = 0; i < arr.length; i++) {
    let calculate = 1;

    for(let j = 0; j < arr.length; j++) {
      if(j !== i) {
        calculate *= arr[j];
      }
    }
    results.push(calculate);
  }
  return results;
}

console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5]));
console.log(perkalianUnik([1, 4, 3, 2, 5]));
console.log(perkalianUnik([1, 3, 3, 1]));
console.log(perkalianUnik([2, 1, 8, 10, 2]));
