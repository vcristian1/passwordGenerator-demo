// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // 1. prompt user for password and store in variable
  let passwordLength = prompt("How many characters do you want your password to be?") * 1

    // 2. make sure password is at least 8 and no more than 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8-128 characters!")
        passwordLength = prompt("How many characters do you want your password to be?") * 1
    } 

  // 3. prompt to ask user if we should include uppercase, lowercase, numeric, and special characters
  let useUppercase = confirm('Would you like to include uppercase in your password?')
  let useNumeric = confirm("Would you like to include a number in your password?")
  let useSpecialCharacter = confirm("Would you like to include special characters in your password?")
  
  // Check to make sure at least 1 is selected
    if (!useUppercase && !useNumeric && !useSpecialCharacter) {
      alert("You must select at least one!")
      useUppercase = confirm('Would you like to include uppercase in your password?')
      useNumeric = confirm("Would you like to include a number in your password?")
      useSpecialCharacter = confirm("Would you like to include special characters in your password?")
    }

  // 4. create random password using variables above
  let generatedPassword = ""
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let numbers = '0123456789'
  let specialCharacters = '!@#$%'
  
  // if there's something in passwordLength then run loop
  if (passwordLength) {
    // create a `for loop` that only runs `passwordLength` amount of times
    for (let i = 0; i < passwordLength; i++) {
      // create a random number based on how many characters are in the alphabet
      let randomNumber = Math.floor(Math.random() * alphabet.length);
      // get random letter
      let randomLetter = alphabet.substring(randomNumber, randomNumber + 1)
      // add random letter to whatever is in `generatedPassword`
      generatedPassword += randomLetter
    }
  } 
  
  if (useUppercase) {
    // add a random uppercase letter to `generatedPassword` 
    generatedPassword = generatedPassword[0].toUpperCase() + generatedPassword.substring(1)
  }
  
  if (useNumeric) {
    // add a random number to `generatedPassword`
    let randomNumber = Math.floor(Math.random() * numbers.length);
    generatedPassword += randomNumber
  }

  if (useSpecialCharacter){
    // add a random special character to `generatedPassword` 
    let specialCharacters = '!@#$%'
    generatedPassword += specialCharacters[1]
  }
  // 5. return random password
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");  // This holds a textarea

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

