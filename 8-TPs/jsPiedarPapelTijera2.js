var eleccionMaquina;
var eleccionUsuario;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
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
	
}//FIN DE LA FUNCIÓN

function mostarResultado()
{

}