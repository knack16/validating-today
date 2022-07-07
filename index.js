const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone=document.getElementById('phone')
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const display=document.getElementById("display")


//display eror msg and class
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//display suucess and add success class 
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email
function checkEmail(input) {
  const re = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'Email is not valid');
    return false;
  }
}

//check userName
function checkUserName(input) {
  const re = /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'Username is not valid');
    return false;
  }
}

//check phone number
function checkPhoneNumber(input) {
  const re = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'Phone Number is not valid');
    return false;
  }
}

//check password
function checkPassword(input) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,15}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'invalid password use Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte');
    return false;
    
  }
}

// check passwords match

function checkPasswordsMatch(input1, input2) {
  if(input2 === ""){
    showError(input2,"password cannot be blank");
    console.log("blank")

  }
  else if (input1.value === input2.value) {
    showSuccess(input2);
    console.log("equals")  
  }
  else{
    showError(input2, 'Passwords do not match');
    console.log("error")

  }
}


function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  });
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check input lenght
// function checkLength(input, min, max) {
//   if (input.value.length < min) {
//     showError(input, `${getFieldName(input)} must be at least ${min} characters`);
//   } else if (input.value.length > max) {
//     showError(input, `${getFieldName(input)} must be less than ${max} characters`);
//   } else {
//     showSuccess(input);
//   }
// }

//check password






function show(){
    var row=1;
    var newRow=display.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);

    cell1.innerHTML=username.value;
    cell2.innerHTML=email.value;
    cell3.innerHTML=phone.value;

    row++;
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email,phone, password, password2]);
  // checkLength(username, 3, 20);
  // checkLength(password, 6, 25);
  // checkLength(phone,10,10);
  checkUserName(username);
  checkEmail(email);
  checkPhoneNumber(phone);
  checkPassword(password);
  checkPasswordsMatch(password, password2);
  show();


});