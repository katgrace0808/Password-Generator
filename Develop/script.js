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

// Function to generate the password
function generatePassword() {
  let passwordLength = prompt("Enter number of characters for your password.");
// If/else statement to ensure user selects a password length from 8-128 characters.  
  if (passwordLength < 8) {
    alert("Password must be at least 8 characters long.");
    return undefined;
  } else if (passwordLength > 128) {
    alert("Password must be at most 128 characters long.");
    return undefined;
  }   
// Statements to confirm what characters the end user wants.  
  let numeric = confirm("Do you want numeric characters?");
  let alphaLower = confirm("Do you want lowercase letters?");
  let alphaUpper = confirm("Do you want uppercase letters?");
  let specialChar = confirm("Do you want special characters?");

// A way to ensure user selects at least one character  
  if (numeric == false && alphaLower == false && alphaUpper == false && specialChar == false) {
    alert("You must select at least one character.");
  }

  // Arrays to get characters to use in password.  
    let numericArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let alphaLowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let alphaUpperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    let combinedArr = [];
     
    // For loops to get random characters from each array.
    
    if (numeric === true) {
      for (let i = 0; i < numericArr.length; i++) {
        const numRandom = numericArr[Math.floor(Math.random() * numericArr.length)];
        combinedArr.push(numRandom);
      }
    }
    if (alphaLower === true) {
      for (let i = 0; i < alphaLowerArr.length; i++) {
        const lowerRandom = alphaLowerArr[Math.floor(Math.random() * alphaLowerArr.length)];
        combinedArr.push(lowerRandom);
      }
    }
    if (alphaUpper === true) {
      for (let i = 0; i < alphaUpperArr.length; i++) {
        const upperRandom = alphaUpperArr[Math.floor(Math.random() * alphaUpperArr.length)];
        combinedArr.push(upperRandom);
      }
    }
    if (specialChar === true) {
      for (let i = 0; i < specialCharArr.length; i++) {
        const specialRandom = specialCharArr[Math.floor(Math.random() * specialCharArr.length)];
        combinedArr.push(specialRandom);
      }
    }
}