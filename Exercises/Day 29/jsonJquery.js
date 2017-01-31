$("#moreFields").click(function () {
   $.ajax({
       url: "http://api.vschool.io:6543/pokemon.json"
       , success: function (result) {
           $("#output").html(result["objects"][0]["pokemon"][$("#term").val()].name);
       }
   });
});