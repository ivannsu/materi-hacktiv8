STORE 'mass' with any value.
STORE 'acceleration' with any value.
STORE 'force' with 0

IF acceleration equals to 0 THEN
  SET 'force' with 0
ELSE
  CALCULATE 'force' with 'mass' times 'acceleration'
  SET 'force' from calculation result
ENDIF

DISPLAY 'force'

Buat variable pembanding => arr[0]
1. Cek dari arr[awal] -> arr[akhir]
2. Jika 'pembanding' < arr[check]
   a) pembanding = arr[check]
3. Kalo tidak biarin saja
4. return pembanding

function terbesar(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(pembanding < arr[i]) {
      pembanding = arr[i];
    }
  }
  return pembanding
}

terbesar([1, 2, 3, 4, 5]);

Contoh soal: 
jumlahSemua(1, 2, 3, [4, 5, 6], 7, 8, [9, 10]);
