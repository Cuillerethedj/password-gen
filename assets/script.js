    var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var specialCharacters = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ',', '^', '_', '`', '{', '}', '|', '~', '"'];
    var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var superArray = []; //this is going to contain

    var generateBtn = document.querySelector('#generate');

    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector('#password');
        passwordText.value = password;
    }
    generateBtn.addEventListener('click', writePassword);

    function generatePassword() {
        var welcomeMsg = prompt('Welcome to password generator wizard! wanna play?');
        console.log(welcomeMsg);

        if (welcomeMsg === true) {
            console.log('Yes you love the wizard do you want to start');
        } else {
            console.log('Awesome');
        }
        var lengthMsg = parseInt(prompt('please enter the length of characters you would like for your password, it must be more than 8 and less than 128'))
        console.log(lengthMsg);
        if ((lengthMsg >= 9 && lengthMsg <= 128) && (!isNaN(lengthMsg))) {
            console.log('Yahoo, you did it');
        } else {
            console.log('not magical');
            alert('this needs to be a number between 9 and 128 please submit again or I\'ll close your window');
        }
        var uppercaseMsg = confirm('do you want to include UPPERCASE characters in your password?');
        console.log(uppercaseMsg);
        if (uppercaseMsg === true) {
            console.log('cool add in UPPERCASE characters');
            superArray = superArray.concat(uppercaseArray);
        } else {
            console.log('too bad, UPPERCASE is cool');
        }
        var lowercaseMsg = confirm('do you want to include lowercase characters in your password?');
        console.log(lowercaseMsg);
        if (lowercaseMsg === true) {
            console.log('cool add in lowercase characters');
            // now we need to concat the lowerCase
            superArray = superArray.concat(lowercaseArray);
        } else {
            console.log('too bad, lowercase is cool');
        }
        // when want need number 
        var numberMsg = confirm('do you want to include numbers in your password?');
        console.log(numberMsg);
        if (numberMsg === true) {
            console.log('cool add in numbers');
            superArray = superArray.concat(number);
        } else {
            console.log('too bad, numbers are cool');
        }
        var specialCharMsg = confirm('do you want to include special !@#$%^&() characters in your password?');
        console.log(specialCharMsg);
        if (specialCharMsg === true) {
            superArray = superArray.concat(specialCharacters);
            console.log('cool add in special !@#$%^&() characters');
        } else {
            console.log('too bad, special !@#$%^&*() are really cool');
        }




        var password = '' //this is the is going to be a randomly stored

        for (var index = 0; index < lengthMsg; index++) {

            var randomNumber = Math.floor(Math.random() * superArray.length);
            password += superArray[randomNumber]



        }

        return password;

    }