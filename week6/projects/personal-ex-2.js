let parentElm = document.getElementById('eldest-parent');
let allChild = parentElm.children;

// Output -1: Diakses melalui eldest parent
allChild[0].innerHTML = 'Diakses melalui eldest parent';

// Output -2 dan -3: Diakses Melalui a Child
let aChild = document.getElementById('a-child');
aChild.previousElementSibling.innerHTML = 'Diakses Melalui a Child';
aChild.nextElementSibling.innerHTML = 'Diakses Melalui a Child';

allChild[allChild.length - 1].innerHTML = 'Diakses Melalui a Child';