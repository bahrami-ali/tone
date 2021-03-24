let interactive = document.getElementById('interactive')
let player = document.getElementById('player')

interactive.addEventListener('mouseenter', () =>{
  player.play();
})

interactive.addEventListener('mouseleave', () =>{
  player.pause();
})


player.addEventListener('pause', () =>{
  document.body.style.backgroundColor = "lightblue";
})

player.addEventListener('play', () =>{
  document.body.style.backgroundColor = "black";
})
