function targetTerdekat(arr) {

  getO = 0;
  getX = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 'o') {
      getO = i;
      for(let j = i; j < arr.length; j++) {
        if(arr[j] === 'x') {
          getX = j;
          return getX - getO;
        }
      }
    }
  }

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat([]));
// console.log(targetTerdekat([]));
// console.log(targetTerdekat([]));
// console.log(targetTerdekat([]));
