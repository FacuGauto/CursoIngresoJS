//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 8-iteraciones");

	var numero;
	var cantPares;
	var cantNumeros;
	var sumaPositivos;
	var maximo;
	var minimo;
	var respuesta;
	var promedio;

	sumaPositivos = 0;
	cantNumeros = 0;
	cantPares = 0;
	respuesta = "si";

	while(respuesta != "no")
	{
		numero = prompt("Ingresar numero positivo: ");
		numero = parseInt(numero);

		while(isNaN(numero) || numero <= 0)
		{
			numero = prompt("Ingresar numero positivo: ");
			numero = parseInt(numero);
		}

		cantNumeros ++;
		sumaPositivos = sumaPositivos + numero;
		if (numero % 2 == 0) 
		{
			cantPares ++;
		}
		if (cantNumeros == 1) 
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if (maximo < numero) 
			{
				maximo = numero;
			}
			if (minimo > numero) 
			{
				minimo = numero;
			}
		}
		respuesta = prompt("Desea seguir ingresando numeros('no' para terminar): ");
	}

	promedio = sumaPositivos/cantNumeros;

	document.write("La cantidad de numeros pares es: " + cantPares + "<br>" +
					"El pomedio de todos los numeros ingresados es: " + promedio + "<br>" + 
					"La suma de todos los numeros es: " + sumaPositivos + "<br>" + 
					"El numero maximo es : " + maximo + "<br>" + 
					"El numero minimo es: " + minimo + "<br>");


	
}

