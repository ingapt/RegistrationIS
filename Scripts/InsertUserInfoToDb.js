const enterData = document.querySelector('#enter');
const photo = document.querySelector('#photo');
const name = document.querySelector('#name');
const surname = document.querySelector('#surname');
const personalCode = document.querySelector('#personalCode');
const phoneNumber = document.querySelector('#phoneNumber');
const email = document.querySelector('#email');
const street = document.querySelector('#street');
const houseNumber = document.querySelector('#houseNumber');
const flatNumber = document.querySelector('#flatNumber');
const city = document.querySelector('#city');

function AddUserInfo(photo, name, surname, personalCode, phoneNumber, email)
{
    const body = 
    {
        photo : photo,
        name : name,
        surname : surname,
        personalCode : personalCode,
        phoneNumber : phoneNumber,
        email : email,
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

function AddAddress(street, houseNumber, flatNumber, city)
{
    const body = 
    {
        street : street,
        houseNumber : houseNumber,
        flatNumber : flatNumber,
        city : city
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



