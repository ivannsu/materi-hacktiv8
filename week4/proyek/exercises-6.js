function hitungHuruf(kata) {
  let word = kata.split(' ')
  let wordResults = []
  let maxcount = 0
  let result = ''

  for(let i = 0; i < word.length; i++) {
    let charCounter = []
    for(let j of word[i]) {
      charCounter[j] = charCounter[j] + 1 || 1
    }
    wordResults.push(charCounter)
  }
  // console.log(wordResults)

  for(let i = 0; i < wordResults.length; i++) {
    let counter = 0
    for(let j in wordResults[i]) {
      if(wordResults[i][j] > 1) counter += wordResults[i][j]
    }
    if(counter > maxcount) {
      maxcount = counter
      result = word[i]
    }
  }
  return result
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau