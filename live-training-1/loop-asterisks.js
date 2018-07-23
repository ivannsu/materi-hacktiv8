function asterisks1(rows) {
  for(let i = 0; i < rows; i++) {
    console.log('*')
  }
}
// asterisks1(5)

function asterisks2(rows) {
  for(let i = 0; i < rows; i++) {
    let result = ''
    for(let j = 0; j < rows; j++) {
      result += '*'
    }
    console.log(result)
  }
}
// asterisks2(5)

function asterisks3(rows) {
  let result = ''
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < rows; j++) {
      result += '*'
    }
    console.log(result)
  }
}
asterisks3(3)

/*

    *
    * *
    * * *
    
    * * *
    * *
    *
    
    * * * 
    * * * * * *
    * * * * * * * * *

*/