function kaliTerusRekursif(angka) {
  angka = angka.toString();
  if(angka.length === 1) return parseInt(angka);
  
  let calculate = 1;
  for(let i = 0; i < angka.length; i++) {
    calculate *= parseInt(angka[i]);
  }
  return kaliTerusRekursif(calculate);
}
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6