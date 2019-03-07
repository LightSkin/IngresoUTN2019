function mostrar() {
    var numero;
    var letra;

    var pares = 0;
    var impares = 0;
    var ceros = 0;
    var promedioPos = 0;
    var sumaNeg = 0;
    var numMax = 0;
    var numMin = 0;
    var letraMax = "?";
    var letraMin = "?";

    var acumuladorPos = 0;
    var acumuladorNeg = 0;
    var contadorPos = 0;
    var contador = 0;
    var respuesta;

    do {
        letra = prompt("Introduzca una letra.");
        while (letra == "" || letra == null)
            if (letra == "")
                letra = prompt("Tal vez me distraje, pero no logré registrar ninguna letra. Por favor reintentalo.");
            else
                letra = prompt("Es necesario introducir una letra. No te voy a dejar ir hasta que lo hagas. (a menos que termines mi proceso)");

        numero = parseFloat(prompt("Introducir un numero entre -100 y 100."));
        while (isNaN(numero) || numero < -100 || numero > 100)
            numero = parseFloat(prompt("Error. introducir un numero entre -100 y 100."));

        //a) La cantidad de números pares.
        if (numero % 2 === 0)
            pares++;
        //b) La cantidad de números impares. 
        else
            impares++;
        //c) La cantidad de ceros. 
        if (numero === 0)
            ceros++;
        //d) El promedio de todos los números positivos ingresados.
        if (numero >= 0) {
            contadorPos++;
            acumuladorPos += numero;
        }
        //e) La suma de todos los números negativos. 
        else
            acumuladorNeg += numero;
        //f) El número y la letra del máximo y el mínimo.
        if (numero > numMax) {
            numMax = numero;
            letraMax = letra;
        }
        if (numero < numMin) {
            numMin = numero;
            letraMin = letra;
        }
        if (contador === 0) {
            numMax = numMin = numero;
            letraMax = letraMin = letra;
        }
        
        contador++;
        respuesta = confirm("¿Querés ingresar otro número?");
    } while (respuesta)

    //d) realizar el promedio	
    if (contadorPos != 0)
        promedioPos = acumuladorPos / contadorPos;

    document.write("La cantidad de números pares es " + pares + "<br>");
    document.write("La cantidad de números impares es " + impares + "<br>");
    document.write("La cantidad de ceros es " + ceros + "<br>");
    document.write("El promedio de todos los números positivos ingresados es " + promedioPos + "<br>");
    document.write("La suma de todos los números negativos es " + acumuladorNeg + "<br>");

    document.write("El número máximo es el " + numMax + " y su letra es '" + letraMax + "'<br>");
    document.write("El número mínimo es el " + numMin + " y su letra es '" + letraMin + "'");
}