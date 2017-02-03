var startClock = function () {
    var counter = 60;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
            $("#count").val(counter);
        }
        if (counter === 0) {
            clearInterval(counter);
            alert("Gove over go to hell")

        }
    }, 100);
};

$(document).ready(function () {
    var count = 0;
    $("#start").click(function () {
        $(window).click(function () {
            count++;
            $("#scores").val(count);
        });
    });
});