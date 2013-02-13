// Tic tac test

// var tictactoe = require('./tictactoe.js')

// Set up Tic Tac Toe
ttt = makeTicTacToe();
ttt.initialize();
console.log(ttt.board);
//ttt.printBoard();
console.log(ttt.victory());

//Play da game
var currentPlayer = ttt.p2;
while(!ttt.victory()) {
  currentPlayer === ttt.p1 ? (currentPlayer = ttt.p2) : (currentPlayer = ttt.p1);
  ttt.printBoard();
  //alert(currentPlayer.name+" Make your move")
  var r = prompt("Player " + currentPlayer.name + ", move to which row? (0,1,2)");
  var c = prompt("Player " + currentPlayer.name + ", move to which col? (0,1,2)");
  try{
    currentPlayer.makeMove(r,c);
    clear();
  }
  catch(error){
    println(error);
  }
}
window.location = 'http://1.bp.blogspot.com/-ZR5Ttwex2ag/TphRF5lh0qI/AAAAAAAAADg/FsBwcOYDPgc/s1600/Victory%2521.jpg';












//TESTS


// Take a turn
// try{
// ttt.p1.makeMove(1,1);
// }
// catch(error){
//   println(error);
// }
// ttt.printBoard();

// // Take a bad turn
// try{
// ttt.p1.makeMove(4,1);
// }
// catch(error){
//   println(error);
// }
// ttt.printBoard();

// Start running the ttt
// while(!ttt.victory()){
//   ttt.printTowers();
//   var from = prompt("From tower (0,1,2)?");
//   var to = prompt("WHERE TO???");
//   fromTower = ttt.towers[from];
//   toTower = ttt.towers[to];
//   if (fromTower && toTower){
//     try{
//       ttt.makeMove(fromTower, toTower);
//       clear();
//     }
//     catch(error){
//       println(error);
//     }
//   }
//   else{
//     println("There is no spoon.");
//   }

// }
// window.location = 'http://1.bp.blogspot.com/-ZR5Ttwex2ag/TphRF5lh0qI/AAAAAAAAADg/FsBwcOYDPgc/s1600/Victory%2521.jpg';