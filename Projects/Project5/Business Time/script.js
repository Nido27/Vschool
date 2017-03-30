$(document).ready(function () {
    $('img').on('click', function () {
        var image = $(this).attr('src');
        $('#myModal').on('show.bs.modal', function () {
            $(".img-responsive").attr("src", image);
        });
    });
    $('#Signup').on('click', Reg)
    $('#Send').on('click', Con)
});



function render() {
    document.getElementById("Fname").value = " ";
    document.getElementById("Lname").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("password").value = "";
    document.getElementById("date").value = " ";
    document.getElementById("CGender").value = " ";
}

function Reg() {
    if (document.getElementById("Fname").value === "") {

        alert("Please enter Your First name!");
        document.getElementById("Fname").focus();
        return false;

    } else if (document.getElementById("Lname").value === "") {
        alert("Please enter Your Last name!!");
        document.getElementById("Lname").focus();
        return false;
    } else if (document.getElementById("email").value === "") {
        alert("Please enter Your Email  !");
        document.getElementById("email").focus();
        return false;
    } else if (document.getElementById("password").value === "") {
        alert("Please enter A Password!");
        document.getElementById("password").focus();
        return false;
    } else if (document.getElementById("date").value === "") {
        alert("Please enter Your Birthday Date !");
        document.getElementById("date").focus();
        return false;
    } else {
        var firstName = ($("#Fname").val());
        var lastname = ($("#Lname").val());
        var Email = ($("#email").val());
        var password = ($("#password").val());
        var Date = ($("#date").val());
        var Gender = ($('input:radio[name=gender]:checked').val());
        alert("Frist Name : " + firstName + "\n" + " Last Name : " + lastname + "\n" + " Email : " + Email + "\n" +" Password : " + password + "\n" + " Date : " + Date + "\n" + " Gender : " + Gender);
     render();
    }
}

function Con() {
    if (document.getElementById("contactTitle").value === "") {

        alert("Please enter Your Title Message!");
        document.getElementById("contactTitle").focus();
        return false;

    } else if (document.getElementById("TextArea").value === "") {
        alert("Please enter Your Message!!");
        document.getElementById("TextArea").focus();
        return false;
    }else {
        document.getElementById("contactTitle").value = " ";
        document.getElementById("TextArea").value = " ";
        alert( " You Message Sent !" +"\n"+" We will Reply As Soon As Possible"+"\n"+"Thank You")
    }
}