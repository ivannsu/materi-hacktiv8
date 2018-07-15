function kelompokkanAngka(arr) {

  let genap = [];
  let ganjil = [];
  let kelipatan = [];
  let results = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 3 === 0) {
      kelipatan.push(arr[i]);
    } else if(arr[i] % 2 === 0) {
      genap.push(arr[i]);
    } else if(arr[i] % 2 !== 0) {
      ganjil.push(arr[i]);
    }
  }

  results.push(genap, ganjil, kelipatan);
  return results;
}

console.log(kelompokkanAngka([2, 4, 6]));
