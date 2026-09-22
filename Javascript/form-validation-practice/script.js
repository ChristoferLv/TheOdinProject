console.log("script")



const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const confirmPassword = document.querySelector("#passwordConfirm");
const confirmPasswordError = document.querySelector("#confirmPasswordError");

const country = document.querySelector("#country");
const postalCode = document.querySelector("#postalcode");
const postalCodeError = document.querySelector("#postalCodeError");

// Regular expression for email validation as per HTML specification
const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
const passwordRegExp = /^[a-zA-Z0-9]{3,}$/;

// Check if the email is valid
const isValidEmail = () => {
    const validity = email.value.length !== 0 && emailRegExp.test(email.value);
    return validity;
};

const isValidPassword = () => {
    const validity = password.value.length > 0 && passwordRegExp.test(password.value);
    return validity;
};

const checkPasswordsEqual = () => {
    const validity = password.value == confirmPassword.value;
    return validity;
};


function checkPostalCode() {
    // For each country, defines the pattern that the postal code has to follow
    const constraints = {
        ch: [
            "^(CH-)?\\d{4}$",
            "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
        ],
        fr: [
            "^(F-)?\\d{5}$",
            "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
        ],
        de: [
            "^(D-)?\\d{5}$",
            "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
        ],
        nl: [
            "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
            "Dutch postal codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
        ],
    };

    // Read the country id
    const selectedCountry = country.value;

    // Build the constraint checker
    const constraint = new RegExp(constraints[selectedCountry][0], "");
    const regexTest = constraint.test(postalCode.value);
    // Check it!
    return { result: regexTest, message: constraints[selectedCountry][1] };


}


// Update email input class based on validity
const setClass = (isValid, element) => {
    element.className = isValid ? "valid" : "invalid";
};

// Update error message and visibility
const updateError = (isValid) => {
    if (isValid) {
        emailError.textContent = "";
        emailError.removeAttribute("class");
    } else {
        emailError.textContent = "Email is not on the correct format. email@example.com";
        emailError.setAttribute("class", "active");
    }
};

const updatePasswordError = (isValid, errorMessage) => {
    if (isValid) {
        passwordError.textContent = "";
        passwordError.removeAttribute("class");
    } else {
        passwordError.textContent = errorMessage;
        passwordError.setAttribute("class", "active");
    }
};

const updateConfirmPasswordError = (isValid, errorMessage) => {
    if (isValid) {
        confirmPasswordError.textContent = "";
        confirmPasswordError.removeAttribute("class");
    } else {
        confirmPasswordError.textContent = errorMessage;
        confirmPasswordError.setAttribute("class", "active");
    }
};

const updatePostalCodeError = (isValid, errorMessage) => {
    if (isValid) {
        postalCodeError.textContent = "";
        postalCodeError.removeAttribute("class");
    } else {
        postalCodeError.textContent = errorMessage;
        postalCodeError.setAttribute("class", "active");
    }
};

// Handle input event to update email validity
const handleEmailInput = () => {
    const validity = isValidEmail();
    setClass(validity, email);
    updateError(validity);
};

const handlePasswordInput = () => {
    const validity = isValidPassword();
    setClass(validity, password);
    updatePasswordError(validity, "Password must have at least 8 characters, including letters and numbers.");
    handleConfirmPasswordInput();
};

const handleConfirmPasswordInput = () => {
    if (confirmPassword.value.length > 0) {
        const validity = checkPasswordsEqual();
        setClass(validity, confirmPassword);
        updateConfirmPasswordError(validity, "Password values must match.");
    }
};

const handlePostalCodeInput = () => {
    const { result, message } = checkPostalCode();
    setClass(result, postalCode);
    updatePostalCodeError(result, message);

};

// Handle form submission to show error if email is invalid
const handleSubmit = (event) => {
    event.preventDefault();
    const valid = isValidEmail() && isValidPassword() && checkPasswordsEqual() && checkPostalCode().result;
    if(!valid){
        alert("Fill the fields correctly.");
    }else{
        alert("Everything is correct 👍");
    }

};

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field

// This defines what happens when the user types in the field
email.addEventListener("input", handleEmailInput);
password.addEventListener("input", handlePasswordInput)
confirmPassword.addEventListener("input", handleConfirmPasswordInput)
postalCode.addEventListener("input", handlePostalCodeInput)
country.addEventListener("change", handlePostalCodeInput)

// This defines what happens when the user tries to submit the data
form.addEventListener("submit", handleSubmit);