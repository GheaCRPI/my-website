window.onload = function() {
    // Focus on the first input element when the window is loaded
    var firstInput = document.getElementById('firstName');
    if (firstInput) {
        firstInput.focus();
    }
};

function validate(formObj) {
    var errors = [];
    var msgs = "";

    var enteredValues = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        user: document.getElementById('user').value,
        pass: document.getElementById("pass").value,
        confirmPass: document.getElementById('confirmPass').value
    };

    if (enteredValues.firstName == "") {
        errors.push({
            elem: document.getElementById('firstName'),
            message: "First name must be filled"
        });
    }
    if (enteredValues.lastName == "") {
        errors.push({
            elem: document.getElementById('lastName'),
            message: "Last name must be filled"
        });
    }
    if (enteredValues.email == "") {
        errors.push({
            elem: document.getElementById('email'),
            message: "Email must be filled"
        });
    }
    if (enteredValues.user == "") {
        errors.push({
            elem: document.getElementById('user'),
            message: "Username must be filled"
        });
    }
    if (enteredValues.pass == "") {
        errors.push({
            elem: document.getElementById('pass'),
            message: "Password must be filled"
        });
    }
    if (enteredValues.confirmPass == "") {
        errors.push({
            elem: document.getElementById('confirmPass'),
            message: "Password confirmation must be filled"
        });
    }

    if (enteredValues.confirmPass != enteredValues.pass) {
        errors.push({
            elem: document.getElementById('confirmPass'),
            message: "Password and password confirmation do not match"
        });
    }


    for (var i = 0; i < errors.length; i++) {
        msgs += errors[i].message + "\n";
    }

    if (msgs != "") {
        alert(msgs);
        // Restore the entered values
        document.getElementById('firstName').value = enteredValues.firstName;
        document.getElementById('lastName').value = enteredValues.lastName;
        document.getElementById('email').value = enteredValues.email;
        document.getElementById('user').value = enteredValues.user;
        document.getElementById('pass').value = enteredValues.pass;
        document.getElementById('confirmPass').value = enteredValues.confirmPass;
        // Focus on the first empty box in the form
        errors[0].elem.focus();
        return false;
    } else {
        alert("Success!");
        return true;
    }
}

function handleFocus(element) {
    element.style.backgroundColor = '#c9ccfd';
    element.style.color = "black";
}

function handleBlur(element) {
    element.style.backgroundColor = '';
    element.style.color = 'black';
}