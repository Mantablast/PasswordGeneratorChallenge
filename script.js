// Assignment code here
function obtainInfo(){
  //First, ask the user how long they would like the password to be with a prompt (have them choose between 8 and 128)
  var passLength = prompt("How many characters would you like your password to have? (Minumum 8 to Maxumum 128)");
//Second, ask the user what kinds of characters they would like to have included in their password (minimum 1 selected)
//Validate selections
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// document.getElementById("generate").addEventListener("click", obtainInfo());
document.getElementsById("generate").addEventListener("click", obtainInfo());
// generateBtn.addEventListener("click", obtainInfo());
