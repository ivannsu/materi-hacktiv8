function groupAnimals(animals) {

  let alphabeth = 'abcdefghijklmnopqrstuvwxyz'
  let results = []

  for(let i = 0; i < alphabeth.length; i++) {
    let group = []
    for(let j = 0; j < animals.length; j++) {
      if(alphabeth[i] === animals[j][0]) {
        group.push(animals[j])
      }
    }
    if(group.length !== 0) results.push(group)
  }
  return results
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]