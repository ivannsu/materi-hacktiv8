function deretAritmatika(arr) {

  let b = arr[1] - arr[0];
  let deret = arr[0];
  let results = [arr[0]];

  for(let i = 1; i < arr.length; i++) {
    results.push(deret += b);
    if(results[i] !== arr[i]) {
      return false;
    }
  }
  return true;
}

//  TEST CASES
console.log(deretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(deretAritmatika([2, 4, 6, 12, 24])); // false
console.log(deretAritmatika([2, 4, 6, 8])); // true
console.log(deretAritmatika([2, 6, 18, 54])); // false
console.log(deretAritmatika([1, 2, 3, 4, 7, 9])); // false
