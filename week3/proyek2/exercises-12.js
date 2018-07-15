function deretGeometri(arr) {

  let b = arr[1] / arr[0];
  let geometri = arr[0];
  let results = [arr[0]];

  for(let i = 1; i < arr.length; i++) {
    results.push(geometri *= b);
    if(arr[i] !== results[i]) {
      return false;
    }
  }
  return true;

}

// TEST CASES
console.log(deretGeometri([1, 3, 9, 27, 81]));
console.log(deretGeometri([2, 4, 8, 16, 32]));
console.log(deretGeometri([2, 4, 6, 8]));
console.log(deretGeometri([2, 6, 18, 54]));
console.log(deretGeometri([1, 2, 3, 4, 7, 9]));
