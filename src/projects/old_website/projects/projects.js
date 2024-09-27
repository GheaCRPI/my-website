$(document).ready(function() {
  
   $('#bodyBlock').slideUp();
    $.ajax({
      type: "GET",
      url: "projects.json",
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
  
   
        $('#makeList').html(output).addClass('bigCard').slideUp().slideDown('slow');
      }, error: function(msg) {
              // there was a problem
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
    });
  
  });