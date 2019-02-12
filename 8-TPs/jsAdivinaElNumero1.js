/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos = 0;

function comenzar() {
  //Genero el número RANDOM entre 1 y 100
  numeroSecreto = RandomNumber(1, 100);
  alert(numeroSecreto);
}

function verificar() {
  if (document.getElementById("numero").value == numeroSecreto) {
    contadorIntentos++;
    alert("Usted es un ganador!!! Y en sólo " + contadorIntentos + " intentos!")
  }
  else if (document.getElementById("numero").value < numeroSecreto) {
    contadorIntentos++;
    alert("Falta...")
  }
  else if (document.getElementById("numero").value > numeroSecreto) {
    contadorIntentos++;
    alert("Te pasaste...")
  }
  document.getElementById("intentos").value = contadorIntentos;
}

function RandomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}