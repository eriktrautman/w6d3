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
        console.log("VICTORY")
        return true;
      }
      else{
        return false;
      }
    },

    makeMove: function(fromTower, toTower){
      disc = fromTower.removeDisc(); // false or disc
      if(disc){
        if(toTower.addDisc(disc)){
          this.victory();
          return true;
        }
        else{
          console.log("FAILURE: couldn't add disc");
          fromTower.addDisc(disc);
          return false;
        }
      }
      else{
        console.log("FAILURE: Invalid from tower");
        return false;
      }
    },

    printTowers: function(){
      console.log("*******");
      this.towers.forEach(function(el){
        console.log(el.discs);
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
        return false;
      }
      else{
        return discs.pop();
      }
    },
    isFull: function(){
      return discs.length == 3;
    }
  };
};



// EXPORT MODULE *************************
module.exports = {
  makeTowerObj: makeTowerObj,
  makeGame: makeGame
}