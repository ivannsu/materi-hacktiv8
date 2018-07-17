function angkaPalindrome(num) {
  let numStr = String(num);
  let reverseNum = '';

  if(num < 9) {
    return num + 1;
  }

  for(let i = numStr.length - 1; i >= 0; i--) {
    reverseNum += numStr[i];
  }

  return (numStr === reverseNum) ? num : angkaPalindrome(num + 1);
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
