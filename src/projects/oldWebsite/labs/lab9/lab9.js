$(document).ready(function() {
  
    // Excercise 1: Flickr feed
   
    $.ajax({
      type: "GET",
      url: "../lab4/atom.xml",
      dataType: "xml",
      
      success: function(responseData, status){
        console.log(responseData)
        var output = "<div>"; 
        output+="<h4>ATOM FEED</h4>"
        $(responseData).find('entry').each(function() {
         
          output+='<div class = "card"><a href='+$(this).find('link').text()+'>';
          output+=  $(this).find('title').text()+'</a>';
          output+="<p>"+$(this).find('updated').text()+"</p></div>"
          
        });
        output += "</div>";
        $('#atom').html(output).addClass('bigCard');
      }, error: function(msg) {
              // there was a problem

        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
    });

    $.ajax({
      type: "GET",
      url: "../lab4/rss.xml",
      dataType: "xml",
      
      success: function(responseData, status){
        console.log(responseData)
        var output = "<div>"; 
        output+="<h4>RSS FEED</h4>"
        $(responseData).find('item').each(function() {
         
          output+='<div class = "card"><a href='+$(this).find('link').text()+'>';
          output+=  $(this).find('title').text()+'</a>';
          output+="<p>"+$(this).find('description').text()+"</p></div>";
        
  
        });
        output += "</div>";
        $('#rss').html(output).addClass('bigCard');
      }, error: function(msg) {
              // there was a problem

        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
    });
  
  });