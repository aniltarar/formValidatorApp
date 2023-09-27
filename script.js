const form = document.getElementById("registerForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");

form.addEventListener('submit', submitFunc); // 'submitFunc' fonksiyonunu iletiyoruz

function submitFunc(e){
    e.preventDefault();
    if(username.value ===""||username.value===null){
        error(username)
    }else{
        succes(username)
    }
    if(email.value ===""||email.value===null){
        error(email)
    }else{
        succes(email)
    }
    if(password.value ===""||password.value===null){
        error(password)
    }else{
        succes(password)
    }
    if(repassword.value ===""||repassword.value===null||repassword.value!==password.value){
        error(repassword)
    }else{
        succes(repassword)
    }
    
}

function error(input) {
    input.classList="form-control is-invalid"
}
function succes(input) {
    input.classList="form-control is-valid"
}