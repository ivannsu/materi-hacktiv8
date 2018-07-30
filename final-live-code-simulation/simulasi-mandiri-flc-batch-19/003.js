/**
===============
NON PALINDROME
===============

Problem
--------
nonPalindrome adalah sebuah function yang akan menerima satu parameter bertipe string.
Function ini akan mengembalikan array satu dimensi yang berisikan kumpulan kata yang tidak palindrome.

Contoh 1:
input: 'Wow mereka janji bertemu di makam'
output: ['mereka', 'janji', 'bertemu', 'di']

Contoh 2:
input: 'Katak naik honda civic pada malam hari di mimpi Dimitri'
output: ['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']


RULES:
- Tidak boleh menggunakan .reverse(), .join()

**/

function reverse(str) {
  let result = '';
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function nonPalindrome(sentence) {
  sentence = sentence.toLowerCase();
  sentence = sentence.split(' ');

  let palindrome = [];
  let results = [];

  for(let i = 0; i < sentence.length; i++) {
    palindrome.push(reverse(sentence[i]));
  }
  
  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] !== palindrome[i]) results.push(sentence[i]);
  }
  return results;
}

console.log(nonPalindrome('Wow mereka janji bertemu di makam'));
//['mereka', 'janji', 'bertemu', 'di']

console.log(nonPalindrome('Katak naik honda civic pada malam hari di mimpi Dimitri'));
// //['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']

console.log(nonPalindrome('kasurrusak kalo dipisah menjadi kasur rusak'));
// //['kalo', 'dipisah', 'menjadi', 'kasur', 'rusak']
