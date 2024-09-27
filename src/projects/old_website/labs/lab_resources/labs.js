$(document).ready(function() {
     $.ajax({
       type: "GET",
       url: "lab_resources\\labs.json",
       dataType: "json",
       success: function(responseData, status){
         console.log(responseData)
         var output = "<div>";

         $.each(responseData.items, function(i, item) {
           var list_item =  '<div class = "card">';
           list_item+='<div class = "build"><h4>'+item.title +"</h4></div>";
           list_item+='<div class = "build"><p>'+item.description +"</p></div>"
           list_item+='<div class = "build"><a href="' + item.link+ '" target="_blank">'+
             "link" +'</a></div></div>';
           
           output+=list_item;
         });
         output+="</div>";
   
    
         $('#buildhere').html(output).addClass('bigCard');
       }, error: function(msg) {
               // there was a problem
         alert("There was a problem: " + msg.status + " " + msg.statusText);
       }
     });
   
   });