document.getElementById ('registration').addEventListener('submit', function (event) {
    event.preventDefault();

    let errors = {};
    let form = event.target;

//via name
// let username = document.querySelector ('[name = "username"]').value;


let firstName =document.getElementById('firstname').value;
    if (firstName.length < 4 || firstname == '' ) {
        errors.firstname = 'Name can not be empty and must be more than 4 symbols'
    }

let surName =document.getElementById('surname').value;
    if (surName.length < 6 || surname == '' ) {
        errors.surname = 'Surname can not be empty and must be more than 6 symbols'
    }


let username =document.getElementById('Username').value;
    if (username.length < 4 || username == '' ) {
        errors.username = 'Username can not be empty and must be more than 4 symbols'
    }

//Password

let password = document.querySelector('[name = "password"]').value;
let password2 = document.querySelector('[name = "password2"]').value;


if(password != password2 || password == '' ) {
    errors.password = 'Password can not be empty';
    errors.password2 = 'Passwords do not match';
}

//checkbox

let agree = document.getElementById('checkagree').checked;
if (agree == false) //an (!agree) 
{
    errors.agree = 'You must agree our terms and conditions';
}

//radio

let age = false;
form.querySelectorAll('[name="age"]').forEach(element => {
    if (element.checked) {
        age = true;
    }
});

if (age == false) {
    errors.age = 'Please Select Your Age'
}


console.log(errors);

form.querySelectorAll('.error-text').forEach(item => {
    item.innerHTML = '';
    
});

for (let item in errors) {
    console.log(item);
    let errorSpan = document.getElementById('error_' + item);

    if (errorSpan) {
        errorSpan.textContent = errors[item];
        
    }
}

if (Object.keys(errors).length == 0) {
    form.submit();
    
} 


});
//password hide/show

let passwordShow = document.getElementById('passw')
let toggleIconEye = document.getElementById('toggleIcon')

showHidePassword = () => {
    if (passwordShow.type == "password") {
    passwordShow.setAttribute('type', 'text' );
    toggleIconEye.classList.add('fa-eye-slash');

}  else {
    toggleIconEye.classList.remove('fa-eye-slash');
    passwordShow.setAttribute('type', 'password' );

   }

}

toggleIconEye.addEventListener('click', showHidePassword);


let passwordShow2 = document.getElementById('passw2')
let toggleIconEye2 = document.getElementById('toggleIcon2')

showHidePassword2 = () => {
    if (passwordShow2.type == "password") {
    passwordShow2.setAttribute('type', 'text' );
    toggleIconEye2.classList.add('fa-eye-slash');

}  else {
    toggleIconEye2.classList.remove('fa-eye-slash');
    passwordShow2.setAttribute('type', 'password' );

   }

}

toggleIconEye2.addEventListener('click', showHidePassword2);












//email validation

function validation() {
    let emailField = document.getElementById('myemail').value;
    let spanText = document.getElementById('emailtext');
    let emailStructure =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/

    if (emailField.match(emailStructure)) {
        spanText.innerHTML = 'You Email is valid';
        spanText.style.color = 'green';
    
    
    } else {
        spanText.innerHTML = 'You Email is invalid';
        spanText.style.color = 'red';
    }
        
}
