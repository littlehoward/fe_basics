var ime = prompt("Unesite vase ime");

//BEZ FUNKCIJE

//console.log(ime);
//alert("Dobro dosli," + " " + ime);
//console.log("Dobro dosli," + " " + ime);

//SA FUNKCIJOM

function pozdravi(a){
    console.log("Dobro dosli," + " " + a)
}

pozdravi(ime);

function kvadratBroja(prviBroj){
    var rezultat = prviBroj * prviBroj;

    console.log(rezultat);
}

kvadratBroja(2);
