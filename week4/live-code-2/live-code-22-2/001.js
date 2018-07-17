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

function genap(input) {
  return ( (input + 1) % 2 === 0 ) ? true : false;
}

function reverse(input) {
  let str = '';
  for(let i = input.length - 1; i >= 0; i--) {
    str += input[i];
  }
  return str;
}

function reverseOdd (arr) {
  
  if(arr.length === 0) {return arr;}

  for(let i = 0; i < arr.length; i++) {
    if(genap(i)) {
      arr[i] = reverse(arr[i]);
      return arr;
    }
  }
}

console.log(reverseOdd(['clinkz', 'jahrakal', 'kael']));
// [ 'clinkz', 'lakarhaj', 'kael' ]

console.log(reverseOdd(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// [ 'moonfang', 'edahsthgin', 'lightbringer', 'rywgyrts' ]

console.log(reverseOdd([]));
// []
