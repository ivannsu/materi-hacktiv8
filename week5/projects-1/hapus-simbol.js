function hapusSimbol(str) {
  let arr = str.match(/[a-z0-9]+/g);
  return arr.join('')
}

// TEST CASES
console.log(hapusSimbol('Test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
