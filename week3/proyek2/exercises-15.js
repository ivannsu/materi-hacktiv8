function groupAnimals(animals) {

  let abjad = 'abcdefghijklmnopqrstuvwyz';
  let results = [];

  for(let i = 0; i < abjad.length; i++) {
    let obj = [];

    for(let j = 0; j < animals.length; j++) {
      if(animals[j][0] === abjad[i]) {
        obj.push(animals[j]);
      }
    }
    if(obj.length !== 0) { results.push(obj); }
  }

  return results;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam','kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam','kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
