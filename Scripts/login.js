const loginSubmit = document.querySelector('#btnLogin');
const username = document.querySelector('username');
const password = document.querySelector('#password');

//Login

function loginUser(username, password)
{
    const body = {
        username: username,
        password: password,
    };

    fetch("https://localhost:7048/api/User", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
        },
    })
        .then((data) => data.json())
        .then((response) => console.log(response));
}


class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.ValidateOnSubmit();
    }
}

ValidateOnSubmit()
{
    let self = this;

    this.form.addEventListener("click", (e) => {
        e.preventDefault();
        var error = 0;

        self.fields.forEach((field) => {
            const input = document.querySelector(`#${field}`);
            if (self.validatefields(input) == false) {
                error++;
            }
        });

        if (error === 0) {
            localStorage.setItem("auth", 1);
            this.form.submit();
        }
    });
}

validatefields(field)
{
    if (field.value.trim === "") {
        this.setStatus(
            field,
            `${field.innerText} privalomas laukas`, "error");
        return false;
    } else {
        if (field.type === "password") {
            if (field.valiue.legth < 8) {
                this.setStatus(
                    field,
                    `${field.innerText} privaloma ne mažiau 8 simbolių`, "error");
                return false;
            } else {
                this.setStatus(field, null, "Success");
                return true;
            }  
        }  else {
            this.setStatus(field, null, "Success");
                return true;
        }
    }
}

setStatus(field, message, okStatus)
{
    const errorMessage = field.parentElement.querySelector('.error-message');
    
    if(okStatus === "success")
    {
        if(errorMessage){
            errorMessage.innerText = " ";
        }
        field.classList.remove("input-error");
    }

    if(okStatus === "error"){
        errorMessage.innerText = message;
        field.classList.add =("input-error");
    }
}

//Authorize 
class Auth{
    constructor(){
        document.querySelector('body').style.display = "none" 
        const auth = localStorage.getItem("auth");
        this.validateAuth(auth);
    }

    validateAuth(auth)
    {

        if(auth != 1)
        {
            window.location.replace("/");
        } else {

            const body = 


            fetch("https://localhost:7048/api/User/login", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "content-type": "application/json",
                },
            })
                .then((data) => data.json())
                .then((response) => console.log(response));
        }
    }

    logOut()
    {
        localStorage.removeItem("auth");
        window.location.replace("/");
    }
}

/*const form = document.querySelector('#login');
if(fomr){
    const fields = ["username" ,"password"];

    const validator = new Login(form, fields);
}*/

//logout
document.querySelector(".logout").addEventListener("click", (e) =>{
    auth.logout();
});


loginSubmit.addEventListener("click", function(e){
    e.preventDefault();
    const Auth = new Auth();
    loginUser(username.value, password.value);

})
