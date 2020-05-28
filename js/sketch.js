let slider
function preload() {
     img = loadImage('./img/buste.jpg')
}
function setup() {
  if (img.width > windowWidth) {
    createCanvas(900, 900)
    img.resize(900, 0)
  }
  createCanvas(img.width, img.height)

  colorMode(RGB,255)
  ellipseMode(CORNER)
  slider = createSlider(0, 200, 0, 10)
  slider.position(10, 10)
  slider.style('width', '80px')
  
}

function draw() {
  background('#FAFAFA')
  let val = slider.value()

  noStroke()
  let tiles = val
  let tileSize = width/tiles
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      let c = img.get(Math.floor(x * tileSize), Math.floor(y * tileSize))
      let b = map(brightness(c), 0, 255, tileSize, 0)
      console.log(brightness(c))
      fill(c)
      ellipse(x * tileSize, y * tileSize, b, b)
    }
  }
}

function keyPressed() {
  if (key == "s" || key == "S") saveCanvas('screenshot', 'png')
}
