// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus kelipatan 3. berurut sebagai berikut:
contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *
contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @
contoh 3 (drawThreeColsBox(1)):
@
Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)

function drawSymbolicColsBox(num) {

  let counter = 1;

  for(let i = 0; i < num; i++) {
    let pattern = '';
    for(let j = 0; j < num; j++) {
      if(counter % 3 === 0) {
        pattern += '* ';
      } else if(counter % 2 === 0) {
        pattern += '$ ';
      } else if(counter % 2 !== 0) {
        pattern += '@ ';
      }
      counter++;
    }
    console.log(pattern);
  }

}

// drawSymbolicColsBox(5);
// drawSymbolicColsBox(1);
drawSymbolicColsBox(3);
