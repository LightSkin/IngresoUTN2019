// 1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 4-Cantidad de negativos.
// 5-Cantidad de ceros. 6-Cantidad de números pares. 7-Promedio de positivos. 8-Promedios de negativos.
// 9-Diferencia entre positivos y negativos, (positvos-negativos).
function Mostrar() {
	var respuesta = 'si';
	var contadorPos = 0;
	var contadorNeg = 0;
	var num;

	var negSum = 0;
	var posSum = 0;
	var negCant = 0;
	var posCant = 0;
	var zeroCant = 0;
	var paresCant = 0;
	var posProm = 0;
	var negProm = 0;
	var diferencia = 0;

	do {
		//Inicializar y validar
		num = parseInt(prompt("Ingrese un número: "));
		while (isNaN(num)) {
			num = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}
		//Comenzar procesamiento
		//positivo
		if (num > 0) {
			negSum += num;
			posCant++;
			contadorPos++;
		}
		//negativo
		else if (num < 0) {
			posSum += num;
			negCant++;
			contadorNeg++;
		}
		//zero
		else {
			zeroCant++;
		}
		//Finalizar o repetir?
		respuesta = confirm("Querés seguir?");
	} while (respuesta)

	if (contadorPos != 0)
		posProm = posSum / contadorPos;
	if (contadorNeg != 0)
		posProm = negSum / contadorNeg;
	diferencia = posSum + negSum;

	document.write("Suma de los negativos: " + negSum + "<br>");
	document.write("Suma de los positivos: " + posSum + "<br>");
	document.write("Cantidad de negativos: " + negCant + "<br>");
	document.write("Cantidad de positivos: " + posCant + "<br>");
	document.write("Cantidad de ceros: " + zeroCant + "<br>");
	document.write("Cantidad de números pares: " + paresCant + "<br>");
	document.write("Promedio de positivos: " + posProm + "<br>");
	document.write("Promedio de negativos: " + negProm + "<br>");
	document.write("La diferencia entre positivos y negativos es: " + diferencia);
}