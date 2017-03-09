var ellipseRadius = 100;

function setup() {
    createCanvas(800, 600); //Zeichenfeld Begrenzung
    colorMode(RGB, 25); //Farbeinstellung
    background(0); //Hintergrundfarbe
    smooth(); //"glättet" Pixel
    frameRate(60); //Bilder pro Sekunde
}

function draw() {
    noStroke(); //keine Außenlinie
    fill( 255, 255, 0, 25); // ( R, G, B, A ) Farbe zum Füllen des Kreises
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius); //Kreis an der Position der Maus zeichnen
}