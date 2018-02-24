function Mostrar()
{
	var importe;
	var dia;
	
	while(dia < 25)
	{
		importe = prompt("Ingrese el importe final del dia " + dia + ": ");

		while(importe <= 0)
		{
			importe = prompt("Ingrese el importe final (mayor a cero) del dia " + dia + " : ");
		}



		dia ++;
	}

	
}
