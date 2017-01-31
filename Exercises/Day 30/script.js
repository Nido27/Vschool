function render() {
    $("#title").val("");
    $("#description").val("");
    $("#price").val("");
    $("#imgUrl").val("");
    $("#complete").val("");
    $("#noId").val("");
    $("#complete").prop("checked", false);
};
function loadData() {
    console.log("Request sent");
    $.ajax({
        url: "http://api.vschool.io/NaderElSalhat/todo/",
        type: "GET",
        success: function (data) {
            console.log("Data loaded");
            $("#output").html("");
            for (var i = 0; i < data.length; i++) {
                $("#output").append("<li><u>Id :</u>" + data[i]._id + "<br/>" + "<u> Title :</u>" + data[i].title + "<br/>" + "<u> Description : </u>" + data[i].description + "<br/>" + "<u>Price : </u>" + data[i].price + "<br/>" + "<u>Completed : </u>" + data[i].completed + "<br/>" + "<u>ImgUrl : </u>" + data[i].imgUrl + "<br/>" + "</li> <br/>");
            }
        }
    });
}
function loadData() {
    $.ajax({
        url: "http://api.vschool.io/NaderElSalhat/todo/",
        type: "GET",
        success: function (data) {
            $("#output").html("");
            for (var i = 0; i < data.length; i++) {
                var elem = "<div class='col-md-6'>"
                elem += "<p>" + data[i]._id + "</p>";
                elem += "<p>" + data[i].title + "</p>";
                if (data[i].description) {
                    elem += "<p>" + data[i].description + "</p>";
                }
                if (data[i].price) {
                    elem += "<p>" + data[i].price + "</p>";
                }
                if (data[i].imgUrl) {
                    elem += "<p>" + data[i].imgUrl + "</p>";
                }
                elem += "<p>"+data[i].completed+"</p>";
                elem += "</div>"
                $("#output").append(elem);
            }
        }
    });
}
function addData(title, description, price, url, isCompleted) {
    var data = {
        title: title,
        description: description || "N\A",
        price: price || 0,
        imgUrl: url || "N\A",
        completed: isCompleted || false
    };
    $.ajax({
        url: "http://api.vschool.io/NaderElSalhat/todo/",
        type: "POST",
        data: data,
        success: function (data) {
            console.log("its added");
            loadData();
        }
    });
}

function editData(title, description, price, url, isCompleted) {
    var data = {
        title: title,
        description: description || "N\A",
        price: price || 0,
        imgUrl: url || "N\A",
        completed: isCompleted || false
    };
    $.ajax({
        url: "http://api.vschool.io/NaderElSalhat/todo/" + $("#noId").val() + "/",
        type: "PUT",
        data: data,
        success: function (data) {
            console.log("its added");
            loadData();
        }
    });
}

function deleteData(title, description, price, url, isCompleted) {
    var data = {
        title: title,
        description: description || "N\A",
        price: price || 0,
        imgUrl: url || "N\A",
        completed: isCompleted || false
    };
    $.ajax({
        url: "http://api.vschool.io/NaderElSalhat/todo/" + $("#noId").val() + "/",
        type: "DELETE",
        data: data,
        success: function (data) {
            loadData();
        }
    });
}

$(document).ready(function () {
    console.log("Application has started");
    loadData();
    $("#post").click(function () {
        var title = $("#title").val();
        var description = $("#description").val();
        var price = $("#price").val();
        var url = $("#imgUrl").val();
        var isCompleted = $("#complete").is(":checked");
        addData(title, description, price, url, isCompleted);
        render();
    });
    $("#put").click(function () {
        var title = $("#title").val();
        var description = $("#description").val();
        var price = $("#price").val();
        var url = $("#imgUrl").val();
        var isCompleted = $("#complete").is(":checked");
        editData(title, description, price, url, isCompleted);
        console.log("its edit");
        render();
    });
    $("#delete").click(function () {
        var title = $("#title").val();
        var description = $("#description").val();
        var price = $("#price").val();
        var url = $("#imgUrl").val();
        var isCompleted = $("#complete").is(":checked");
        deleteData(title, description, price, url, isCompleted);
        console.log("its Deleted");
        render();
    });
});