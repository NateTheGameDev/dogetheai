//game vars
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d");
var screen2 = "play";
//player1 vars
var x = 0;
var y = 120;
var xSpeed=2;
var ySpeed = 2;
var sKey = false;
var wKey = false;
var aKey = false;
var dKey = false;
//player2 vars
var x2 = 0;
var y2 = 120;
var downKey = false;
var upKey = false;
var leftKey = false;
var rightKey = false;
//ai vars
var aiX = 10;
var aiY = 10;
//ai2 vars
var aiX2 = 10;
var aiY2 = 10;
//game loop
function Draw() {
  
   
        ctx.fillStyle  = "rgba(0,255,255,0.25)";
        ctx.fillRect(0,0,800,800);
Player()
Player2();
inputs();
AI();
AI2();
player2Inputs();
requestAnimationFrame(Draw);
    };
//player 1 function
function Player() {
    ctx.fillStyle = "blue";
    ctx.fillRect(x,y,40,40)
   
    if (y > 560) {
        y = 560;
        
    }
  
}
function inputs() {
    if (sKey) {
      y+=ySpeed+2;
    }
    if (wKey) {
        y-=ySpeed+2;
    }
    if (dKey) {
        x+=xSpeed+2;
    }
    if (aKey) {
        x-=xSpeed+2;
    }
}
//keydown event
function keyDown(e) {
if (e.keyCode == "87") {
    wKey = true;
}
if (e.keyCode == "65") {
    aKey = true;
}
if (e.keyCode == "68") {
    dKey = true;
}
if (e.keyCode == "83") {
    sKey = true;
}
}
//keyup event

function keyUp(e) {
    if (e.keyCode == "87") {
        wKey = false;
    }
    if (e.keyCode == "65") {
        aKey = false;
    }
    if (e.keyCode == "68") {
        dKey = false;
    }
    if (e.keyCode == "83") {
        sKey = false;
    }
    }
    //ai function
    function AI() {
        ctx.fillStyle = "black";
        ctx.fillRect(aiX,aiY,40,40);
        if (aiX > x) {
            aiX -= 2;
        }
        if (aiX < x) {
            aiX += 2;
        }
        if (aiY < y) {
            aiY += 1.5;
        }
        if (aiY > y) {
            aiY -= 1.5;
        }
    }
    //ai2 function
    function AI2() {
        ctx.fillStyle = "darkred";
        ctx.fillRect(aiX2,aiY2,40,40);
        if (aiX2 > x2) {
            aiX2 -= 2;
        }
        if (aiX2 < x2) {
            aiX2 += 2;
        }
        if (aiY2 < y2) {
            aiY2 += 2;
        }
        if (aiY2 > y2) {
            aiY2 -= 2;
        }
    }
    //player2 functions
    function Player2() {
        ctx.fillStyle = "purple";
        ctx.fillRect(x2,y2,40,40);
         //player2 if staments
   if (y2 > 560) {
    y2 = 560;
}
    }
    function player2Inputs() {
        if (downKey === true) {
            y2 += ySpeed+2;
        }
        if (upKey === true) {
            y2 -= ySpeed+2;
        }
        if (rightKey === true) {
            x2 += xSpeed+2;
        } 
        if (leftKey === true) {
            x2 -= xSpeed+2;
        }
    }
    //player2 keys down
    function player2keysDown(e) {
     if (e.keyCode == "38") {
         upKey = true;
     }
     if (e.keyCode == "37") {
         leftKey = true;
     }
     if (e.keyCode == "39") {
         rightKey = true;
     }
     if (e.keyCode == "40") {
         downKey = true;
     }
    }
//player2 keys up
function player2keysUp(e) {
    if (e.keyCode == "38") {
        upKey = false;
    }
    if (e.keyCode == "37") {
        leftKey = false;
    }
    if (e.keyCode == "39") {
        rightKey = false;
    }
    if (e.keyCode == "40") {
        downKey = false;
    }
   }
   function Block(x,y,w,h) {
       ctx.fillStyle = "rgb(0,255,0)";
       ctx.fillRect(x,y,w,h)

   }
    //player 2 event listeners
    window.addEventListener("keydown",player2keysDown)
    window.addEventListener("keyup", player2keysUp)
    //event listeners
window.addEventListener("keydown",keyDown)
window.addEventListener("keyup",keyUp)
//draw the game loop
//dont mess this code on the bottom or the game will stop working
Draw();
