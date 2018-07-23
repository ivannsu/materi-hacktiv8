function dataHandling(arr) {
  let label = ['Nomor ID', 'Nama Lengkap', 'TTL', 'Hobi']
  
  for(let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    for(let j = 0; j < arr[i].length; j++) {
      if(label[j] === 'TTL') {
        console.log(label[j] + ': ' + arr[i][j] + ', ' + arr[i][j + 1])  
      } else if(label[j] === 'Hobi') {
        console.log(label[j] + ': ' + arr[i][label.length - 1])
        continue;
      } else {
        console.log(label[j] + ': ' + arr[i][j])
      }
    }
    console.log('---')
  }
}

let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
dataHandling(input)