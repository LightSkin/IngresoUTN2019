/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var iva = 0.21;

function Sumar () 
{
    alert ((Get1() + Get2() + Get3()).toFixed(2));
}
function Promedio () 
{
    alert (((Get1() + Get2() + Get3()) / 3).toFixed(2));
}
function PrecioFinal () 
{
    var temp = Get1() + Get2() + Get3();
	alert ((temp + temp * iva).toFixed(2)) ;
}
function Get1 () 
{
return parseFloat(document.getElementById("PrecioUno").value);
}

function Get2 () 
{
return parseFloat(document.getElementById("PrecioDos").value);
}

function Get3 () 
{
return parseFloat(document.getElementById("PrecioTres").value);
}
