/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
*/

function getWord(input) {
  let word = ''
  for(let i = 0; i < 4; i++) {
    word += input[i]
  }
  return (word === 'ikan') ? true : false
}

function fishFilter(students) {
  let results = []
  let resultStr = ''
  
  for(let i = 0; i < students.length; i++) {
    if(getWord(students[i])) {
      results.push(students[i])
    }
  }

  if(results.length === 0) return 'Tidak ada data'

  for(let i = 0; i < results.length; i++) {
    if(i === results.length - 1) {
      resultStr += 'dan ' + results[i]
    } else {
      resultStr += results[i] + ', '
    }
  }
  return resultStr
}

// TEST CASES
console.log(fishFilter(['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng'])); 
// ikan indosiar, dan ikan bandeng
console.log(fishFilter(['gurita', 'ikan kerapu', 'ikan hiu'])); 
// ikan kerapu, dan Ikan hiu
console.log(fishFilter(['bintang laut', 'spongebob', 'patrick', 'ikan paus', 'ikan hiu', 'ikan tongkol'])); 
// ikan paus, ikan hiu, dan ikan tongkol
console.log(fishFilter(['gurita', 'udang'])); // tidak ada data