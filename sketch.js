
// Global variable to store the gallery object. The gallery object is
// a container for all the visualisations.
var gallery;



function setup() {
  // Create a canvas to fill the content div from index.html.
  var c = createCanvas(1024, 576);
  c.parent('app');

  // Create a new gallery object.
  gallery = new Gallery();

  // Add the visualisation objects here.
  gallery.addVisual(new HistGraph());
  // noLoop();
}

function draw() {
  background(255);
  if (gallery.selectedVisual != null) {
    gallery.selectedVisual.draw();
  }
  console.log("looping..")
  noLoop()
}

function mousePressed(){
  redraw()
}

function mouseReleased(){
  redraw()
}
