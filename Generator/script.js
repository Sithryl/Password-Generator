// Assignment Code
var generateBtn = document.querySelector("#generate");

// 
// make character arrays

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "-", "=", "_"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// prompt user to pick what type of characters they want

window.alert("Hey! Let's make a password");

var numChar = window.prompt("How many characters do you want to have?")
var addLowerCase = window.confirm("Do you want to add lower case letters?");
var addUppercase = window.confirm("Do you want to add upper case letters?");
var addSpecial = window.confirm("Do you want to add special characters?");
var addnumbers = window.confirm("Do you want to add numbers to your password?");

// add password combinations

if (numChar < 8 || > 128){
  window.alert("Password must be at least 8 Characters and no more than 128")
  writePassword();
} 
else if (addLowerCase && addUppercase && addSpecial && addnumbers) {
  var mixPassword = lowerCase.concat(UpperCase, specialChars, numbers);
  console.log(mixPassword)
} 
else if (addLowerCase && addSpecial && addnumbers) {
  var mixPassword = lowerCase.concat(specialChars, numbers);
}
else if (addLowerCase && addUppercase && addnumbers) {
  var mixPassword = lowerCase.concat(UpperCase, numbers);
  console.log(mixPassword)
} 
else if (addLowerCase && addUppercase && addSpecial) {
  var mixPassword = lowerCase.concat(UpperCase, specialChars);
  console.log(mixPassword)
} 
else if (addLowerCase && addUppercase && addSpecial && addnumbers) {
  var mixPassword = lowerCase.concat(UpperCase, specialChars, numbers);
  console.log(mixPassword)
} 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
