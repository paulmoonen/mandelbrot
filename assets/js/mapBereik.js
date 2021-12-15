/*
onze eigen map() functie om een waarde van een oud naar een nieuw bereik te projecteren
de map() functie zoals we die kennen van Processing en P5.js hebben we niet in Javascript
in Javascript doet de map() functie iets mat arrays
*/

function mapBereik(waarde, oudLaag, oudHoog, nieuwLaag, nieuwHoog){
    //hoever (gedeelte van het geheel) was onze waarde op weg binnen het oude bereik?
    var gedeelte = (waarde - oudLaag)/(oudHoog - oudLaag);

    //binnen het nieuwe bereik heeft hetzelfde gedeelte een andere omvang:
    var nieuwGedeelte = gedeelte*(nieuwHoog - nieuwLaag);
    var nieuw = nieuwGedeelte + nieuwLaag;

    return nieuw;
}