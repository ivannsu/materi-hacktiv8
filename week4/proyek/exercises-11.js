function changeMe(arr) {

  let results = [];
  let keyName = ['firstName', 'lastName', 'gender', 'age'];
  
  if(arr.length === 0) {console.log(arr)};

  for(let i = 0; i < arr.length; i++) {
    
    let obj = {};
    
    if(arr[i][3] !== undefined) {
      arr[i][3] = new Date().getFullYear() - arr[i][3];
    } else {
      arr[i][3] = 'Invalid Birth Year';
    }

    for(let j = 0; j < 4; j++) {
      obj[keyName[j]] = arr[i][j];
    }
    results.push(obj);
  }
  
  for(let i = 0; i < results.length; i++) {
    console.log((i + 1) + '. ' + results[i].firstName + results[i].lastName +':');
    console.log(results[i]);
  }
}

// TEST CASES
changeMe([ ['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male'] ]);
changeMe([]);