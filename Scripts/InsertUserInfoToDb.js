const enterData = document.querySelector('#enterUserInfo');
const enterAddress = document.querySelector('#enterAddress');
const photo = document.querySelector('#photo');
const uName = document.querySelector('#name');
const surname = document.querySelector('#surname');
const personalCode = document.querySelector('#personalCode');
const phoneNumber = document.querySelector('#phoneNumber');
const email = document.querySelector('#email');
const street = document.querySelector('#street');
const houseNumber = document.querySelector('#houseNumber');
const flatNumber = document.querySelector('#flatNumber');
const city = document.querySelector('#city');

uName.addEventListener("blur", nameVerify, true);
surname.addEventListener("blur", surnameVerify, true);
personalCode.addEventListener("blur", personalCodeVerify, true);
phoneNumber.addEventListener("blur", phoneNumberVerify, true);
email.addEventListener("blur", emailVerify, true);
city.addEventListener("blur", cityVerify, true);
street.addEventListener("blur", streetVerify, true);
houseNumber.addEventListener("blur", houseNumberVerify, true);
flatNumber.addEventListener("blur", flatNumberVerify, true);


function nameVerify() {
    if (uName.value != "") {
        uName.style.border = "1px solid #5e6e66";
        uName_error.innerText = " ";
        return true;
    }
}

function surnameVerify() {
    if (surname.value != "") {
        surname.style.border = "1px solid #5e6e66";
        surname_error.innerText = " ";
        return true;
    }
}

function personalCodeVerify() {
    if (personalCode.value != "") {
        personalCode.style.border = "1px solid #5e6e66";
        personal_code_error.innerText = "";
        return true;
    }
}

function phoneNumberVerify() {
    if (phoneNumber.value != "") {
        phoneNumber.style.border = "1px solid #5e6e66";
        phoneNumber_error.innerText = " ";
        return true;
    }
}

function emailVerify() {
    if (email.value != "") {
        email.style.border = "1px solid #5e6e66";
        email_error.innerText = " ";
        return true;
    }
}

function cityVerify() {
    if (city.value != "") {
        city.style.border = "1px solid #5e6e66";
        city_error.innerText = " ";
        return true;
    }
}

function streetVerify() {
    if (street.value != "") {
        street.style.border = "1px solid #5e6e66";
        street_error.innerText = " ";
        return true;
    }
}

function houseNumberVerify() {
    if (houseNumber.value != "") {
        houseNumber.style.border = "1px solid #5e6e66";
        houseNumber_error.innerText = " ";
        return true;
    }
}

function flatNumberVerify() {
    if (flatNumber.value != "") {
        flatNumber.style.border = "1px solid #5e6e66";
        flatNumber.innerText = " ";
        return true;
    }
}

function Validate() {
    if (uName.value == "") {
        uName.style.border = "1px solid red";
        uName_error.innerText = "Privaloma įvesti savo vardą. ";
        uName.focus();
        return false;
    }

    if(surname.value == ""){
        surname.style.border = "1px solid red";
        surname_error.innerText = "Privaloma įvesti savo pavardę. ";
        surname.focus();
        return false;
    }

    if(personalCode.value == ""){
        personalCode.style.border = "1px solid red";
        personal_code_error.innerText = "Privaloma įvesti savo asmens kodą. ";
        personalCOde.focus();
        return false;
    }

    if(personalCode.value  < 0)  {
        personalCode.style.border = "1px solid red";
        personal_code_error.innerText = "Neigiamas asmens kodas būti negali. ";
        personalCOde.focus();
        return false;
    }

    if(personalCode.value.length != 11)
    {
        personalCode.style.border = "1px solid red";
        personal_code_error.innerText = "Asmens kodas sudarytas iš 11 skaitmenų.";
        personalCOde.focus();
        return false;
    }

    if(phoneNumber.value < 0)
    {
        phoneNumber.style.border = "1px solid red";
        phoneNumber_error.innerText = "Telefono numeris negali būti neigiamas";
        phonenUmer.focus();
        return false;
    }

    if(phoneNumber.value.length == "")
    {
        phoneNumber.style.border = "1px solid red";
        phoneNumber_error.innerText = "Telefono numerį privaloma įvesti.";
        phonenUmer.focus();
        return false;
    }

    if(phoneNumber.value.length != 9 )
    {
        phoneNumber.style.border = "1px solid red";
        phoneNumber_error.innerText = "Telefono numerį sudaro 9 skaitmenys";
        phonenUmer.focus();
        return false;
    }

    if(email.value == "")
    {
        email.style.border = "1px solid red";
        email_error.innerText = "El. paštą privaloma įvesti.";
        email.focus();
        return false;
    }
}

function ValidateAddress(){
    if(city.value == "")
    {
        city.style.border = "1px solid red";
        city_error.innerText = "Privaloma įvesti miesto pavadinimą.";
        city.focus();
        return false;
    }

    if(street.value == "")
    {
        street.style.border = "1px solid red";
        street_error.innerText = "Privaloma įvesti gatvės pavadinimą.";
        street.focus();
        return false;
    }

    if(houseNumber.value == "")
    {
        houseNumber.style.border = "1px solid red";
        houseNumber_error.innerText = "Privaloma įvesti namo numerį.";
        houseNumber.focus();
        return false;
    }

    if(houseNumber.value <= 0)
    {
        houseNumber.style.border = "1px solid red";
        houseNumber_error.innerText = "Namo numeris negali būti neigiamas arba lygus 0.";
        houseNumber.focus();
        return false;
    }

    if(flatNumber.value == "")
    {
        flatNumber.style.border = "1px solid red";
        flatNumber_error.innerText = "Privaloma įvesti buto numerį.";
        flatNumber.focus();
        return false;
    }

    if(flatNumber.value < 0)
    {
        flatNumber.style.border = "1px solid red";
        flatNumber_error.innerText = "Buto numeris negali būti neigiamas.";
        flat.focus();
        return false;
    }
}

function AddUserInfo(uName, surname, personalCode, phoneNumber, email)
{
    let userId = sessionStorage.getItem("userId")
    const body = 
    {
        id : userId,
        name : uName,
        surname : surname,
        personalCode : personalCode,
        phoneNumber : phoneNumber,
        email : email,
    }

    fetch("https://localhost:7290/api/UserInfo/id", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
        },
    })
        .then((data) => data.json())
        .then((response) => console.log(response));
}

function AddAddress(city, street, houseNumber, flatNumber)
{
    const body = 
    {
        city : city,
        street : street,
        houseNumber : houseNumber,
        flatNumber : flatNumber,
        }

    fetch("", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
        },
    })
        .then((data) => data.json())
        .then((response) => console.log(response));
}

enterData.addEventListener('click', function (e) {
    e.preventDefault();
    Validate();
    addUserInfo(uName.value, surname.value, personalCode.value, phoneNumber.value, email.value);

});

enterAddress.addEventListener('click', function(e)
{
    e.preventDefault();
    ValidateAddress();
    AddAddress(city.value, street.value, houseNumber.value, flatNumber.value);
});

