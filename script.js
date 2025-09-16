let password = document.getElementById("Generate-box");
let lengthValue = document.getElementById("length-value");
let lengthSlider = document.getElementById("lengthSlider");
let UpperCase = document.getElementById("Uppercase");
let LowerCase = document.getElementById("Lowercase");
let Symbol = document.getElementById("Symbol");
let Number = document.getElementById("Number");

lengthSlider.addEventListener('input', function () {
    lengthValue.innerHTML = lengthSlider.value;
});

let currentValue = "";
function generatePassword() {
    let characters = "";

    let length = lengthSlider.value;

    if (UpperCase.checked) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (LowerCase.checked) characters += "abcdefghijklmnopqrstuvwxyz";
    if (Number.checked) characters += "0123456789";
    if (Symbol.checked) characters += "!@#$%^&*()";

    if (characters === "") {
        characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    }

    let arr = characters.split("");
    currentValue = "";
    for (let i = 0; i < length; i++) {
        currentValue += arr[Math.floor(Math.random() * arr.length)];
    }

    password.value = currentValue;
}

document.querySelector('.generate').addEventListener('click', generatePassword);

document.querySelector('.copy').addEventListener('click', async () => {
    if (currentValue === "") {
        alert("Please select a Check Box or generate a password");
        return;
    }

    try {
        await navigator.clipboard.writeText(currentValue);
    } catch (err) {
        alert("Copy failed", err);
    }
});

document.querySelector('.clear').addEventListener('click', function () {
    password.value = "";
    currentValue = "";
});
