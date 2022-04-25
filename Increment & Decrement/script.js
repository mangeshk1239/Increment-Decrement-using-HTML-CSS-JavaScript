const textBox = document.querySelector(".textBox");
const incBtn = document.querySelector(".incBtn");
const decBtn = document.querySelector(".decBtn");

textBox.value = 0;

incBtn.addEventListener("click", () => {
    textBox.value++;
});

decBtn.addEventListener("click", () => {
    textBox.value < 1 ? textBox.value = 0 : textBox.value--;
});