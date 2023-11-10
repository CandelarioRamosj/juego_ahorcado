/* Se obtienen los i para las categorias */
let iAleatorio = document.querySelector('#i_aleatorio')
let iAnimales = document.querySelector('#i_animales')
let iPlantas = document.querySelector('#i_plantas')
let iTrabajos = document.querySelector('#i_trabajos')
let iCosas = document.querySelector('#i_cosas')

let label = document.getElementsByClassName('label_categorias')
for(let i = 0; label.length; i++){
  label[i].addEventListener('click', function(){
    switch(i){
      case 0: 
              iAleatorio.classList.add('i-active')
              iAnimales.classList.remove('i-active')
              iPlantas.classList.remove('i-active')
              iTrabajos.classList.remove('i-active')
              iCosas.classList.remove('i-active')
              activarBoton()
            break;
      case 1: 
              iAleatorio.classList.remove('i-active')
              iAnimales.classList.add('i-active')
              iPlantas.classList.remove('i-active')
              iTrabajos.classList.remove('i-active')
              iCosas.classList.remove('i-active')
              activarBoton()
            break;
      case 2: 
              iAleatorio.classList.remove('i-active')
              iAnimales.classList.remove('i-active')
              iPlantas.classList.add('i-active')
              iTrabajos.classList.remove('i-active')
              iCosas.classList.remove('i-active')
              activarBoton()
            break;
      case 3: 
              iAleatorio.classList.remove('i-active')
              iAnimales.classList.remove('i-active')
              iPlantas.classList.remove('i-active')
              iTrabajos.classList.add('i-active')
              iCosas.classList.remove('i-active')
              activarBoton()
            break;
      case 4: 
              iAleatorio.classList.remove('i-active')
              iAnimales.classList.remove('i-active')
              iPlantas.classList.remove('i-active')
              iTrabajos.classList.remove('i-active')
              iCosas.classList.add('i-active')
              activarBoton()
            break;
    }
  })
}

function activarBoton(){
  let boton = document.querySelector('#btn-inicial')
  //Vuelvo a activar el boton y agregar los estilos
  boton.style.opacity = '1';
  boton.style.cursor = 'pointer';
  boton.style.pointerEvents = 'auto';
}