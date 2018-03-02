function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	

	numeroUno = prompt("Ingrese el primer numero: ");
	numeroDos = prompt("Ingrese el segundo numero: ");

	//numeroUno = parseInt(numeroUno);
	//numeroDos = parseInt(numeroDos);

	if (numeroUno == numeroDos) 
	{
		resultado = numeroUno + numeroDos;
	}
	else
	{
		numeroUno = parseInt(numeroUno);
		numeroDos = parseInt(numeroDos);

		if (numeroUno > numeroDos) 
		{
			resultado = numeroUno * numeroDos;

			if (resultado % 2 == 0 && resultado !=0) 
			{
				console.log("es par");
				resultado = resultado + " es par.";
			}
		}
		else 
		{
			resultado = numeroUno - numeroDos;	
		}
		
	}
	document.write(resultado);
}


// Ingresar dos numeros si son iguales concatenar
//						si el primero es mayor que el segundo multiplicamos
						//si el primero es menor que el segundo los restamos