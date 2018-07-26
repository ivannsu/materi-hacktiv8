/* ================
 FILTER VOTERS
 ================
 description: sebuah fungsi untuk memfilter data pemilih pada suatu daerah menjadi pemilih yang valid
              dan pemilih yang tidak valid. Pemilih yang valid merupakan warga yang namanya hanya muncul
              1 kali sedangkan pemilih tidak valid adalah yang namanya muncul lebih dari 1 kali.
              fungsi akan mengembalikan nilai valid voters dan invalid voters dan akan mengembalikan
              nilai 'NO DATA' jika data masih kosong

 rules:
 1. Tidak boleh menggunakan built function seperti .filter, .sort, .map, .reduce
 2. Tidak boleh menggunakan REGEX seperti match, replace, dll
 3. Apabila terdapat nama pada invalid voters, nama tersebut HANYA MUNCUL 1 KALI

 examples:
 1. INPUT:
  [{
   firstName: 'Ihsan',
   lastName: 'Maulana',
   age: 23
  }, {
   firstName: 'Neil',
   lastName: 'Tanodo',
   age: 23
  }, {
   firstName: 'Ihsan',
   lastName: 'Maulana',
   age: 23
  }]

     OUTPUT:
   {
     valid_voters: [{
       fullName: 'Neil Tanodo',
       age: 23
     }],
     invalid_voters: [{
       fullName: 'Ihsan Maulana',
       age: 23
     }]
   } */

function filterVoters(input){
  let validVoters = [];
  let invalidVoters = [];
  for(let i = 0; i<input.length;i++){
    let simpan = {};
    let counter = 0;
    for(let j = 0;j<input.length;j++){
      if(i!==j){
        if(input[i].firstName===input[j].firstName && input[i].lastName===input[j].lastName){
          counter++;
        }
      }
    }

    if(counter===0){
      simpan.fullName = `${input[i].firstName} ${input[i].lastName}`;
      simpan.age = input[i].age;
      validVoters.push(simpan);
    } else{
      if(invalidVoters.length===0){
        simpan.fullName = `${input[i].firstName} ${input[i].lastName}`;
        simpan.age = input[i].age;
        invalidVoters.push(simpan);

      } else{
        let counter2 = 0;
        simpan.fullName = `${input[i].firstName} ${input[i].lastName}`;
        simpan.age = input[i].age;
        for(let k = 0;k<invalidVoters.length;k++){
          if(simpan.fullName === invalidVoters[k].fullName){
            counter2++;
          }
        }
        if(counter2===0){
          invalidVoters.push(simpan);
        }
      }
    }
  }

  let finalResult = {};
  finalResult.valid_voters = validVoters;
  finalResult.invalid_voters = invalidVoters;
  return finalResult;
}

console.log(filterVoters([{
  firstName: 'Ihsan',
  lastName: 'Maulana',
  age: 23
 }, {
  firstName: 'Neil',
  lastName: 'Tanodo',
  age: 23
 }, {
  firstName: 'Ihsan',
  lastName: 'Maulana',
  age: 23
 },
 {
  firstName: 'Ihan',
  lastName: 'Maulana',
  age: 23
 },
 {
  firstName: 'Ihan',
  lastName: 'Maulana',
  age: 23
 },
 {
  firstName: 'Isan',
  lastName: 'Maulana',
  age: 23
 }
]));