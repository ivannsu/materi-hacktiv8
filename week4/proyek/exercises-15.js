function changeVocals(str) {
  let alphabet = 'bjvfpBJVFP'
  let vocal = 'aiueoAIUEO'
  let strArr = []

  for(let i = 0; i < str.length; i++) {
    strArr.push(str[i])
  }

  for(let i = 0; i < strArr.length; i++) {
    for(let j = 0; j < vocal.length; j++) {
      if(strArr[i] === vocal[j]) {
        strArr[i] = alphabet[j]   
      }
    }
  }
  return strArr.join('')
}
//console.log(changeVocals('Sergei Dragunov'))

function reverseWord(str) {
  if(str.length === 1) return str
  return str[str.length - 1] + reverseWord(str.slice(0, str.length - 1))
}

function setLowerUpperCase(str) {
  let result = ''
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase()
    } else {
      result += str[i].toUpperCase()
    }
  }
  return result
}

function removeSpaces(str) {
  let arr = str.split(' ').join('')
  return arr
}

function passwordGenerator(name) {
  if(name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'
  return changeVocals(reverseWord(setLowerUpperCase(removeSpaces(name))))
}
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'