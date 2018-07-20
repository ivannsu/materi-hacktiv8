function totalDigitRekursif(angka) {
  let angkaStr = angka.toString()
  let firstValue = parseInt(angkaStr[angkaStr.length - 1])
  if(angkaStr.length === 0) return 0
  return firstValue + totalDigitRekursif(angkaStr.slice(0, angkaStr.length - 1))
}
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5