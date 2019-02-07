/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    alert ("La suma de ambos números es: " + (obtenerUno() / obtenerDos()));
}

function restar()
{
    alert ("La resta de ambos números es: " + (obtenerUno() / obtenerDos()));
}

function multiplicar()
{ 
    alert ("La multiplicación entre ambos números es: " + (obtenerUno() / obtenerDos()));
}

function dividir()
{
    if (obtenerDos() != 0)
    alert ("La divición entre ambos números es: " + (obtenerUno() / obtenerDos()));
    else
    alert ("La división por cero no está definida!");
}

function obtenerUno()
{
	return parseInt(document.getElementById ("numeroUno").value);
}

function obtenerDos()
{
    return parseInt(document.getElementById("numeroDos").value);
}