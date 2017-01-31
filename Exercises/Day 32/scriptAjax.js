function loadList() {
  $.ajax({
    url: "http://api.vschool.io/NaderElSalhat/todo/",
    type: "GET",
    success: function(data) {
      $("#output").html("");
      for(var i = 0; i < data.length; i++) {
        var elem =  "<div class='col-md-6'>"
        elem += "<p>" + data[i].title + "</p>";
        if(data[i].description) {
          elem += "<p>" + data[i].description + "</p>";
        }
        if(data[i].price) {
          elem += "<p>" + data[i].price + "</p>";
        }
        if(data[i].imgUrl) {
          elem += "<p>" + data[i].imgUrl + "</p>";
        }
        if(data[i].completed) {
          elem += "<p><input type='checkbox' checked/></p>";
        } else {
          elem += "<p><input type='checkbox'/></p>";
        }
        elem += "<p>";
        elem += "<button onclick=deleteItem('" + data[i]._id + "')>Delete</button>";
        elem += "</p>";
        elem += "</div>"
        $("#output").append(elem);
      }
    }
  });
}


function addItem() {
  var data = {
    title: $("#title").val(),
    description: $("#description").val() || "",
    price: $("#price").val() || 0,
    imgUrl: $("#imgUrl").val() || "",
    completed: $("#completed").is(":checked") || false
  }
  $.ajax({
    url: "http://api.vschool.io/NaderElSalhat/todo/",
    type: "POST",
    data: data,
    success: function() {
      loadList();
    }
  })
}


function deleteItem(id) {
  $.ajax({
    url: "http://api.vschool.io/NaderElSalhat/todo/" + id,
    type: "DELETE",
    success: function() {
      loadList();
    }
  })
}

$(document).ready(function() {
  loadList();
});

$("#add").click(function() {
  addItem();
})