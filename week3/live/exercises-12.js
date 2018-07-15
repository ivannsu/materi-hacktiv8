function deretGeometri(arr) {
  let b = arr[1] / arr[0];
  let geometriVal = arr[0];
  let geometri = [arr[0]];

  for(let i = 1; i < arr.length; i++) {
    geometri.push(geometriVal *= b);
    if(geometri[i] !== arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(deretGeometri([1, 3, 9, 27, 81]));
