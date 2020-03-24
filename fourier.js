let time = 0;
let wave = [];

let slider;
let detailX, detailY;
let shake;

function setup() {
  //createCanvas(windowWidth,windowHeight, WEBGL);
  createCanvas(600,600,WEBGL)
  slider = createSlider(1, 10, 1);
  detailX = createSlider(3, 24, 3);
  detailY = createSlider(3, 16, 3);
  shake = createSlider(0.001, 0.09, 0.01, 0.01)
}

function draw() {
  background(0);
    camera(200+ sin(frameCount * shake.value()) * 10, 1+sin(frameCount * shake.value()) * 3000, 200+ sin(frameCount *shake.value()) * 20, 0, 0, 0, 0, 1, 0);
   // plane(100,100);
  //orbitControl();
  // ortho();
  //ambientLight(255,0,0)
  pointLight(255,0,0,mouseX,mouseY,0)
  directionalLight(0,0,255,0,1,0)
   rotate(radians(frameCount%360))
  translate(0,0);

  let x = 0;
  let y = 0;

  for (let i = 0; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    let radius = 400 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);
push()
    //strokeWeight(0.25)
    stroke(0, 100);
    //noFill();
   //ambientMaterial(255,100);
    specularMaterial(255,100);
    translate(prevx,prevy)
    sphere(radius*2,detailX.value(),detailY.value())
    //ellipse(prevx, prevy, radius * 2);

 pop();   //fill(255);
   
    //ellipse(x, y, 8);
  }
  wave.unshift(y);

  // translate(200, 0);
  // line(x - 200, y, 0, wave[0]);
  // beginShape();
  // noFill();
  // for (let i = 0; i < wave.length; i++) {
  //   vertex(i, wave[i]);
  // }
  // endShape();

   time += 0.05;

  // if (wave.length > 250) {
  //   wave.pop();
  // }
}