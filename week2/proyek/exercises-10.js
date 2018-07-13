function bandingkanAngka(angka1, angka2) {
  var angka1 = parseFloat(angka1);
  var angka2 = parseFloat(angka2);

  if(angka2 > angka1) {
    return true;
  } else if(angka2 === angka1) {
    return false;
  } else {
    return -1;
  }
}

console.log(bandingkanAngka(5, 4));
