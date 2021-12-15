/*
Functie voor complexe getallen: z -> z² + C
Deze gaan we tot 1000 keer herhalen.
AZodra de waarde van z buiten een straal van 4 van de oorsprong komt, 
onstanapt het punt voor altijd, stopt de lus en retuorneert het aantal iteraties tot ontsnapping.
Anders stopt de lus bij 1000 iteraties en is het antwoord dus 1000,
wat we opvatten als een punt dat niet ontsnapt

Voor de Mandelbrotverzameling roepen we de functie voor ieder punt aan met:
telkens een andere waarde voor C (welke wel of niet bij de Mandelbrotverzameling kan horen)
telkens z = oorsprong.

Voor een Juliaverzameling roepen we de functie voor ieder punt aan met:
telkens dezelfde waarde voor C (welke de Juliaverzameling compleet beschrijft)
telkens een neiuwe waarde voor z (welke wel of niet bij de Juliaverzameling kan horen)
*/

function iteraties(zReëel, zImaginair, cReëel, cImaginair) {

    //variabelen voor z-waarden
    var zrOud = zReëel;
    var zrNieuw;
    var ziOud = zImaginair;
    var ziNieuw;


    for (let i = 0; i < 1000; i++) {

        /*
        uitgeschreven versie van z -> z² + C:

        (zrOud + ziOud*i) -> (zrOud² + 2*zrOud*ziOud*i - ziOud²) + (crReëel + cImaginair*i)

        opgeschoond:
        zrNieuw = zrOud² - ziOud² + cReëel
        ziNieuw = 2* zrOud * ziOud + cImaginair
        */
        zrNieuw = (zrOud * zrOud) - (ziOud * ziOud) + cReëel;
        ziNieuw = (2 * zrOud * ziOud) + cImaginair;

        //ontsnappingstest
        if ((zrNieuw * zrNieuw) + (ziNieuw * ziNieuw) > 16) {
            return i;            
        }
        zrOud = zrNieuw;
        ziOud = ziNieuw;
    }
    //lus heeft blijkbaar geen break uitgevoerd: onderzocht punt hoort bij de verzameling
    return 1000;
}