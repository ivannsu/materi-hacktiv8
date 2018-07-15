function hitungJumlahKata(kalimat) {
  let getSpace = 0;

  for(let i = 0; i < kalimat.length; i++) {
    if(kalimat[i] === ' ') {
      getSpace++;
    }
  }
  return (kalimat[kalimat.length - 1] !== ' ') ? getSpace + 1 : getSpace;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
