function Mostrar() {
	var boludeo = 0;
	var check = false;
	var numero = prompt("Por favor, ingrese un número entre 0 y 10.");

	while (!check && !(numero > 0 && numero < 10)) {
		switch (boludeo) {
			case 0:
				numero = prompt("El número que ingresaste es inválido, por favor ingresa un número entre 0 y 10.");
				break;
			case 1:
				numero = prompt("Otra vez pusiste un número inválido, por favor ingresa un número entre 0 y 10.");
				break;
			case 2:
				numero = prompt("Capo, te dije que solo podes poner un número entre 0 y 10.");
				break;
			case 3:
				numero = prompt("Mira flaco, seré una maquina pero me estas rompiendo las bolas. SOLO entre 0 y 10.");
				break;
			case 4:
				numero = prompt("Me estan dando muchas ganas de crashear.");
				break;
			case 5:
				numero = prompt("Mirá ya me rompiste las bolas, querés poner " + numero + "? Listo ponemos eso así me dejas en paz." );
				check = true;
		}
		boludeo++;
	}
	document.getElementById("Numero").value = numero;
}