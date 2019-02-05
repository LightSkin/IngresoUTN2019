/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	var mensaje = prompt ("¿Cómo dormiste hoy?")
	document.getElementById("elNombre").value = "Asique dormiste " + mensaje + "?";
}

