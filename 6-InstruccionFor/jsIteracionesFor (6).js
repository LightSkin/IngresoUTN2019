function Mostrar() {
    var num;
    var contador = 0;

    num = parseFloat(prompt("Ingrese un número: "));

    for (var i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            contador++;
            console.log(i);
        }
    }

    alert ("Se encontraron " + contador + " números pares.");
}