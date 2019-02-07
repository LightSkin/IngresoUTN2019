function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = NotaRandom();

	if (nota <= 4)
	alert("Tu nota es: " + nota + "\nVamos la próxima se puede!");
	else if (nota > 4 && nota < 9)
	alert("Tu nota es: " + nota + "\nAprobaste!");
	else if (nota >= 9)
	alert("Tu nota es: " + nota + "\nExcelente!");
}

function NotaRandom() {
	return Math.floor(Math.random() * 10 + 1)
}