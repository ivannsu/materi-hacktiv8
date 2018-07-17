function cariModus(arr) {

  // Counter dijalankan
  let newArr = arr;
  let results = [];

  for(let i = 0; i < arr.length; i++) {
    
    let count = 0;
    let countArr = [];

    for(let j = 0; j < arr.length; j++) {
      if(arr[i] === newArr[j]) {
        count++;
      }
    }
    countArr.push(arr[i], count);
    results.push(countArr);
  }

  // Cek apakah data hanya memiliki satu nilai ATAU counter hanya bernilai 1
  let oneCounter = true;
  let oneValue = true;

  for(let i = 0; i < arr.length; i++) {
    if(results[i][1] !== 1) {
      oneCounter = false;
    }

    if(results[i][0] !== results[0][0]) {
      oneValue = false;
    }
  }
  if(oneCounter === true || oneValue === true) {
    return -1;
  }

  // Dapatkan counter dengan nilai terbesar
  let index = '987654321';

  for(let i = 0; i < index.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if( Number(index[i]) === results[j][1] ) {
        return results[j][0];
      }
    }
  }
  
}
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1