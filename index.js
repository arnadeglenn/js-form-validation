const email = document.querySelector('.email');
const country = document.querySelector('.country');
const zipCode = document.querySelector('.zip-code');
const password = document.querySelector('.password');
const passwordConfirm = document.querySelector('.password-confirm');
const button = document.querySelector('.button');
const emailError = document.querySelector('.email-error');
const countryError = document.querySelector('.country-error');
const zipError = document.querySelector('.zip-error');
const passwordError = document.querySelector('.password-error');
const matchError = document.querySelector('.match-error');

email.addEventListener('input', (e) => {
    showError(email, emailError, 'email');
});

country.addEventListener('input', (e) => {
    showError(country, countryError, 'country');
});

zipCode.addEventListener('input', (e) => {
    showZipError(zipError);
    console.log("hello")
});

password.addEventListener('input', (e) => {
    setPassword();
});

passwordConfirm.addEventListener('input', (e) => {
    passwordMatch(matchError);
});

button.addEventListener('submit', (e) => {
    e.preventDefault();
})

const showError = function(inputType, inputError, question) {
    if (inputType.validity.valueMissing) {
        inputError.textContent = "You must enter something";
        inputError.classList.add('active');
    } else if (inputType.validity.typeMismatch) {
        inputError.textContent = `Input must be a ${question}`;
        inputError.classList.add('active');
    } else if (inputType.validity.valid) {
        inputError.classList.remove('active');
        inputError.textContent = "";
    }

}

const validZip = /^\d{5}(?:\d{4})?$/;

const showZipError = function(inputError) {
    if (!validZip.test(zipCode.value)) {
        inputError.textContent = "You must enter a valid zip";
        inputError.classList.add('active');
    } else if (validZip.test(parseInt(zipCode.value))) {
        inputError.textContent = "";
        inputError.classList.remove('active');
    }
};

let passwordValue

const setPassword = function() {
    passwordValue = password.value;
};

const passwordMatch = function(inputError) {
    let passwordTest = passwordConfirm.value
    
    if (passwordValue !== passwordTest) {
        inputError.textContent = "Passwords must match!";
        inputError.classList.add('active');
    } else {
        inputError.textContent = "";
        inputError.classList.remove('active');
    }   
}

