/*
functie om kleuren te berekenen voor de punten van een verzameling
x en y zijn het te tekenen punt binnen het canvas
snelheid is hoe snel het punt ontsnapt ( 1 - 1000 )
context is het canvas waarop het nieuwe punt gezet moet worden
*/
let kleurstring = "rgb(255, 255, 255)";  //wit, je moet toch wat...
function kleuren(snelheid, x, y, context){

//als snelheid < 1000: punt hoort niet bij de verzameling en krijgt een kleur
if(snelheid<1000){
    //console.log("dit punt word bereikt");
    switch(kleurstijl){

        case "tomatensoep":{
                //Hue uit kleurenwiel, telt tot 360
                var hue=mapBereik(snelheid, 0, 1000, 0, 360);
                kleurstring="hsl(" + hue + ",100%,50%)";
            break;
        }
        case "grijstinten":{
                    var tint = mapBereik(snelheid,0,1000,0,255);
                    kleurstring = "rgb("+ tint+ "," + tint + ","+ tint + ")";
            break;
        }
        case "legokleuren":{
                snelheid = 1000 / snelheid;  //doe eens gek...
                hue = mapBereik(snelheid, 0, 1000, 0, 360);
                kleurstring = "hsl(" + hue + ",100%,50%)";
            break;
        }
        case "snoepwinkel":{
                //we gooien er lukraak een sinus in......
                //uitkomst dus tussen -1 en +1, die gaan we mappen naar 0 -> 360
                snelheid = Math.sin(snelheid);
                hue = mapBereik(snelheid, -1,1, 0, 360);
                kleurstring = "hsl(" + hue + ",100%,50%)";
            break;
        }
        case "koelblauw":{
            //Hue uit kleurenwiel, nu gebruiken we maar de helft 
            //(dus tellen tot 180 ipv 360, of vanaf 180)
            var hue=mapBereik(snelheid, 0, 1000, 180, 360);
            kleurstring="hsl(" + hue + ",100%,50%)";
            break;
        }
        default:{
            //tomatensoepkleuren
            var hue=mapBereik(snelheid, 0, 1000, 0, 360);
            kleurstring="hsl(" + hue + ",100%,50%)";
            break;
        }
    }
}               
else{
    //punt hoort bij de verzameling
    kleurstring = "hsl(000,100%,0%)"; //naar zwart weggedraaid rood
}       
//nu eidelijk tekenen...
context.moveTo(x, y);
context.fillStyle = kleurstring;
context.fillRect(x, y, 1, 1);
}