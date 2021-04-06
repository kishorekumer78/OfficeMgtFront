
const user = {
    username:"office",
    password:1234
}

const loginBtn = document.querySelector(".container-login100-form-btn");


const userName = document.querySelector(".user-name");

const password = document.querySelector(".password");



loginBtn.addEventListener("click", function (event) {

    const userValue = userName.value;
    const passwordValue = parseInt(password.value)
    event.preventDefault();
   
    if (userValue === user.username && passwordValue === user.password) {
        redirect();
    }
    
})

function redirect() {
    window.location.href="second.html";
}
