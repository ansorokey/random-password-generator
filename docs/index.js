// reference elements
const passwordBox = document.querySelector('#password');
const length = 12;

// I'd like to convert this into a much smaller regex
let alpha = 'abcdefghijklmnopqrstuvwxyz';
let upper = alpha.toUpperCase();
let nums = '1234567890';
let symbols = '!@#$%^&*()';
const acceptedCharacters = alpha + upper + nums + symbols;

function createPassword() {
    let newPassword = '';
    while(newPassword.length < length) {
        // The random generator in JS returns a float from 0 - 1
        // To set a range, multiply that number by the exclusive upper limit
        // and then round it down to an integer
        // ex 0.858 * 3 = 2.574 rouded down = 2
        // 0.001 * 3 = 0.003 rounded down = 0
        let randomIndex = Math.floor(Math.random() * acceptedCharacters.length);
        newPassword += acceptedCharacters[randomIndex];
    }

    passwordBox.value = newPassword;
}

function copyPassword() {
    // no need to copy if field is empty
    if(!passwordBox.value) return;

    // need this for the clipboard to work
    passwordBox.select();
    // document.execCommand('copy'); this is deprecated
    // use the following instead
    navigator.clipboard.writeText(passwordBox.value);
    window.alert('copied!')
}
