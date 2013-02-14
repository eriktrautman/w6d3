var printBoard = function(board){
  for(var i = 0; i < board.length; i++){
    for(var j = 0; j < board.length; j++){
      if(board[i][j] == "o"){
        $('.output').append("o");
      }
      else if(board[i][j] == "~"){
        $('.output').append("~");
      }
      else{
        $('.output').append(" .");
      }
    }
    $('.output').append("\n");
  }
  $('.output').append("\n");
};

var go = function(){
  $('.output').html("");
  try{
    sg.iterateGame();
  }
  catch(error){
    console.log(error);
    clearInterval(interval);
  }
  printBoard(sg.board);
};

function checkKey(e){
  e = e || window.event;

  if (e.keyCode == '38') {
    //up arrow
    sg.snake.direction = "up";
  }
  else if (e.keyCode == '40'){
    //down arrow
    sg.snake.direction = "down";

  }
  else if (e.keyCode == '37'){
    //left arrow
    sg.snake.direction = "left";
  }
  else if (e.keyCode == '39'){
    //right
    sg.snake.direction = "right";
  }
};

sg = makeSnakeGame(15);
sg.initialize();
document.onkeydown = checkKey;
interval = setInterval(function(){go(sg);}, 100);
//setInterval(go(), 5);



// console.log(sg.board);
// printBoard(sg.board);
// sg.iterateGame();
// printBoard(sg.board);
// sg.iterateGame();
// printBoard(sg.board);
// sg.iterateGame();
// printBoard(sg.board);
// sg.iterateGame();
// printBoard(sg.board);
// sg.iterateGame();
// printBoard(sg.board);

