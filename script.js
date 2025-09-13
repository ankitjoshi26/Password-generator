const passwordBox = document.querySelector("#password")
const bttn = document.querySelector("button")
const length = 8;
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbols = "@";
const allChar = lowerCase + upperCase + number + symbols;

function createPassword(){
    let password = " ";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length>password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
}

bttn.addEventListener("click", function(){
    createPassword();
})

const copyPass = document.querySelector(".display i");
function copyPassword () {
    passwordBox.select();
    document.execCommand("copy");
}

copyPass.addEventListener("click", function() {
    copyPassword();
    // alert("copied");
})