function preload() {
     img = loadImage('./img/buste.jpg');
}
function setup() {
  createCanvas(900, 900);
  img.resize(900, 900);
}

function draw() {
  background('f1f1f1');
  colorMode(HSB, 255);
  noStroke();
  fill(0);
  let tiles = mouseX/10;
  let tileSize = width/tiles;
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      let c = img.get(Math.floor(x*tileSize),Math.floor(y*tileSize));
      let b = map(brightness(c),0,255,tileSize,0);
      ellipse(x*tileSize,y*tileSize,b,b);
    }
  }
}

function keyPressed() {
  if (key == "s" || key == "S") saveCanvas('screenshot', 'png');
}