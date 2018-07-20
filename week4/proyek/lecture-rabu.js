// function totalVocal(str) {
//   var vocal = 'AIUEO'

//   return

//   var hurufDepan = str[0]
//   var hurufSisa = str.slice(1)

//   // BASE CASE / LIMIT
//   if(hurufSisa.length === 0) return 0

//   // RECURSIVE
//   for(var i = 0; i < vocal.length; i++) {
//     if(vocal[i] === hurufDepan) return 1 + totalVocal(hurufSisa)
//   }

//   return 0 + totalVocal(hurufSisa)
// }

function test() {
  for(let i = 0; i < 3; i++) {
    if(i === 1) { return }
    console.log('Hello World')
  }
}
test();