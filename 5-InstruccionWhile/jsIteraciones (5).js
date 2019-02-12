function Mostrar()
{
while (!(sexo == "f" || sexo == "m")) {
    var sexo = prompt("ingrese f ó m .");
}
document.getElementById('Sexo').value=sexo;
}