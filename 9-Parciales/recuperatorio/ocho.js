function Mostrar()
{
	alert("fdgfdgfdgf")

	var numero;
	var respuesta = "si";
	var contador;
	var cantPares;
	var sumaNumeros;
	var maximo;
	var minimo;


	contador = 0;
	cantPares = 0;
	sumaNumeros = 0;

	while(respuesta != "no")
	{
		contador ++;
		numero = prompt("Ingreso " + contador + " numero positivo: ");
		numero = parseInt(numero);

		while(isNaN(numero) || numero <= 0)
		{
			numero = prompt("Ingreso " + contador + " numero positivo: ");
			numero = parseInt(numero);
		}
		if (numero % 2 == 0) 
		{
			cantPares ++;
		}
		if (contador == 1) 
		{
			maximo = numero
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

		sumaNumeros = sumaNumeros + numero
		respuesta = prompt("Desea seguir ingresando numeros positivos (para salir ingrese 'no'): ");

	}

	promedio = sumaNumeros / contador;
	document.write("La cantidad de nuemros pares es: " + cantPares + "<br>" + 
					"El promedio de todos los numeros ingresados es: " + promedio + "<br>" + 
					"La suma de todos los numeros es: " + sumaNumeros + "<br>" + 
					"El numero maximo es: " + maximo + "<br>" + 
					"El numero minimo es: " + minimo);
}
