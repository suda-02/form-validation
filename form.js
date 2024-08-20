document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

  
    const fullName = document.getElementById('fullName').value;
    if (fullName.length < 5) {
        document.getElementById('fullNameError').innerText = "Name must be at least 5 characters.";
        isValid = false;
    } else {
        document.getElementById('fullNameError').innerText = "";
    }

   
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        document.getElementById('emailError').innerText = "Enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }

   
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber === "123456789" || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        document.getElementById('phoneError').innerText = "Enter a valid 10-digit phone number.";
        isValid = false;
    } else {
        document.getElementById('phoneError').innerText = "";
    }


    const city = document.getElementById('city').value;
    if (city.length < 2) {
        document.getElementById('cityError').innerText = "City name must be at least 2 characters.";
        isValid = false;
    } else {
        document.getElementById('cityError').innerText = "";
    }

    const state = document.getElementById('state').value;
    if (state.length < 2) {
        document.getElementById('stateError').innerText = "State name must be at least 2 characters.";
        isValid = false;
    } else {
        document.getElementById('stateError').innerText = "";
    }

    const country = document.getElementById('country').value;
    if (country.length < 2) {
        document.getElementById('countryError').innerText = "Country name must be at least 2 characters.";
        isValid = false;
    } else {
        document.getElementById('countryError').innerText = "";
    }


    const pinCode = document.getElementById('pinCode').value;
    if (pinCode.length !== 6 || isNaN(pinCode)) {
        document.getElementById('pinCodeError').innerText = "Enter a valid 6-digit pin code.";
        isValid = false;
    } else {
        document.getElementById('pinCodeError').innerText = "";
    }

    const password = document.getElementById('password').value;
    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
        document.getElementById('passwordError').innerText = "Password must be at least 8 characters and not be 'password' or your name.";
        isValid = false;
    } else {
        document.getElementById('passwordError').innerText = "";
    }

    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = "Passwords do not match.";
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').innerText = "";
    }

   
    if (isValid) {
        alert('Form submitted successfully!');
    }
});
