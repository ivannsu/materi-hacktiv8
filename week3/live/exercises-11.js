function deretAritmatika(arr) {

  let b = arr[1] - arr[0];
  let deretVal = arr[0];
  let deret = [arr[0]];

  for(let i = 1; i < arr.length; i++) {
    deret.push(deretVal += b);
    if(arr[i] !== deret[i]) {
      return false;
    }
  }
  return true;
}

console.log(deretAritmatika([1, 2, 3, 4, 5, 6])); // true
