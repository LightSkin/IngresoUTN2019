/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var resultado = obtenerUno() + obtenerDos();
    alert ("La suma de ambos números es: " + resultado);
}

function restar()
{
    var resultado = obtenerUno() - obtenerDos();
    alert ("La resta de ambos números es: " + resultado)
}

function multiplicar()
{ 
	var resultado = obtenerUno() * obtenerDos();
    alert ("La multiplicación entre ambos números es: " + resultado)
}

function dividir()
{
	var resultado = obtenerUno() / obtenerDos();
    alert ("La divición entre ambos números es: " + resultado)
}

function obtenerUno()
{
	return parseInt(document.getElementById ("numeroUno").value)
}

function obtenerDos()
{
    return parseInt(document.getElementById("numeroDos").value)
}