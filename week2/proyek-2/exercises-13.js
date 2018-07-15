function xo(str) {

  getX = 0;
  getO = 0;

  for(let i = 0; i < str.length; i++) {
    if(str[i] === 'x') {
      getX++;
    } else if(str[i] === 'o') {
      getO++;
    } else {
      return false;
    }
  }
  return (getX === getO) ? true : false;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
