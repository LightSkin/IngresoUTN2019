function Mostrar()
{
	alert(RandomNumber(1, 10)); //Genero el número RANDOM entre 1 y 10	
}

function RandomNumber(min, max)
{
	return Math.floor(Math.random() * max + min);
}