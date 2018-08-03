let h1Elm = document.getElementById('fill-me').innerHTML = 'HALO!';

let classElm = document.getElementsByClassName('change-all-of-me');
for(let i = 0; i < classElm.length; i++) {
  classElm[i].innerHTML = 'HALO JUGA!';
}

let h2Elm = document.getElementById('container').lastElementChild.innerHTML = 'Apa Kabar !';