function render() {
    $("#add").val("");
};

function remove(id) {
    $("#" + id).remove();
}

var count = 0;

$(document).ready(function () {
    $("#post").click(function () {
        $("#output").append("<li id='" + count + "'>" + "<button onclick='remove(" + count + ")'>X</button>" + $("#add").val() + "</li>");
        count++;
        render();
    })
})