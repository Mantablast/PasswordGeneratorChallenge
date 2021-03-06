// Assignment code here

function obtainInfo() {
    //First, ask the user how long they would like the password to be with a prompt (have them choose between 8 and 128)
    var passLength = parseInt(prompt("How many characters would you like your password to have? (Minumum 8 to Maxumum 128)")) 
    while(typeof passLength !== Number) { 
        prompt("Oops! No number was entered.  Try again!"); 
    } 
    // while(passLength < 8 || passLength > 128) {
    //     prompt("Number of characters must be between 8 and 128.  Try again!");
    // }
    charType(passLength);
};


function charType(passLength) {
//Ask user if they want to use upper and lower case characters
    var passwordUpper = confirm("Do you want upper case letters in your password?  If YES, click OK")
    var passwordLower = confirm("Do you want lower case letters in your password?  If YES, click OK")
    var passwordNum = confirm("Do you want numbers in your password?  If YES, click OK")
    var passwordSpec = confirm("Do you want special characters in your password?  If YES, click OK")
    //Validate all answers
    validateWndow({
        passwordUpper,
        passwordLower,
        passwordNum,
        passwordSpec,
        passLength
    });
};

// Display a validation alert of what the user has requested********
function validateWndow(userChoices) {
    alert("You have selected a password " + userChoices.passLength + " characters in length, using the following: /r/n Uppercase: " + userChoices.passwordUpper + "Lowercase: " + userChoices.passwordLower + "\r\n Number: " + userChoices.passwordNum + "/r/nSpecial Characters: " + userChoices.passwordSpec)
    writePassword(userChoices);
};

//Validate selections

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(userChoices) {
  var password = generatePassword(userChoices);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", obtainInfo);
