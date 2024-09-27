
function writeAnimation(i, txt, speed) {
    var cursorVisible = false;
    if (i < txt.length) {
        document.getElementById("message").innerHTML += txt.charAt(i);
        i++;
        setTimeout(function() {
            writeAnimation(i, txt, speed);
        }, speed);
    } else {
        setInterval(function() {
            var messageElement = document.getElementById("message");
            if (cursorVisible) {
                messageElement.innerHTML = messageElement.innerHTML.slice(0, -1); // Remove last character (cursor)
                cursorVisible = false;
            } else {
                messageElement.innerHTML += "|"; 
                cursorVisible = true;
            }
        }, 500); 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var txt = 'The primary wellness hub for college students.';
    var speed = 50;
    writeAnimation(i, txt, speed);

});





   