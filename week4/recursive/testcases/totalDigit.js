function totalDigitRekursif(angka) {
  if(angka.length === 0) return 0;
  
  angka = angka.toString();
  let counter = parseInt(angka[angka.length - 1])

  return counter + totalDigitRekursif(angka.slice(0, angka.length - 1));
}
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5