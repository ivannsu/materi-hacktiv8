function targetTerdekat(arr) {

  let getO = 0;
  let getX = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 'x') {
      getX++;
    }
  }
  if(getX === 0) {
    return 0;
  } else {
    getX = 0;
  }

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 'o') {
      getO = i;
    } else if(arr[i] === 'x') {
      getX = i;
      return getX - getO;
    }
  }

}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
