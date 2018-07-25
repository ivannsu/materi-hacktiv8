function cariPelaku(str) {
  // return str.match(/abc/g).length;
  let regex = new RegExp(/abc/, 'g');
  return str.match(regex);
}
// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2