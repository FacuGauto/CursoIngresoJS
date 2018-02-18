function Mostrar()
{
	var diaDeLaSemana;
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
}
