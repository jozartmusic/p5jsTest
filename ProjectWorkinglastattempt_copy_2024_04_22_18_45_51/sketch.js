   
let timer = 0
var mode = 0


function setup() {
  createCanvas(600, 600);
  console.log('test')
  
  
  splash = new Splash();
  
}

function draw() {
  
   if (mouseIsPressed == true) {
    mode = 1;
  }
  if (mode == 1) {
    splash.hide();
     level1title();
  }

  if (mode == 1 && mouseIsPressed == true){
    mode = 2;
  level1title() === false;
  }
}




function level1title(){
  let e 
  let f = 80
  let r = 90

  for (let e = 0; e < 250; e + 1){console.log(e)}
  textAlign(CENTER);
	textSize(40);
  fill(r,e,f);
	text("Level 1", width / 2, height/2);
   console.log("lvl1going")
}

function level1titlehide(){
  let e = 0
  let f = 0
  let r = 0
  
  textAlign(CENTER);
	textSize(0);
  fill(r,e,f);
	text("", width / 2, height/2);
  console.log("test2")
   
}





