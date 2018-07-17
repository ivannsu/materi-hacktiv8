function checkAB(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== ' ') {
      newStr += str[i];
    }
  }

  for(let i = 0; i < newStr.length; i++) {
    if(newStr[i] === 'a') {
      if(newStr[i + 2] === 'b') {
        return true;
      } else if(newStr[i + 3] !== 'b') {
        return false;
      }
    }
  }
  return true;
}
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false