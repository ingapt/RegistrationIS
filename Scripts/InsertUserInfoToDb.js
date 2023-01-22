const enterData = document.querySelector('#enter');
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

function AddUserInfo(photo, uName, surname, personalCode, phoneNumber, email)
{
    const body = 
    {
        photo : photo,
        name : uName,
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
 //   Validate();
    addUserInfo(photo, uName, surname, personalCode, phoneNumber, email);
    AddAddress(city, street, houseNumber, flatNumber);
    
});

