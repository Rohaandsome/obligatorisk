let billetter = []
function regBillett(){
    $("#errorFilm").html(" ");
    $("#errorSeter").html(" ");
    $("#errorFornavn").html(" ");
    $("#errorEtternavn").html(" ");
    $("#errorMail").html(" ");
    $("#errorTlf").html(" ");


    const filmVerdi = $("#film").val();
    const seterVerdi = $("#seter").val();
    const fornavnVerdi = $("#fornavn").val();
    const etternavnVerdi = $("#etternavn").val();
    const mailVerdi = $("#mail").val();
    const sjekkMail = /^[\w\.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const tlfVerdi = $("#tlf").val();


    if (filmVerdi === "") {
        $("#errorFilm").html("<span style='color:red; font-weight:bold;'> UGYLDIG INPUT, VELG FILM! </span>");
        return;
    }
    if (isNaN(seterVerdi) || !Number.isInteger(Number(seterVerdi)) || Number(seterVerdi) <=  0) {
        $("#errorSeter").html("<span style='color:red; font-weight:bold;'> UGYLDIG INPUT, SKRIV ANTALL SETER! </span>");
        return;
    }
    if (fornavnVerdi.trim() === "" || /^\d+$/.test(fornavnVerdi)) {
        $("#errorFornavn").html("<span style='color:red; font-weight:bold;'> UGYLDIG INPUT, SKRIV FORNAVNET DITT! </span>");
        return;
    }
    if (etternavnVerdi.trim() === "" || /^\d+$/.test(etternavnVerdi)) {
        $("#errorEtternavn").html("<span style='color:red; font-weight:bold;'> UGYLDIG INPUT, SKRIV ETTERNAVNET DITT! </span>");
        return;
    }
    if (!sjekkMail.test(mailVerdi)) {
        $("#errorMail").html("<span style='color:red; font-weight:bold;'> UGYLDIG INPUT, SKRIV MAILEN DIN! </span>");
        return;
    }
    if (isNaN(tlfVerdi || !Number.isFinite(tlfVerdi))){
        $("#errorTlf").html("<span style='color:red; font-weight:bold;'> UGYLDIG INPUT, SKRIV NUMMERET DITT!</span>");
        return;
    }


    const billett = {
        film : filmVerdi,
        seter : seterVerdi,
        fornavn : fornavnVerdi,
        etternavn : etternavnVerdi,
        mail : mailVerdi,
        tlf : tlfVerdi,
    }

    $.post("/lagre", billett, function (){
        hentAlle();
    });

    $("#film").val("");
    $("#seter").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#mail").val("");
    $("#tlf").val("");
}

function hentAlle(){
    $.get("/hentAlle", function (billetter){
        formaterData(billetter);
    });
}

function formaterData(billetter) {
    let ut =
        "<table class ='table table-striped'><tr>" +
        "<th>Film</th><th>Seter</th><th>Fornavn</th><th>Etternavn</th><th>Mail</th><th>Telefonnummer</th>" +
        "</tr>";
    for (const billett of billetter){
        ut+="<tr>";
        ut+="<td>"+billett.film+"</td><td>"+billett.seter+"</td><td>"+billett.fornavn+"</td><td>"+billett.etternavn+"</td><td>"+billett.mail+"</td><td>"+billett.tlf+"</td>";
        ut+="</tr>";
    }
    ut += "</table";
    $("#billetter").html(ut);
}

function slettAlle() {
    $.ajax({
        url: "/slettAlle",
        type: "DELETE",
        success: function () {
            $("#billetter").html("");
            $("#film").val("");
            $("#seter").val("");
            $("#fornavn").val("");
            $("#etternavn").val("");
            $("#mail").val("");
            $("#tlf").val("");
        }
    });
}