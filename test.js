// Test file to run our code

var towers_file = require('./towers.js')


// Set Up the Game
game = towers_file.makeGame();
game.initialize();
game.printTowers();

// Take a Turn

game.makeMove(game.t1,game.t2);
game.printTowers();

game.makeMove(game.t1,game.t3);
game.printTowers();

game.makeMove(game.t2,game.t3);
game.printTowers();

game.makeMove(game.t1,game.t2);
game.printTowers();

game.makeMove(game.t3,game.t1);
game.printTowers();

game.makeMove(game.t3,game.t2);
game.printTowers();

// the Victory turn
game.makeMove(game.t1,game.t2);
game.printTowers();









