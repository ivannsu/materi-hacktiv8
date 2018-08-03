/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: Rp2.000,00
*/

// function reverseStr(str) {
//   let result = '';
//   for(let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }

// function idrFormat(money) {
//   return 'Rp' + money + ',00';
// }

// function formatUang(number) {
//   number = number.toString();

//   let result = '';

//   if(number.length > 6) {
//     for(let i = number.length - 1; i >= 0; i--) {
//       if(i === number.length - 3) {
//         result += number[i] + '.';
//       } else if(i === number.length - 6) {
//         result += number[i] + '.';
//       } else {
//         result += number[i];
//       }
//     }
//   } else if(number.length > 3 && number.length <= 6) {
//     for(let i = number.length - 1; i >= 0; i--) {
//       if(i === number.length - 3) {
//         result += number[i] + '.';
//       } else {
//         result += number[i];
//       }
//     }
//   } else {
//     return idrFormat(number);
//   }
//   return idrFormat(reverseStr(result));
// }

/* Algortima

SIMPAN `nominal` dengan nominal uang
SIMPAN `nominal string` dengan `nominal` di konversi ke tipe data string

*/

function formatUang(nominal) {
  nominal = nominal.toString();
  let result = '';

  if(nominal.length <= 3) {
    result = nominal;
  }
  else if(nominal.length > 6) {
    for(let i = 0; i < nominal.length; i++) {
      if(i === 1 || i === 4) {
        result += '.' + nominal[i];
      } else {
        result += nominal[i];
      }
    }
  } else if(nominal.length < 6 && nominal.length > 3) {
    for(let i = 0; i < nominal.length; i++) {
      if(i === 1) {
        result += '.' + nominal[i];
      } else {
        result += nominal[i];
      }
    }
  } else if(nominal.length >= 6 && nominal.length > 3) {
    for(let i = 0; i < nominal.length; i++) {
      if(i === 3) {
        result += '.' + nominal[i];
      } else {
        result += nominal[i];
      }
    }
  }

  return 'Rp' + result + ',00';
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
