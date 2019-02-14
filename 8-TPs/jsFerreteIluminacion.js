/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var precio = 35;
    var IIBB = 120;

    var cantidad = parseInt(document.getElementById("Cantidad").value);
    var marca = document.getElementById("Marca").value;
    var precioFinal;

    if (cantidad >= 6) {
        precioFinal = (cantidad * precio) - (cantidad * precio * 0.5);
    }
    if (cantidad == 5) {
        if (marca == "ArgentinaLuz")
            precioFinal = (cantidad * precio) - (cantidad * precio * 0.4);
        else
            precioFinal = (cantidad * precio) - (cantidad * precio * 0.3);
    }
    if (cantidad == 4) {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            precioFinal = (cantidad * precio) - (cantidad * precio * 0.25);
        else
            precioFinal = (cantidad * precio) - (cantidad * precio * 0.2);
    }
    if (cantidad == 3) {
        switch (marca) {
            case "ArgentinaLuz":
                precioFinal = (cantidad * precio) - (cantidad * precio * 0.15);
                break;
            case "FelipeLamparas":
                precioFinal = (cantidad * precio) - (cantidad * precio * 0.1);
                break;
            default:
                precioFinal = (cantidad * precio) - (cantidad * precio * 0.05);
                break;
        }
    }
    if (cantidad <= 2 && cantidad > 0) {
        precioFinal = (cantidad * precio);
    }

    if (precioFinal > IIBB) {
        var temp = precioFinal * 0.1;
        alert("Usted pago $" + temp + " de IIBB.")
    }
    if (cantidad <= 0)
        alert("Por favor ingrese una cantidad válida.")
    else
        document.getElementById("precioDescuento").value = precioFinal;
}