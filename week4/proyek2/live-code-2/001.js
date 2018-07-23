/**
Reverse Odd
Implementasikan function reverseOdd untuk membalikkan setiap elemen string dengan urutan genap
yang ada di dalamnya.
Contoh:
- input: ['awtian', 'raijin', 'thunderkeg']
  output: ['awtian', 'nijiar', 'thunderkeg']
- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['alisa', 'uyoaix', 'nina', 'ilil']
- input: []
  output: []
Aturan coding:
WAJIB MENYERTAKAN ALGORITHMA ATAU PSEUDOCODE
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/

function reverseOdd (arr) {
  if(arr.length === 0) return arr

  for(let i = 0; i < arr.length; i++) {
    let reversedStr = ''

    if( (i + 1) % 2 === 0 ) {
      for(let j = arr[i].length - 1; j >= 0; j--) {
        reversedStr += arr[i][j]
      }
      arr[i] = reversedStr
    }
  }
  return arr
}

console.log(reverseOdd(['clinkz', 'jahrakal', 'kael']));
// [ 'clinkz', 'lakarhaj', 'kael' ]

console.log(reverseOdd(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// [ 'moonfang', 'edahsthgin', 'lightbringer', 'rywgyrts' ]

console.log(reverseOdd([]));
// []