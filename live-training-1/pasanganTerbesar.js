function pasanganTerbesar(num) {
  let numStr = num.toString()
  let numArr = []

  for(let i = 0; i < numStr.length; i++) {
    if(i !== numStr.length - 1) {
      numArr.push(parseInt(numStr[i] + numStr[i + 1]))
    }
  }

  for(let i = 0; i < numArr.length; i++) {
    let x = 0
    for(let j = i + 1; j < numArr.length; j++) {
      if(numArr[j] > numArr[i]) {
        x = numArr[i]
        numArr[i] = numArr[j]
        numArr[j] = x
      }
    }
  }
  return numArr[0]
}

console.log(pasanganTerbesar(641573)); // 73 (64, 41, 15, 57, 73)
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99