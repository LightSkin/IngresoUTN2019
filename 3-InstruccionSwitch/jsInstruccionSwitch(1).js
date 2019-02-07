function Mostrar()
{
    var mesDelAño = document.getElementById('mes').value; //Grabo el mes

    switch (mesDelAño) {
        case "Enero": alert("Que comiences bien el año!");
        break;
        case "Marzo": alert("A clases!");
        break;
        case "Julio": alert("Se vienen las vacaciones!");
        break;
        case "Diciembre": alert("Felices fiestas!");
        break;
    }
}