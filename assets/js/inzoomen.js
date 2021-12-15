/*
functie waarmee we het muisklik-events in de Canvassen afvangen.
De muiscoördinaten van de klik wordt het nieuwe centrum van een
opnieuw te berekenen Mandelbrot- of Juliaverzameling
maar dan op een iets kleinere schaal
de parameters x en y slaan op de coördinaten van de muisklik t.o.v. het canvas zelf 
de xoomfactor z is gedeclareerd in bestand logica.js
rC en iC staan in bestand logica.js gedeclareerd
*/

var xLaagNieuw, xHoogNieuw, yLaagNieuw, yHoogNieuw; //voor Mandelbrot
var xLaagJNieuw, xHoogJNieuw, yLaagJNieuw, yHoogJNieuw;//voor Julia


function inzoomenM(muisklik) {
    let x = muisklik.offsetX;
    let y = muisklik.offsetY;
    
    //na eerste klik meteen de Juliaverzameling laten zien
    JuliaCanvas.style.display="block";

    /*
    om naar <p id="klik"> </p> te schrijven 
    waar we geklikt hebben
    */
    rC = mapBereik(x, 0, breedte, xLaag, xHoog);
    iC = mapBereik(y, 0, hoogte, yHoog, yLaag);
    muisklikstring = "Geklikt op: ( " + rC + " + " + iC + " i )";

    /*
    rondom de muisklikplek tekenen we een vierkantje van 200 bij 200 pixels
    let op: verticaal tellen we omgekeerd.....
    linksboven: (x-z, y-z) 
    rechtsboven: (x+z, y-z)
    linksonder: (x-z, y+z)
    rechtsonder: (x+z, y+z)
    variabelen xLaagNieuw, xHoogNieuw, yLaagNieuw, yHoogNieuw berekenen met mapBereik()
    en toekennen aan xLaag, xHoog, yLaag, yHoog
    daarna opnieuw tekenen() aanroepen
    */

    xLaagNieuw = mapBereik((x - z), 0, breedte, xLaag, xHoog);
    xHoogNieuw = mapBereik((x + z), 0, breedte, xLaag, xHoog);

    yLaagNieuw = mapBereik((y + z), 0, hoogte, yHoog, yLaag);
    yHoogNieuw = mapBereik((y - z), 0, hoogte, yHoog, yLaag);

    xLaag = xLaagNieuw;
    xHoog = xHoogNieuw;
    yLaag = yLaagNieuw;
    yHoog = yHoogNieuw;

    tekenenM();
    tekenenJ();
    document.getElementById("muisklik").innerHTML = muisklikstring;
}
/* ongeveer de herhaling van de code hierboven */
function inzoomenJ(muisklik){
    let x = muisklik.offsetX;
    let y = muisklik.offsetY;

    xLaagJNieuw = mapBereik((x - z), 0, breedte, xLaagJ, xHoogJ);
    xHoogJNieuw = mapBereik((x + z), 0, breedte, xLaagJ, xHoogJ);

    yLaagJNieuw = mapBereik((y + z), 0, hoogte, yHoogJ, yLaagJ);
    yHoogJNieuw = mapBereik((y - z), 0, hoogte, yHoogJ, yLaagJ);

    xLaagJ = xLaagJNieuw;
    xHoogJ = xHoogJNieuw;
    yLaagJ = yLaagJNieuw;
    yHoogJ = yHoogJNieuw;

    tekenenJ();

}