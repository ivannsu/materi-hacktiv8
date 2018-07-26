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
  let filterArr = [];
  let resultKeys = {
    valid: [],
    invalid: []
  };
  let results = {
    valid_voters: [],
    invalid_voters: []
  };

  for(let i = 0; i < input.length; i++) {
    /**
     * console.log(input[i]);
     * 
     * { firstName: 'Ihsan', lastName: 'Maulana', age: 23 }
     * { firstName: 'Neil', lastName: 'Tanodo', age: 23 }
     * 
     * console.log(input[i].firstName);
     * 
     * Ihsan
     * Neil
     * Ihsan
     * Ihan
     */
    filterArr[input[i].firstName] = filterArr[input[i].firstName] + 1 || 1;
  }
  /**
   * console.log(filterArr); -- temporary output on line 60
   * 
   * [ Ihsan: 2, Neil: 1, Ihan: 2, Isan: 1 ]
   */
  for(let i in filterArr) {
    /**
     * console.log('key: ' + i + ', value: ' + filterArr[i]);
     * 
     * key: Ihsan, value: 2
     * key: Neil, value: 1
     * ...
     */
    if(parseInt(filterArr[i]) === 1) {
      /**
       * console.log('key: ' + i + ', value: ' + filterArr[i]);
       * 
       * key: Neil, value: 1
       */
      resultKeys.valid.push(i);
    } else {
      resultKeys.invalid.push(i);
    }
  }
  /**
   * console.log(resultKeys); -- temporary output on line 85 and 87
   * 
   * { valid: [ 'Neil', 'Isan' ], invalid: [ 'Ihsan', 'Ihan' ] }
   */
  for(let i = 0; i < resultKeys.valid.length; i++) {
    /**
     * console.log(resultKeys.valid[i]);
     * 
     * Neil 
     * Isan
     */
    for(let j = 0; j < input.length; j++) {
      if(input[j].firstName === resultKeys.valid[i]) {
        results.valid_voters.push(input[j]);
      }
    }
  }
  console.log(results);
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