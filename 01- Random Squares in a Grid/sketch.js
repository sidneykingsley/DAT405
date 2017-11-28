
function setup() {
  createCanvas(500, 500,);
  strokeWeight(2);
  noStroke();
  frameRate(50000);
  noLoop();
}

function draw() {


    for (let y= 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        fill(20,20,20);
        stroke(255);
        rect(x*50,y*50,50,50);
      }
    }

    for (let y= 0; y < 500; y++) {
      for (let x = 0; x < 500; x++) {
        fill(random(255),random(255),random(255));
        noStroke();
        rect(x*50+12.5,y*50+12.5,25,25);
      }
    }
}
