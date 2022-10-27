// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let doesRepeat = /(.).*\1/.test(alphabet);
    if (doesRepeat) return false;        //return false if alphabet1 repeats 
    if (!alphabet || alphabet.length > 26 || alphabet.length < 26) return false;    //return false if alphabet is not 26 characters
    let alphabetLower = alphabet.toLowerCase()       //lower case alphabet for edge cases
    const alpha1 = alphabetLower.split("");        //alphabet 
    const alpha2 = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    function comparer(alpha1, alpha2){       // function to compare one alpha vs the other
      let result = ""
      let message = input.toLowerCase()
      for (let t=0;t<message.length; t++){
        let letter = message[t]
        if (letter.match(/[^ ]/)){
        let num = alpha1.indexOf(letter)
        result += alpha2[num]
      }else{
        result += letter
      }
    }
    return result
    }
    if (encode){
      let final = comparer(alpha2, alpha1)
      return final
    }else{
      let final = comparer(alpha1, alpha2)
      return final
    }
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
