function mostrar() {
    var nombre1 = prompt("Por favor introduzca el nombre de la primer persona.");
    var peso1 = parseFloat(prompt("Introduzca el peso de " + nombre1));
    while (isNaN(peso1) || peso1 <= 0)
        var peso1 = parseFloat(prompt("El peso introducido es erróneo, por favor introduzca el peso de " + nombre1 + " nuevamente."));
    var nombre2 = prompt("Por favor, introduzca el nombre de la pareja de " + nombre1);
    var peso2 = parseFloat(prompt("Por último, introduzca el peso de " + nombre2));
    while (isNaN(peso2) || peso2 <= 0)
        var peso2 = parseFloat(prompt("El peso introducido es erróneo, por favor introduzca el peso de " + nombre2 + " nuevamente."));

    alert("Ustedes se llaman " + nombre1 + " y " + nombre2 + " y pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + (peso1 + peso2) + " kilos y el promedio de peso es " + ((peso1 + peso2) / 2) + " kilos de peso.");
}