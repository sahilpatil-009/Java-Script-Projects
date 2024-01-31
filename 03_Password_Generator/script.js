
const passwordBox = document.getElementById("Password");
const lenght = 12; //lenth of password

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()?><;|}{+*";

const allChar = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
        
    while(password.length < lenght){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    
    passwordBox.value = password;
}

const btn = document.querySelector("button");
btn.addEventListener("click", createPassword);

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    alert("Password Copied !");
}

let cp = document.getElementById("cp");
cp.addEventListener("click",copyPassword);

