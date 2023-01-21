const loginSubmit = document.querySelector('#btnLogin');

//Login

function loginUser()
{
    fetch("https://localhost:7048/api/User/login",{
        method: "POST",
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password : document.getElementById('password').value,
        }),
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },})
        .then((data) => data.json())
        .then((user) => {
            CheckUser(user);
        });
}

function CheckUser(user)
{
    if(user.status == null)
    {
        document.getElementsByClassName('error-message').innerText = "Neteisingi prisijungimo duomenys";
        console.log("blogas prisijungimas");
    } else {
        console.log(user);
        console.log('Patikrink reikšmes');
        sessionStorage.setItem("userId", user.id);
        sessionStorage.setItem("userRole", user.role);
        window.location.href = "profile.html";
    }
}

loginSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    loginUser();
});
