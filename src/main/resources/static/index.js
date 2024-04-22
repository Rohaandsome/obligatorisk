$(function (){
    hentAlle();
});

function hentAlle(){
    $.get("/hentAlle", function (billetter){
        formaterData(billetter);
    });
}

function formaterData(billetter) {
    let ut =
        "<table class ='table table-striped'><tr>" +
        "<th>Film</th><th>Seter</th><th>Fornavn</th><th>Etternavn</th><th>Mail</th><th>Telefonnummer</th><th></th><th></th>" +
        "</tr>";
    for (const billett of billetter){
        ut+="<tr>";
        ut+="<td>"+billett.film+"</td><td>"+billett.seter+"</td><td>"+billett.fornavn+"</td><td>"+billett.etternavn+"</td><td>"+billett.mail+"</td><td>"+billett.tlf+"</td>";
        ut+= "<td><a class='btn btn-primary' onclick='endreEiBilet("+billett.id+")'>Endre</a></td>"
        ut+="<td> <button class='btn btn-danger' onclick='slettEiBilet("+billett.id+")'>Slett</button></td>"
        ut+="</tr>";
    }
    ut += "</table";
    $("#billetter").html(ut);
}

function endreEiBilet(id){
    window.location.href ="endreBilet.html?"+id;
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

function slettEiBilet(id){
    const url = "/slettEiBilet?id="+id;
    $.get(url, function (){
        hentAlle();
    })
}


