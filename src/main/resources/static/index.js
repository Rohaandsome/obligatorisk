let billetter = []
function regBillett(){

    let feilData = false;

    let enBillett = {
        film: $("#film").val(),
        seter: $("#seter").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        mail: $("#mail").val(),
        tlf: $("#tlf").val(),
        sjekkMail: /^[\w\.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
    }

    if (enBillett.film === "") {
        $("#errorFilm").textContent("<span style='color:red; font-weight:bold;'> UGYLDIG INPUT, VELG FILM! </span>");
        feilData = true;
        return;
    }

    if (isNaN(enBillett.seter) || !Number.isInteger(Number(enBillett.seter)) || Number(enBillett.seter) <=  0) {
        $("#errorSeter").textContent("<span style='color:red; font-weight:bold;'> UGYLDIG INPUT, SKRIV ANTALL SETER! </span>");
        feilData = true;
        return;
    }
    if (enBillett.fornavn.trim() === "" || /^\d+$/.test(enBillett.fornavn)) {
        $("#errorFornavn").textContent("<span style='color:red; font-weight:bold;'> UGYLDIG INPUT, SKRIV FORNAVNET DITT! </span>");
        feilData = true;
        return;
    }
    if (enBillett.etternavn.trim() === "" || /^\d+$/.test(enBillett)) {
        $("#errorEtternavn").textContent("<span style='color:red; font-weight:bold;'> UGYLDIG INPUT, SKRIV ETTERNAVNET DITT! </span>");
        feilData = true;
        return;
    }
    if (!enBillett.sjekkMail.test(enBillett.mail)) {
        $("#errorMail").textContent("<span style='color:red; font-weight:bold;'> UGYLDIG INPUT, SKRIV MAILEN DIN! </span>");
        feilData = true;
        return;
    }
    if (!validerTlf(enBillett.tlf)) {
        $("#errorTlf").textContent("<span style='color:red; font-weight:bold;'> UGYLDIG INPUT, SKRIV NUMMERET DITT!</span>");
        feilData = true;
        return;
    }

    if (!feilData){
        billetter.push(enBillett);
        $("#film").val("");
        $("#seter").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#mail").val("");
        $("#tlf").val("");
        formaterData(enBillett);

        $.post("/lagre", billetter, function (data){
            hentAlle();
        });
    }
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
    for (const enBillett of billetter){
        ut+="<tr>";
        ut+="<td>"+enBillett.film+"</td><td>"+enBillett.seter+"</td><td>"+enBillett.fornavn+"</td><td>"+enBillett.etternavn+"</td><td>"+enBillett.mail+"</td><td>"+enBillett.tlf+"</td>";
        ut+="</tr>";
    }
    ut += "</table";
    $("#billetter").html(ut);
}

function slettAlle() {
    $.ajax({
        url: "/slettAlle",
        type: "DELETE",
        success: function() {
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
function validerTlf(input_str) {
    // This regex allows for various phone number formats, including optional country code, area code, and optional spaces or dashes.
    var re = /^(1[ -]?)?\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    return re.test(input_str);
}
