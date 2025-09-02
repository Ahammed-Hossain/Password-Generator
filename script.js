let password = document.getElementById("Generate-box");
let lengthValue = document.getElementById("length-value");
let lengthSlider = document.getElementById("lengthSlider");

lengthValue.innerText = lengthSlider.value;

lengthSlider.addEventListener('input', (event) => {
    lengthValue.innerHTML = event.target.value;
});

let letters = [
    [A],
    [B],
    [C],
    [D],
    [a],
    [b],
    [c],
    [d],
    [1],
    [2],
    [3],
    [4],
    [5]
];


function generatePassword() {

};

let rando

let Generate = document.querySelector('.generate');
let Copy = document.querySelector('.copy');

Generate.addEventListener('click', function () {
    generatePassword();
});