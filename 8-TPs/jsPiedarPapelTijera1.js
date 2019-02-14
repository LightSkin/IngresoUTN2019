/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar() {
    //1 piedra, 2 papel , 3 tijera
    eleccionMaquina = RandomNumber(1, 3);
}
function piedra()//1
{
    /*if (eleccionMaquina == 1)
        alert("La máquina eligió piedra \n Empataste!!")
    else if (eleccionMaquina == 2)
        alert("La máquina eligió papel \n Perdiste!!")
    else
        alert("La máquina eligió tijera \n Ganaste!!")*/

    switch (eleccionMaquina) {
        case 1:
            alert("La máquina eligió piedra \n Empataste!!");
            break;
        case 2:
            alert("La máquina eligió papel \n Perdiste!!");
            break;
        case 3:
            alert("La máquina eligió tijera \n Ganaste!!");
            break;
        default: alert("ERROR"); break;
    }
}
function papel()//2
{
    if (eleccionMaquina == 1)
        alert("La máquina eligió piedra \n Ganaste!!");
    else if (eleccionMaquina == 2)
        alert("La máquina eligió papel \n Empataste!!");
    else
        alert("La máquina eligió tijera \n Perdiste!!");
}
function tijera()//3
{
    if (eleccionMaquina == 1)
        alert("La máquina eligió piedra \n Perdiste!!");
    else if (eleccionMaquina == 2)
        alert("La máquina eligió papel \n Ganaste!!");
    else
        alert("La máquina eligió tijera \n Empataste!!");
}

function RandomNumber(min, max) {
    return Math.floor(Math.random() * max + min);
}