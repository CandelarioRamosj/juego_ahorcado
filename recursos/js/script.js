//Se extrae el boton inicial para agregar el evento que abrira el juego
let btnInicial = document.querySelector('#btn-inicial')

btnInicial.addEventListener('click', function(){
  let pantallaInicial = document.querySelector('#inicial')
  pantallaInicial.style.display = 'none'
  let pantallaJuego = document.querySelector('#pantalla-juego')
  pantallaJuego.style.display = 'block'
})

//Extraigo el boton para regresar a la pantalla inicial
let btnVolver = document.querySelector('#btn-volver')

btnVolver.addEventListener('click', function(){
  let pantallaInicial = document.querySelector('#inicial')
  pantallaInicial.style.display = 'block'
  let pantallaJuego = document.querySelector('#pantalla-juego')
  pantallaJuego.style.display = 'none'
})