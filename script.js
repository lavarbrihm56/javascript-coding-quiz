// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // GOOGLE!!!

  // Create arrays for lowercase, uppercase, numbers, and special
  // Create password variable that is an empty string

  // Ask the user how many character should be in the password (between 8 and 128)
  // Ask the user if they want lowercase characters
  // - If they answer yes, add lowercase array to big options array
  // Ask the user if they want uppercase characters
  // Ask the user if they want numbers
  // Ask the user if they want special characters

  // Create a big options array, based on what the user wants. [a, b, c, 1, 2, 3]
  // Based on the number the user gave us in the first question, create a password that matches the answer
  // - FOR LOOP over the number that the user gave us
  //  -- Select a random value from the options array
  //  -- Add random value to the password variable (password += randomValue)
  // return the password variable
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
