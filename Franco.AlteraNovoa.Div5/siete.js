function mostrar() {
    var contador = 0;
    var currentAltura; // 0 y 250
    var currentSexo; //f o m

    var acumuladorAltura = 0;
    var promedioAltura = 0;
    var alturaMasBaja = 0;
    var sexoAlturaMasBaja = "Ninguno";
    var mujeresAltas = 0;

    do {
        currentAltura = parseFloat(prompt("Ingrese la altura en centímetros (0-250)"));
        while (isNaN(currentAltura) || currentAltura < 0 || currentAltura > 250)
            currentAltura = parseFloat(prompt("Error. Reingrese la altura en centímetros (0-250)"));

        currentSexo = (prompt("Ingrese su sexo: F ó M")).toLowerCase ();
        while (currentSexo != "f" && currentSexo != "m")
            currentSexo = prompt("Error. Reingrese su sexo: F ó M");

        //c) La cantidad de mujeres que su altura supere los 190 centimetros
        if (currentAltura > 190 && currentSexo === "f")
            mujeresAltas++;


        //b) La altura más baja y el sexo de esa persona
        if (currentAltura < alturaMasBaja || contador === 0) {
            alturaMasBaja = currentAltura;
            sexoAlturaMasBaja = currentSexo;
        }
        //a) El promedio de las alturas totales
        acumuladorAltura += currentAltura;

        contador++;
    } while (contador < 5)

    //a) El promedio de las alturas totales
    promedioAltura = acumuladorAltura / contador;

    alert("Promedio de las alturas totales " + promedioAltura + ", la altura más baja es " + alturaMasBaja + " y su sexo es " + sexoAlturaMasBaja + ", la cantidad de mujeres que superan 190 cm es: " + mujeresAltas);
}
/*Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) ,
 el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert: 
. 
. 
.*/