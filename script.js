// Assignment code here


function obtainInfo() {
    //First, ask the user how long they would like the password to be with a prompt (have them choose between 8 and 128)
    var passLength = parseInt(prompt("How many characters would you like your password to have? (Minumum 8 to Maxumum 128)"),10);
    if (!passLength) {
        alert("Oops! No number was entered.  Try again!");
    }
    else if(isNaN(passLength) === true || passLength === "" || passLength === null || passLength < 8 || passLength > 128) { 
        prompt("Oops! No number was entered or input does not match criteria.  Try again!")
    } 
    alert("Thank you, please select from the following character types.")
    console.log("obtain info function");
    console.log("Password Length " + passLength);
    charType(passLength);
};


function charType(passLength) {
//Ask user if they want to use upper and lower case characters
    var passwordUpper = confirm("Do you want upper case letters in your password?  If YES, click OK")
    var passwordLower = confirm("Do you want lower case letters in your password?  If YES, click OK")
    var passwordNum = confirm("Do you want numbers in your password?  If YES, click OK")
    var passwordSpec = confirm("Do you want special characters in your password?  If YES, click OK")
    console.log("Uppercase Letters: " + passwordUpper)
    console.log("Lowercase Letters: " + passwordLower)
    console.log("Numbers: " + passwordNum)
    console.log("Special Characters: " + passwordSpec)
    // Validate all answers,  assigns as property
    validateWndow(
        passwordUpper,
        passwordLower,
        passwordNum,
        passwordSpec,
        passLength
    );
};

//Lay out the arrays of characters to be randomely selected from
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseChars = lowerCaseChars.map(function(x){ return x.toUpperCase(); })
var numberChars = ["1","2","3","4","5","6","7","8","9","0"]
var specialChars = ["!","#","$","%","^","&","*","(",")","","-","+","<",">",",","?","/",";",":","'","@","_"]
var userSelection;

function validateWndow(passwordUpper, passwordLower, passwordNum, passwordSpec, passString, passLength) {
    alert("You have selected a password " + passLength + " characters in length, using the following:  \r\nUppercase: " + validateWndow.passwordUpper + "\r\nLowercase: " + validateWndow.passwordLower + "\r\nNumber: " + validateWndow.passwordNum + "\r\nSpecial Characters: " + validateWndow.passwordSpec);
    //4 false options alert
    if(!passwordUpper && !passwordLower && !passwordNum && !passwordSpec) {
        alert("At least 2 character type options must be selected.  Try again.")
        charType();
    }
    //All 4 selected
    else if(passwordUpper && passwordLower && passwordNum && passwordSpec) {
        var userChoices = upperCaseChars.concat(lowerCaseChars, numberChars, specialChars);
    }
    //If 3 char type options are selected
    else if(passwordUpper && passwordLower && passwordNum) {
        var userChoices = lowerCaseChars.concat(upperCaseChars, numberChars);
    }
    else if(passwordUpper && passwordLower && passwordSpec) {
        var userChoices = upperCaseChars.concat(lowerCaseChars, specialChars);
    }
    else if(passwordLower && passwordNum && passwordSpec) {
        var userChoices = lowerCaseChars.concat(numberChars, specialChars);
    }
    else if(passwordUpper && passwordNum && passwordSpec) {
        var userChoices = upperCaseChars.concat(numberChars, specialChars);
    }
    // 2 options selected  *I think there is probably an easier way to do this
    else if(passwordUpper && passwordLower) {
        var userChoices = passwordUpper.concat(passwordLower);
    }
    else if(passwordUpper && passwordNum) {
        var userChoices = upperCaseChars.concat(numberChars);
    }
    else if(passwordUpper && passwordSpec) {
        var userChoices = upperCaseChars.concat(specialChars);
    }
    else if(passwordLower && passwordNum) {
        var userChoices = lowerCaseChars.concat(numberChars);
    }
    else if(passwordLower && passwordSpec) {
        var userChoices = lowerCaseChars.concat(specialChars);
    }
    else if(passwordNum && passwordSpec) {
        var userChoices = numberChars.concat(specialChars);
    }  
//     else {
//         alert("At least 2 character type options must be selected.  Try again.");
//         charType();
//     }
var passString = userChoices.join("");
console.log(passString);
writePassword(passString, passLength);
};

function writePassword(passwordChars, passLength) {
    var password = "";

    for (var i = 0; i < passLength; i++) {
        password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
    }
    console.log(password)
};
// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// function writePassword(password) {
// var password = generatePassword(createdPassword);
// var passwordText = document.querySelector("#password");
// if(createdPassword = true ) {
//     passwordText.value = password;
// }
// };




// Add event listener to generate button
document.getElementById("generate").addEventListener("click", obtainInfo);
