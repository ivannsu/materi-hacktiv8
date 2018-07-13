/*
  Output #1:
    Pakai splice(), hapus kemudian tambah (untuk update data)

  Output #2:
    Pakai split(), untuk memisahkan menjadi array, akses secara multidimensi,
    dan pakai switchCase untuk menset variable bulan ke bulan dalam format kata

  Output #3:
    pakai parseInt(), kemudian pakai sort(return angka1 < angka2) untuk sortir
    secara descend. Konversi kembali ke String dengan String(array) dan Konversi ke array lagi dengan split();

  Output #4:
    ambil data bulan pada Output#2 tanpa disortir, kemudian pakai join('-')

  Output #5:
    pakai substr() pada elemen indeks ke 1
*/

/*
  Output:
  [
    "0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung",
    "21/05/1989", "Pria", "SMA Internasional"
  ]
  Mei
  ["1989", "21", "05"]
  21-05-1989
  Roman Alamsyah
*/

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
  // Output #1
  console.log(updateData(input));

  // Output #2
  var date = input[3].split('/');
  var month = monthConverter(date[1]);
  console.log(month);

  // Output #3
  console.log(sortTheDate(date));

  // Output #4
  console.log(date.join('-'));

  // Output #5
  console.log(input[1].substr(0, 15));

}

function updateData(input) {
  input.splice(1, 1, 'Roman Alamsyah Elsharawy');
  input.splice(2, 1, 'Provinsi Bandar Lampung');
  input.splice(4, 0, 'Pria', 'SMA Internasional')

  return input;
}

function sortTheDate(date) {
  var dateInt = [];

  for(var i = 0; i < date.length; i++) {
    dateInt.push(parseInt(date[i]));
  }

  dateInt.sort(function(val1, val2) {
    return val2 > val1;
  });

  return dateInt;
}

function monthConverter(input) {

  var month;

  switch (input) {
    case '01':
      month = 'Januari';
      break;
    case '02':
      month = 'Februari';
      break;
    case '03':
      month = 'Maret';
      break;
    case '04':
      month = 'April';
      break;
    case '05':
      month = 'Mei';
      break;
    case '06':
      month = 'Juni';
      break;
    case '07':
      month = 'Juli';
      break;
    case '08':
      month = 'Agustus';
      break;
    case '09':
      month = 'September';
      break;
    case '10':
      month = 'Oktober';
      break;
    case '11':
      month = 'November';
      break;
    case '12':
      month = 'Desember';
      break;
    default:
      return 'Input bulan salah !';
  }

  return month;
}

dataHandling(input);
