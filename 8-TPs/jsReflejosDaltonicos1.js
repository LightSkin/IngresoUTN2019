/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
var tiempoFinal;

function comenzar() {
    tiempoInicio = new Date();
    tiempoInicio = tiempoInicio.getDate();

    switch (RandomNumber(0, 5)) {
        case 0:
            ColorSecreto = "rojo";
            break;
        case 1:
            ColorSecreto = "azul";
            break;
        case 2:
            ColorSecreto = "verde";
            break;
        case 3:
            ColorSecreto = "marron";
            break;
        case 4:
            ColorSecreto = "amarillo";
            break;
        case 5:
            ColorSecreto = "celeste";
            break;
        default:
    }
}

function Responder(colorParametro) {
    tiempoFinal = new Date();
    tiempoFinal = tiempoFinal.getDate();
    tiempoFinal -= tiempoInicio;
    tiempoFinal /= 1000;

    if (colorParametro == ColorSecreto)
        alert("Ganaste!!! Tardaste: " + tiempoFinal + " segundos.")
    else
        alert("Seguí participando.")
}

function RandomNumber(min, max) {
    return Math.floor(Math.random() * max + min);
} 