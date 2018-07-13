/**
  Output:
  [
    "0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung",
    "21/05/1989", "Pria", "SMA Internasional
  ]
  Mei
  ["1989", "21", "05"]
  21-05-1989
  Roman Alamsyah
*/

/**
  - Output #1:
      Array.splice()

    - Output #2:
      input[i].split('/'), switchCase

    - Output #3:
      parseInt(input[i].split('/')), array.sort()

    - Output #4:
      input[i].split('/'), array.join('-')

    - Output #5:
      input[i].substr()
 */

function updateData(input) {
  input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
  input.splice(4, 0, 'Pria', 'SMA Internasional');

  return input;
}

function monthConverter(month) {
  var result;

  switch (month) {
    case '01':
      result = 'Januari';
      break;
    case '02':
      result = 'Februari';
      break;
    case '03':
      result = 'Maret';
      break;
    case '04':
      result = 'April';
      break;
    case '05':
      result = 'Mei';
      break;
    case '06':
      result = 'Juni';
      break;
    case '07':
      result = 'Juli';
      break;
    case '08':
      result = 'Agustus';
      break;
    case '09':
      result = 'September';
      break;
    case '10':
      result = 'Oktober';
      break;
    case '11':
      result = 'November';
      break;
    case '12':
      result = 'Desember';
      break;
    default:
      return 'Input bulan salah';
  }
  return result;
}

function sortTheMonth(date) {
  var result = [];

  for(var i = 0; i < date.length; i++) {
    result.push(parseInt(date[i]));
  }
  result.sort(function(val1, val2) {
    return val2 > val1;
  });
  return result;
}

function dataHandling(input) {
  // Output #1
  console.log(updateData(input));

  // Output #2
  var date = input[3].split('/');
  console.log(monthConverter(date[1]));

  // Output #3
  console.log(sortTheMonth(date));

  // Output #4
  console.log(date.join('-'));

  // Output #5
  console.log(input[1].substr(0, 15));
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling(input);
