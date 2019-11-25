var treciBroj = 5;

// ZADATAK BROJ 2

function racunaj (prviBroj, drugiBroj) {
    var prviBroj = document.forma1.input1.value;
    var drugiBroj = document.forma1.input2.value;
    //var treciBroj = 5;
    var promeniBojuRezultata = document.getElementsByClassName("zadatak2_desno")[0];
    var rezultat = parseFloat(prviBroj) + parseFloat(drugiBroj) + treciBroj;
    document.getElementsByTagName("span")[1].innerHTML=rezultat;
    promeniBojuRezultata.setAttribute("style", "background-color: red; color: white");
}

// Pitanja: kako uraditi sa return i document.write?

// ZADATAK BROJ 3

function racunaj2 (prviBroj1, drugiBroj1){
    var rezultat1 = prviBroj1 + drugiBroj1 + treciBroj;
    return rezultat1;
}
    var zbir = racunaj2 (4,6);
    console.log('Rezultat je: ' + zbir);

// ZADATAK BROJ 4

function otvoriReklamu(){
    window.open("reklama.html","_blank", "width=320,height=250");
 }

function zatvoriReklamu() {
    window.close();
}

// ZADATAK BROJ 5

var zatvoriProzor;

function zatvoriReklamu1() {
    zatvoriProzor.close();
}

function otvoriReklamu1(){
    zatvoriProzor = window.open("reklama1.html","_blank", "width=320,height=250");
    setTimeout('zatvoriReklamu1()', 6000);
 }

// ZADATAK BROJ 6 & 7

function proveri(){
    var imePosetioca = document.forma2.ime.value;
    var prezimePosetioca = document.forma2.prezime.value;
    var obojiPraznoPoljeIme = document.getElementsByTagName("input")[4];
    var obojiPraznoPoljePrezime = document.getElementsByTagName("input")[5];
    var opomeniIme = document.getElementById("praznoPoljeIme");
    var opomeniPrezime = document.getElementById("praznoPoljePrezime");


    if (!imePosetioca==""){
        obojiPraznoPoljeIme.setAttribute("style", "background-color: #ffffff");
    }
    if (imePosetioca==""){
        alert("Niste uneli ime!")
        obojiPraznoPoljeIme.setAttribute("style", "background-color: #ffe5e5");
    }
    if (!prezimePosetioca==""){
        obojiPraznoPoljePrezime.setAttribute("style", "background-color: #ffffff");
    }
    if (prezimePosetioca==""){
        alert("Niste uneli prezime!")
        obojiPraznoPoljePrezime.setAttribute("style", "background-color: #ffe5e5; border: 2px solid red");
    }else {
        alert("Hvala Vam što ste se registrovali!")
    }

}

// ZADATAK BROJ 8

function obojiPozadinu (){
    var bojaPozadine = document.getElementsByTagName("body")[0];
    bojaPozadine.setAttribute("style", "background-color: #A9A9A9");
    document.getElementsByTagName("button")[2].innerHTML="Ha, šta kažeš?";
}

// ZADATAK BROJ 9 - PREUZETO SA http://bit.ly/2DePKy4

function trenutnoVreme() {
        var sada            = new Date();
        var godina          = sada.getFullYear();
        var mesec           = sada.getMonth()+1;
        var dan             = sada.getDate();
        var sati            = sada.getHours();
        var minute          = sada.getMinutes();
        var sekunde         = sada.getSeconds();
//       if(mesec.toString().length == 1) {
//            mesec = '0'+mesec;
//       }
//       if(dan.toString().length == 1) {
//            dan = '0'+dan;
//       }
        if(sati.toString().length == 1) {
             sati = '0'+sati;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(sekunde.toString().length == 1) {
             sekunde = '0'+sekunde;
        }
        var vreme = sati+':'+minute+':'+sekunde;
        return vreme;
    }

    // example usage: realtime clock
    setInterval(function(){
        currentTime = trenutnoVreme();
        document.getElementById("vreme").innerHTML = currentTime;
    }, 1000);

// ZADATAK BROJ 10

function stampaInputPolja(){
    var inputPolja = document.getElementsByTagName("input").value;
    var lista = "";

    for (i=0; i<inputPolja.length; i++) {
        lista = lista + inputPolja[i] + ", ";
        console.log(lista);
    }
}
