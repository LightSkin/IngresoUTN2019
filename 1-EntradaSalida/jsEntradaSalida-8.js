/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var cajaUno = parseInt(document.getElementById ("numeroDivisor").value)
    var cajaDos = parseInt(document.getElementById("numeroDividendo").value)
    var resultado = cajaUno % cajaDos;
    alert ("El resto es: " + resultado);
}
