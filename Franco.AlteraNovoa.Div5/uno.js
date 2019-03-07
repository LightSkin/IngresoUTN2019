function mostrar()
{
    var valor = prompt("Por favor, introduzca la longitud de los lados de su triángulo.");
    while (isNaN(valor)) {
        var valor = prompt("Sólo se permiten números. Por favor, introduzca la longitud de los lados de su triángulo.");
    }
    alert ("El perímetro de su triángulo equilatero es de: " + valor * 3);
}