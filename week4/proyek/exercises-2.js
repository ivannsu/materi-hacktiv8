function fpb(num1, num2) {
  let greaterNum = (num1 > num2) ? num1 : num2
  for(let i = greaterNum; i >= 1; i--) {
    if(num1 % i == 0 && num2 % i == 0) {
      return i
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1