// Towers of Hanoi
// 3 towers
// start with one stacked
// win when all disks are in order on another single tower
// bigger disks cannot go onto smaller disks

var makeGame = function(){
  return {
    t1: null,
    t2: null,
    t3: null,
    towers: null,

    initialize: function(){
      this.t1 = makeTowerObj([3,2,1]);
      this.t2 = makeTowerObj([]);
      this.t3 = makeTowerObj([]);
      this.towers = [this.t1,this.t2,this.t3];
    },

    victory: function(){
      if(this.t2.isFull() || this.t3.isFull()){
        return true;
      }
      else{
        return false;
      }
    },

    makeMove: function(fromTower, toTower){
      var disc = fromTower.removeDisc(); // false or disc
      if(disc){
        if(toTower.addDisc(disc)){
          this.victory();
        }
        else{
          fromTower.addDisc(disc);
          throw("FAILURE: couldn't add disc");
        }
      }
      else{
        throw("FAILURE: Invalid from tower");
      }
    },

    printTowers: function(){
      println("*******");
      this.towers.forEach(function(el, ind){
        println("Tower"+ind+" "+el.discs);
      });
    }
  }
};

var makeTowerObj = function(discs){
  return {
    discs: discs,
    addDisc: function(size){
      if(discs.length === 0){
        discs.push(size);
        return true;
      }
      var last = this.discs[this.discs.length-1];
      if(size < last){
        discs.push(size);
        return true;
      }
      else{
        return false;
      }
    },
    removeDisc: function(){
      if(discs.length == 0){
        console.log("BAD LENGTH")
        return false;
      }
      else{
        console.log("GOOD LENGTH")
        return discs.pop();
      }
    },
    isFull: function(){
      return discs.length == 3;
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

println("Loaded it up!");

// // EXPORT MODULE *************************
// module.exports = {
//   makeTowerObj: makeTowerObj,
//   makeGame: makeGame
// }