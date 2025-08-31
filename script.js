let password = document.getElementById("Generate-box");
let lengthValue = document.getElementById("length-value");
let lengthSlider = document.getElementById("lengthSlider");

lengthValue.innerText = lengthSlider.value;

lengthSlider.addEventListener('input', (event) => {
    lengthValue.innerHTML = event.target.value;
});



let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
let letters = chars.split("");

function generatePassword() {
  
};

let rando

let Generate = document.querySelector('.generate');
let Copy = document.querySelector('.copy');

Generate.addEventListener('click', function () {

});