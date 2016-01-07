var ocean;
var beaker;

function preload() {

}

function setup() {

  // create canvas
  createCanvas(710, 400);

  // load video into computer memory
  ocean = createVideo('videos/Relaxing 1 min Video of A Tropical Beach with Blue Sky White Sand and Palm Tree.mp4');  
  ocean.loop();
  ocean.hide();
  
  // load image data
  img = loadImage("images/beaker.jpg");

}

function draw() {

  background(0,125,125);

  // show video on screen
  image(ocean,0,0,710,400);  


  // show image
  image(img,0,0);
}


