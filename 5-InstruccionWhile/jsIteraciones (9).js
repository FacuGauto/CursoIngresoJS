function Mostrar()
{
	var numero;
	var maximo;
	var minimo;
	var contador=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero = prompt("Ingrese un numero:", "1");
		numero = parseInt(numero);
		while(isNaN(numero))
		{
			numero = prompt("Ingrese un numero:", "1");
			numero = parseInt(numero);
		}
		if (contador == 0) 
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if(maximo > numero)
			{
				maximo = maximo;
			}
			else
			{
				maximo = numero;
			}
			if(minimo < numero)
			{
				minimo = minimo;
			}
			else
			{
				minimo = numero;
			}
		}

		contador ++;

		respuesta = prompt("¿Desea ingresar mas numeros?","si");
	
	}

	alert("El numero maximo es: " + maximo + " y el minimo es: " + minimo);



}//FIN DE LA FUNCIÓN