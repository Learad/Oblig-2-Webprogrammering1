function registrerBillett(){

    const billett = {
        film: document.getElementById("filmvalg").value,
        antall: document.getElementById("antall").value,
        fornavn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        telefonnr: document.getElementById("telefonnr").value,
        epost: document.getElementById("epost").value
    }

    let errorliste = []
    errorliste.push("antallerror")
    errorliste.push("fornavnerror")
    errorliste.push("etternavnerror")
    errorliste.push("telefonnrerror")
    errorliste.push("eposterror")

    let i = -1
    let teller = true
    for(let key in billett){
        if(i >= 0) {
            if (billett[key] === "") {
                teller = false
                document.getElementById(errorliste[i]).innerHTML = "Må skrive noe inn i " + key
            } else {
                document.getElementById(errorliste[i]).innerHTML = " "
            }
        }
        i++
    }
    if (teller){
        $.get("/registrer", billett, function (){

        })
        document.getElementById("filmvalg").value = ""
        document.getElementById("antall").value = ""
        document.getElementById("fornavn").value = ""
        document.getElementById("etternavn").value = ""
        document.getElementById("telefonnr").value = ""
        document.getElementById("epost").value = ""
        visBilletter()
    }
}

function visBilletter(){

    $.get("/vis", function (liste){
        let ut = "<table class='table table-striped'><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";
        for (let i of liste){
            ut+= "<tr><td>" + i.film + "</td><td>" + i.antall + "</td><td>" + i.fornavn + "</td><td>" + i.etternavn +
                "</td><td>" + i.telefonnr + "</td><td>" + i.epost +"</td></tr>"
        }
        ut += "</table>"
        document.getElementById("billettliste").innerHTML = ut
    })

}

function slettbillett(){
    $.post("/slett", function () {
        $("#billettliste").html(" ")
    })

}