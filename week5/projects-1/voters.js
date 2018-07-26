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
  let filterInputArr = [];

  for(let i = 0; i < input.length; i++) {
    /**
     * console.log(input[i]);
     * 
     * { firstName: 'Ihsan', lastName: 'Maulana', age: 23 }
     * { firstName: 'Neil', lastName: 'Tanodo', age: 23 }
     */
    console.log(input[i].firstName);
    // for(let j in input[i]) {
      /**
       * console.log('key: ' + j + ' value: ' + input[i][j]);
       * 
       * key: firstName, value: Ihsan
       * key: lastName, value: Maulana
       * key: age, value: 23
       */
      // filterInputArr[input[i].firstName] = filterInputArr[input[i].firstName] + 1 || 1
    // }
  }
  /**
   * console.log(filterInputArr); line ==> 61
   * 
   * [ Ihsan: 6, Neil: 3, Ihan: 6, Isan: 3 ]
   */
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