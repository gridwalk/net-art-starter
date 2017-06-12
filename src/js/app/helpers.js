var r = function(max){
  return Math.floor(Math.random()*max)
}

Array.prototype.randomElement = function () {
  return this[r(this.length)]
}

var chance = function(percent){
   return ( r(100) < percent )
}

function shuffleArray(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

function nodelistToArray(nl) {
  var arr = [];
  for(var i = nl.length; i--; arr.unshift(nl[i]));
  return arr;
}