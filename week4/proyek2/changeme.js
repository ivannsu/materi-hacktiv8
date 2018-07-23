function changeMe(arr) {
  let results = []
  let keyName = ['firstName', 'lastName', 'gender', 'age']
  
  for(let i = 0; i < arr.length; i++) {
    let obj = {}

    for(let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j])
      obj[keyName[j]] = arr[i][j]
    }
    if(obj.age !== undefined) {
      obj.age = new Date().getFullYear() - obj.age
    } else {
      obj.age = 'Invalid Birth Year'
    }
    results.push(obj)
  }
  // console.log(results)
  for(let i = 0; i < results.length; i++) {
    console.log( (i + 1) + '. ' +results[i].firstName+ ' ' + results[i].lastName + ' :')
    console.log(results[i])
  }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);