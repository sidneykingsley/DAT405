
function setup() {
  createCanvas(500, 500,);
  strokeWeight(2);
  noStroke();
  frameRate(50000);
  noLoop()
  //noLoop();
}

function draw() {

    fill(205,206,178)
    for (let i = 0; i < 100; i++) {
      var l = random(500)
      var b = random(500)
      var eSize = random(50)
      fill(random(255),random(255),random(255))
      ellipse(l,b,eSize,eSize);
        var d = random(500)
        var f = random(500)
        var rSize = random(50)
        fill(random(255),random(255),random(255))
        rect(d,f,rSize,rSize);
      //fill(random(255),random(255),random(255))
      //rect(random(500),random(500),b,b);
      stroke(random(255),random(255),random(255))
      line(d,f,l,b);
  }
}
