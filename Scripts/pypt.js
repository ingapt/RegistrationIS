IsLoggedIn();

function IsLoggedIn(){
    let userId = sessionStorage.getItem("userId");
    let role = sessionStorage.getItem("role");
    if(role != 'Administrator')
    {
        window.location.href = "profile.html";
    }
    if(userId == null || userId ==undefined){
        window.location.href = "admin.html";
    }
}

function LogOut(){
    sessionStorage.clear();
    IsLoggedIn();
}