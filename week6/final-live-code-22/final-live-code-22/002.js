/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/

/*

SIMPAN `sentence` dengan kalimat
SIMPAN `words` dengan kata yang ingin di sensor
SIMPAN `words length` dengan panjang karakter `words`
SIMPAN `min` tanpa nilai
SIMPAN `hasil` tanpa nilai

1.Loop `sentence` dan cek satu persatu huruf nya jika sama dengan
  huruf pertama `words` maka simpan ke dalam variable `min`
  Setelah disimpan keluar dari looping
2.Loop `sentence`
  2a. Jika indeks looping LEBIH BESAR atau SAMA DENGAN indeks looping
        DAN
      indeks looping LEBIH KECIL DARI `min` ditambah `words length`
      MAKA
        `hasil` ditambah dengan karakter '*'
  2b. Selain dari itu     
      `hasil` ditambah dengan karakter dari variabel `sentence` indeks ke i
3. TAMPILKAN `hasil`
*/

function sensorSentence ( sentence, words ) {
  if(sentence === '' && words === '') return '';

  let min;
  let result = '';

  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] === words[0]) {
      min = i;
      break;
    }
  }

  for(let i = 0; i < sentence.length; i++) {
    if(i >= min && i < (min + words.length)) {
      result += '*';
    } else {
      result += sentence[i];
    }
  }
  return result;
}

console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence('', '')) // ''
