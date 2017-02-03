function loadList() {
    $.ajax({
        url: "http://api.fixer.io/latest",
        type: "GET",
        success: function (data) {
            var array = ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"];
            $("#option").html("");
            for (var i = 0; i < array.length; i++) {
                //console.log(array[i]);
                //console.log(data.rates[array[i]]);
               var  txt = "<option value='" + data.rates[array[i]] + "'>" + array[i] + "</option>";
                $("#option").append(txt);
            }
        }
    });
}
$(document).ready(function () {
    loadList();
     $("#click").click(function(){
                    var input=Number($("#input").val());
                     var option = Number($("#option").val());
        
         
         var result = input * option;
         
          console.log(result);
                    $("#output").val(result);
                });

});