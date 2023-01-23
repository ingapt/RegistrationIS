//Registration
const saveSubmit = document.querySelector('#SubmitReg');
const usernameInput = document.querySelector('#useName');
const passwordInput = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password_confirmation');
const roleSelector = document.querySelector('#role');
const text = document.getElementById("successText");

usernameInput.addEventListener("blur", nameVerify, true);
passwordInput.addEventListener("blur", passwordVerify, true);
passwordConfirmation.addEventListener("blur", passwordVerify, true);

function addUser(username, password, role) {
    const body = {
        username: username,
        password: password,
        role: role,
    };


    fetch("https://localhost:7290/api/User", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
        },
    })
        .then((data) => data.json())
        .then((response) => console.log(response));
}

function Validate() {
    if (usernameInput.value == "") {
        usernameInput.style.border = "1px solid red";
        name_error.innerText = "Privaloma įvesti vartotojo vardą. ";
        usernameInput.focus();
        return false;
    }

    if (passwordInput.value == "") {
        passwordInput.style.border = "1px solid red";
        password_error.innerText = "Privaloma įvesti slaptažodį. ";
        passwordInput.focus();
        return false;
    }

    if (passwordInput.value != passwordConfirmation.value) {
        passwordInput.style.border = "1px solid red";
        passwordConfirmation.style.border = "1px solid red";
        password_error.innerText = "Nesutampa slaptažodžiai.";
        passwordInput.focus();
        return false;
    }
}

function nameVerify() {
    if (usernameInput.value != "") {
        usernameInput.style.border = "1px solid #5e6e66";
        name_error.innerText = " ";
        return true;
    }
}

function passwordVerify() {
    if (passwordInput.value != "") {
        passwordInput.style.border = "1 px solid #5e6e66";
        password_error.innerText = " ";
        return true;
    }
}

function RegistrationSuccess() {
    text.innerText = "Registracija sėkminga. Galite prisijungti. ";
    text.style.color = "#ff1f1f";
    text.style.fontsize = "15px";
}

saveSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    Validate();
    addUser(usernameInput.value, passwordInput.value, roleSelector.value);
    RegistrationSuccess();
});
