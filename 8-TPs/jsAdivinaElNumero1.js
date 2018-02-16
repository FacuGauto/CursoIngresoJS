/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	console.log(numeroSecreto);
	alert("Numero generado...");
	contadorIntentos = 0;
	document.getElementById('intentos').value = "";
	document.getElementById('numero').value = "";

}

function verificar()
{
	contadorIntentos ++;

	if (contadorIntentos > 10) 
	{
		alert("Supero la cantidad de intentos");
		return;
	}
	numeroIngresado = document.getElementById('numero').value;

	numeroIngresado = parseInt(numeroIngresado);

	if (numeroIngresado == numeroSecreto && contadorIntentos == 1)
	{
		alert("Numero incorrecto, siga probando");
		numeroSecreto = Math.floor((Math.random() * 100) + 1);
		console.log(numeroSecreto);
	}
	else if (numeroIngresado == numeroSecreto)
	{
		alert("Usted es ganador en solo en " + contadorIntentos + " intentos.");
	}
	else if (numeroIngresado < numeroSecreto)
	{
		alert("Falta para llegar");
	}
	else
	{
		alert("Se paso!!");
	}

	document.getElementById('intentos').value = contadorIntentos;
	
}