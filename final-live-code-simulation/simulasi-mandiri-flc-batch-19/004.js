/**
Participants Summary
--------------------
Diberikan data dalam bentuk array multidimensi yang berisi
orang-orang yang akan ikut dalam Hackathon yang
diselenggarakan bulan depan.

Implementasikan function `participantsSummary` untuk
mengeluarkan laporan negara mana saja yang mengikuti,
ada berapa orang yang mewakili negara tersebut dan
nama peserta dari negara tersebut

Contoh ada di test cases
*/

function participantsSummary (data) {
  if(data.length === 0) return [];

  let country = {};

  for(let i = 0; i < data.length; i++) { // ['dimitri', 'russia'], [...], [...]
    // console.log(data[i]);
    country[data[i][1]] = [];
  }
  
  for(let i = 0; i < data.length; i++) {
    for(let j in country) {
      if(data[i][1] === j) country[j].push(data[i][0]);
    }
  }
  /**
   * console.log(country);
   * {  
   *  Russia: [ 'Dimitri', 'Sergei' ],
      Japan: [ 'Heihachi', 'Kazuya', 'Jin' ],
      'South Korea': [ 'Hwoarang' ] 
      }
   */
  let resultsObj = {};
  for(let i in country) {
    resultsObj[i] = {
      total: country[i].length,
      names: country[i]
    };
  }
  return resultsObj;
}

// Test cases
console.log(participantsSummary([
  ['Dimitri', 'Russia'],
  ['Heihachi', 'Japan'],
  ['Sergei', 'Russia'],
  ['Kazuya', 'Japan'],
  ['Hwoarang', 'South Korea'],
  ['Jin', 'Japan']
]));
/*
{
  Russia: {
    total: 2,
    names: [ 'Dimitri', 'Sergei' ]
  },
  Japan: {
    total: 3,
    names: [ 'Heihachi', 'Kazuya', 'Jin' ]
  },
  'South Korea': {
    total: 1,
    names: [ 'Hwoarang' ]
  }
}
*/

console.log(participantsSummary([
  ['Suzuka', 'Japan'],
  ['Steve', 'United Kingdom'],
  ['Paul', 'USA']
]));
/*
{
  Japan: {
    total: 1,
    names: [ 'Suzuka' ]
  },
  'United Kingdom': {
    total: 1,
    names: [ 'Steve' ]
  },
  USA: {
    total: 1,
    names: [ 'Paul' ]
  }
}
*/

console.log(participantsSummary([]));
// No participants
