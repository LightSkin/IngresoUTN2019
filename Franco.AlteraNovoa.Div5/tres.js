function mostrar() {
    var precio = parseFloat(prompt("Por favor, introducir el precio del producto."));
    while (isNaN(precio))
        var precio = parseFloat(prompt("Precio erróneo, reintroducir el precio del producto."));
    var descuento = parseFloat(prompt("Ahora introducir el descuento del producto en porcentaje.")) / 100;
    while (isNaN(descuento))
        var descuento = parseFloat(prompt("Descuento erróneo, reintroducir el descuento del producto en porcentaje.")) / 100;

    document.getElementById("elPrecioFinal").value = precio - (precio * descuento);
}