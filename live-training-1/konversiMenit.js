function konversiMenit(menit) {
  let minute = 0
  let hour = 0

  if(menit % 60 !== 0) {

    minute = menit % 60
    if(minute < 10) minute = '0' + minute
    hour = Math.floor(menit / 60)
    return hour + ':' + minute
  } else if(menit % 60 === 0) {

    hour = menit / 60
    if(minute < 10) minute = '0' + minute
    return hour + ':' + minute
  }
}

console.log(konversiMenit(63)) // 1:03
console.log(konversiMenit(124)) // 2:04
console.log(konversiMenit(53)) // 0:53
console.log(konversiMenit(88)) // 1:28
console.log(konversiMenit(120)) // 2:00