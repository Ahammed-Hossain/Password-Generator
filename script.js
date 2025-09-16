let password = document.getElementById("Generate-box");
let lengthValue = document.getElementById("length-value");
let lengthSlider = document.getElementById("lengthSlider");

lengthValue.innerText = lengthSlider.value;

lengthSlider.addEventListener('input', function () {
    lengthValue.innerHTML = lengthSlider.value;
});


function generatePassword() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let arr = letters.split("");
    let passwordStr = "";

    let length = lengthSlider.value;

    for (let i = 0; i < length; i++) {
        passwordStr += arr[Math.floor(Math.random() * arr.length)];
    }
    password.value = passwordStr;
};

let rando


let Copy = document.querySelector('.copy');


let Generate = document.querySelector('.generate');
Generate.addEventListener('click', function () {
    console.log("button clicked")
    generatePassword();

});

let Clear = document.querySelector('.clear');

Clear.addEventListener('click', function () {
    console.log("Clicked")


});