/**
 * Project: Open Whatsapp Chat
 * Name: Ahmed Mohamed
 * Date: 29/5/2022
 */

// When document is ready execute some functions


$("document").ready(function() {

    var input = document.querySelector("#CSTPhone");
    var iti = window.intlTelInput(input, {
        utilsScript: "js/utils.js",
        initialCountry: "auto",
        geoIpLookup: function (success, failure) {
            $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "US";
            success(countryCode);
        });
        },
    });

    $("#CSTPhone").focus();

    $("#openChatBtn").on("click", function() {

        $CSTPhone = iti.getNumber();

        if ($CSTPhone.trim() == "") {
            Swal.fire(
                'خطأ',
                "من فضلك ادخل رقم العميل",
                'error'
            );
        } else {
            var url = "https://api.whatsapp.com/send?phone=" + $CSTPhone.replace("+", "");
            var win = window.open(url, "_blank");
            win.focus();
            $("#CSTPhone").val("")
        }

    });

    $("#CSTPhone").on("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            $("#openChatBtn").click();
        }
    });

});