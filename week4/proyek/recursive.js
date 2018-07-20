function recBalikKata(str) {
  if(str.length === 0) return ''
  return str[str.length - 1] + recBalikKata(str.slice(0, str.length - 1))
}
console.log(recBalikKata('budi'))

/*

return i + recBalikKata('bud')
return i + d + recBalikKata('bu)
return i + d + u + recBalikKata('b')
return i + d + u + name
return i + d + u + b

*/

// function recBalikKata(str) {
//   if(str.length === 0) return ''
//   return str[str.length - 1] + recBalikKata(str.slice(0, name.length - 1))
// } 
// console.log(recBalikKata('budi'))

// return  'i' + recBalikKata(str)
//         'd' + recBalikKata(str)
//         'u' + recBalikKata(str)
//         'b' + recBalikKata('')

// function range(startNum, endNum) {
//   if(endNum - startNum === 2) return [startNum + 1]

//   let list = range(startNum, endNum - 1)
//   console.log(list, '==> sebelum dipush')
//   list.push(endNum - 1)
//   console.log(list)
//   return list
// }
// console.log(range(2, 9)); // [3, 4, 5, 6, 7, 8]

// function repeatString(string, count) {
//   if(string == null || count < 0 || count === Infinity || count == null) {
//     return 'Error in string or count'
//   }
//   count  = count || 0
//   console.log(new Array())
//   console.log(new Array(count + 1))
//   console.log(count + 1)
//   //return new Array(count + 1).join(string)
// }
// console.log(repeatString('a', 3))