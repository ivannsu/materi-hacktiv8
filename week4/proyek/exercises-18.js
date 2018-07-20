function kaliTerusRekursif(angka) {
  let angkaStr = angka.toString()
  let result = 1
  for(let i = 0; i < angkaStr.length; i++) {
    // console.log(parseInt(angkaStr[i]), '<== ')
    result *= parseInt(angkaStr[i])
  }
  if(result.toString().length === 1) return parseInt(result)
  return kaliTerusRekursif(result)
}
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6