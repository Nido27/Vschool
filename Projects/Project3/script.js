

$(".title").hover(function(){
    $(this).css(
        {"text-align":"center" ,
         "color": "red",
         "font-size":"50px",
         "font-family":"'Fjalla One', sans-serif",
         "background-color":"black",
        "border-radius": "50%"
        });
    },function()
    {$(this).css(
        {"text-align":"center",
         "color":"yellow",
         "font-size":"50px",
         "font-family":"'Indie Flower', cursive",
         "background-color":"",
        "border-radius": "50%"
        });
})


/*$(window).scroll(function() {
 $(".layal").css( "font-size", "5px");
});*/

$( "#Pik" ).click(function() {
    var Pik = $( this ).val();
    $("#pikRes").val(Pik * 5);
  })
  


$( "#Char" ).click(function() {
    var Char = $( this ).val();
    $("#charRes").val(Char * 11);
  })



$( "#Bul" ).click(function() {
    var Bul = $( this ).val();
    $("#bulRes").val(Bul * 7);
  })
  .keyup();

$(document).ready(function() {
      $("#Pik,#Char,#Bul").click(function() {
        var res =Number($("#pikRes").val()) +Number($("#charRes").val())+Number($("#bulRes").val());
        $("#addRes").val(res);

});
})