const inputMin1 = document.getElementById('min1')
const inputMin2 = document.getElementById('min2')
const inputSec1 = document.getElementById('sec1')
const inputSec2 = document.getElementById('sec2')

let minutos
let segundos
let temporizador //guarda el intervalo de la funcion del temporizador

let inputs = document.querySelectorAll(".inputCaracter")
inputs.forEach(function(input){
    input.addEventListener("input", function() {
         /* this == input*/
        if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
        }
    })

    input.addEventListener("click" , event =>{
        input.value = ''
    })
})

let btnIniciar = document.getElementById("btnIniciar")
btnIniciar.addEventListener("click", event => {
    btnIniciar.style.display = 'none' //oculta el boton

    inputMin1.disabled = true
    inputMin2.disabled = true
    inputSec1.disabled = true
    inputSec2.disabled = true

    let min1 = inputMin1.value
    let min2 = inputMin2.value
    let sec1 = inputSec1.value
    let sec2 = inputSec2.value

    min1 === '' ? min1=0 : min1
    min2 === '' ? min2=0 : min2
    sec1 === '' ? sec1=0 : sec1
    sec2 === '' ? sec2=0 : sec2

    minutos = parseInt(min1 + min2)
    segundos = parseInt(sec1 + sec2)

    iniciarTemporizador()
})

function iniciarTemporizador(){
    temporizador = setInterval(reducirTiempo, 1000)
}

function reducirTiempo(){
    //console.log(minutos , ':' , segundos)   
    if(segundos > 0){
        segundos--
    }
    else{
        if(minutos > 0){
            minutos--
            segundos = 59
        }
        else{
            console.log('termina')
            clearInterval(temporizador)
            eliminarCronometro()
        }
    }

    imprimirCronometro()
}

function eliminarCronometro(){
    document.querySelector(".main__timer").style.display = "none"
    document.querySelector(".main__information").style.display = "block"
    document.querySelector(".main").style.display = "block"
}

function imprimirCronometro(){ //convertimos a string y imprimimos en la posicion correspondiente
    if(segundos < 10){
        inputSec1.value = 0
        inputSec2.value = segundos.toString()[0] 
    }
    else{
        inputSec1.value = segundos.toString()[0]
        inputSec2.value = segundos.toString()[1]
    }

    if(minutos < 10){
        inputMin1.value = 0
        inputMin2.value = minutos.toString()[0]
    }
    else{
        inputMin1.value = minutos.toString()[0]
        inputMin2.value = minutos.toString()[1]
    }
}