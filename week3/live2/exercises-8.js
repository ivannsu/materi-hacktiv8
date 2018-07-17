function pasanganTerbesar(num) {

  let index = '9876543210';
  let numStr = String(num);

  for(let i = 0; i < index.length; i++) {
    for(let j = 0; j < numStr.length; j++) {
      if(numStr[j] === index[i]) {
        let result = numStr[j] + numStr[j + 1];
        return Number(result);
      }
    }
  }

}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
