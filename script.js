// make character arrays

var lowerCase = 'abcdefghijklmnopqrstuvwxyz'; 
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChars = '!@#$%^&*-=+_';
var numbers = '1234567890';


// prompt user to make a password

window.alert("Hey! Let's make a password");



// add password combinations
function passGenerator() {
  var passArray = "";
  var password = "";

// if they dont put anything
  var numChar = window.prompt("How many characters do you want to have?");
  if (numChar === null) {
    return;
  }
  // if they dont put in a number
  if (isNaN(numChar)) {
    alert("Must be a number!")
  }
  // if it is too short or long
  if (numChar < 8 || numChar > 128) {
    alert("Must be at between 8 and 128 characters!");
    writePassword()
  }
// add character type conffirmation prompts
  var addLowerCase = window.confirm("Do you want to add lower case letters?");
  var addUppercase = window.confirm("Do you want to add upper case letters?");
  var addSpecial = window.confirm("Do you want to add special characters?");
  var addnumbers = window.confirm("Do you want to add numbers to your password?");

// combine combinations
  if (addLowerCase) {
    passArray = passArray.concat(lowerCase);
  }
  if (addUppercase) {
    passArray = passArray.concat(upperCase);
  }
  if (addSpecial) {
    passArray = passArray.concat(specialChars);
  }
  if (addnumbers) {
    passArray = passArray.concat(numbers);
  }
  // add alert if nothing was picked
  if (!addLowerCase && !addUppercase && !addSpecial && !addnumbers) {
    window.alert("You must select at least 1 option!")
    passGenerator();
  }
  // randomize characters for password
  for (var i = 0; i < numChar; i++) {
    var index = Math.floor(Math.random() * passArray.length);
    password += passArray.substring(index, index + 1);
  } 
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// add new password to the textbox\
function writePassword() {
  var masterPass = passGenerator();
  var passwordText = document.querySelector("#password");
  passwordText.value = masterPass;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
