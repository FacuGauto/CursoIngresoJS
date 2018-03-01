function Mostrar()
{
	var numero = 0;
	for (var i = 1; ; i++) 
	{
		if (numero != 9) 
		{
			numero = prompt("Ingresar un numero: ", "La ejecucion se termina con el numero 9");
			numero = parseInt(numero);

		}
		else
		{
			alert("FIN!!!");
			break;
		}

	}



}//FIN DE LA FUNCIÓN