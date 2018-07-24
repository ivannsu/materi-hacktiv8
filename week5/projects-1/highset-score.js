function highestScore (students) {
  if(students.length === 0) return students
  
  let obj = {} // { foxes: 2, wolves: 2 }

  for(let i = 0; i < students.length; i++) {
    for(let j in students[i]) {
      // console.log(j, students[i][j]) // name Dimitri, score 90, class foxes
      if(j === 'class') {
        obj[students[i][j]] = [] 
      }      
    }
  }

  for(let i = 0; i < students.length; i++) {
    for(let j in students[i]) {
      for(let k in obj) {
        if(students[i][j] === k) { // foxes === foxes ?
          // console.log(students[i].name) // dimitri, alexei
          obj[k].push({
            name: students[i].name,
            score: students[i].score
          })
        }
      }
    }
  }
  return obj
}
// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));
// {
// foxes: { name: 'Dimitri', score: 90 },
// wolves: { name: 'Alexei', score: 85 }
// }
console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));
// {
// foxes: { name: 'Alexander', score: 100 },
// wolves: { name: 'Alisa', score: 76 },
// tigers: { name: 'Viktor', score: 80 }
// }
console.log(highestScore([])); //{}