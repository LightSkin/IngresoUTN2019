function Mostrar()
{
var laHora = document.getElementById('hora').value;

	switch(laHora){
        case "0": laHora = "Es de noche"; break;
        case "1": laHora = "Es de noche"; break;
        case "2": laHora = "Es de noche"; break;
        case "3": laHora = "Es de noche"; break;
        case "4": laHora = "Es de noche"; break;
        case "5": laHora = "Es de noche"; break;
        case "6": laHora = "Es de noche"; break;
        case "7": laHora = "Es de mañana"; break;
        case "8": laHora = "Es de mañana"; break;
        case "9": laHora = "Es de mañana"; break;
        case "10": laHora = "Es de mañana"; break;
        case "11": laHora = "Es de mañana"; break;
        case "12": laHora = "Es de tarde"; break;
        case "13": laHora = "Es de tarde"; break;
        case "14": laHora = "Es de tarde"; break;
        case "15": laHora = "Es de tarde"; break;
        case "16": laHora = "Es de tarde"; break;
        case "17": laHora = "Es de tarde"; break;
        case "18": laHora = "Es de tarde"; break;
        case "19": laHora = "Es de tarde"; break;
        case "20": laHora = "Es de noche"; break;
        case "21": laHora = "Es de noche"; break;
        case "22": laHora = "Es de noche"; break;
        case "23": laHora = "Es de noche"; break;
        case "24": laHora = "Es de noche"; break;
        default: laHora = "La hora no existe.";
    }

alert (laHora);
}