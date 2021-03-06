const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone=document.getElementById('phone')
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const display=document.getElementById("display")

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
  }

  function showSuccess(input) {
    formControl = input.parentElement;
    formControl.className = 'form-control success';
  }

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Enail is not valid');
    }
  }
  