window.onload = function() {
    // Focus on the first input element when the window is loaded
    var firstInput = document.getElementById('user');
    if (firstInput) {
        // Set focus to the username input when the window loads
        firstInput.focus();
    }
};

// Validation function for the login form
function validate(formObj) {
    var errors = [];
    var msgs = "";

     // Retrieve user inputs
    var enteredValues = {
        user: document.getElementById('user').value,
        pass: document.getElementById("pass").value,
    };

    // Check if the username is filled
    if (enteredValues.user == "") {
        errors.push({
            elem: document.getElementById('user'),
            message: "Username must be filled"
        });
    }
    // Check if the password is filled
    if (enteredValues.pass == "") {
        errors.push({
            elem: document.getElementById('pass'),
            message: "Password must be filled"
        });
    }

    // Compile error messages from the errors array
    for (var i = 0; i < errors.length; i++) {
        msgs += errors[i].message + "\n";
    }
    // Alert the user with messages if there are errors
    if (msgs != "") {
        alert(msgs);
        // Restore the entered values
        document.getElementById('user').value = enteredValues.user;
        document.getElementById('pass').value = enteredValues.pass;
        // Focus on the first empty box in the form
        errors[0].elem.focus();
        return false;
    } else {
        alert("Success!");
        return true;
    }
}
// Function to add visual feedback on input fields when they receive focus
function handleFocus(element) {
    element.style.backgroundColor = '#c9ccfd';
    element.style.color = "black";
}

// Function to reset the visual style of input fields when they lose focus
function handleBlur(element) {
    element.style.backgroundColor = '';
    element.style.color = 'black';
}