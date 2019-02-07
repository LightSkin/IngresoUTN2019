function Mostrar()
{
//tomo la hora 
var laHora = document.getElementById('hora').value;

	switch(laHora){
        default: laHora = "No es de mañana"; break;
        case "7": laHora = "Es de mañana"; break;
        case "8": laHora = "Es de mañana"; break;
        case "9": laHora = "Es de mañana"; break;
        case "10": laHora = "Es de mañana"; break;
        case "11": laHora = "Es de mañana"; break;
    }

alert (laHora);
}