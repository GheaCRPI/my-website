var acc = document.getElementsByClassName("accordion");
var i;

// Loop through all accordion buttons
for (i = 0; i < acc.length; i++) {
  // Add a click event listener to each accordion button
  acc[i].addEventListener("click", function() {
    // Toggle the "active" class to the button to change its appearance
    // This could change the color, font, or other properties to indicate it's active
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}