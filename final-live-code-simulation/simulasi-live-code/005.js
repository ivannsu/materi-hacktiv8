/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*
---------------
Students Report
---------------
PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:
[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]
Data di atas merupakan campuran seluruh nilai student dari kelas manapun.
Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:
[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]
Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

function getReport(studentGrades) {
  let tempClassArr = [];
  let tempClassObj = {};
  let results = [];

  for(let i = 0; i < studentGrades.length; i++) {
    tempClassArr.push(studentGrades[i].classCode);
  }
  // console.log(tempClassArr);
  for(let i = 0; i < tempClassArr.length; i++) {
    tempClassObj[tempClassArr[i]] = [];// tempClassObj[tempClassArr[i]] + 1 || 1;
  }
  // console.log(tempClassObj);
  for(let i in tempClassObj) {
    for(let j = 0; j < studentGrades.length; j++) {
      if(studentGrades[j].classCode === i) {
        tempClassObj[i].push(studentGrades[j]);
      }
    }
  }
  // console.log(tempClassObj);
  for(let i in tempClassObj) {
    let obj = {
      classCode: i,
      passed: [],
      failed: []
    };

    for(let j = 0; j < tempClassObj[i].length; j++) {
      // console.log(tempClassObj[i][j]);
      if(tempClassObj[i][j].score >= 70) {
        obj.passed.push(tempClassObj[i][j].name);
      } else {
        obj.failed.push(tempClassObj[i][j].name);
      }
    }
    results.push(obj);
  }
  return results;
}

var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
  { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
  { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
]
*/