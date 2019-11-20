alert ('Zombi apokalipsa');
alert ('Nalazite se u napustenoj prodavnici i pretrazujete okolinu u potrazi za nečim korisnim');
alert ('U tom trenutku ulazi zombi na vrata!');

var oruzje = prompt ('Gledate oko sebe i uočavate tri vrste oružja. Birajte: šipku, nož ili gumenu patku.')

var vrednost = Math.round(Math.random());

if(vrednost === 0){
    alert('Zamahujete sa ' + oruzje + ', ali promašujete.');
}else{
    alert('Zamahujete sa ' + oruzje + ' i pogađate zombija.');
}
