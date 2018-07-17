function printBranch(branches) {
  let month = [
    'jan', 'feb', 'march', 'april', 'mei',
    'jun', 'jul', 'augst', 'sept', 'oct', 'nov', 'dec'
  ];

  let counter = 0;
  while(counter < month.length) {

    let result = '';

    result += ' | ' + month[counter] + ' | '
    for(let i = 0; i < branches.length; i++) {
      result += 'Branch-' + (i + 1) + ' IN: ' + branches[i][0][counter] + ' | ';
      result += 'OUT:' + branches[i][1][counter] + ' | ';
    }
    console.log(result);
    counter++;
  }

}

let data1 = [
  [
    [1000, 1500, 2000, 1500, 2500, 3000, 3000, 2500, 1000, 2000, 1000, 4000], //Income
    [500, 700, 700, 700, 1000, 1300, 1300, 1000, 500, 1000, 500, 2200] //Outcome
  ],
  [
    [1000, 2500, 2000, 2000, 1500, 2000, 1000, 1000, 2000, 2500, 2000, 3000], //Income
    [700, 1000, 700, 1000, 700, 1000, 500, 500, 500, 1000, 1200, 1700] //Outcome
  ],
  [
    [2000, 1500, 1000, 1000, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
    [500, 600, 500, 700, 1000, 1000, 1000, 1500, 1000, 1500, 1000, 2200] //Outcome
  ]
];

printBranch(data1);
