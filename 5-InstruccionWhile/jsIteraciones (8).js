function Mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;

	var respuesta = 'si';

	var num;

	do {
		num = parseInt(prompt("Ingrese un número: "));
		while (isNaN(num)) {
			num = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}

		if (num > 0)
			positivo += num;
		else
			negativo *= num;

		contador++;
		respuesta = confirm("Querés seguir?");

	} while (respuesta)


	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN