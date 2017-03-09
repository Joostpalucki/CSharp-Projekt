var ellipseRadius = 100;

function setup() {
    createCanvas(800, 600); //Feld Begrenzung
    colorMode(RGB, 255); //Farbintensität
    background(0); //Hintergrundfarbe
    smooth(); //entfernt Pixel
    frameRate(60); //Bilder pro Sekunde
}

function draw() {
    background(0);
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius); //Kreis an der Position der Maus zeichnen
}