function vocalTotal(str, index) {
  let vocal = 'aiueo'
  if(index > str.length - 1) return 0;
  for(let i = 0; i < vocal.length; i++) {
    if(str[index] === vocal[i]) {
      return 1 + vocalTotal(str, index += 1)
    }
  }
  return 0 + vocalTotal(str, index += 1)
}
console.log(vocalTotal('victory', 0))
console.log(vocalTotal('aeoui', 0))