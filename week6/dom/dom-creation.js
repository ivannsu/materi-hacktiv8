// Pertama, kita seleksi terlebih dahulu <body>
let body = document.body;

// Kemudian, kita buat sebuah element HTML <div> menggunakan createElement
let mainDiv = document.createElement('div');

// Untuk membuat <div id="main">, maka kita harus membuat HTML attribute id
let mainDivAttrId = document.createAttribute('id');

// Untuk memberikan nilai kepada id, maka kita gunakan .value
mainDivAttrId.value = 'main';

// id="main" kita sudah siap. Sekarang kita harus menambahkan attribute tersebut ke mainDiv
mainDiv.setAttributeNode(mainDivAttrId);

// mainDiv kita sudah menjadi <div id="main">. Saatnya kita tambahkan ke dalam <body>
// Karena kita akan meletakkan <div id="main"> di dalam <body>, maka kita gunakan appendChild
body.appendChild(mainDiv);

// Selanjutnya, kita akan mengulangi hal yang serupa untuk menambahkan <div id="inside-main">
let insideMainDiv = document.createElement('div');

// Selain menggunakan .value kemudian setAttributeNode, kita bisa menggunakan shortHand berikut
insideMainDiv.setAttribute('id', 'inside-main');

// <div id="inside-main"> kita sudah siap, saat di append sebagai child ke <div id="main">
mainDiv.appendChild(insideMainDiv);

// Selanjutnya, kita akan mencoba membuat sebuah <h1> dengan isi teks di dalamnya.
let h1 = document.createElement('h1');

// Untuk membuat isi teks didalam h1, kita bisa menggunakan createTextNode
let h1Text = document.createTextNode('Heading Sample 1');

// Kita append text ke dalam <h1>
h1.appendChild(h1Text);

// Kemudian, kita append h1 sebagai child dari <div id="inside-main">
insideMainDiv.appendChild(h1);

// Selanjutnya, kita akan memcoba membuat sebuah <button> dengan isi teks. Langkahnya sama dengan sebelumnya
let button = document.createElement('button');
let buttonText = document.createTextNode('Click Me!');

button.appendChild(buttonText);

// Lalu kita akan memcoba membuat button tersebut saat di klik meng-alert sebuah pesan
button.addEventListener('click', function() {
  alert('hello');
});

// Terakhir, kita mengappend button tersebut ke dalam insideMainDiv
insideMainDiv.appendChild(button);