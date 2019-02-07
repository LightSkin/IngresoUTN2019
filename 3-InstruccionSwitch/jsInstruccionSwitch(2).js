function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    default:
    alert(mesDelAño + "\nFalta para el invierno"); 
    break;
    case "Julio":
    alert(mesDelAño + "\nAbrigate que hace frio!"); 
    break;
    case "Agosto": 
    alert(mesDelAño + "\nAbrigate que hace frio!");
    break;
    case "Septiembre": 
    alert(mesDelAño + "\nYa pasamos el frio ahora calor!");
    break;
    case "Octubre": 
    alert(mesDelAño + "\nYa pasamos el frio ahora calor!");
    break;
    case "Noviembre": 
    alert(mesDelAño + "\nYa pasamos el frio ahora calor!");
    break;
    case "Diciembre": 
    alert(mesDelAño + "\nYa pasamos el frio ahora calor!");
    break;
}


}//FIN DE LA FUNCIÓN