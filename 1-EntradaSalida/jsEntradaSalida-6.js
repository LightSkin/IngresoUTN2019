/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var cajaUno = parseInt(document.getElementById ("numeroUno").value)
    var cajaDos = parseInt(document.getElementById("numeroDos").value)
    var resultado = cajaUno + cajaDos;
    alert ("La suma de ambos números es: " + resultado);
}

