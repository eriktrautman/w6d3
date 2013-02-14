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
        $('.output').append(".");
      }
    }
    $('.output').append("\n");
  }
  $('.output').append("\n");
};



sg = makeSnakeGame(5);
sg.initialize();
console.log(sg.board);
printBoard(sg.board);
sg.iterateGame();
printBoard(sg.board);
sg.iterateGame();
printBoard(sg.board);
sg.iterateGame();
printBoard(sg.board);
sg.iterateGame();
printBoard(sg.board);
sg.iterateGame();
printBoard(sg.board);

