var ellipseRadius = 200; //Kreisgröße wird verändert

function setup() {
   createCanvas(1000, 700); //linke Zahl begrenzt das Zeichenfeld auf der x-Achse, rechte Zahl auf der y-Achse
}

function draw() {
    ellipse(width / 6, height / 6, ellipseRadius, ellipseRadius);//linke Zahl verschiebt die ellipse auf der x-Achse, rechte Zahl auf der y-Achse, zeichnet Kreis
}