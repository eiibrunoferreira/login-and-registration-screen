const form = document.getElementById('form');
const inputemail = document.getElementById('input-email');
const emailvalidate = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const inputpassword = document.getElementById('input-password');
const btnlogin = document.getElementById('btn-to-enter');

function logar() {

    if(inputemail.value === "teste@gmail.com" && inputpassword.value === "teste123") {
        location.href = "./home/home.html";
    } else if (inputemail.value === "" || inputpassword.value === "" ) {
        alert ("Preencha todos os campos vazios!")
    } else {
        emailvalidatee();
        passwordvalidate();
    }
}

function emailvalidatee() {
    if(inputemail.value === "teste@gmail.com") {
        return true;
    } else {
        alert ('Email inválido');
    }
}

function passwordvalidate() {
    if(inputpassword.value === "teste123") {
        return true;
    } else {
        alert ('Senha incorreta')
    }
}







