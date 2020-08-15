// Prompts //





// Randomly Selected Variables //

var lowercasearray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercasearray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbersarray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialarray = ["!", "@", "#", "%", "^", "&", "*", "(", ")", "_", "-", "?", ">", "<", "/" ]

// FUNCTIONS //

function getpasswordoptions() {
    var length = prompt("How many characters would you like your password to be? Must be between 8 and 128")
    if (length < 8) {
        alert("Please choose a number greater than 7")
        return
    }
    if (length > 128) {
        alert("No, something you can remember...")
        return
    }
    var lowercase = confirm("Would you like to use lowercase letters? Yes (ok) or No (cancel)");
    var uppercase = confirm("Would you like to use uppercase letters? Yes (ok) or No (cancel)");
    var numbers = confirm("Would you like to use numbers? Yes (ok) or No (cancel)?");
    var special = confirm("Would you like to use special characters, Yes (ok) or No (cancel)");


    // MAKING SURE THEY CHOOSE AT LEAST 1 CHARACTER TYPE //
    if (
        lowercase === false &&
        uppercase === false &&
        numbers === false &&
        special === false
    ) {
        alert("Please select something....")
        return

    }
    // STORE ANSWER TO OBJECT //

    var passwordoptions = {
        length: length,
        haslowerchar: lowercase,
        hasupperchar: uppercase,
        hasnumbers: numbers,
        hasspecialchar: special

    }
    console.log(passwordoptions)
    return passwordoptions


}

function getrandom(arr) {
    // Makes Random Number
    var randIndex = Math.floor(Math.random() * arr.length)
    // Selects random character from 
    var randChar = arr[randIndex]
    return randChar
}

// Assignment Code
var generateBtn = document.querySelector("#button");

// Write password to the #password input
function writePassword() {
    var options = getpasswordoptions();
    var result = [""]
    var possiblechar = [""]
    var guaranteechar = [""]
    
    // Running through each charset to grab random char //
    if (options.haslowerchar) {
        possiblechar = possiblechar.concat(lowercasearray)
        guaranteechar.push(getrandom(lowercasearray))

    }

    if (options.hasupperchar) {
        possiblechar = possiblechar.concat(uppercasearray)
        guaranteechar.push(getrandom(uppercasearray))
    }

    if (options.hasnumbers) {
        possiblechar = possiblechar.concat(numbersarray)
        guaranteechar.push(getrandom(numbersarray))
    }

    if (options.hasspecialchar) {
        possiblechar = possiblechar.concat(specialarray)
        guaranteechar.push(getrandom(specialarray))
    }

    // Adds randomchar to final result until reaches desired password length //
    for (var i = 0; i<options.length; i++){
        var randomchar = getrandom(possiblechar)
        result.push(randomchar)
    }
    // Adds guaranteechar has at least one of each lower and upper //
    for (var i = 0; i < guaranteechar.length; i++) {
        result[i] = guaranteechar[i]
    }
    

    // 


    var passwordText = document.querySelector("#password");
    passwordText.value = result.join("");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

