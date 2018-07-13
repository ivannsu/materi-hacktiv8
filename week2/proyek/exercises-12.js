/*
  - contoh input 63
  - 63 dibagi 60, sisa pembagian nya adalah menit dan hasil pembagian nya dibulatkan kebawah
  adalah jam
  - Jika sisa pembagian nya 0 maka jam nya tepat

  STORE `input` with minutes
  STORE `menit` without value
  STORE `jam` without value
  STORE `result` without value

  IF `input` % 60 EQUAL with 0
    SET `jam` with `input` / 60
    SET `result` with ' `jam` : 00'

  ELSE
    SET `jam` with FLOOR `input` / 60
    SET `menit` with `input` % 0
  ENDIF

 */

function konversiMenit(menit) {
  var jam;
  var menit;
  var result;

  if(menit % 60 === 0) {

    jam = menit / 60;
    if(jam < 10) {
      jam = '0' + jam;
    }

    result = jam + ':00';
    return result;

  } else if(menit % 60 !== 0 && typeof menit === 'number') {

    jam = Math.floor(menit / 60);
    menit = menit % 60;

    if(jam < 10) {
      jam = '0' + jam;
    }
    if(menit < 10) {
      menit = '0' + menit;
    }

    result = jam + ':' + menit;
    return result;

  } else {
    return 'Input bukan menit';
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
