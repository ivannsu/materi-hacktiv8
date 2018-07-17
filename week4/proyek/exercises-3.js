function cariMedian(arr) {
  if(arr.length % 2 === 0) {

    let pos = arr.length / 2;
    let x = arr[pos - 1];
    let y = arr[pos];

    let median = (x + y) / 2;
    return median;

  } else {

    let medianPos = Math.floor(arr.length / 2);
    let median = arr[medianPos];
    return median;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5