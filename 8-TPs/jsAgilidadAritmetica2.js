/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
var numero1;
var numero2;
var operador;
var check;

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
    setTimeout(function Perdiste() { if (check) alert("TIME OUT!!"); }, 5000);
}

function Responder() {
    respuesta = document.getElementById("Respuesta").value;
    check = true;
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