const form = document.getElementById('form');
const imputs = document.querySelectorAll('.input-required');
const spans = document.querySelectorAll('.span-required');
const spanss = document.querySelectorAll('.span-requiredd');
const emailvalidate = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;



form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateName();
    validateDate();
    validateEmail();
    validatePassword();
    validatePasswordConfirm();
})


function err(index) {
    imputs[index].style.border = '1px solid #e40101'
    spans [index].style.display = 'block'
}

function correct(index) {
    imputs[index].style.border = ''
    spans [index].style.display = 'none'
}

function errObg(index) {
    imputs[index].style.border = '1px solid #e40101'
    spanss [index].style.display = 'block'
}

function correctObg(index) {
    imputs[index].style.border = ''
    spanss [index].style.display = 'none'
}


function validateName() {
    if(imputs[0].value.length < 5) {
        err(0)
    } else {
        correct(0)
    }
}

function validateNameObg() {
    if(imputs[0].value == "") {
        errObg(0)
    } else {
        correctObg(0)
    }
}

function validateDate() {
    if(imputs[1].value == "") {
        err(1)
    } else {
        correct(1)
    }
}

function validateEmail() {
    if(emailvalidate.test(imputs[2].value)) {
        correct(2)
    } else {
        err(2)
    }
}

function validateEmailObg() {
    if(imputs[2].value == "") {
        errObg(2)
    } else {
        correctObg(2)
    }
}

function validatePassword() {
    if(imputs[3].value.length < 8) {
        err(3)
    } else {
        correct(3)
        validatePasswordConfirm()
    }
}

function validatePasswordObg() {
    if(imputs[3].value == "") {
        errObg(3)
    } else {
        correctObg(3)
    }
}

function validatePasswordConfirm() {
    if(imputs[3].value == imputs[4].value && imputs[4].value.length >= 8) {
        correct(4)
    } else {
        err(4)
    }
}