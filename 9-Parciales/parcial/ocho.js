function Mostrar()
{
	var numero;
	var contador = 0;
	var acumulador = 0; 
	var respuesta = "";
	var cantPares = 0;
	var promedio;
	var maximo;
	var minimo;


	while(respuesta != "no")
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		while(isNaN(numero) || numero <= 0)
		{
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);		
		}
		if (numero % 2 == 0) 
		{
			cantPares ++;
		}
		if (contador == 0) 
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
		contador ++;
		acumulador = acumulador + numero;
		respuesta = prompt("¿Desea seguir ingresando numeros?","Para terminar ingrese \"no\"");
	}
	
	promedio = acumulador / contador;
	document.write("La cantidad de numeros pares es: " + cantPares + "<br>"
		+ "El promedio de todos los numeros ingresados es: " + promedio + "<br>"
		+ "La suma de todos los numeros es: " + acumulador + "<br>"
		+ "El numero maximo es: " + maximo + "<br>"
		+ "El numero minimo es: " + minimo);
}
