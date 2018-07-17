function konversiMenit(menit) {

  if(menit < 60) {
    return '0:' + menit;
  }

  if(menit % 60 === 0) {
    return menit / 60 + ':00';
  } else if(menit % 60 !== 0) {
    let hour = Math.floor(menit / 60);
    let minute = menit % 60;
    return hour + ':' + minute;
  }

}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
