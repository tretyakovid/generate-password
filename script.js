const passwordInput = document.querySelector("#password");
const generateBtn = document.querySelector(".btn");
const copyBtn = document.querySelector(".copy");
const label = document.querySelector(".label");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const allChars = upperCase + lowerCase + numbers;
const length = 12;

function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordInput.value = password;
}
function copyPassword() {
  passwordInput.select();
  navigator.clipboard.writeText(passwordInput.value);
}
generateBtn.addEventListener("click", () => {
  generatePassword();
});
copyBtn.addEventListener("click", () => {
  copyPassword();
  label.classList.add("label--active");
  setTimeout(() => {
    label.classList.remove("label--active");
  }, 1000);
});
