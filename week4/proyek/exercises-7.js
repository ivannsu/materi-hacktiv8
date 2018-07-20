function digitPerkalianMinimum(angka) {
  let tabel = []

  if(angka.toString().length < 2) return 2

  for(let i = 0; i < angka; i++) {
    if(angka % i === 0) {    
      let hasilBagi = angka / i
      tabel.push(i.toString() + '' +hasilBagi.toString())
    }
  }
  //console.log(tabel)

  let x = 5;
  for(let i = 0; i < tabel.length; i++) {
    if(x > tabel[i].length) {
      x = tabel[i].length
    }
  }
  return x
}
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2