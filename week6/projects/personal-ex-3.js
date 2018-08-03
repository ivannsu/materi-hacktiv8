let form = document.getElementById('main-form');

function validationMessage(elmName) {
  return elmName + ' tidak boleh kosong!';
}

function checkEmpty(elm) {
  return (elm.value === '') ? true : false;
}

form.addEventListener('submit', function(e) {
  
  if(checkEmpty(form.username)) {
    alert(validationMessage('Username'));
  } else if(checkEmpty(form.password)) {
    alert(validationMessage('Password'));
  } else if(checkEmpty(form.passwordConfirm)) {
    alert(validationMessage('Konfirmasi Password'));
  } else if(checkEmpty(form.email)) {
    alert(validationMessage('Email'));
  } else if(checkEmpty(form.emailConfirm)) {
    alert(validationMessage('Konfirmasi Email'));
  } else if(form.password.value !== form.passwordConfirm.value) {
    alert('Konfirmasi Password tidak cocok!');
  } else if(form.email.value !== form.emailConfirm.value) {
    alert('Konfirmasi Email tidak cocok!');
  } else {
    document.write('Selamat semua form sudah terisi dengan data yang valid!');
  }

  e.preventDefault();
});