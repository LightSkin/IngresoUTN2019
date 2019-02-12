function Mostrar()
{

	var contador=0;
	var acumulador=0;

while (contador < 5) {
	contador++;
	acumulador += parseFloat(prompt("Ingresar el número " + contador + " a sumar."));
}

document.getElementById('suma').value=acumulador.toFixed(2);
document.getElementById('promedio').value=(acumulador/5).toFixed(2);

}//FIN DE LA FUNCIÓN