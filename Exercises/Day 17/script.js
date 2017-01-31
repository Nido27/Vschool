$( "#Submit" ).click(function() {
    var firstName = ($("#firstName").val());
      var lastname = ($("#lastname").val());
      var location = ($("#location").val());
      var password = ($("#password").val());
     var food = [];
        $(':checkbox:checked').each(function(i){
          food[i] = $(this).val();
        });
    var Gender = ($('input:radio[name=gender]:checked').val());
    alert("Fristname : " +firstName+"\n" 
          +" lastname : "+ lastname+"\n" 
          +" password : "+ password+"\n" 
          +" location : "+location+"\n" 
          +" Gender : "+Gender+"\n" 
          +" food : "+ food );
  })