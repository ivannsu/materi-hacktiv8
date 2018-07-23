/**
 * [
 *    [10: 1, 4: 2, 5: 1, 2: 1, 4: 2]
 * ]
 * 
 */

function modus(arr) {
  let obj = {}
  let x = 1
  let xKey
  let oneValue = true

  for(let i of arr) {
    obj[i] = obj[i] + 1 || 1
  }
  // console.log(obj)
  for(let i in obj) {
    if(obj[i] > x) {
      x = obj[i]
      xKey = i
    }
    if(obj[i] !== x) oneValue = false
  }
  if(xKey === undefined || oneValue === true) return -1
  return parseInt(xKey)
}

console.log(modus([10, 4, 5, 2, 4])); // 4
console.log(modus([5, 10, 10, 6, 5])); // 5
console.log(modus([10, 3, 1, 2, 5])); // -1
console.log(modus([1, 2, 3, 3, 4, 5])); // 3
console.log(modus([7, 7, 7, 7, 7])); // -1