let lowercase = "abcdefghijklmnopqrstuvwxyz";
let specialCharacter = "!@#$%^&*()_+-={}|";
let numbers = "0123456789";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let userChoice = "";
let passwordText = document.querySelector("#password");



function generatePassword() {
  let charactersPassword = "";
  let passwordLength = parseInt(prompt(" please choose length of password (must be between 8 and 128 characters)?"));
  console.log("passwordlength", passwordLength)
  if (!passwordLength) {
    alert("you must select a number between 8 and 128")
    return;
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("you must select a number between 8 and 128")
    return;
  } else {

    // creating a variable that will ask if they want the specific characters in their password...it will return a true or false
    var littleLetters = window.confirm("Would you like lowercase letters in your password?")
    //console.log(littleLetters)
    var bigLetters = window.confirm("Woud you like uppercase letters in your password?")
   // console.log(bigLetters)
    var nums = window.confirm("Would you like numbers in your password?")
    var specialChar = window.confirm("Would you like special Characters in your password?")
    // if the confirm is 'true' then we are adding our lowercase variable to our userChoice variable
    if (littleLetters === true) {
      userChoice += lowercase;
    }
    if (bigLetters === true) {
      userChoice += upperCase;
    }
    if (nums === true) {
      userChoice += numbers
    }
    if (specialChar === true) {
      userChoice += specialCharacter
    }

    console.log("userchoices", userChoice)

    // were looping thru "passwordLength" so it will loop thru as many times as the length of the password that the user chose
    for (let i = 0; i < passwordLength; i++) {
      // we're taking userChoice.length which will give us the number of characters in userChoice and multiplying it by a random number
      let password = Math.floor(userChoice.length * Math.random())
      // were taking the empty string var of "CharactersPassword and everytime thru the loop adding userCHoice and using .charAt with our password variable inside to get the random indexes of the userChoice string and add them to charactersPassword"
      charactersPassword += userChoice.charAt(password);
      //console.log(charactersPassword)
    }




  }
  

  passwordText.value = charactersPassword;
  
  

}



// Add event listener to generate button
var generateBtn = document.getElementById('generate')
generateBtn.addEventListener("click", generatePassword);
