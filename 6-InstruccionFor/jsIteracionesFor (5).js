function Mostrar() {
    var num;
    for (; ;) {
        num = parseFloat(prompt("Ingrese un número: "));
        if (num == 9)
            break;
        console.log(num);
    }
}