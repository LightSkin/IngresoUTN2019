function mostrar() {
    var pais;
    var habitantes = 0;
    var temperatura = 0;
    var respuesta;
    var temperaturasPares = 0;
    var paisMenosHabitantes;
    var paisMenosHabitantesNumero = 0;
    var paises40Grados = 0;
    var promedioHabitantes = 0;
    var tempMin = 0;
    var paisTempMin = "Sin definir.";

    var acumulador = 0;
    var contador = 0;

    do {
        pais = prompt("Introduzca el nombre del país.");
        while (pais == "" || pais == null)
            if (pais == "")
                pais = prompt("Tal vez me distraje, pero no logré registrar ningún país. Por favor reintentalo.");
            else
                pais = prompt("Es necesario introducir un nombre. No te voy a dejar ir hasta que lo hagas. (a menos que termines mi proceso)");

        habitantes = parseFloat(prompt("Introduzca la cantidad de habitantes de " + pais + " en millones."));
        while (isNaN(habitantes) || habitantes <= 0 || habitantes > 7000)
            habitantes = parseFloat(prompt("Error. El valor debe ser en millones, entre 1 y 7000. Por favor reintentar."));

        temperatura = parseFloat(prompt("Introduzca la temperatura de " + pais + "."));
        while (isNaN(temperatura) || temperatura < -50 || temperatura > 50)
            temperatura = parseFloat(prompt("Error. El valor ingresado no es una temperatura válida, intente nuevamente con el rango -50 y 50."));

        //a) La cantidad de temperaturas pares. 
        if (temperatura % 2 == 0)
            temperaturasPares++;
        //b) El nombre del pais con menos habitantes 
        if (habitantes < paisMenosHabitantesNumero) {
            paisMenosHabitantesNumero = habitantes;
            paisMenosHabitantes = pais;
        }
        //c) la cantidad de paises que superan los 40 grados. 
        if (temperatura > 40)
            paises40Grados++;
        //f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/
        if (temperatura < tempMin) {
            tempMin = temperatura;
            paisTempMin = pais;
        }
        //si no hay valores asignados, poner este pais
        if (contador === 0) {
            paisMenosHabitantesNumero = habitantes;
            paisMenosHabitantes = pais;
            tempMin = temperatura;
            paisTempMin = pais;
        }        

        //end and record loop
        acumulador += habitantes;
        contador++;
        respuesta = confirm("¿Querés ingresar otro país?");
    } while (respuesta)

    //d) el promedio de habitantes entre los paises ingresados	
    if (contador != 0)
        promedioHabitantes = acumulador / contador;

    document.write("La cantidad de temperaturas pares es " + temperaturasPares + "<br>");
    document.write("El nombre del pais con menos habitantes es " + paisMenosHabitantes + "<br>");
    document.write("La cantidad de paises que superan los 40 grados es " + paises40Grados + "<br>");
    document.write("El promedio de habitantes entre los paises ingresados es " + promedioHabitantes + "<br>");
    document.write("La temperatura mínima ingresada es " + tempMin + ", y el nombre del pais que registro esa temperatura es " + paisTempMin);
}