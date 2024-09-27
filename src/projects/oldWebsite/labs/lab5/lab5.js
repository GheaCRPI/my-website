/* Lab 5 JavaScript File 
   Place variables and functions in this file */

function validate(formObj) {
   // put your validation code here
   // it will be a series of if statements
   if (formObj.firstName.value == "") {
      alert("You must enter a first name");
      formObj.firstName.focus();
      return false;
   }else if (formObj.lastName.value == ""){
      alert("You must enter a last name");
      formObj.lastName.focus();
      return false;
   }else if (formObj.title.value == ""){
      alert("You must enter a title");
      formObj.title.focus();
      return false;
   }else if (formObj.org.value == ""){
      alert("You must enter an organization");
      formObj.org.focus();
      return false;
   }else if (formObj.pseudonym.value == ""){
      alert("You must enter a nickname");
      formObj.pseudonym.focus();
      return false;
   }else if (formObj.comments.value == ""){
      alert("You must enter comments");
      formObj.comments.focus();
      return false;
   }
   return true;
}

function whenClicked(obj){
   document.getElementById(obj.id).style.backgroundColor = "#fee";
}

function whenNotClicked(obj){
   document.getElementById(obj.id).style.backgroundColor = "white";
}

function clickComments(){
   if(document.getElementById("comments").value== "Please enter your comments"){
      document.getElementById("comments").value = "";
   }
}

function commentsBlur(){
   if(document.getElementById("comments").value == ""){
      document.getElementById("comments").value = "Please enter your comments";
   }
}

function nameButton(){
   alert(firstName.value + " " + lastName.value + "is" + pseudonym.value);
}