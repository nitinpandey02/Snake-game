//var windowH = window.innerHeight;
  //      var windowW = window.innerWidth;
        var canv=document.getElementById("field");
        var ctx = canv.getContext("2d");
        
        var px=160;
        var py=160;
        
        var xv=0;
        var yv=0;
        
        var tailX = [];
        var tailY = [];
        var tail = 1;
        var score = 0;
        var prevX;
        var prevY;
        var prev2X;
        var prev2Y;
        
        var ax;
        var ay;
        var food = false;
        
        
    var game = setInterval(game, 1000/7);
function game(){
gameLogic();
drawFood();
drawSnake();
gameover();
}
    

function drawSnake(){
        tailX[0] = prevX = px;
        tailY[0] = prevY = py;
        for(var j=1; j <= tail; j++){
        prev2X = tailX[j];
        prev2Y = tailY[j];
        tailX[j] = prevX;
        tailY[j] = prevY;
        prevX = prev2X;
        prevY = prev2Y;
        }
        for(var i=0; i <= tail; i++){
        ctx.fillStyle="lime";
        ctx.fillRect(tailX[i],tailY[i],20,20);
        }
}
function gameLogic(){
        ctx.fillStyle="black";
        ctx.fillRect(0,0,canv.width,canv.height);
        px+=xv;
        py+=yv;
        
        if(px < 0){
            px = 340;
        }
        if(px >= 360){
            px = 0;
        }
        if(py < 0){
            py = 340;
        }
        if(py >= 360){
            py = 0;
        }    
}
function drawFood(){
    if(food==false){
    var max = (340/20) + 1;
    ax = 20*(Math.floor(Math.random()*max));
    ay = 20*(Math.floor(Math.random()*max));
    food = true;
    }
    ctx.fillStyle="red";
    ctx.fillRect(ax,ay,20,20);
    if(px == ax && py == ay){
    tail++;
    score++;
    food = false;
    }
}

function gameover(){
    for(var t=2; t <= tail; t++){
        if(tailX[t] == px && tailY[t] == py){
        clearInterval(game);
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Game over", 90, 90);
        ctx.fillText("Your score: ", 90, 120);
        ctx.fillText(score, 260, 122);
        }
    }
}
function moveLeft(){
    if(xv==20){
        xv = 20;
    }else{
    xv = -20;
    yv = 0;
    }
}
function moveRight(){
    if(xv==-20){
        xv = -20;
    }else{
    xv = 20;
    yv = 0;
    }
}
function moveUp(){
    if(yv==20){
        yv = 20;
    }else{
    xv = 0;
    yv = -20;
    }
}
function moveDown(){
    if(yv==-20){
        yv = -20;
    }else{
    xv = 0;
    yv = 20;
    }
}