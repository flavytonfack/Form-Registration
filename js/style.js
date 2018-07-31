// VALIDATE FORM FUNCTION

function validateForm() {

    //SELECTING ALL TEXT ELEMENTS

    var firstname = document.forms['myForm']['firstname'];
    var lastname = document.forms['myForm']['lastname'];
    var address = document.forms['myForm']['address'];
    var city = document.forms['myForm']['city'];
    var state = document.forms['myForm']['state'];
    var zip = document.forms['myForm']['zip'];
    var education = document.forms['myForm']['education'];
    var phone = document.forms['myForm']['phone'];
    var email = document.forms['myForm']['email'];
    var password = document.forms['myForm']['password'];
    var confirmpassword = document.forms['myForm']['confirmpassword'];


//SETTING ALL ERROR DISPLAY ELEMENTS
    var firstname_Error = document.getElementById('firstname_Error');
    var lastname_Error = document.getElementById('lastname_Error');
    var address_Error = document.getElementById('address_Error');
    var city_Error = document.getElementById('city_Error');
    var state_Error = document.getElementById('state_Error');
    var zip_Error = document.getElementById('zip_Error');
    var education_Error = document.getElementById('education_Error');
    var phone_Error = document.getElementById('phone_Error');
    var email_Error = document.getElementById('email_Error');
    var password_Error = document.getElementById('password_Error');


//SETTING ALL EVENT LISTENERS

    firstname.addEventListener('blur', firstnameVerify, true);
    lastname.addEventListener('blur', lastnameVerify, true);
    address.addEventListener('blur', addressVerify, true);
    city.addEventListener('blur', cityVerify, true);
    state.addEventListener('blur', stateVerify, true);
    zip.addEventListener('blur', zipVerify, true);
    education.addEventListener('blur', educationVerify, true);
    phone.addEventListener('blur', phoneVerify, true);
    email.addEventListener('blur', emailVerify, true);
    password.addEventListener('blur', passwordVerify, true);



    //validate first name
    if (firstname.value == "") {
        firstname.style.border = "1px solid red";
        firstname.textContent = "First Name is required";
        firstname.focus();
        return false;
    }

    //validate last name
    if (lastname.value == "") {
        lastname.style.border = "1px solid red";
        lastname_Error.textContent = "Last Name is required";
        lastname.focus();
        return false;
    }


    //validate first name length
    if (firstname.value.length > 40) {
        firstname.style.border = "1px solid red";
        firstname_Error.textContent = "First Name must be up to 40 characters";
        firstname.focus();
        return false;
    }

    //validate last name length
    if (lastname.value.length > 40 ) {
        lastname.style.border = "1px solid red";
        lastname_Error.textContent = "Last Name must be up to 40 characters";
        lastname.focus();
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
    if (education.value == "") {
        education.style.border = "1px solid red";
        education_Error.textContent = "Education Level is required";
        education.focus();
        return false;
    }

    //validate phone number
    if (phone.value == "") {
        phoneNumber.style.border = "1px solid red";
        phoneNumber_Error.textContent = "Phone number is required";
        phoneNumber.focus();
        return false;
    }

    //validate phone number length
    if (phone.length > 7) {
        phone.style.border = "1px solid red";
        phone_Error.textContent = "Phone number must be up to 7 digit numbers";
        phone.focus();
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
        confirmpassword.style.border = "1px solid red";
        password_Error.textContent = "Password is required";
        password.focus();
        return false;
    }

    //check if the two passwords match
    if (password.value != confirmpassword.value) {
        password.style.border = "1px solid red";
        confirmpassword.style.border = "The two passwords do not match";
        return false;
    }

    return true;

}


//EVENT HANDLER FUNCTIONS

function firstnameVerify() {
    // if (firstname.value != "") {
        firstname.style.border = "1px solid #8ec127";
        firstname_Error.innerHTML = "";
        return true;
    // }
}

function lastnameVerify() {
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

function educationVerify() {
    if (educationLevel.value != "") {
        educationLevel.style.border = "1px solid #8ec127";
        educationLevel_Error.innerHTML = "";
        return true;
    }
}

function phoneVerify() {
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

    if (password.value === confirmpassword.value) {
        password.style.border = "1px solid #8ec127";
        password_Error.innerHTML = "";
        return true;
    }

}






















