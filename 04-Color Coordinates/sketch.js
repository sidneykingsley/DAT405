var backgroundColor;
var isOverRectangle;

function setup()
{
  createCanvas(400, 400);
  backgroundColor = color(255,200,255);
  noStroke();
}

function draw()
{
  background(backgroundColor);

  if (mouseX >= 0 && mouseX <= 200 && mouseY >= 0 && mouseY <= 200)
  {
    fill(255,0,0)
    rect(0,0,200,200)
  }
  else if (mouseY >= 0 && mouseY <= 200 && mouseX >= 200 && mouseX <= 400 )
  {
    fill(0,255,0)
    rect(200,0,200,200)
  }
  else if (mouseX >= 200 && mouseX <= 400 && mouseY >= 200 && mouseY <= 400)
  {
    fill(0,0,255)
    rect(200,200,200,200)
  }
  else if (mouseY >= 200 && mouseY <= 400 && mouseX >= 0 && mouseX <= 200 )
  {
      fill(0,0,0)
      rect(0,200,200,200)
  }
  if (mouseY >= 190 && mouseY <= 210 && mouseX >= 190 && mouseX <= 210 ) {
    fill(10,200,10)
    rect(0,0,400,400)
  }

  fill(255,0,0)
  rect(50,50,100,100)

  fill(0,255,0)
  rect(250,50,100,100)

  fill(0,0,255)
  rect(250,250,100,100)

  fill(0,0,0)
  rect(50,250,100,100)

  if (mouseX >= 0 && mouseX <= 200 && mouseY >= 0 && mouseY <= 200)
  {
      fill(255,200,255)
      rect(50,50,100,100)
  }
  else if (mouseY >= 0 && mouseY <= 200 && mouseX >= 200 && mouseX <= 400 )
  {
      fill(255,200,255)
      rect(250,50,100,100)
  }
  else if (mouseX >= 200 && mouseX <= 400 && mouseY >= 200 && mouseY <= 400)
  {
      fill(255,200,255)
      rect(250,250,100,100)
  }
  else if (mouseY >= 200 && mouseY <= 400 && mouseX >= 0 && mouseX <= 200 )
  {
      fill(255,200,255)
      rect(50,250,100,100)
  }




//  if (leftSide = true) {
//    fill(255,0,0)
//    rect(0,0,200,400)
//  }


}
