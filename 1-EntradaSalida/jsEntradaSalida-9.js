/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var temp = parseInt(document.getElementById ("sueldo").value);
    var resultado = temp + (temp * 0.1)
    document.getElementById("resultado").value = resultado;
}
