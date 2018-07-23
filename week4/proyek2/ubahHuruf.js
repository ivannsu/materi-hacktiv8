function ubahHuruf(str) {
  let alphabeth = 'abcdefghijklmnopqrstuwxyz'
  let result = ''

  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < alphabeth.length; j++) {
      if(str[i] === alphabeth[j]) {
        result += alphabeth[j + 1]
      }
    }
  }
  return result
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu