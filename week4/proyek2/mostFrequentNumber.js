function sorting(arrNumber) {
  for(let i = 0; i < arrNumber.length; i++) {
    let x;
    for(let j = i + 1; j < arrNumber.length; j++) {
      if(arrNumber[i] < arrNumber[j]) {
        x = arrNumber[i]
        arrNumber[i] = arrNumber[j]
        arrNumber[j] = x
      }
    }
  }
  return arrNumber
}
function getTotal(arrNumber) {
  if(arrNumber.length === 0) return arrNumber
  let counter = 0
  for(let i = 0; i < arrNumber.length; i++) {
    if(arrNumber[i] === arrNumber[0]) {
      counter++
    }
  }
  return 'Angka paling besar adalah ' +arrNumber[0]+ ' dan jumlah kemunculan sebanyak ' +counter+ ' kali.'
}
function mostFrequentLargestNumbers(arrNumber) {
  let listSort = sorting(arrNumber);
  let countHighest = getTotal(listSort);
  return countHighest;
}
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
console.log(mostFrequentLargestNumbers([]));
//''