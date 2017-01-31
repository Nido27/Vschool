$("#square").css("background-color","yellow");
$("#square").css("height","500px");
$("#square").css("font-size","20px");

$("#square").hover(function(){
    $(this).css("background-color", "blue");
    }, function(){
    $(this).css("background-color", "yellow");
});



$( "#square" ).click(function() {
  $( this ).css("background-color", "red");
});

$( "#square" ).dblclick(function() {
  $( this ).css("background-color", "green");
});

$(window).scroll(function() {
  $("#square").css( "background-color", "orange");
});

/*$( "#square" )
  .mouseup(function() {
    $( this ).css("background-color", "pink");
  })
  .mousedown(function() {
    $( this ).css("background-color", "purple");
  });*/

$(window).keypress(function(e) {

    var code = e.keyCode;
    if (code ==66 )
    {
  $("#square").css( "background-color", "blue");
    }else if (code ==82 )
    {
    $("#square").css( "background-color", "red");
}else if (code ==79  ){
    $("#square").css( "background-color", "orange");
}else if (code ==71  ){
    $("#square").css( "background-color", "green");
}
});