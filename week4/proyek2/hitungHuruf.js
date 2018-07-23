function hitungHuruf(str) {
  let splitStr = str.split(' ')
  let arrStrObj = []
  let max = 0

  for(let i = 0; i < splitStr.length; i++) {
    let obj = {}
    for(let j of splitStr[i]) {
      obj[j] = obj[j] + 1 || 1
    }
    arrStrObj.push(obj)
  }

  for(let i = 3; i < arrStrObj.length; i++) {
    let counter = 0
    for(let j in arrStrObj[i]) {
      if(arrStrObj[i][j] > 1) {
        counter += arrStrObj[i][j]
      }
    }
    if(counter > max) {
      max = counter
      result = splitStr[i]
    }
  }
  return result
}

console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
// console.log(hitungHuruf('I am a passionate developer')); // passionate
// console.log(hitungHuruf('aku adalah anak gembala')); // adalah
// console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
// console.log(hitungHuruf('mengayuh perahu di danau')); // danau