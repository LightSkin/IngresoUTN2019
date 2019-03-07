function mostrar() {
    var continente;
    var dias;
    var medioDePago;
    var descuento;
    var cuenta;
    const precio = 100;

    continente = document.getElementById("Marca").value;
    dias = parseFloat(prompt("Cuántos días le gustaría visitar el continente?"));
    medioDePago = (prompt("Cómo le gustaría pagarlo? Opciones: debito, mercadoPago y efectivo (otras opciones avaladas con descuentos pertinentes)")).toLowerCase();

    switch (continente) {
        case "América":
            switch (medioDePago) {
                case "debito":
                    descuento = 0.6;
                    break;
                default:
                    descuento = 0.5;
                    break;
            }
            break;
        case "África":
            switch (medioDePago) {
                case "debito":
                    descuento = 0.6;
                    break;
                default:
                    descuento = 0.75;
                    break;
            }
            break;
        case "Europa":
            switch (medioDePago) {
                case "debito":
                    descuento = 0.35;
                    break;
                case "mecadopago":
                    descuento = 0.3;
                    break;
                default:
                    descuento = 0.25;
                    break;
            }
            break;
        default:
            descuento = 1.2;
            break;
    }
    cuenta = (dias * precio) * descuento;
    alert("La visita a " + continente + " por la cantidad de " + dias + " dias, tiene un costo de " + cuenta + " con descuentos incluidos. (" + precio * dias + " sin descuentos)")
}

/*
una empresa de viajes le solicita ingresar que continente le gustaria visitar 
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras 
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento 
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento 
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5% 
cualquier otro continente tiene un recargo del 20%
*/