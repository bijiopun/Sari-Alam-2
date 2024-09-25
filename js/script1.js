// Merubah text setap detik
const textArray = ["Welcome to Sari Alam", "Enjoy", "Have a Nice Day!"];
let index = 0;
const animatedText = document.getElementById("animatedText");

setInterval(() => {
    index = (index + 1) % textArray.length;
    animatedText.textContent = textArray[index];
}, 3000); // Berubah setiap 3 detik