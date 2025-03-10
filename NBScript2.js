let i = 0;
let j = 5;


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    

    frameRate(10);

}

function drawRainlines(x,y,linewidth,lineheight){
    stroke(0,102,255);
    line(x,y,linewidth,lineheight);

} 

function draw(){
    
    
    if (j<100,j+=1);
    
    background (255,255,255,50)

    stroke (0+j,102,255-j);

    noFill();

    if(mouseIsPressed)
        { i = 10;
        fill(0+j,102,255-j);
        cursor ("./NBimages/paella.cur");
    } else {
        i+=10;
        cursor ("./NBimages/tulip.cur");
    }

    circle (mouseX, mouseY,i);
   
    for (let z=0; z<3; z++){
        let x= random (50,width)
        let y= random (100, height)
        drawRainlines(x,y,x+90,y-500)
    }
   
}

