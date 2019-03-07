function mostrar() {
    //pido los numeros
    var numero1 = prompt("Por favor introducir el primero número.");
    var numero2 = prompt("Por favor introducir el segundo número.");
    var float1 = parseFloat(numero1);
    var float2 = parseFloat(numero2);

    //Si son iguales los muestro concatenados. 
    if (numero1 === numero2)
        alert(numero1 + numero2);
    //Si el primero es mayor, los resto. 
    else if (float1 > float2)
        //Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje "la resta es xxx y superó el 10".
        if (float2 > 10)
            alert("La resta es: " + (float1 - float2) + " y superó el 10");
        //Si no, sólo los resto.
        else
            alert(float1 - float2);
    //De lo contrario los sumo. 
    else
        alert(float1 + float2);
}