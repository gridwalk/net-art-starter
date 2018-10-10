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

function createEl(opt){
  var _el = document.createElement(opt.type)
  if( opt.innerHTML ) _el.innerHTML = opt.innerHTML
  if( opt.class )     _el.setAttribute('class', opt.class)
  if( opt.id )        _el.setAttribute('id', opt.id)

  if(opt.attr){
    Object.keys(opt.attr).forEach(function(key){
      _el.setAttribute(key,opt.attr[key])
    })  
  }
  
  if( opt.parent ) document.querySelector(opt.parent).appendChild(_el)

  return _el
}
function chanceExample() {
  // chance function defined in helpers
  if( chance(50) ){
    // 50% chance to do something
  }
}


document.addEventListener('keydown',function(e){
  console.log(e.which,'pressed')
})

document.addEventListener('mousedown',function(e){
  console.log('clicked')
})

document.addEventListener('mousemove',function(e){
  // console.log(e)
})