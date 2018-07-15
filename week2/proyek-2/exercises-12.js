function konversiMenit(menit) {

  if(menit < 60) {
    if(menit < 10) {
      return '00:0' + menit;
    }
    return '00:' + menit;
  }

  if(menit % 60 === 0) {
    let hour = menit / 60;

    if(hour < 10) {
      hour = '0' + hour;
    }
    return hour + ':00';
  } else {
    let hour = Math.floor(menit / 60);
    let minute = menit % 60;

    if(hour < 10) {
      hour = '0' + hour;
    }
    if(minute < 10) {
      minute = '0' + minute;
    }
    return hour + ':' + minute;
  }

}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
