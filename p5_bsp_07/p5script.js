var ellipseRadius = 100; //Variabel definieren
var img; //Variabel definieren
var lastX = 0; //Variabel definieren

function preload() {
    img = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Ascanius_Shooting_the_Stag_of_Sylvia_1682_Claude_Lorrain.jpg/966px-Ascanius_Shooting_the_Stag_of_Sylvia_1682_Claude_Lorrain.jpg"); //Bild wird geladen und auf einer Variabel gespeichert
}

function setup() {
    createCanvas(800, 600); //Zeichenfeld Begrenzung
    smooth(); //"glättet" Pixel
    noStroke(); //entfernt Außenlinie
    image(img, 0, 0); //Zeichnet ein Bild in dem Zeichenfeld (Bild, welches auf der Variabel gespeichert ist)
}

function draw() {
    var pxl = img.get(mouseX, mouseY);
    fill(pxl); //Farbe des Kreises anhand der Variabel "pxl"
    radius = min(ellipseRadius, abs(mouseX - lastX)); //legt den kleinsten Radius des Kreises fest
    ellipse(mouseX, mouseY, radius, radius); //Kreis an der Position der Maus zeichnen
    lastX = mouseX; //Die Varibale "lastX" wird mit dem Wert von mouseX überschrieben
}