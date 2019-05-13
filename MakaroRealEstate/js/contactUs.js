var $ = function (id) {
    return document.getElementById(id);
};
var err = {
    "fnameErr": "First Name is a required field.",
    "lnameErr": "Last Name is a required field.",
    "phoneErr": "Phone is a required field.",
    "emailErr": "Email is a required field.",
    "contactUsErr": "Comment box can't be empty."
};

function checkFieldIfEmpty(id) {
    //    console.log($(id).value =="");
    // console.log($(id).name);
    if ($(id).value == "") {
        $(id).className += "errorBorder";
        $(id).focus();
        getErrorMsg(id + "Err");
        $(id).onchange = function () {
            $(id + "Err").style.display = "none";
            $(id + "Err").value = ""
            $(id).classList.remove("errorBorder");
        };
    }
}//end of check if empty
function getErrorMsg(id) {
    for (keyEr in err) {
        //console.log(keyEr);
        if (keyEr == id) {
            // console.log(err[keyEr]);
            $(keyEr).innerHTML = err[keyEr];
        }
        ;
    }
}

function checkRadio() {
    var interested = document.getElementsByName('interested');
    var ischecked = false;
    for (var i = 0; i < interested.length; i++) {
        if (interested[i].checked) {
            ischecked = true;
            break;
        }
    }
    if (ischecked == false) {
        $("interestedErr").innerHTML = "Please select if you are interested in buying or building.";
    } else {
        return true;
    }
    interested[0].onclick = function () {
        $("interestedErr").style.display = "none";
        $("interestedErr").value = "";
        $("interestedErr").focus();
    };
    interested[1].onclick = function () {
        $("interestedErr").style.display = "none";
        $("interestedErr").value = "";
        $("interestedErr").focus();
    };
}

function validate() {
    event.preventDefault();
    checkFieldIfEmpty("fname");
    checkFieldIfEmpty("lname");
    checkFieldIfEmpty("phone");
    checkFieldIfEmpty("email");
    checkFieldIfEmpty("contactUs");
    checkRadio();
    confirm();
}  //end of function validate
function confirm() {
    if (($("fname").value != "") && ($("lname").value != "") && ($("phone").value != "") && ($("email").value != "") && ($("email").value != "") && (checkRadio() == true)) {
        var modal = document.getElementById('myModal');
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function () {
            modal.style.display = "none";
        }
    }
}

$("submit").addEventListener("click", validate);
//----------------------end of validation By MReyes-------//