function changeVocals (str) { // dragunov
  let alphabeth = 'aiueoAIUEO'
  let vocals = 'bjvfpBJVFP'
  let strArr = []

  for(let i = 0; i < str.length; i++) {
    strArr.push(str[i])
  }

  for(let i = 0; i < strArr.length; i++) {
    for(let j = 0; j < alphabeth.length; j++) {
      if(strArr[i] === alphabeth[j]) {
        strArr[i] = vocals[j]
      }
    }
  }
  return strArr.join('')
}
function reverseWord (str) {
  let result = ''
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}
function setLowerUpperCase (str) {
  let changedStr = ''
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i].toUpperCase()) {
      changedStr += str[i].toLowerCase()
    } else {
      changedStr += str[i].toUpperCase()
    }
  }
  return changedStr
}
function removeSpaces (str) {
  let splitStr = str.split(' ')
  return splitStr.join('')
}
function passwordGenerator (name) {
  if(name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'
  return changeVocals(reverseWord(removeSpaces(setLowerUpperCase(name))))
}
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); 
// 'Minimal karakter yang diinputkan adalah 5 karakter'