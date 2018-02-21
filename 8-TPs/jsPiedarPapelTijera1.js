/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionUsuario;
function comenzar()
{
	
	numeroSecreto = Math.floor((Math.random() * 3) + 1);

	switch(numeroSecreto)
	{
		case 1:
			eleccionMaquina = "piedra";
			break;
		case 2:
			eleccionMaquina = "papel";
			break;
		case 3:
			eleccionMaquina = "tijera";
			break;
	}	

	console.log(numeroSecreto);
	console.log(eleccionMaquina);
}//FIN DE LA FUNCIÓN

function piedra()
{
	eleccionUsuario = "piedra";

	switch(eleccionMaquina)
	{
		case "piedra":
			alert("Usted empató");
			break;
		case "tijera":
			alert("Usted ganó");
			break;
		default:
			alert("Usted perdió");
			break;
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	eleccionUsuario = "papel";

	switch(eleccionMaquina)
	{
		case "papel":
			alert("Usted empató");
			break;
		case "piedra":
			alert("Usted ganó");
			break;
		default:
			alert("Usted perdió");
			break;
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	eleccionUsuario = "tijera";

	switch(eleccionMaquina)
	{
		case "tijera":
			alert("Usted empató");
			break;
		case "papel":
			alert("Usted ganó");
			break;
		default:
			alert("Usted perdió");
			break;
	}

}//FIN DE LA FUNCIÓN