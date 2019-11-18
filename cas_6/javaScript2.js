var broj = prompt("Unesite broj");

//BEZ FUNKCIJE

//console.log(ime);
//alert("Dobro dosli," + " " + ime);
//console.log("Dobro dosli," + " " + ime);

//SA FUNKCIJOM

function pozdravi(a){
    console.log("Dobro dosli," + " " + a)
}

//pozdravi(ime);

function kvadratBroja(prviBroj){
    var rezultat = prviBroj * prviBroj;
    console.log("Kvadrat izabranog broja " + broj + " je " + rezultat);
    console.log(rezultat);
}

//kvadratBroja(broj);

function saberiBrojeve(prvi, drugi, treci){
    var zbir = prvi + drugi + treci;
    return zbir;
}

var ukupno = saberiBrojeve(4,3,5);
console.log(ukupno);
