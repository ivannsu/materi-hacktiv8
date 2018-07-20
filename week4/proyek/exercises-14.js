function sorting(arrNumber) {
  for(let i = 0; i < arrNumber.length; i++) {
    let container = 0
    
    for(let j = i + 1; j < arrNumber.length; j++) {
      if(arrNumber[i] < arrNumber[j]) { // 2 < 8 ?
        // TRUE
        container = arrNumber[i]
        arrNumber[i] = arrNumber[j]
        arrNumber[j] = container
        // FALSE
        // arrNumber[i] = arrNumber[j]
        // arrNumber[j] = arrNumber[i]
      }
    }
  }
  return arrNumber
}

function getTotal(arrNumber) {
  if(arrNumber.length === 0) return arrNumber;

  let counter = 0;
  for(let i = 0; i < arrNumber.length; i++) {
    if(arrNumber[0] === arrNumber[i]) counter += 1
  }
  return counter;
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