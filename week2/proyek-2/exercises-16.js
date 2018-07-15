function dataHandling(input) {
  input.splice(1, 1, 'Ivan');
  console.log(input);
}

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling(input);
