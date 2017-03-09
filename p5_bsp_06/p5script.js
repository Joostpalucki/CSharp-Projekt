var ellipseRadius = 100;

function setup() {
    createCanvas(800, 600); //Zeichenfeld Begrenzung
    colorMode(RGB, 255); //Farbeinstellung
    background(0); //Hintergrundfarbe
    smooth(); //"glättet" Pixel
    frameRate(60); //Bilder pro Sekunde
}

function draw() {
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 25); // ( R, G, B, A )
    stroke(255, 255, 255, 25); //Farbe der Außenlinie
    strokeWeight(2); //Dicke der Außenlinie
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius); //Kreis an der Position der Maus zeichnen
}