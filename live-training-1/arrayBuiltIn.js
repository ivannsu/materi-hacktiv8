function addData(input) {
  input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung')
  input.splice(4, 0, 'Pria', 'SMA Internasional')
}

function monthConverter(monthNum) {
  let month;
  switch(monthNum) {
    case '01':
      month =  'January'
      break
    case '02':
      month = 'February'
      break
    case '03':
      month = 'March'
      break
    case '04':
      month = 'April'
      break
    case '05':
      month = 'May'
      break
    case '06':
      month = 'June'
      break
    case '07': 
      month = 'July'
      break
    case '08':
      month = 'August'
      break
    case '09':
      month = 'September'
      break
    case '10':
      month = 'October'
      break
    case '11':
      month = 'November'
      break
    case '12':
      month = 'Desember'
      break
  }
  return month
}

function dataHandling(input) {
  addData(input)

  let date = input[3].split('/')
  
  monthConverter(date[1])

  console.log(date.sort(function(val1, val2) {
    return val2 > val1 
  }))
}

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling(input);