// Function to change the background color and text color when an input field is focused

function handleFocus(element) {
  element.style.backgroundColor = "#c9ccfd";
  element.style.color = "black";
}

// Function to reset the background and text colors when an input field loses focus
function handleBlur(element) {
  element.style.backgroundColor = "";
  element.style.color = "black";
}

// adds a click event listener to each nutrient type, allow it to expand and collapse
document.addEventListener('DOMContentLoaded', function () {
  var headers = document.querySelectorAll('.item-header');

  headers.forEach(function(header) {
      header.addEventListener('click', function() {
          var content = this.nextElementSibling;
          if (content.style.display === 'block') {
              content.style.display = 'none';
          } else {
              content.style.display = 'block';
          }
      });
  });
});

// Toggle visibility of instruction content and change toggle button text
function toggleInstructions() {
  var content = document.getElementById("instructionContent");
  if (content.style.display === "none") {
      content.style.display = "block";
      toggleSign.textContent = "-";
  } else {
      content.style.display = "none";
      toggleSign.textContent = "+";
  }
}


//fetching api data
$(document).ready(function () {
  
  // jQuery function to handle meal plan generation upon button click
  $("#generatePlan").on("click", function () {
    const timeFrame = "day";
    const targetCalories = $("#targetCalories").val();
    const diet = $("#diet").val();
    const exclude = $("#exclude").val();


    // Validate form data before proceeding
    if (!validate()) {
      return;
    }

    const apiKey = "fb6791248f304d959833096b8a915dd6";
    const apiUrl = `https://api.spoonacular.com/mealplanner/generate?timeFrame=${timeFrame}&targetCalories=${targetCalories}&diet=${diet}&exclude=${exclude}&apiKey=${apiKey}`;

    // AJAX call to Spoonacular API for generating meal plan
    $.ajax({
      url: apiUrl,
      method: "GET",
      dataType: "json",
            success: function (recipeData, status) {
              var output = "";
              $.each(recipeData.meals, function (i, meal) {
                output += '<div class="recipe-card">';
            output += '<h3>' + meal.title + '</h3>';
            // Construct the full image URL using the base URL and imageType
            var imageUrl = "https://spoonacular.com/recipeImages/" + meal.id + "-556x370." + meal.imageType;
            output += '<img src="' + imageUrl + '" alt="' + meal.title + '">';
            output += '<p>Ready in ' + meal.readyInMinutes + ' minutes | Servings: ' + meal.servings + '</p>';
            output += '<a href="' + meal.sourceUrl + '" target="_blank">View Recipe</a>';
            output += '</div>';
              });
              $("#recipeCards").html(output);
            },
            error: function (msg) {
              alert(
                "Error fetching recipe card: " +
                  msg.status +
                  " " +
                  msg.statusText
              );
            },
          });
        });

// Form validation function to check if all required fields are filled
function validate(formObj) {
  var errors = [];
  var msgs = "";

  var enteredValues = {
    targetCalories: document.getElementById("targetCalories").value,
    diet: document.getElementById("diet").value,
    exclude: document.getElementById("exclude").value,
  };

  if (enteredValues.targetCalories == "") {
    errors.push({
      elem: document.getElementById("targetCalories"),
      message: "target calories must be filled",
    });
  }
  if (enteredValues.diet == "") {
    errors.push({
      elem: document.getElementById("diet"),
      message: "diet must be filled",
    });
  }
  if (enteredValues.exclude == "") {
    errors.push({
      elem: document.getElementById("exclude"),
      message: "excluded ingredients must be filled",
    });
  }

  // Compile error messages and display them if there are errors
  for (var i = 0; i < errors.length; i++) {
    msgs += errors[i].message + "\n";
  }

  if (msgs != "") {
    alert(msgs);
    // Restore the entered values
    document.getElementById("targetCalories").value = enteredValues.targetCalories;
    document.getElementById("diet").value = enteredValues.diet;
    document.getElementById("exclude").value = enteredValues.exclude;
    // Focus on the first empty box in the form
    errors[0].elem.focus();
    return false;
  } else {
    alert("Success!");
    return true;
  }
}
});
