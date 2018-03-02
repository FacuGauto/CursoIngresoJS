function Mostrar()
{
/*	var diaDeLaSemana;
	diaDeLaSemana = prompt("Ingrese un da de la semana","Lunes");
	mensajeFinDeSemana = "Es fin de semana";
	mensajeDiaDeLaSemana = "A trabajar";

	switch(diaDeLaSemana)
	{
		case "Sabado":
			alert(mensajeFinDeSemana);
			break;
		case "SABADO":
			alert(mensajeFinDeSemana);
			break;
		case "Domingo":
			alert(mensajeFinDeSemana);
			break;
		case "DOMINGO":
			alert(mensajeFinDeSemana);
			break;
		default:
			alert(mensajeDiaDeLaSemana);
	}
*/

	var numeroUno;
	var numeroDos;
	var numeroTres;
	var mayor;

	numeroUno = prompt("Ingrese el primer numero: ");
	numeroDos = prompt("Ingrese el segundo numero: ");
	numeroTres = prompt("Ingrese el tercer numero: ");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	
	if (numeroUno > numeroDos && numeroUno > numeroTres) 
	{
		mayor = numeroUno;
	}
	else
	{
		if (numeroDos > numeroUno && numeroDos > numeroTres) 
		{
			mayor = numeroDos;
		}
		else
		{
			mayor = numeroTres;
		}
	}
	alert("Numero mayor: " + mayor);
}
