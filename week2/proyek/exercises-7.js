function createAsterisk(rows) {
  for(var i = 0; i < rows; i++) {
    console.log('*');
  }
}

/*

  Hint: Nested Loop

  STORE `i` with 0 value
  STORE `j` with 0 value
  STORE `rows` with 5 value
  STORE `result` without value

  WHILE `i` LESS THAN `rows` DO
    WHILE `j` LESS THAN `rows` DO
      ADD `result` with '*'
      SET `j` with `j` + 1
    END WHILE;

    DISPLAY `result`
    SET `i` with `i` + 1
  END WHILE

 */

function createAsterisk2(rows) {
  var i = 0;
  var rows = rows;
  var result;

  while(i < rows) {
    var j = 0;
    result = '';
    while(j < rows) {
      result += '*';
      j++;
    }

    console.log(result);
    i++;
  }
}

/*

  hint: bintang di tambah 1 setiap looping dengan scope variable global supaya tidak hilang
  ketika diloop

 */

 function createAsterisk3(rows) {
   var result = '';

   for(var i = 0; i < rows; i++) {
     result += '*';
     console.log(result);
   }
 }

 createAsterisk3(5);
