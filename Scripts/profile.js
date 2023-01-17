const ENDPOINT = 'https://localhost:7115/swagger/index.html';

const UserInfoFromBackend = (user) => {
const img = document.createElement('img');
img.src = user.picture.large;
img.alt = `${user.name} profilio foto`;

const intro = document.createElement('h3');
intro.innerText = `${user.name} ${user.surname}`;

const userProfile = document.createElement('div');
userProfile.append(img, intro);
document.body.append(userProfile);

const tbody = document.querySelector('tbody');
const code = document.createElement('td');
personalCode.innerText = user.code;
const phone = document.createElement('td');
phone = user.phoneNumber;
const email = document.createElement('td');
email = user.email;
const address = document.createElement('td');
const city = user.city;
const street = user.street;
const houseNumber = user.houseNumber;
const flatNumber = user.flatNumber;
address.innerText = `${street}` `${houseNumber}` - `${flatNumber}` `${city}`; 

const tr = document.createElement('tr');
tr.append(code, phone, email, address);
tbody.append(tr);

};

const fetchUserInfo = async() => {
    try{
        const response = await fetch(ENDPOINT);
        if(response.ok)
        {
            const user = await response.json();
            UserInfoFromBackend(user);
        }
    }
    catch(error)
    {
        console.error(error);
    }
};

fetchUserInfo();