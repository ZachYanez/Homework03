// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment Code
var generateBtn = document.querySelector("#button");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

