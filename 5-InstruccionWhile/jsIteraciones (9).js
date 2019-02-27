function Mostrar() {

	var contador = 0;
	var respuesta = 'si';
	var num;
	var max;
	var min;

	do {
		num = parseInt(prompt("Ingrese un número: "));
		while (isNaN(num)) {
			num = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}

		if (contador == 0)
			max = min = num;

		if (num > max)
			max = num;

		if (num < min)
			min = num;

		contador++;
		respuesta = confirm("Querés seguir?");

	} while (respuesta)

	document.getElementById('maximo').value = max;
	document.getElementById('minimo').value = min;
}