
// -------------------------------------- slide-------------------------------
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        slides[i].style.visibility = "hidden";  // Hide non-active slides
    }
    slides[slideIndex].style.opacity = "1";
    slides[slideIndex].style.visibility = "visible";  // Show the active slide
}


// -------------------------------------- plan------------------------------


// Get references to the lists
var todoList = document.getElementById('todoList');
var inProgressList = document.getElementById('inProgressList');
var doneList = document.getElementById('doneList');

// Functionality for adding new tasks
var addTaskBtn = document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
    var newTask = taskInput.value;
    if (newTask) {
        var listItem = document.createElement('li');
        listItem.textContent = newTask;
        var arrowButton = document.createElement('button');
        arrowButton.textContent = 'Move Task →';
        arrowButton.classList.add('move-button');
        arrowButton.addEventListener('click', function() {
            moveTask(listItem);
        });
        listItem.appendChild(arrowButton);
        todoList.appendChild(listItem);
        taskInput.value = ''; // Clear the input field after adding the task
    }
});

// Function to move tasks between lists
function moveTask(taskItem) {
    var currentList = taskItem.parentNode;
    var nextList = getNextList(currentList);
    if (nextList) {
        nextList.appendChild(taskItem);
    } else {
        currentList.removeChild(taskItem);
    }
}

// Function to get the next list for the task to be moved to
function getNextList(currentList) {
    if (currentList === todoList) {
        return inProgressList;
    } else if (currentList === inProgressList) {
        return doneList;
    }
    return null;
}



// ---------------------------------Find Worksouts--------------------
document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle the display of the instruction content
    function toggleInstructions() {
        var content = document.getElementById("instructionContent");
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }

    // Attach the event listener to the header that toggles the content
    var header = document.querySelector('.workout-plan-instructions h2');
    if (header) {
        header.addEventListener('click', toggleInstructions);
    }
});

$("#generatePlan").on("click", function () {
    const type = $("#type").val();
    const muscle = $("#muscle").val();
    const difficulty = $("#difficulty").val();

    if (!validate()) {
        return;
    }

    const apiUrl = `https://api.api-ninjas.com/v1/exercises?type=${type}&muscle=${muscle}&difficulty=${difficulty}`;
    $.ajax({
        url: apiUrl,
        method: "GET",
        headers: { 'X-Api-Key': 'F4w7j3vRqN/ukMk1Y9poKQ==x1qIEH1lUfHdireq'},
        contentType: "application/json",
        success: function (workoutData, status) {
            workoutData.forEach(function(exercise) {
                var card = document.createElement('div');
                card.classList.add('workout-card');

                var instructions = exercise.instructions.split('.');
                var instructionList = "<ol>";
                for (var i = 0; i < instructions.length - 1; i++) {
                  instructionList += "<li>" + instructions[i].trim() + "<br></br></li>";
                }
                instructionList += "</ol>";
              
                card.innerHTML = `
                  <h2>${exercise.name}</h2>
                  <p>Type: ${exercise.type}</p>
                  <p>Muscle: ${exercise.muscle}</p>
                  <p>Equipment: ${exercise.equipment}</p>
                  <p>Difficulty: ${exercise.difficulty}</p>
                  <p>Instructions: ${instructionList}</p>
                `;
              
                document.getElementById('workoutCards').appendChild(card);
              });
        },
        error: function (msg) {
            alert("Error fetching workout card: " + msg.status + " " + msg.statusText);
        },
    });
});

//form validation
function validate(formObj) {
    var errors = [];
    var msgs = "";

    var enteredValues = {
        type: document.getElementById("type").value,
        muscle: document.getElementById("muscle").value,
        difficulty: document.getElementById("difficulty").value,
    };

    if (enteredValues.type == "") {
        errors.push({
        elem: document.getElementById("type"),
        message: "type must be filled",
        });
    }
    if (enteredValues.muscle == "") {
        errors.push({
        elem: document.getElementById("muscle"),
        message: "muscle must be filled",
        });
    }
    if (enteredValues.difficulty == "") {
        errors.push({
        elem: document.getElementById("difficulty"),
        message: "difficulty must be filled",
        });
    }

    for (var i = 0; i < errors.length; i++) {
        msgs += errors[i].message + "\n";
    }

    if (msgs != "") {
        alert(msgs);
        // Restore the entered values
        document.getElementById("type").value = enteredValues.type;
        document.getElementById("muscle").value = enteredValues.muscle;
        document.getElementById("difficulty").value = enteredValues.difficulty;
        errors[0].elem.focus();
        return false;
    } else {
        alert("Success!");
        return true;
    }
};

workoutData.forEach(function(exercise) {
    var card = document.createElement('div');
    card.classList.add('workout-card');
  
    card.innerHTML = `
        <h2>${exercise.name}</h2>
        <p>Type: ${exercise.type}</p>
        <p>Muscle: ${exercise.muscle}</p>
        <p>Equipment: ${exercise.equipment}</p>
        <p>Difficulty: ${exercise.difficulty}</p>
        <p>Instructions: ${exercise.instructions}</p>
    `;
  
    document.getElementById('workoutCards').appendChild(card);
});

//form focus & blur
function handleFocus(element) {
    element.style.backgroundColor = "#31496a";
    element.style.color = "white";
}

function handleBlur(element) {
    element.style.backgroundColor = "";
    element.style.color = "black";
}