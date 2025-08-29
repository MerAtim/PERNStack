//VARIABLES GLOBALES
const personajes = ["Zuko", "Katara", "Aang", "Toph"];
const reglasCombate = {
    "Puño 🤜🏻 ": "Barrida 🦶🏻 ",
    "Patada 🦵🏻": "Puño 🤜🏻 ",
    "Barrida 🦶🏻 ": "Patada 🦵🏻"
};

// Variables globales del estado del juego
let ataqueJugador;
let ataqueEnemigo;
let vidaJugador = 3;
let vidaEnemigo = 3;

// Variables globales del DOM
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje');
const sectionReiniciar = document.getElementById('reiniciar');
const sectionMensajes = document.getElementById('mensajes');

const spanPersonajeJugador = document.getElementById('personaje-jugador');
const spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
const spanVidasJugador = document.getElementById('vida-jugador');
const spanVidasEnemigo = document.getElementById('vida-enemigo');

const botonPersonajeJugador = document.getElementById('boton-personaje');
const botonPunio = document.getElementById("boton-punio");
const botonPatada = document.getElementById("boton-patada");
const botonBarrida = document.getElementById("boton-barrida");
const botonReiniciar = document.getElementById('boton-reiniciar');
const botonReglas = document.getElementById('boton-reglas');
const botonCerrarReglas = document.getElementById('cerrar-reglas');
const modalReglas = document.getElementById('modal-reglas');
const mensajesContainer = document.querySelector('#mensajes p');

function iniciarJuego() {
    const toggleDarkMode = document.getElementById('toggle-dark-mode');
    toggleDarkMode.addEventListener('change', toggleDarkModeClass);
    sectionSeleccionarAtaque.style.display = 'none';
    sectionReiniciar.style.display = 'none';
    sectionMensajes.style.display = 'none';
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);
    botonPunio.addEventListener("click", ataquePunio);
    botonPatada.addEventListener("click", ataquePatada);
    botonBarrida.addEventListener("click", ataqueBarrida);

    botonReiniciar.addEventListener('click', reiniciarJuego);

    botonReglas.addEventListener('click', mostrarReglas);
    botonCerrarReglas.addEventListener('click', cerrarReglas);

    window.addEventListener('click', function (event) {
        const modal = document.getElementById('modal-reglas');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function seleccionarPersonajeJugador() {
    const radios = document.querySelectorAll('input[name="personaje"]');
    let personajeSeleccionado = null;

    radios.forEach((radio) => {
        if (radio.checked) {
            personajeSeleccionado = radio.id;
        }
    });

    if (!personajeSeleccionado) {
        mostrarError("Por favor, selecciona un personaje ☝️");
        return;
    }

    document.getElementById('personaje-jugador').innerHTML = personajeSeleccionado;
    botonPersonajeJugador.disabled = true;
    configurarBatalla();
}

function configurarBatalla() {
    document.getElementById('seleccionar-ataque').style.display = 'block';
    document.getElementById('seleccionar-personaje').style.display = 'none';

    const personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
    document.getElementById("personaje-enemigo").innerHTML = personajeAleatorio;
}

function seleccionarAtaque(ataque) {
    ataqueJugador = ataque;
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    const ataques = Object.keys(reglasCombate);
    ataqueEnemigo = ataques[Math.floor(Math.random() * ataques.length)];
    combate();
}

function combate() {
    mostrarMensajes();

    if (ataqueEnemigo === ataqueJugador) {
        agregarMensajeSecundario(`EMPATE: Tu personaje lanzó ${ataqueJugador} y el enemigo lanzó ${ataqueEnemigo}`);
    } else if (reglasCombate[ataqueJugador] === ataqueEnemigo) {
        agregarMensajeSecundario(`GANASTE: Tu personaje lanzó ${ataqueJugador} y el enemigo lanzó ${ataqueEnemigo}`);
        vidaEnemigo--;
    } else {
        agregarMensajeSecundario(`PERDISTE: Tu personaje lanzó ${ataqueJugador} y el enemigo lanzó ${ataqueEnemigo}`);
        vidaJugador--;
    }

    actualizarVidas();
    revisarVidas();
}

function revisarVidas() {
    if (vidaEnemigo === 0) {
        crearMensajeFinal("¡Felicidades! Ganaste el juego 🥳🎉");
    } else if (vidaJugador === 0) {
        crearMensajeFinal("¡Perdiste! Mejor suerte la próxima vez 😢");
    }
}

function reiniciarJuego() {
    mensajesContainer.innerHTML = "";
    mensajesContainer.className = "";
    sectionSeleccionarAtaque.style.display = 'none';
    botonPersonajeJugador.disabled = false;

    vidaJugador = 3;
    vidaEnemigo = 3;

    actualizarVidas();
    actualizarMensajePrincipal("");

    document.getElementById('personaje-jugador').innerHTML = "";
    document.getElementById('personaje-enemigo').innerHTML = "";

    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.checked = false;
        input.disabled = false;
    });

    document.getElementById("boton-punio").disabled = false;
    document.getElementById("boton-patada").disabled = false;
    document.getElementById("boton-barrida").disabled = false;

    document.getElementById('reiniciar').style.display = 'none';
    document.getElementById('seleccionar-personaje').style.display = 'block';

    sectionSeleccionarAtaque.style.display = 'none';
    sectionMensajes.style.display = 'none';
}

function ataquePunio() {
    seleccionarAtaque("Puño 🤜🏻 ");
}

function ataquePatada() {
    seleccionarAtaque("Patada 🦵🏻");
}

function ataqueBarrida() {
    seleccionarAtaque("Barrida 🦶🏻 ");
}

function mostrarError(mensajeError) {
    const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje');
    const mensaje = document.createElement("p");
    mensaje.innerHTML = mensajeError;
    mensaje.style.color = "red";
    sectionSeleccionarPersonaje.appendChild(mensaje);

    setTimeout(() => sectionSeleccionarPersonaje.removeChild(mensaje), 2000);
}

function mostrarReglas() {
    const modal = document.getElementById('modal-reglas');
    modal.style.display = 'flex';
}

function cerrarReglas() {
    const modal = document.getElementById('modal-reglas');
    modal.style.display = 'none';
}

function actualizarVidas() {
    document.getElementById('vida-jugador').innerHTML = vidaJugador;
    document.getElementById('vida-enemigo').innerHTML = vidaEnemigo;
}

function mostrarMensajes() {
        if (vidaJugador > 0 && vidaEnemigo > 0) {
        sectionMensajes.style.display = 'block';
    }
}

function actualizarMensajePrincipal(mensaje) {
    const mensajes = document.querySelector('#mensajes p');
    mensajes.innerHTML = mensaje;
}

function agregarMensajeSecundario(mensaje, clase) {
    mensajesContainer.innerHTML += `<br>${mensaje}`;
    mensajesContainer.className = '';
    mensajesContainer.classList.add(clase);
}

function crearMensajeFinal(resultado) {
    actualizarMensajePrincipal(resultado);

    document.getElementById("boton-punio").disabled = true;
    document.getElementById("boton-patada").disabled = true;
    document.getElementById("boton-barrida").disabled = true;

    document.getElementById('reiniciar').style.display = 'block';
}

function toggleDarkModeClass() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

window.addEventListener('load', iniciarJuego);