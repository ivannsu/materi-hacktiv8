function digitPerkalianMinimum(angka) {
  let resultsTable = []
  let min = 9999

  for(let i = 1; i <= angka; i++) {
    if(angka % i === 0) {
      let str = '' + i + angka / i
      resultsTable.push(str)
    }
  }
  // return resultsTable
  for(let i = 0; i < resultsTable.length; i++) {
    if(resultsTable[i].length < min) {
      min = resultsTable[i].length
    }
  }
  return min  
}
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2