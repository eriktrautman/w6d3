// Tic tac test

var runTurn = function(r,c, boxDiv){
  try{
    currentPlayer.makeMove(r,c);
  }
  catch(error){
    console.log(error);
    return;
  }
  switch(currentPlayer.name)
  {
    case "x":
      $(boxDiv).css({"background-image":"url(./x.jpg)", "background-size":"100%"});
      break;
    case "o":
      $(boxDiv).css({"background-image":"url(./o.jpg)", "background-size":"100%"});
      break;
  }
  currentPlayer === ttt.p1 ? (currentPlayer = ttt.p2) : (currentPlayer = ttt.p1);
  if(ttt.victory())
  {
    window.location = 'http://1.bp.blogspot.com/-ZR5Ttwex2ag/TphRF5lh0qI/AAAAAAAAADg/FsBwcOYDPgc/s1600/Victory%2521.jpg';
  }
  else if(ttt.staleMate())
  {
    $('.button').html("Replay");
    $('.button').css({"height":"auto", "width":"100px", "padding":"10px", "margin":"auto",
      "box-shadow":"10px 5px 5px #888888", "border":"2px solid grey"})
  }
  $('.player').html("Your turn, player " + currentPlayer.name);
}

$('.board').click(function(e){
  runTurn(e.target.id[1],e.target.id[2],'#'+e.target.id);
});


$('.button').click(function(e){
  console.log("Clicked Restart")
  document.location.reload(true)
});


// SCRIPTS

ttt = makeTicTacToe();
ttt.initialize();
console.log(ttt.board);
var currentPlayer = ttt.p2;
$('.player').html("Your turn, player " + currentPlayer.name);

