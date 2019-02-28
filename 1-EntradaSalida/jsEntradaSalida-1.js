//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*function Mostrar()
{
	 alert ("Esto funciona de maravilla");
}*/

/*8- realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo.*/

function Mostrar() //parcial
{
	var num;
	var max = 0;
	var min = 0;
	var promedio = 0;
	var suma = 0;
	var acumPares = 0;
	var respuesta = 0;
	var contador = 0;

	do {
		//Inicializar
		num = parseFloat(prompt("Ingresa un número positivo."));
		while (num < 0 || isNaN(num))
			num = parseFloat(prompt("Error. Ingresa un número positivo."));
		//Procesar
		if (contador == 0) {
			max = num;
			min = num;
		}
		if (num > max)
			max = num;

		if (num < min)
			min = num;

		if (num % 2 == 0)
			acumPares++;
		//Finalizar
		suma += num;
		contador++;
		respuesta = confirm("Querés ingresar otro número?");
	} while (respuesta)

	promedio = suma / contador;

	document.write("La cantidad de números pares es: " + acumPares + "<br>");
	document.write("El promedio de todos los números es " + promedio + "<br>");
	document.write("La suma de todos los números es " + suma + "<br>");
	document.write("El número máximo es " + max + "<br>");
	document.write("El número mínimo es " + min);
}