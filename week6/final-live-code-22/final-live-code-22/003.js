/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 
*/
function hitungKembalian(bayar, harga){
  if(bayar < harga) return 'Uang tidak cukup';
  if(bayar === harga) return {};

  var ketersediaanUang = [
      { nominal: 100000, jumlah: 5},
      { nominal: 50000, jumlah: 5},
      { nominal: 20000, jumlah: 5 },
      { nominal: 10000, jumlah: 5},
      { nominal: 5000, jumlah: 5}
  ];
  let kembalian = bayar - harga;

  let result = {};

  for(let i = 0; i < ketersediaanUang.length; i++) {
    
    if(ketersediaanUang[i].nominal <= kembalian && ketersediaanUang[i].jumlah !== 0) {
      result[ketersediaanUang[i].nominal] = result[ketersediaanUang[i].nominal] + 1 || 1
    }
  }
  return result;
 
}

// Test Case
console.log(hitungKembalian(1000000, 755000)); // 1.000.000, 755.000
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Test Case
// console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Test Case 3
// console.log(hitungKembalian(920000, 80000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/

// TEST CASE 4
console.log(hitungKembalian(50000,50000)); // {}

// TEST CASE 5
console.log(hitungKembalian(50000,500000)); // Uang tidak cukup


