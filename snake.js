// SNAKE!!!
// WHERE WE NEED TO GO:
  // add a stepn on a timer (setInterva())
  // add keyboard input (event listener)
  // surround it all in while loop
  // declare death
  // show score
  // make food re-appear


// Shit we don't know:
  // timers
  // accepting keyboard input


// ############################################# //

//Jquery Stuff
function println(string) {
  // we'll learn about this when we talk about DOM manipulation.
  $('.output').append(string);
  $('.output').append("\n");
}

function clear() {
  $('.output').html("");
}

println("Loaded it up!");
//var input = prompt("Type in your input:");
//println(input);

// ############################################# //

// Game Logic

var makeSnakeGame = function(size){
  return{
    size: size,
    board: null,
    snake: null,
    food: false,

    makeBoard: function(){
      this.board = new Array(this.size);
      for(var i=0; i<size; i++){
        this.board[i] = new Array(this.size);
      }
    },

    initialize: function(){
      this.makeBoard(5);
      this.snake = makeSnake(this.size, this.board, this);
      this.board[this.snake.body[0][0]][this.snake.body[0][1]] = "o";
      this.addFood();
    },
    iterateGame: function(){
      this.snake.moveSnake();
      if(!this.food){
        this.addFood();
      }
    },
    addFood: function(){
      var tile = "o"
      var randRow  = 0;
      var randCol = 0;
      while (tile != undefined){
        randRow = Math.floor(Math.random()*(this.size-1));
        randCol = Math.floor(Math.random()*(this.size-1));
        tile = this.board[randRow][randCol];
      }
      tile = "~";
      this.board[randRow][randCol] = tile;
      this.food = true;
    }
  };
};

// snake object
  // direction property
  // snake coordinates array
  // grow snake method
  // move snake method
    // move head in direction
    // if not previously grown, move tail
    // if food, grow
    // if snake, die
    // if wall, die

var makeSnake = function(size, board, game){
  return{
    body: [ [Math.floor((size/2)), Math.floor((size/2))] ],
    direction: "down",
    board: board,
    game: game,
    extend: false,

    moveSnake: function(){
      head = this.body[(this.body.length)-1];
      newHead = null;
      switch(this.direction)
      {
        case "right":
          newHead = this.validate([head[0], (head[1]+1)])
          break;
        case "left":
          newHead = this.validate([head[0], (head[1]-1)])
          break;
        case "up":
          newHead = this.validate([head[0]-1, (head[1])])
          break;
        case "down":
          newHead = this.validate([head[0]+1, (head[1])])
          break;
      }
      this.body.push(newHead);
      this.board[newHead[0]][newHead[1]] = "o";
      // tail disappears if snake isn't growing
      if(!this.extend){
        oldTail = this.body.shift();
        this.board[oldTail[0]][oldTail[1]] = undefined;
      }else{
        this.extend = false;
      }
    },

    // validates a proposed snake move, returns coords if valid
    validate: function(coords){
      console.log(coords);
      if( coords[0] < 0 ||
          coords[0] >= this.board.length ||
          coords[1] < 0 ||
          coords[1] >= this.board.length
      ){
        console.log("YOU LOSE, SUCKA!!!!");
        loseGame();
        return false;
      }
      // compare against whatever is in the tile we're trying to enter
      switch(this.board[coords[0]][coords[1]])
      {
        case "o":
          loseGame();
          break;
        case "~":
          this.extend = true;
          return coords;
          break;
        default:
          return coords;
      }
    }
  }
};

var loseGame = function(){
  console.log("YOU LOSE, SUCKA!!!!");
  return false;
}











