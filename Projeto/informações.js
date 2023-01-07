$(document).ready(function () {
    
    $("form").submit(function (event) {
        var retVal=true;
        var nome = $.trim($("#nome").val()).length;
        if (nome < 5 || nome > 100) {
            retVal=false; 
            if ($("#alert_nome").hasClass("no_error")) {
                $("#alert_nome").addClass("error").removeClass("no_error");
               
            }
        } else {
            if ($("#alert_nome").hasClass("error")) {
                $("#alert_nome").addClass("no_error").removeClass("error");
            }
        }

        var apelido = $.trim($("#apelido").val()).length;
        if (apelido < 3 || apelido > 100) {
            retVal=false; 
            if ($("#alert_apelido").hasClass("no_error")) {
                $("#alert_apelido").addClass("error").removeClass("no_error");
               
            }
        } else {
            if ($("#alert_apelido").hasClass("error")) {
                $("#alert_apeldio").addClass("no_error").removeClass("error");
            }
        }

        
        var email = $.trim($("#email").val());
        var mailalert = $("#alert_email_text");
        if (email.length < 11 || email.length > 100) {
            retVal=false;
            mailalert.text("O endereço de email não pode ter menos do que 10 caracteres nem mais de 100!");
            if ($("#alert_email").hasClass("no_error")) {
               $("#alert_email").addClass("error").removeClass("no_error");
            }
        } else if (!email.includes("@")) {
            retVal=false;
            mailalert.text("Um endereço de email tem de conter um arroba!");
            if ($("#alert_email").hasClass("no_error")) {
                $("#alert_email").addClass("error").removeClass("no_error");
            }
        } else {
            var emailcomponents = email.split("@");
            var emailcomponents2 = emailcomponents[1].split(".");
            if (emailcomponents[0].length<2 || !emailcomponents[1].includes(".") || emailcomponents2[0].length<2 || emailcomponents2[1].length<2){
                retVal=false;
                mailalert.text("O endereço de email inserido não respeita a forma xxxxx@yy.zz, devendo o yy e o zz conter no mínimo 2 caracteres!");
                if ($("#alert_email").hasClass("no_error")) {
                    $("#alert_email").addClass("error").removeClass("no_error");
                }
            } else {
                if ($("#alert_email").hasClass("error")) {
                    $("#alert_email").addClass("no_error").removeClass("error");
                }
            }
        }

        var telefone = $.trim($("#telefone").val()).length;
        if (telefone != 9) {
            retVal=false; 
            if ($("#alert_telf").hasClass("no_error")) {
                $("#alert_telf").addClass("error").removeClass("no_error");
               
            }
        } else {
            if ($("#alert_telf").hasClass("error")) {
                $("#alert_telf").addClass("no_error").removeClass("error");
            }
        }


        var morada = $.trim($("#mensagem").val()).length;
        if (morada<20 || morada>200){
            retVal=false; 
            if ($("#alert_mensagem").hasClass("no_error")) {
                $("#alert_mensagem").addClass("error").removeClass("no_error");
            }
        } else {
            if ($("#alert_mensagem").hasClass("error")) {
                $("#alert_mensagem").addClass("no_error").removeClass("error");
            }
        }
        return retVal;
    });
    $(".reset").click(function() {
        $(this).closest('form').find("input[type=text], textarea").val(""); 
        $("#alert_nome").hide();
        $("#alert_apelido").hide();
        $("#alert_email").hide();
        $("#alert_telf").hide();
        $("#alert_mensagem").hide();
    }); 
});