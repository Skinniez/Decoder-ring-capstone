// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift>25 || shift <-25){
      return false
    }
if (!encode) shift *=-1 //invert the shift if it is decoding
let message = input.toLowerCase()
let final = ""  // empty string to store final message
for (let t=0; t<message.length; t++){
  let letter = message.charAt(t)
  if (letter.match(/[a-z]/)) {        //if the letter is a letter in the alphabet
    let code = message.charCodeAt(t) +shift   
    if (code > 122){        // shift wrapping  
      code = code -26
    }
    if (code < 97){
      code = code +26    
    }
  let newLetter = String.fromCharCode(code)
  final += newLetter
  } else{
    final += letter
  }
}
console.log("********************************")
console.log(final)
return final
  }
  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
