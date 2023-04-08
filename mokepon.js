let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

window.addEventListener("load", iniciarJuego);

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego);
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua);
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra);

    let botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {

    let hipodoge = document.getElementById("hipodoge");
    let capipepo = document.getElementById("capipepo");
    let ratigueya = document.getElementById("ratigueya");
    let spanMascotaJugador = document.getElementById("mascota-jugador");

    if (hipodoge.checked == true) {
        spanMascotaJugador.innerHTML = "Hipodoge";
    } else if (capipepo.checked == true) {
        spanMascotaJugador.innerHTML = "Capipepo";
    } else if (ratigueya.checked == true) {
        spanMascotaJugador.innerHTML = "Ratigueya";
    } else {
        alert("POR FAVOR SELECCIONE UN ELEMENTO");
    }

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {

    let mascotaAleatorio = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    } else if (ataqueAleatorio == 2) {
        mascotaAleatorio.innerHTML = "Capipepo";
    } else {
        mascotaAleatorio.innerHTML = "Ratigueya";
    }
}

function ataqueFuego() {
    ataqueJugador = "FUEGO";
    ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3);

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO";
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA";
    } else {
        ataqueAleatorio = "TIERRA";
    } 
    
    combate();
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE");
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE"); 
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;     
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE");  
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;     
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo; 
    } else {
        crearMensaje("PERDISTE");
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }

    revisarVidas();
}

function revisarVidas() {
    if (vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! GANASTE :)");
    } else if(vidasJugador == 0) {
        crearMensajeFinal("PERDISTE :(");
    }
}

function crearMensaje(resultado) {    
    let sectionMensajes = document.getElementById("mensajes");

    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " +  ataqueEnemigo + " - " + resultado;

    sectionMensajes.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {    
    let sectionMensajes = document.getElementById("mensajes");

    let parrafo = document.createElement("p");
    parrafo.innerHTML = resultadoFinal;

    sectionMensajes.appendChild(parrafo);

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.disabled = true;
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.disabled = true;
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.disabled = true;
}

function reiniciarJuego(){
    location.reload();
}