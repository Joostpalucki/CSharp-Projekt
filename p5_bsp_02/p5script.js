var ellipseRadius = 100;

function setup() {
    createCanvas(800, 600); //Zeichenfeld linke Zahl begrenzt x-Achse, rechte Zahl begrenzt y-Achse
    colorMode(RGB, 100); //Farbintensität verändern
    background(25); //ändert die Hintergrundfarbe
    smooth(); //macht den Kreis rund(Pixel)
    frameRate(60); //Bilder pro Sekunde
}

function draw() {
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius); //Kreis zeichnen an dem Punkt, and dem sich die Maus befindet
}