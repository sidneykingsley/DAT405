function setup()
{
  createCanvas(400, 400);
  noStroke();
}

function draw(){

  for (let y= 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      fill(20,20,20);
      stroke(255);
      rect(x*50,y*50,50,50);
    }
  }


  //finding red square
  var mouseredx = Math.ceil(mouseX / 50)*50-50;
  var mouseredy = Math.ceil(mouseY / 50)*50-50;
  //making blue horizontal line
  for (i = 0; i <10; i++) {
    fill(0,0+(mouseredx),0+(mouseredx))
    rect(i*50,mouseredy,50,50)
  }
  //making blue vertical line
  for (j = 0; j <10; j++) {
    fill(0,0+(mouseredy),0+(mouseredy))
    rect(mouseredx,j*50,50,50)
  }
  fill(255,0,0)
  rect(mouseredx,mouseredy,50,50)


  for (let orangey= 500; orangey > mouseredy; orangey-=50) {
    for (let orangex = 500; orangex > mouseredx; orangex-=50) {
      //fill(255,150,0);
      fill(255-(mouseredy),150-(mouseredy),0)
      stroke(255);
      rect(orangex,orangey,50,50);
    }
}
  for (let orangey2= 500; orangey2 > mouseredy; orangey2-=50) {
    for (let orangex2 = 0; orangex2 < mouseredx; orangex2+=50) {
      //fill(255,150,0);
      fill(255-(mouseredy),150-(mouseredy),0)
      stroke(255);
      rect(orangex2,orangey2,50,50);
    }
  }




}
