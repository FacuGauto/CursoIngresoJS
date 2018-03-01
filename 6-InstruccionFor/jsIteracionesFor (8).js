function Mostrar()
{
	var numero;
	var cantDivisores = 0;

	numero = prompt("Ingrese un numero: ");
	numero = parseInt(numero);

	if (numero > 1 && ((numero%1)==0)) 
	{
		for (var i = 1; i <= numero; i++) 
		{
			if ((numero % i) == 0)
			{
				cantDivisores ++;
			}	
		}
	}

	if (cantDivisores == 2) 
	{
		alert("Es un numero primo");
	}else
	{
		alert("No es un numero primo");		
	}




}//FIN DE LA FUNCIÓN