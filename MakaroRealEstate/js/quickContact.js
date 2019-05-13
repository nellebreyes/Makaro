/* KAAN AKAYDIN JAVASCRIPT CODES */

var $ = function (id) {
    return document.getElementById(id);
};

var chatPanel = "<div class='chat-panel'>" +
    "<div class=\"chat-panel-header\">\n" +
    "        <span onclick=\"closeQuickContact()\" class=\"chat-panel-close\">X</span>\n" +
    "        <h4>Quick Contact</h4>\n" +
    "        <p>Please Fill the Below Form</p>\n" +
    "    </div>\n" +
    "    <div class=\"chat-panel-body\">\n" +
    "        <form>\n" +
    "            <label for=\"quick-name\">Name : * <span id=\"quick-name-span\"></span></label>\n" +
    "            <input type=\"text\" id=\"quick-name\" name=\"quick-name\">\n" +
    "            <label for=\"quick-mail\">Mail : * <span id=\"quick-mail-span\"></span></label>\n" +
    "            <input type=\"email\" id=\"quick-mail\" name=\"quick-mail\">\n" +
    "            <label for=\"quick-phone\">Phone : * <span id=\"quick-phone-span\"></span></label>\n" +
    "            <input type=\"tel\" id=\"quick-phone\" name=\"quick-phone\">\n" +
    "            <label for=\"quick-question\">Question : * <span id=\"quick-question-span\"></span></label>\n" +
    "            <input type=\"text\" id=\"quick-question\" name=\"quick-question\">\n" +
    "            <input type=\"button\" id=\"quick-button\" value=\"Submit\" onclick=\"quickButton()\">\n" +
    "        </form>\n" +
    "    </div>" +
    "</div>";
var chatPanelVerify = "<div class=\"chat-panel-verify\">\n" +
    "    <div class=\"chat-panel-header\">\n" +
    "        <span onclick=\"closeQuickContact()\" class=\"chat-panel-close\">X</span>\n" +
    "        <h4>Verify</h4>\n" +
    "        <p>Please Verfy Your Form</p>\n" +
    "    </div>\n" +
    "    <div class=\"chat-panel-body\">\n" +
    "        <form>\n" +
    "            <ul>\n" +
    "                <li>Name : <span id=\"li1\"></span></li>\n" +
    "                <li>Mail : <span id=\"li2\"></span></li>\n" +
    "                <li>Phone : <span id=\"li3\"></span></li>\n" +
    "                <li>Question : <span id=\"li4\"></span></li>\n" +
    "            </ul>\n" +
    "            <input type=\"button\" id=\"quick-verify\" value=\"Verify\" onclick=\"verifyQuickContact()\">\n" +
    "            <input type=\"button\" id=\"quick-form-back\" value=\"Back to Form\" onclick=\"goBack()\">\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>";


function openQuickContact() {
    $('chat-panel-span').innerHTML = chatPanel;
}

function closeQuickContact() {
    $('chat-panel-span').innerHTML = "";
}

function quickButton() {
    var quick_name = $("quick-name").value;
    var quick_mail = $("quick-mail").value;
    var quick_phone = $("quick-phone").value;
    var quick_question = $("quick-question").value;

    if (quick_name == "") {
        $("quick-name-span").innerHTML = "Required";
    }
    if (quick_mail == "") {
        $("quick-mail-span").innerHTML = "Required";
    }
    if (quick_phone == "") {
        $("quick-phone-span").innerHTML = "Required";
    }
    if (quick_question == "") {
        $("quick-question-span").innerHTML = "Required";
    }
    if ((quick_name != "") && (quick_phone != "") && (quick_mail != "") && (quick_question != "")) {
        $('chat-panel-span').innerHTML = chatPanelVerify;
        $("li1").innerHTML = quick_name;
        $("li2").innerHTML = quick_phone;
        $("li3").innerHTML = quick_mail;
        $("li4").innerHTML = quick_question;
    }
}

function goBack() {
    $('chat-panel-span').innerHTML = chatPanel;
}

function verifyQuickContact() {
    closeQuickContact();
    alert("Your Message has been sent. We will contact with you asap.");
}