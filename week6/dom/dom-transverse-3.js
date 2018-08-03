/*
  Menseleksi DOM lebih Dalam
*/

/*
  1. Parent -> Child -> Child cara biasa
*/

// Menseleksi element <div id="contoh-div-1">
let contohDiv1 = document.getElementById('contoh-div-1');
console.log(contohDiv1);

// Mendapatkan <p id="contoh-p-1"> di dalam <div id="contoh-div-1">
let contohP1 = contohDiv1.children[0];
console.log(contohP1);

// Mendapatkan <strong> didalam <p id="contoh-p-1">
let strongElm = contohP1.children[0];
console.log(strongElm);

/*
  2. Parent -> Child -> child dengan chaining selector
*/

// Menggunakan chaining selector atau selector beruntun
console.log(contohDiv1.children[0].children[0]);

/*
  3. Element -> previous sibling -> previous sibling cara biasa
*/

// Menseleksi element <div id="contoh-div-1">
contohDiv1 = document.getElementById('contoh-div-1');
console.log(contohDiv1);

// Mendapatkan <h1> yang berada sebelum <div id="contoh-div-1">
let h1Elm = contohDiv1.previousElementSibling;
console.log(h1Elm);

// Mendapatkan null, dengan mengakses previous sibling dari <h1>
let justNull = h1Elm.previousElementSibling;
console.log(justNull);

/*
  Element -> previous sibling -> previous sibling dengan chaining selector
*/

// Penggunaan chaining selector
console.log(contohDiv1.previousElementSibling.previousElementSibling); // null