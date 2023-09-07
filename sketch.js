// Set up p5
// This is the initial framework 
let seed; 
let img;
let vectorShapes;

function preload() {
  // Load in image
  img = loadImage('image.jpg');
}

function setup() {

  createCanvas(500, 500);
  
  // Analyze image pixels
  img.loadPixels();
  for (let i = 0; i < img.pixels.length; i+=4) {
    // Analyze color, brightness
    let r = img.pixels[i];
    let g = img.pixels[i+1];
    let b = img.pixels[i+2];
    let bright = (r+g+b) / 3;
    
    // Create vector shapes
    let v = createVector(bright, i);
    vectorShapes.push(v); 
  }

  // Set seed 
  seed = floor(random(100000));
  randomSeed(seed);

  // Create background
  createBackground();

  // Add figures
  addFigures();

  // Add mythical elements
  addMythicalElements();
  
  // Add spatial elements
  addSpatialElements();
  
}

function draw() {

  // Re-assemble vector shapes
  let v = random(vectorShapes);
  push();
  translate(random(width), random(height));
  rotate(random(TWO_PI));
  scale(random(2, 5));
  vertex(v.x, v.y);
  pop();

}

// Stub functions...

function outputSeed() {
  return seed; 
}
