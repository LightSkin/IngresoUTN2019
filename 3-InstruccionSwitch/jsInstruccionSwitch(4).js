function Mostrar()
{ 
var mesDelAño = document.getElementById('mes').value; //tomo el mes

    switch(mesDelAño){
        case"Enero":mesDelAño = "Este mes tiene 31 días."; break;
        case"Febrero":mesDelAño = "Este mes tiene 28 días."; break;
        case"Marzo":mesDelAño = "Este mes tiene 31 días."; break;
        case"Abril":mesDelAño = "Este mes tiene 30 días."; break;
        case"Mayo":mesDelAño = "Este mes tiene 31 días."; break;
        case"Junio":mesDelAño = "Este mes tiene 30 días."; break;
        case"Julio":mesDelAño = "Este mes tiene 31 días."; break;
        case"Agosto":mesDelAño = "Este mes tiene 30 días."; break;
        case"Septiembre":mesDelAño = "Este mes tiene 31 días."; break;
        case"Octubre":mesDelAño = "Este mes tiene 30 días."; break;
        case"Noviembre":mesDelAño = "Este mes tiene 31 días."; break;
        case"Diciembre":mesDelAño = "Este mes tiene 30 días."; break;
    }

alert (mesDelAño);
}