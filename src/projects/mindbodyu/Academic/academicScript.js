$(".bar").click(function(){
    var target = $(this).attr("id")+ "_text";
    if($('#'+target).is(":visible")){
        $('#'+target).slideUp();
    }else{
        $('#'+target).slideDown();
    }
});

function addClass() {
    var className = document.getElementById("class-name").value;
    var classColor = document.getElementById("class-color").value;
    // Add class to select dropdown
    var classSelect = document.getElementById("class-select");
    var option = document.createElement("option");
    option.text = className;
    option.value = classColor;
    classSelect.add(option);
}

function addAssignment() {
    var taskName = document.getElementById("task-name").value;
    var assignmentType = document.getElementById("assignment-type").value;
    var dueDate = document.getElementById("due-date").value;
    var className = document.getElementById("class-select").value;
    var classText = document.getElementById("class-select").options[document.getElementById("class-select").selectedIndex].text;

    // Create a new row
    var newRow = document.getElementById("assignments-table").getElementsByTagName('tbody')[0].insertRow();
    
    // Insert cells into the new row
    var classCell = newRow.insertCell(0);
    var assignmentCell = newRow.insertCell(1);
    var typeCell = newRow.insertCell(2);
    var dueDateCell = newRow.insertCell(3);
    var completedCell = newRow.insertCell(4); 
    var removeCell = newRow.insertCell(5);
    
    // Set cell values
    classCell.innerHTML = classText;
    assignmentCell.innerHTML = taskName;
    typeCell.innerHTML = assignmentType;
    dueDateCell.innerHTML = dueDate;
    completedCell.innerHTML = '<input type="checkbox" onchange="toggleStrikeThrough(this)">';
    removeCell.innerHTML='<button type="button" onclick="removeItem(this)">x</button>';

    // Set background color of the row
    newRow.style.backgroundColor = className;

    // Sort rows by due date 
    sortRowsByDueDate();
}

function toggleStrikeThrough(checkbox) {
    var row = checkbox.parentNode.parentNode;
    if (checkbox.checked) {
        row.style.textDecoration = "line-through";
    } else {
        row.style.textDecoration = "none";
    }
}

function sortRowsByDueDate() {
    // Sort rows by due date 
    var rows = document.getElementById("assignments-table").getElementsByTagName('tbody')[0].rows;
    var rowsArray = Array.from(rows);

    rowsArray.sort(function(a, b) {
        var dateA = new Date(a.cells[3].innerHTML);
        var dateB = new Date(b.cells[3].innerHTML);
        return dateA - dateB;
    });

    var tbody = document.getElementById("assignments-list");
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    rowsArray.forEach(function(row) {
        tbody.appendChild(row);
    });
}

function removeItem(button) {
    // Get reference to the row that contains the button
    var row = button.parentNode.parentNode;

    // Remove the row from its parent (the table body)
    row.parentNode.removeChild(row);
}

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