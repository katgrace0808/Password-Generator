// Assignment Code
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

let characterArray = "!@#$%^&*()";

function generatePassword() {
  let passwordLength = prompt("Enter number of characters for your password.");
  if (passwordLength < 8) {
    alert("Password must be at least 8 characters long.");
    return undefined;
  } else if (passwordLength > 128) {
    alert("Password must be at most 128 characters long.");
    return undefined;
  } else {
    function generatePassword() {
      let passwordLength = prompt("Enter number of characters for your password.");
    }
  }
  let numeric = confirm("Do you want numeric characters?");
  let alphaLower = confirm("Do you want lowercase letters?");
  let alphaUpper = confirm("Do you want uppercase letters?");
  let specialChar = confirm("Do you want special characters?");

  if (numeric == false && alphaLower == false && alphaUpper == false && specialChar == false) {
    alert("You must select at least one character.");
  } 
   let stringArray = {
      numericString: function() {
        return String.fromCharCode(Math.floor(Math.random() * 10) +1);
      },
      lowercaseString: function() {
        return String.fromCharCode(Math.random(String.fromCharCode() * 26 + 97));
      },
      uppercaseString: function() {
        return String.fromCharCode(Math.random(String.fromCharCode() * 26 + 65));
      },
      specialCharString: function() {
        return characterArray[(Math.random() * characterArray.length)];
      }
   };
    let numericMinimum = "";
    let lowercaseMinimum = "";
    let uppercaseMinimum = "";
    let specialCharMinimum = "";

   if (numeric === true) {
     numericMinimum = stringArray.numericString();
   }
   if (alphaLower === true) {
     lowercaseMinimum = stringArray.lowercaseString();
   }
   if (alphaUpper === true) {
     uppercaseMinimum = stringArray.uppercaseString();
   }
   if (specialChar === true) {
     specialCharMinimum = stringArray.specialCharString();
   }
   
    let randomPassword = "";    
      
    for (let i = 0; i < passwordLength; i++) {
      let randomNumberPicked = Math.floor(Math.random() * passwordLength);

    randomPassword += randomNumberPicked;
   }

    randomPassword += numericMinimum;
    randomPassword += lowercaseMinimum;
    randomPassword += uppercaseMinimum;
    randomPassword += specialCharMinimum;

   return randomPassword;
  }