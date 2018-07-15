// function createAsterisk(rows) {
//   for(let i = 0; i < rows; i++) {
//     console.log('*');
//   }
// }

function createAsterisk(rows) {
  for(let i = rows; i > 0; i--) {
    let result = '';
    for(let j = i; j > 0; j--) {
      result += j;
    }
    console.log(result);
  }
}

createAsterisk(5);
