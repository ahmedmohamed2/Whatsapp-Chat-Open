/**
 * Project: Open Whatsapp Chat
 * Name: Ahmed Mohamed
 * Date: 29/5/2022
 */

// When document is ready execute some functions


$("document").ready(function() {

    $("#openChatBtn").on("click", function() {

        $CSTPhone = $("#CSTPhone").val();

        if ($CSTPhone.trim() == "") {
            Swal.fire(
                'خطأ',
                "من فضلك ادخل رقم العميل",
                'error'
            );
        } else {
            var url = "https://api.whatsapp.com/send?phone=2" + $CSTPhone;
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