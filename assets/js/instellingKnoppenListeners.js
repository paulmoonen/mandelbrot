/*
code om de klik-events van de keuzeknoppen af te handelen
Mandelbrotcanvas krijgt haar eventlistener toegewezen
in bestand logica.js waar alles voor het canvas in één keer wordt ingesteld
*/

let tomatensoepKnop = document.querySelector("#tomatensoep");
let grijstintenKnop = document.querySelector("#grijstinten");
let legokleurenKnop = document.querySelector("#legokleuren");
let snoepwinkelKnop = document.querySelector("#snoepwinkel");
let koelblauwKnop = document.querySelector("#koelblauw");

let MandelbrotZoomKnop = document.querySelector("#MandelbrotZoom");
let JuliaVerzamelingsKnop = document.querySelector("#ToonJulia");

/* 
functie stelt de variabele kleurstijl opnieuw in
en roept de kleur() functie aan om het resultaat te kunnen bewonderen
 */
function setTomatensoepkleur(){kleurstijl = "tomatensoep"; tekenenM();tekenenJ();};
function setGrijstinten(){kleurstijl = "grijstinten"; tekenenM();tekenenJ();};
function setLegokleuren(){ kleurstijl = "legokleuren"; tekenenM();tekenenJ();};
function setSnoepwinkelkleuren(){kleurstijl = "snoepwinkel"; tekenenM();tekenenJ();};
function setKoelblauw(){kleurstijl = "koelblauw"; tekenenM();tekenenJ()};

/*
functie om het zoomen in de Mnadelbrotfiguur uit te zetten
we kunnen nu rustig de hele verzameling doorlopen op zoek naar
mooie Juliaverzamelingen van C
*/
function MndZm(){ z = 100}; //inzoomen: in vakje met hoogte en breedte  2*z rond muisklikplek
function Julia(){ z = breedte / 2;}; //even niet meer inzoomen


//functies toevoegen aan "knoppen"
tomatensoepKnop.addEventListener("click", setTomatensoepkleur);
grijstintenKnop.addEventListener("click", setGrijstinten);
legokleurenKnop.addEventListener("click", setLegokleuren);
snoepwinkelKnop.addEventListener("click", setSnoepwinkelkleuren);
koelblauwKnop.addEventListener("click", setKoelblauw);

MandelbrotZoomKnop.addEventListener("click", MndZm);
JuliaVerzamelingsKnop.addEventListener("click", Julia);








