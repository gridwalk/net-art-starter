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