function loadList() {
    $.ajax({
        url: "http://swapi.co/api/films/1/",
        type: "GET",
        success: function (data) {
            $("#output").html("");
            var txt = "<div class='col-md-3'>";
            if (data.title) {
                txt += "<p>" + data.title + "</p>";
                txt += "<p>" + data.episode_id + "</p>";
                txt += "<p>" + data.opening_crawl + "</p>";
                txt += "<p>" + data.director + "</p>";
                txt += "<p>" + data.producer + "</p>";
                txt += "<p>" + data.release_date + "</p>";
            }
            txt += "</div>"
            $("#output").append(txt);

        }
    });
}
$(document).ready(function () {
    loadList();
});