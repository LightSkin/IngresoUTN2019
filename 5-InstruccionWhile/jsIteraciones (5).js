function Mostrar() {
    while (!(sexo == "f" || sexo == "m")) {
        var sexo = prompt("ingrese f ó m .");
    }
    if (sexo == "m")
        document.getElementById('Sexo').value = "Masculino";
    else
        document.getElementById('Sexo').value = "Femenino";
}