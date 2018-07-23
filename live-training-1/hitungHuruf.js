function hitungHuruf(kata) {
  let splitKata = kata.split(' ')
  let containerHuruf = []
  
  for(let i = 0; i < splitKata.length; i++) {
    // console.log(splitKata[i])
    let obj = {}
    for(let j of splitKata[i]) {
      obj[j] = obj[j] + 1 || 1
    }
    return obj
  }
}
// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
// console.log(hitungHuruf('I am a passionate developer')); // passionate
// console.log(hitungHuruf('aku adalah anak gembala')); // adalah
// console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
// console.log(hitungHuruf('mengayuh perahu di danau')); // danau