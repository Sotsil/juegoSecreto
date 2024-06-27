let  numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento (){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //para habilitar el boton nuevo juego
        // el Id en HTML es reiniciar, se va aremover el atributo disabled despues de terminar la ronda
    } else { //p se refiera al parrafo, donde aparece el texto, asi esta marcado en HTML
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
    } intentos++;
    limpiarCaja();

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
} //queryselector y getelement by ID se usan similar, pero query lleva el numeral


function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    // si el numero generado esta en la lista hacemos algo, si no, otra cosa
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else {
    if (listaNumerosSorteados.includes(numeroGenerado)){//inlcude verifica si el numero esta en la lista
        return generarNumeroSecreto(); //recursividad: la funcion se llama a si misma
    } else{
        listaNumerosSorteados.push(numeroGenerado); //si el numero generado no esta en la lista (no se ha generado antes) guarda el numero nuevo en el array
        return numeroGenerado;   }
}
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero Secreto!!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){ //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros //
    //generar aleatorio
    //inicializa intentos
    condicionesIniciales();
    //deshabilitar boton nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();