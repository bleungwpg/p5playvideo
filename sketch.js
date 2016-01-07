var ocean;
var beaker;
var beakerX;
var beakerY;
var distanceX;
var distanceY;
var findStartingValue;
var inImage;

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
  
  
  	beakerX = 0;
	beakerY = 0;
	findStartingValue = true;
	inImage = false;

}

function draw() {

  background(0,125,125);

  // show video on screen
  image(ocean,0,0,710,400);  


  // show image
  image(img,beakerX,beakerY);
  
  

  
  	if (mouseX > beakerX && mouseX < beakerX + 61 && mouseY > beakerY && mouseY < beakerY + 70)
	{
		inImage = true;
	}
		

	if (mouseIsPressed == true && mouseButton == LEFT && inImage == true)
	{

		if (findStartingValue == true)
		{
			distanceX = mouseX - beakerX;
			distanceY = mouseY - beakerY;
			findStartingValue = false;
		}
		beakerX = mouseX - distanceX;
		beakerY = mouseY - distanceY;
	}
	else
	{
		findStartingValue = true;
		inImage = false;
	}
}


