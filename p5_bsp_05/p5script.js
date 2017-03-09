var ellipseRadius = 100;

function setup() {
    createCanvas(800, 600); //Zeichenfeld Begrenzung
    colorMode(RGB, 255); //Farbeinstellung
    background(0); //Hintergrundfarbe
    smooth(); //"glättet" Pixel
    frameRate(60); //Bilder pro Sekunde
}

function draw() {
    noStroke(); //Keine Außenlinie
    fill( (mouseX/width)*255, (mouseY/height)*255, 0, 25); // ( R, G, B, A ) Kreisfarbe
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius); //Kreis an der Position der Maus zeichnen
}