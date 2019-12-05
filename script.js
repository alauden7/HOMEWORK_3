var pwGenerator = document.querySelector("#generate")
var copyButton = document.querySelector("#copy")
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}"
var lengthButton = document.querySelector("#length")

alert("Need help creating a password? Click 'OK' to begin!");

function charaLimit(lengthInput) {
  if (textContent >= 8 && textContent <= 128) {
  } else {
    alert("Please enter a number between 8 and 128.")
}}

function lengthI () {
  event.preventDefault();
  document.querySelector("#PWlength").textContent = lengthInput
}

lengthButton.addEventListener("click") 