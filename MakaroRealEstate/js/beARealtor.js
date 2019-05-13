var $ = function (id) {
    return document.getElementById(id);
};

function beRealtor() {
    var isValid = true;
    if ($("fname").value == "") {
        $("fname_error").firstChild.nodeValue = "This field is required!";
        isValid = false;
    } else {
        $("fname_error").firstChild.nodeValue = "";
    }

    if ($("lname").value == "") {
        $("lname_error").firstChild.nodeValue = "This field is required!";
        isValid = false;
    } else {
        $("lname_error").firstChild.nodeValue = "";
    }

    if ($("add").value == "") {
        $("add_error").firstChild.nodeValue = "This field is required!";
        isValid = false;
    } else {
        $("add_error").firstChild.nodeValue = "";
    }

    if ($("city").value == "") {
        $("city_error").firstChild.nodeValue = "This field is required!";
        isValid = false;
    } else {
        $("city_error").firstChild.nodeValue = "";
    }

    if ($("province").value == "") {
        $("province_error").firstChild.nodeValue = "This field is required!";
        isValid = false;
    } else {
        $("province_error").firstChild.nodeValue = "";
    }

    if ($("postalCode").value == "") {
        $("postalCode_error").firstChild.nodeValue = "This field is required!";
        isValid = false;
    } else {
        $("postalCode_error").firstChild.nodeValue = "";
    }

    if ($("phone").value == "") {
        $("phone_error").firstChild.nodeValue = "This field is required!";
        isValid = false;
    } else {
        $("phone_error").firstChild.nodeValue = "";
    }

    if ($("email").value == "") {
        $("email_error").firstChild.nodeValue = "This field is required!";
        isValid = false;
    } else {
        $("email_error").firstChild.nodeValue = "";
    }
    if (isValid) {
        // submit the form if all entries are valid
        alert("Your form has been submitted");
    }
};


