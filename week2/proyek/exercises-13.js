/*
    hint: pakai ifcase untuk mengecek apakah resultX sama dengan resultY

    STORE `resultX` with 0
    STORE `resultO` with 0
    STORE `index` with 0;
    STORE `length` with string length (example: 7)

    WHILE `index` LESS THAN `length` DO
      IF String[index] EQUAL with 'X'
        SET `resultX` with `resultX` + 1
      ELSE IF String[index] EQUAL with 'O'
        SET `resultO` with `resultO` + 1
      ELSE
        DISPLAY 'Input not X or O'
      ENDIF

      SET `index` with `index` + 1
    ENDWHILE

    IF `resultX` EQUAL `resultO`
      DISPLAY 'TRUE'
    ELSE
      DISPLAY 'FALSE'
    ENDIF
 */

function xo(str) {
  var resultX = 0;
  var resultO = 0;
  var i = 0;

  while(i < str.length) {
    if(str[i] === 'x') {
      resultX += 1;
    } else if(str[i] === 'o') {
      resultO += 1;
    } else {
      return 'Input not a X or O';
    }
    i++;
  }

  if(resultX === resultO) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
