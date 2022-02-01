import '@/styles/main';
import 'bootstrap';

// get values and variables
let drawing;
let con;
let goofyPic;
let angle = 0;  
let CANV_HEIGHT = 700;
let CANV_WIDTH = 700;
let SPR_HEIGHT = 700;
let SPR_WIDTH = 700;
let interval = 500, next, rgl = document.getElementById('rgl');

// main function to run Animation

function init(){
  drawing = document.getElementById("drawing");
  con = drawing.getContext("2d");
  goofyPic = document.getElementById("goofyPic");

  //
  rgl.value = interval;
  rgl.addEventListener('input', function () {
    interval = parseInt(rgl.value);
  });

  setInterval(draw, 100);
}
    
function draw() {
  //set inteval time for rotation
  var now = (new Date).getTime();
  if (next && next > now) return;
  next = now + interval;

  //point canvas
  con.fillStyle = "#F6F1F1";
  con.fillRect(0, 0, CANV_HEIGHT, CANV_WIDTH);
  con.lineWidth = "0";
  con.strokeRect(0, 0, 0, 0);
 
  //change the rotation angle
  angle += .25;
  if (angle > Math.PI * 2) {
    angle = 0;
  }

  //start a new transformation system 
  con.save();
  con.translate(350, 350);
  con.rotate(angle);

  //draw the image
  con.drawImage(goofyPic,
    SPR_WIDTH / -2, SPR_HEIGHT / -2,
    SPR_WIDTH, SPR_HEIGHT);
  con.restore();
}

init();