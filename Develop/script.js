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

function generatePassword() {
  let passwordLength = prompt("Enter number of characters for your password.");
  if (passwordLength < 8) {
    alert("Password must be at least 8 characters long.");
    return undefined;
  } else if (passwordLength > 128) {
    alert("Password must be at most 128 characters long.");
    return undefined;
  } 
  
  let numeric = confirm("Do you want numeric characters?");
  let alphaLower = confirm("Do you want lowercase letters?");
  let alphaUpper = confirm("Do you want uppercase letters?");
  let specialChar = confirm("Do you want special characters?");

  if (numeric == false && alphaLower == false && alphaUpper == false && specialChar == false) {
    alert("You must select at least one character.");
  } 
    let randomPassword = "";
    let numericArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let alphaLowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let alphaUpperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    


    // Generator functions
    
    function getRandomNumeric() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    function getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    function getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    function getRandomSpecial() {
      const special = '!@#$%^&*()'
      return special[Math.floor(Math.random() * special.length)];
    }
  
    
    // for (let i = 0; i < numericArr.length; i++) {
    //   const numRandom = numericArr[Math.floor(Math.random() * numericArr.length)];
    // }
    // for (let i = 0; i < alphaLowerArr.length; i++) {
    //   const lowerRandom = alphaLowerArr[Math.floor(Math.random() * alphaLowerArr.length)];
    // }
    // for (let i = 0; i < alphaUpperArr.length; i++) {
    //   const upperRandom = alphaUpperArr[Math.floor(Math.random() * alphaUpperArr.length)];
    // }
    // for (let i = 0; i < specialCharArr.length; i++) {
    //   const specialRandom = specialCharArr[Math.floor(Math.random() * specialCharArr.length)];
    // }

    

    // for (let i = 0; i < passwordLength.length; i++) {
    //   combinedArr[Math.floor(Math.random() * passwordLength.length)];
    // }
    // randomPassword += combinedArr

    return randomPassword
    }

  
   
  