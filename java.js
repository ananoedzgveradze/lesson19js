document.getElementById ('registration').addEventListener('submit', function (event) {
    event.preventDefault();

    let errors = {};
    let form = event.target;

//via name
// let username = document.querySelector ('[name = "username"]').value;

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

});

