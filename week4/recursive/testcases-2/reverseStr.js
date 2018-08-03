/**
 * RULES
 * 
 * Gunakan Recursive dalam kasus ini
 */

function reverseStr(str) {
  if(str.length === 1) return str;
  return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1));
}

console.log(reverseStr('hello world!'));
console.log(reverseStr('ivan'));
console.log(reverseStr('k4t4 4l4y'));