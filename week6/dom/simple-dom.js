let pageTitleElement = document.getElementById('page-title');
let pageBoxElements = document.getElementsByClassName('page-box');
let pageHeadings = document.getElementsByTagName('h1');

let pageTitleElementsContent = pageTitleElement.innerHTML;
console.log('Isi <div id="page-title"> :' + pageTitleElementsContent);

for(let i = 0; i < pageBoxElements.length; i++) {
  let currentPageBoxElement = pageBoxElements[i];
  let currentPageBoxElementContent = currentPageBoxElement.innerHTML;

  console.log('isi <div class="page-box"> index ke ' + i + ': ' + currentPageBoxElementContent);
}

pageTitleElement.innerHTML = 'Updated Content of Page Title Element';
let newPageTitleElementContent = pageTitleElement.innerHTML;

console.log('Isi baru dari <div id="page-title"> :' + newPageTitleElementContent);
