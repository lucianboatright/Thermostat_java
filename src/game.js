
function Game(){
  this.frame = [];
  this.sorceBoard = []
}

Game.prototype.bowl = function(scorePins) {
  this.frame.push(scorePins);

};

Game.prototype.takeScore = function(){
  return this.frame.reduce((a,b) => a + b);
};

Game.prototype.showBoard = function(){
  return this.sorceBoard;
};

Game.prototype.score = function(){
  var result = 0
  for (var i = 0; i < 20; i++){
    result += this.frame[i];
  }
  return result;
};










//  count = 0
//   if (count === 0){
//     this.frameTern.push(scorePins); 
//     count += 1;
//   }
//   else if (count === 1){
//     if (this.takeScore > 10){
//       return "Score not possible, its over possible total";
//       count = 0;
//     } else {
//       this.frameTern.push(scorePins);
//       count = 0;
//     }
//   }
// }