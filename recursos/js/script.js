//Se detectan las letras y se inicializan algunas variables
let letras = document.getElementsByClassName('letra')
let respuestaCorrecta = 0
let respuestaIncorrecta = 0
let contador = 0
let puntos = 0
// Se obtiene la referencia de la imagen
let imagenAhorcado = document.getElementById('imagen_ahorcado');

//Se extrae el boton inicial para agregar el evento que abrira el juego
let btnInicial = document.querySelector('#btn-inicial')

btnInicial.addEventListener('click', function(){
  let pantallaInicial = document.querySelector('#inicial')
  pantallaInicial.style.display = 'none'
  let pantallaJuego = document.querySelector('#pantalla-juego')
  pantallaJuego.style.display = 'block'

  //Se llama a la funcion del juego
  let categoria = document.querySelector('.i-active').id
  juegoDelAhorcado(categoria)

  //Se resetea la primera pantalla
  document.querySelector('#i_aleatorio').classList.remove('i-active')
  document.querySelector('#i_animales').classList.remove('i-active')
  document.querySelector('#i_plantas').classList.remove('i-active')
  document.querySelector('#i_trabajos').classList.remove('i-active')
  document.querySelector('#i_cosas').classList.remove('i-active')

  //Se reiniciar el boton a limpiar el boton
  btnInicial.style.opacity = '0.5';
  btnInicial.style.cursor = 'not-allowed';
  btnInicial.style.pointerEvents = 'none';
})

//Extraigo el boton para regresar a la pantalla inicial
let btnVolver = document.querySelector('#btn-volver')

btnVolver.addEventListener('click', function(){
  limpiarPantalla()
  let pantallaInicial = document.querySelector('#inicial')
  pantallaInicial.style.display = 'block'
  let pantallaJuego = document.querySelector('#pantalla-juego')
  pantallaJuego.style.display = 'none'
})

//Se declaran las variables globales para poder utilizarlas 
let randomElemento = ''
let NuevoArray = ''

function juegoDelAhorcado(categoria){
  let spanCategoria = document.getElementById('span-categoria')
  //Se limpia el texto para que quede mejor en la categoria
  categoria = categoria.slice(2)
  categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1); //Poner en mayusculas la primera letra
  spanCategoria.textContent = categoria
  //Se inician los puntos
  puntos = 0
  //Se recupera el array correspondiente
  switch(categoria){
    case 'Animales':
      //Se copia el array
      NuevoArray = Animales.slice()
      nuevoSpan()
    break;
    case 'Plantas':
      //Se copia el array
      NuevoArray = Plantas.slice()
      nuevoSpan()
    break;
    case 'Trabajos':
      //Se copia el array
      NuevoArray = Trabajos.slice()
      nuevoSpan()
    break;
    case 'Cosas':
      //Se copia el array
      NuevoArray = Cosas.slice()
      nuevoSpan()
    break;
    case 'Aleatorio': alert('Aleatorio')
    break;
  }
}

  //Detecta la letra
  for(let i = 0; i < letras.length; i++){
    //Se agrega el evento a cada letra
    letras[i].addEventListener('click', function(){
      //Se crea un contador para saber si la letra es correcta
      contador = 0
      //For que verifica la letra clickeada con cada letra de la palabra
      for(let j = 0; j < randomElemento.length; j++){
        //Condicion que evalua si la letra es igual a la que esta mostrando en la posicion i
        if(randomElemento[j] == letras[i].textContent){
          document.getElementById(j).textContent = letras[i].textContent
          contador = contador + 1
          respuestaCorrecta = respuestaCorrecta + 1
        }
      }
      //Se desactiva la letra clickeada para no repetirla
      letras[i].style.pointerEvents = 'none'
      //Se crean un if que evalua si la letra fue correcta o no y se agregan estilos
      if(contador == 0){
        letras[i].style.backgroundColor = 'black'
        respuestaIncorrecta = respuestaIncorrecta + 1
      }else{
        letras[i].style.backgroundColor = 'green'
      }

      //El switch controlara la imagen que se muestre
      switch(respuestaIncorrecta){
        case 0:
          imagenAhorcado.src = '../recursos/img/JuegoInicio.png'
        break;
        case 1:
          imagenAhorcado.src = '../recursos/img/Error1.png'
        break;
        case 2:
          imagenAhorcado.src = '../recursos/img/Error2.png'
        break;
        case 3:
          imagenAhorcado.src = '../recursos/img/Error3.png'
        break;
        case 4:
          imagenAhorcado.src = '../recursos/img/Error4.png'
        break;
        case 5:
          imagenAhorcado.src = '../recursos/img/Error5.png'
        break;
        case 6:
          imagenAhorcado.src = '../recursos/img/GameOver.png'
          Array.from(letras).forEach(elemento => elemento.style.pointerEvents = 'none')
          setTimeout(function(){
            alert('Game Over')
            btnVolver.click()
            limpiarPantalla()
          }, 1000)
        break;
      }

      //Condicional que evalua si ya se completo la palabra omitiendo los espacios
      if (respuestaCorrecta == randomElemento.replace(/ /g, "").length) {
        //Se desactivan las letras para que no se clickee nada
        Array.from(letras).forEach(elemento => elemento.style.pointerEvents = 'none')
        puntos = puntos + 10
        setTimeout(function() {
          alert('Felicidades')
          //Se llama a la funcion para usar la siguiente palabra
          nuevoSpan()
          //Se llama a una funcion que limpia todo
          limpiarPantalla()
        }, 100); // Espera 1 segundo antes de ejecutar el código dentro de la función
      }
    })
  }

function nuevoSpan(){
  console.log(NuevoArray)
  //Se agregan los puntos
  document.getElementById('puntuacion').textContent = puntos
  //Se crea un numero aleatorio para extraer una palabra
  let randomIndex = Math.floor(Math.random() * NuevoArray.length);
  //Extraigo el elemento
  randomElemento = NuevoArray.splice(randomIndex, 1)[0]
  //Se crea un for para poder hacer los span
  let span = ""
  for(let i = 0; i < randomElemento.length; i++){
    console.log(i)
    if(randomElemento[i] != ' '){
      span += '<span class="span_respuesta" id="'+ i +'"></span>'
    }else{
      span += '<span class="span_espacio" id="'+ i +'"></span>'
    }
  }
  //Se agrega al div
  console.log(randomElemento + '\n' + span)
  document.querySelector('.respuesta-juego').innerHTML = span
}

function limpiarPantalla(){
  //Se limpia todas las letras
  Array.from(letras).forEach(elemento => elemento.removeAttribute('style'))
  //se reinician los contadores
  contador = 0
  respuestaCorrecta = 0
  respuestaIncorrecta = 0
  //Se reinicia la imagen
  imagenAhorcado.src = '../recursos/img/JuegoInicio.png'
}