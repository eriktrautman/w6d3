// // Test file to run our code

// var towers_file = require('./towers.js')


// Set Up the Game
game = makeGame();
game.initialize();

// Start running the game
while(!game.victory()){
  game.printTowers();
  var from = prompt("From tower (0,1,2)?");
  var to = prompt("WHERE TO???");
  fromTower = game.towers[from];
  toTower = game.towers[to];
  if (fromTower && toTower){
    try{
      game.makeMove(fromTower, toTower);
      clear();
    }
    catch(error){
      println(error);
    }
  }
  else{
    println("There is no spoon.");
  }

}
window.location = 'http://1.bp.blogspot.com/-ZR5Ttwex2ag/TphRF5lh0qI/AAAAAAAAADg/FsBwcOYDPgc/s1600/Victory%2521.jpg';





// Take a Turn

// game.makeMove(game.t1,game.t2);
// game.printTowers();

// game.makeMove(game.t1,game.t3);
// game.printTowers();

// game.makeMove(game.t2,game.t3);
// game.printTowers();

// game.makeMove(game.t1,game.t2);
// game.printTowers();

// game.makeMove(game.t3,game.t1);
// game.printTowers();

// game.makeMove(game.t3,game.t2);
// game.printTowers();

// // the Victory turn
// game.makeMove(game.t1,game.t2);
// game.printTowers();












