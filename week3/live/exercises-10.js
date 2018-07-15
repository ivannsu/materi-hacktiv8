function perkalianUnik(arr) {

  let results = [];

  for(i = 0; i < arr.length; i++) {

    let calculate = 1;

    for(j = 0; j < arr.length; j++) {
      if(j !== i) {
        calculate *= arr[j];
      }
    }
    results.push(calculate);
  }
  return results;
}

console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
// console.log(perkalianUnik([]));
// console.log(perkalianUnik([]));
// console.log(perkalianUnik([]));
// console.log(perkalianUnik([]));
