//tic tac toe

var makeTicTacToe = function(){
  return {
    // variables

    // initialize variables
    initialize: function(){
      this.p1 = makePlayer("x", this);
      this.p2 = makePlayer("o", this);
      this.board = [  [null, null, null],
                      [null, null, null],
                      [null, null, null]  ];
    },

    placeMark: function(mark, r, c){
      if(this.board[r][c]){
        throw "Hey idiot, find your own square!";
      }
      else{
        this.board[r][c] = mark;
      }
    },

    // methods
    printBoard: function(){
      println("Your board, sir:");
      this.board.forEach(function(row){
        row.forEach(function(el){
          if(el === null){
            $('.output').append("[ ]");
          }
          else{
            $('.output').append("["+el+"]");
          }
        });
        $('.output').append("\n");
      });
    },

    staleMate: function(){
      gameOver = true;
      for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
          if(this.board[i][j] === null){
            gameOver = false;
          }
        }
      }
      return gameOver;
    },

    victory: function(){

      for(var i = 0; i < 3; i++){

        // rows
        if(       this.board[i][0] !== null
              &&  this.board[i][0] === this.board[i][1]
              &&  this.board[i][1] === this.board[i][2] )
        {
          return true;
        }
        // cols
        if(       this.board[0][i] !== null
              &&  this.board[0][i] === this.board[1][i]
              &&  this.board[1][i] === this.board[2][i] )
        {
          return true;
        }
      }

      // diag1
      if(       this.board[0][0] !== null
            &&  this.board[0][0] === this.board[1][1]
            &&  this.board[1][1] === this.board[2][2] )
      {
          return true;
      }
      // diag2
      if(       this.board[0][2] !== null
            &&  this.board[0][2] === this.board[1][1]
            &&  this.board[1][1] === this.board[2][0] )
      {
          return true;
      }
      return false;
    }
  };
};


var makePlayer = function(name, game){
  return {
    // variables
    name: name,
    game: game,

    // methods
    makeMove: function(r, c){
      if( ( r <= 2 && r >= 0) && ( c <= 2 && c >= 0 ) ){
        this.game.placeMark(this.name, r, c);
      }
      else{
        console.log("Dude, you're off the board!");
        throw("YOU PIECE OF SHIT!");
      }
    }
  };
};

function println(string) {
  // we'll learn about this when we talk about DOM manipulation.
  $('.output').append(string);
  $('.output').append("\n");
}


function clear() {
  $('.output').html("");
}