let img;


function preload() {

    img = loadImage("./NBimages/01.JPG")

  }


function setup() {

  canvas = createCanvas(windowWidth, windowHeight-40);
  canvas.position(0,40);

}

  
  function draw() {
   
    noStroke();

    if(mouseX<windowWidth*mouseY/windowHeight)
      {
        background(255,102,0);
        cursor ("./NBimages/paella.cur");

      } else if(mouseX>windowWidth*mouseY/windowHeight)
        { 
          background(0,102,255);
          cursor ("./NBimages/tulip.cur");

        }
        
  

  image(img, 0, 0, width, height); 

    let maskGraphics = createGraphics(width, height);
    maskGraphics.ellipse(width/2,height/2,width,height);
    img.mask(maskGraphics); 
    
 
  stroke('white');
  strokeWeight(2);

  line(0, height, width,0); 


}



  