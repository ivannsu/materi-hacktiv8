/*

  hint: looping dengan penambahan counter +2

  STORE `counter` with 2 value
  STORE `maxnumber` with 20

  DISPLAY 'LOOPING PERTAMA'

  WHILE `counter` LESS or EQUAL THAN `maxnumber` DO
    DISPLAY ' `counter` - I love Coding '
    SET `counter` = `counter` + 2
  END WHILE

 */

 // var counter = 2;
 // var maxnumber = 20;
 //
 // console.log('LOOPING PERTAMA');
 //
 // while(counter <= maxnumber) {
 //   console.log(counter + ' - I love Coding');
 //   counter += 2;
 // }

/*
  Hint: looping dengan pengurangan counter sebesar 2

  STORE `counter` with 20
  STORE `maxnumber` with 2

  DISPLAY 'LOOPING KEDUA'

  WHILE `counter` GREATER or EQUAL THAN `maxnumber` do
    DISPLAY ' `counter` - I will become Full Stack Web Developer'
    SET `maxnumber` with `maxnumber` - 2
  ENDWHILE

 */

// var counter = 20;
// var maxnumber = 2;
//
// console.log('LOOPING KEDUA');
//
// while(counter >= maxnumber) {
//   console.log(counter + ' - I will become Full Stack Web Developer');
//   counter -= 2;
// }

// console.log('LOOPING PERTAMA');
// for(var i = 1; i <= 20; i++) {
//   console.log(i + ' - I love Coding');
// }

// console.log('LOOPING KEDUA');
// for(var j = 20; j >= 1; j--) {
//   console.log(j + ' - I will become Full Stack Web Developer');
// }

var counter = 1;
var maxNumber = 100;

while(counter <= maxNumber) {
  if(counter % 2 === 0) {
    console.log(counter + ' - GENAP');
  } else {
    console.log(counter + ' - GANJIL');
  }
  counter++;
}
