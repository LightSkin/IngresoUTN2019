/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura = document.getElementById("Temperatura").value;
    alert ("La temperatura convertida a celsius es: " + ((temperatura - 32) / 1.8).toFixed(1));
}

function CentigradosFahrenheit () 
{
	var temperatura = document.getElementById("Temperatura").value;
    alert ("La temperatura convertida a celsius es: " + (temperatura * 1.8 + 32).toFixed(1));
}
