function Mostrar() {
    var num;
    var contador = 0;

    num = parseFloat(prompt("Ingrese un número: "));

    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            contador++;
            console.log(i);
        }
    }

    if (contador == 2)
        alert("El número " + num + " es primo.");
    else
        alert("El número " + num + " NO es primo.");
}