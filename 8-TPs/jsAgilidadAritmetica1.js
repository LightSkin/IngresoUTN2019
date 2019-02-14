/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numero1;
var numero2;
var operador;

function comenzar() {
    numero1 = document.getElementById("PrimerNumero").value = RandomNumber(1, 10);
    numero2 = document.getElementById("SegundoNumero").value = RandomNumber(1, 10);
    switch (RandomNumber(1, 4)) {
        case 1:
            AssignOperator("*");
            break;
        case 2:
            AssignOperator("/");
            break;
        case 3:
            AssignOperator("-");
            break;
        default:
            AssignOperator("+");
            break;
    }
}

function Responder() {
    respuesta = document.getElementById("Respuesta").value;
    switch (operador) {
        case "*":
            if (respuesta == numero1 * numero2)
                alert("Correcto!!!")
            else
                alert("Incorrecto.")
            break;
        case "/":
            if (respuesta == numero1 / numero2)
                alert("Correcto!!!")
            else
                alert("Incorrecto.")
            break;
        case "-":
            if (respuesta == numero1 - numero2)
                alert("Correcto!!!")
            else
                alert("Incorrecto.")
            break;
        case "+":
            if (respuesta == numero1 + numero2)
                alert("Correcto!!!")
            else
                alert("Incorrecto.")
            break;
        default:
            break;
    }
}

function AssignOperator(op) {
    operador = document.getElementById("Operador").value = op;
}

function RandomNumber(min, max) {
    return Math.floor(Math.random() * max + min);
}