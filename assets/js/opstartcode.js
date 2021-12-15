/*
Code om de Mandelbrot- en Juliaverzameling in HTML Canvas elementen te tonen
*/

//afmetingen van beide canvassen
var breedte = 600;
var hoogte = 600;

/*
wiskundig bereik van de Mandelbrotverzameling-'grafiek'
Bij aanpassingen: houd het liever wel vierkant
*/
var xLaag = -2.5;
var xHoog = 1.5;
var yLaag = -2; //y as canvas is imaginaire as verzameling
var yHoog = 2;

//voor Juliaverzameling:
var xLaagJ = -1.5;
var xHoogJ = 1.5;
var yLaagJ = -1.5;
var yHoogJ = 1.5;

/*
waarde van C voor de Juliaverzameling 
wordt na iedere muisklik bijgewerkt
*/
let rC = 0;
let iC = 0;

/*
kleurstijlenkeuze
bij opstarten kiezen we voor kleurstijl "tomatensoep"
*/
let kleurstijl = "koelblauw";

/* vinden en instellen van beide Canvassen*/
var MandelbrotCanvas = document.getElementById("MandelbrotCanvas");
var ctxM = MandelbrotCanvas.getContext("2d");
MandelbrotCanvas.width = breedte;
MandelbrotCanvas.height = hoogte;

let JuliaCanvas = document.getElementById("Juliacanvas");
let ctxJ = JuliaCanvas.getContext("2d");
JuliaCanvas.width = breedte;
JuliaCanvas.height = breedte;

/*
event listeners voor de beide Canvassen
het event (als object met eigenschappen) wordt automatisch doorgegeven
aan de callbackfunctie
*/
MandelbrotCanvas.addEventListener("click", inzoomenM);
JuliaCanvas.addEventListener("click", inzoomenJ);

/*
z is zoomfactor: we tekenen een denkbeeldig vierkantje rond de muisklik
met zijden met een lengte van 2*z om in te zoomen 
of z = breedte / 2 om even te genieten van Juliaverzamelingen 
*/
var z=100;

tekenenM(); //teken de Mandelbrotverzameling
tekenenJ(); //teken de Juliaverzameling

/*
functie tekenenM() doorloopt alle pixels van het Canvas,
geeft iedere wiskundige waarde door aan de iteraties() functie,
welke op zijn beurt een getal teruggeeft over de ontsnapping van het wiskundige punt
*/
function tekenenM() {
    let snelheid; //aantal doorlopen iteraties    
    /*
    geneste lus: we gaan iedere x-waarde van links naar rechts bij langs,
    en dat doen we voor alle y- waarden. 
    */
    for (let y = 0; y < hoogte; y++) {
        for (let x = 0; x < breedte; x++) {
            /*
            we hebben nu een x- en en y- waarde binnen  ons Canvas.
            de x-waarde rekenen we om naar een waarde voor straks langs de reële as
            de y-waarde rekenen we om naar een waarde voor straks langs de imaginaire as.
            */
            let reëel = mapBereik(x, 0, breedte, xLaag, xHoog);

            //omgekeerde volgorde vanwege telrichting, canvas telt naar beneden toe omhoog
            let imaginair = mapBereik(y, 0, hoogte, yHoog, yLaag);

            /*
            (reëel + imaginair*i) is de C-waarde om in te voeren in de zich herhalende functie:
            z -> z*z + C 
            welke we starten met z = (0 + 0*i) 
            */
            snelheid = iteraties(0, 0, reëel, imaginair);

            //functie kleuren(snelheid) aanroepen om te tekenen
            kleuren(snelheid, x, y, ctxM);            
        }        
    }
}

/* 
functie om de Juliaverzameling van waarde C te tekenen 
omdat beide verzamelingen een eigen assenstelsel hebben met verschillende schalen
hebben ze ieder een eigen functie
Deze functie is bijna hetzelfde als de voorgaande van de Mandelbrotverzameling
*/
function tekenenJ(){
    let snelheid; //aantal doorlopen iteraties    
    //    geneste lus
    for (let y = 0; y < hoogte; y++) {
        for (let x = 0; x < breedte; x++) {
            /*
            we hebben nu een x- en en y- waarde binnen  ons Canvas.
            de x-waarde rekenen we om naar een waarde voor straks langs de reële as
            de y-waarde rekenen we om naar een waarde voor straks langs de imaginaire as.
            */
            let reëel = mapBereik(x, 0, breedte, xLaagJ, xHoogJ);

            //omgekeerde volgorde vanwege telrichting, canvas telt naar beneden toe omhoog
            let imaginair = mapBereik(y, 0, hoogte, yHoogJ, yLaagJ);

            /*
            (reëel + imaginair*i) is de z-waarde om in te voeren in de zich herhalende functie:
            z -> z*z + C 
            welke we starten met C = (rC + iC*i) 
            */
            snelheid = iteraties(reëel, imaginair, rC, iC);

            //functie kleuren(snelheid) aanroepen om te tekenen
            kleuren(snelheid, x, y, ctxJ);            
        }        
    }
}

