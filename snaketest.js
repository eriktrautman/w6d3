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
  $('.output').html("");
  try{
    sg.iterateGame();
  }
  catch(error){
    console.log(error);
    $('.gameover').html("OH NO, YOU LOST!!! ");
    clearInterval(interval);
  }
  $('.score').html("Score: " + sg.snake.body.length*100);
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
interval = setInterval(function(){go(sg);}, 100);
























