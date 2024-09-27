
// Function to create a typewriter animation effect on a text element
function writeAnimation(i, txt, speed) {
    var cursorVisible = false;

    // If there are more characters to process in the input text
    if (i < txt.length) {
        // Append the next character from the text to the HTML element
        document.getElementById("message2").innerHTML += txt.charAt(i);
        i++; // Move to the next character

        // Call the same function after a delay to simulate typing speed
        setTimeout(function() {
            writeAnimation(i, txt, speed);
        }, speed);
    } else {
        // If all characters are typed, start a blinking cursor effect
        setInterval(function() {
            var messageElement = document.getElementById("message2");

            // Toggle the visibility of the cursor at the end of the text
            if (cursorVisible) {
                // If the cursor is visible, remove it
                messageElement.innerHTML = messageElement.innerHTML.slice(0, -1);
                cursorVisible = false;
            } else {
                // If the cursor is not visible, add it
                messageElement.innerHTML += "|";
                cursorVisible = true;
            }
        }, 500); 
    }
}

// Listen for when the DOM is fully loaded before running the animation
document.addEventListener("DOMContentLoaded", function() {
    
    var i = 0; 
    var txt = 'Meet Our Team.'; 
    var speed = 100; // Delay in milliseconds between each character

    // Start the animation
    writeAnimation(i, txt, speed);
});






   