function sorting(arrNum) {
  for(let i = 0; i < arrNum.length; i++) {
    let container = 0
    for(let j = i + 1; j < arrNum.length; j++) {
      if(arrNum[i] < arrNum[j]) { // 2 < 8 ?
        // TRUE
        container = arrNum[i]
        arrNum[i] = arrNum[j]
        arrNum[j] = container

        // FALSE
        // arrNum[i] = arrNum[j]
        // arrNum[j] = arrNum[i]
      }
    }
  }
  return arrNum
}
//console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]))

// function sorting(arrNum) {

//   for(let i = 0; i < arrNum.length; i++) {
//     let tampung = 0;
//     for(let j = i + 1; j < arrNum.length; j++) {
//       if(arrNum[i] < arrNum[j]) {
//         tampung = arrNum[i]; // 8
//         arrNum[i] = arrNum[j]; // 
//         arrNum[j] = tampung;
//       }
//     }
//   }
//   return arrNum
// }