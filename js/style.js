// VALIDATE FORM FUNCTION

function validateForm() {

    //SELECTING ALL TEXT ELEMENTS

    var firstName = document.forms['myForm']['FirstName'];
    var lastName = document.forms['myForm']['LastName'];
    var address = document.forms['myForm']['Address'];
    var city = document.forms['myForm']['City'];
    var state = document.forms['myForm']['State'];
    var zip = document.forms['myForm']['Zip'];
    var educationLevel = document.forms['myForm']['EducationLevel'];
    var income = document.forms['myForm']['Income'];
    var phoneNumber = document.forms['myForm']['PhoneNumber'];
    var email = document.forms['myForm']['Email'];
    var password = document.forms['myForm']['Password'];
    var confirmPassword = document.forms['myForm']['ConfirmPassword'];
    var checkbox = document.forms['myForm']['Checkbox'];

//SETTING ALL ERROR DISPLAY ELEMENTS
    var firstName_Error = document.getElementById('FirstName_Error');
    var lastName_Error = document.getElementById('LastName_Error');
    var address_Error = document.getElementById('Address_Error');
    var city_Error = document.getElementById('City_Error');
    var state_Error = document.getElementById('State_Error');
    var zip_Error = document.getElementById('Zip_Error');
    var educationLevel_Error = document.getElementById('EducationLevel_Error');
    var phoneNumber_Error = document.getElementById('PhoneNumber_Error');
    var email_Error = document.getElementById('Email_Error');
    var password_Error = document.getElementById('Password_Error');
    var checkbox_Error = document.getElementById('Checkbox_Error');

//SETTING ALL EVENT LISTENERS

    firstName.addEventListener('blur', firstNameVerify, true);
    lastName.addEventListener('blur', lastNameVerify, true);
    address.addEventListener('blur', addressVerify, true);
    city.addEventListener('blur', cityVerify, true);
    state.addEventListener('blur', stateVerify, true);
    zip.addEventListener('blur', zipVerify, true);
    educationLevel.addEventListener('blur', educationLevelVerify, true);
    phoneNumber.addEventListener('blur', phoneNumberVerify, true);
    email.addEventListener('blur', emailVerify, true);
    password.addEventListener('blur', passwordVerify, true);
    checkbox.addEventListener('blur', checkboxVerify, true);



    //validate first name
    if (firstName.value == "") {
        firstName.style.border = "1px solid red";
        firstName_Error.textContent = "First Name is required";
        firstName.focus();
        return false;
    }

    //validate last name
    if (lastName.value == "") {
        lastName.style.border = "1px solid red";
        lastName_Error.textContent = "Last Name is required";
        lastName.focus();
        return false;
    }


    //validate first name length
    if (firstName.value.length > 40) {
        firstName.style.border = "1px solid red";
        firstName_Error.textContent = "First Name must be up to 40 characters";
        firstName.focus();
        return false;
    }

    //validate last name length
    if (lastName.value.length > 40 ) {
        lastName.style.border = "1px solid red";
        lastName_Error.textContent = "Last Name must be up to 40 characters";
        lastName.focus();
        return false;
    }

    //validate address
    if (address.value == "") {
        address.style.border = "1px solid red";
        address_Error.textContent = "Address is required";
        address.focus();
        return false;
    }

    //validate address length
    if (address.length > 40) {
        address.style.border = "1px solid red";
        address_Error.textContent = "Address must be up to 40 characters";
        address.focus();
        return false;
    }


    //validate city
    if (city.value == "") {
        city.style.border = "1px solid red";
        city_Error.textContent = "City is required";
        city.focus();
        return false;
    }

    //validate city length
    if (city.length > 40) {
        city.style.border = "1px solid red";
        city_Error.textContent = "City must be up to 40 characters";
        city.focus();
        return false;
    }


    //validate state
    if (state.value == "") {
        state.style.border = "1px solid red";
        state_Error.textContent = "State is required";
        state.focus();
        return false;
    }

    //validate state length
    if (state.length > 10) {
        state.style.border = "1px solid red";
        state_Error.textContent = "State must be up to 10 Characters";
        state.focus();
        return false;
    }



    //validate zip code
    if (zip.value == "") {
        zip.style.border = "1px solid red";
        zip_Error.textContent = "Zip code is required";
        zip.focus();
        return false;
    }

    //validate zip code length
    if (zip.length > 5) {
        zip.style.border = "1px solid red";
        zip_Error.textContent = "Zip code must be up to 5 digits";
        zip.focus();
        return false;
    }


    //validate education level
    if (educationLevel.value == "") {
        educationLevel.style.border = "1px solid red";
        educationLevel_Error.textContent = "Education Level is required";
        educationLevel.focus();
        return false;
    }

    //validate phone number
    if (phoneNumber.value == "") {
        phoneNumber.style.border = "1px solid red";
        phoneNumber_Error.textContent = "Phone number is required";
        phoneNumber.focus();
        return false;
    }

    //validate phone number length
    if (phoneNumber.length > 7) {
        phoneNumber.style.border = "1px solid red";
        phoneNumber_Error.textContent = "Phone number must be up to 7 digit numbers";
        phoneNumber.focus();
        return false;

    }


    //validate email
    if (email.value == "") {
        email.style.border = "1px solid red";
        email_Error.textContent = " Email is required";
        email.focus();
        return false;
    }

    //validate password
    if (password.value == "") {
        password.style.border = "1px solid red";
        confirmPassword.style.border = "1px solid red";
        password_Error.textContent = "Password is required";
        password.focus();
        return false;
    }

    //check if the two passowords match
    if (password.value != confirmPassword.value) {
        password.style.border = "1px solid red";
        confirmPassword.style.border = "The two passowrds do not match";
        return false;
    }

    return true;

}




//EVENT HANDLER FUNCTIONS

function firstNameVerify() {
    if (firstName.value != "") {
        firstName.style.border = "1px solid #8ec127";
        firstName_Error.innerHTML = "";
        return true;
    }
}

function lastNameVerify() {
    if (lastName.value != "") {
        lastName.style.border = "1px solid #8ec127";
        lastName_Error.innerHTML = "";
        return true;
    }
}

function addressVerify() {
    if (address.value != "") {
        address.style.border = "1px solid #8ec127";
        address_Error.innerHTML = "";
        return true;
    }
}

function cityVerify() {
    if (city.value != "") {
        city.style.border = "1px solid #8ec127";
        city_Error.innerHTML = "";
        return true;
    }
}

function stateVerify() {
    if (state.value != "") {
        state.style.border = "1px solid #8ec127";
        state_Error.innerHTML = "";
        return true;
    }
}

function zipVerify() {
    if (zip.value != "") {
        zip.style.border = "1px solid #8ec127";
        zip_Error.innerHTML = "";
        return true;
    }
}

function educationLevelVerify() {
    if (educationLevel.value != "") {
        educationLevel.style.border = "1px solid #8ec127";
        educationLevel_Error.innerHTML = "";
        return true;
    }
}

function phoneNumberVerify() {
    if (phoneNumber.value != "") {
        phoneNumber.style.border = "1px solid #8ec127";
        phoneNumber_Error.innerHTML = "";
        return true;
    }
}


function emailVerify() {
    if (email.value != "") {
        email.style.border = "1px solid #8ec127";
        email_Error.innerHTML = "";
        return true;
    }
}

function passwordVerify() {
    if (password.value != "") {
        password.style.border = "1px solid #8ec127";
        password_Error.innerHTML = "";
        return true;
    }

    if (password.value === confirmPassword.value) {
        password.style.border = "1px solid #8ec127";
        password_Error.innerHTML = "";
        return true;
    }

}






















