var printBoard = function(board){
  for(var x = 0; x < board.length; x++){
    $('.output').append("* ");
  }
  $('.output').append("**\n");

  for(var i = 0; i < board.length; i++){
    $('.output').append("*");
    for(var j = 0; j < board.length; j++){
      if(board[i][j] == "o"){
        $('.output').append(" o");
      }
      else if(board[i][j] == "~"){
        $('.output').append(" ~");
      }
      else{
        $('.output').append("  ");
      }
    }
    $('.output').append("*\n");
  }
  for(var x = 0; x < board.length; x++){
    $('.output').append("* ");
  }
  $('.output').append("**");
};

var go = function(){
  var difficulty = 9/10;
  var speed = 600 * Math.pow((difficulty), sg.snake.body.length);
  $('.output').html("");
  try{
    sg.iterateGame();
    gameLoop = setTimeout(function(){ go() }, speed);
  }
  catch(error){
    console.log(error);
    $('.gameover').html("OH NO, YOU LOST!!! ");
    clearInterval(gameLoop);
  }
  $('.score').html("Score: " + Math.round(Math.pow(1/difficulty,(sg.snake.body.length-1))*100-100));
  printBoard(sg.board);
};

function checkKey(e){
  e = e || window.event;

  if (e.keyCode == '38') {
    //up arrow
    sg.snake.changeDirection("up");
  }
  else if (e.keyCode == '40'){
    //down arrow
    sg.snake.changeDirection("down");

  }
  else if (e.keyCode == '37'){
    //left arrow
    sg.snake.changeDirection("left");
  }
  else if (e.keyCode == '39'){
    //right
    sg.snake.changeDirection("right");
  }
};

// GAME RUNNING CODE:
sg = makeSnakeGame(15);
sg.initialize();
document.onkeydown = checkKey;
go();
//interval = setInterval(function(){go(sg);}, 100);
























