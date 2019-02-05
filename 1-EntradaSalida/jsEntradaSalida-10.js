/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	var temp = parseInt(document.getElementById ("importe").value);
    var resultado = temp - (temp * 0.25)
    document.getElementById("resultado").value = resultado;
}
