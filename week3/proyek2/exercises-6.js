function angkaPalindrome(num) {

  if(num < 10) {
    if(num + 1 !== 10) {
      return num + 1;
    }
  }

  let numStr = String(num);
  let reverseStr = '';

  for(let i = numStr.length - 1; i >= 0 ; i--) {
    reverseStr += numStr[i];
  }
  return (numStr === reverseStr) ? Number(numStr) : angkaPalindrome(num + 1);

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
