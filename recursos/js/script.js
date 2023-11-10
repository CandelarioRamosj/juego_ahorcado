//Se extrae el boton inicial para agregar el evento que abrira el juego
let btnInicial = document.querySelector('#btn-inicial')

btnInicial.addEventListener('click', function(){
  let pantallaInicial = document.querySelector('#inicial')
  pantallaInicial.style.display = 'none'
  let pantallaJuego = document.querySelector('#pantalla-juego')
  pantallaJuego.style.display = 'block'

  //Se resetea la primera pantalla
  let iAleatorio = document.querySelector('#i_aleatorio').classList.remove('i-active')
  let iAnimales = document.querySelector('#i_animales').classList.remove('i-active')
  let iPlantas = document.querySelector('#i_plantas').classList.remove('i-active')
  let iTrabajos = document.querySelector('#i_trabajos').classList.remove('i-active')
  let iCosas = document.querySelector('#i_cosas').classList.remove('i-active')

  //Se reiniciar el boton a limpiar el boton
  btnInicial.style.opacity = '0.5';
  btnInicial.style.cursor = 'not-allowed';
  btnInicial.style.pointerEvents = 'none';
})

//Extraigo el boton para regresar a la pantalla inicial
let btnVolver = document.querySelector('#btn-volver')

btnVolver.addEventListener('click', function(){
  let pantallaInicial = document.querySelector('#inicial')
  pantallaInicial.style.display = 'block'
  let pantallaJuego = document.querySelector('#pantalla-juego')
  pantallaJuego.style.display = 'none'
})