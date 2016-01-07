var ocean;

function preload() {

}

function setup() {

  // create canvas
  createCanvas(710, 400);

  ocean = createVideo('videos/Relaxing 1 min Video of A Tropical Beach with Blue Sky White Sand and Palm Tree.mp4');  
  ocean.loop();
  ocean.hide();

}

function draw() {
  background(0,125,125);

  image(ocean,0,0,710,400);  

}


