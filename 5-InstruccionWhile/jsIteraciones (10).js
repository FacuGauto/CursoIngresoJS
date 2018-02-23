function Mostrar()
{

	var contador=0;
	var numero;
	var negativos = 0;
	var positivos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero = prompt("Ingrese un numero: ", "1");
		numero = parseInt(numero);
		console.log(numero);

		while(isNaN(numero))
		{
			numero = prompt("Ingrese un numero: ", "1");
			numero = parseInt(numero);
		}

		if (numero < 0) 
		{
			negativos = negativos + numero;
			cantidadNegativos ++;
		}
		else if (numero > 0) 
		{
			positivos = positivos + numero;
			cantidadPositivos ++;
		}
		else
		{
			cantidadCeros ++;
		}

		if (numero % 2 == 0) 
		{
			cantidadPares ++;
		}

		contador ++;
		respuesta = prompt("Desea ingresar mas numeros?","si");
	}

	diferencia = positivos - negativos;
	promedioPositivos = positivos/cantidadPositivos;
	promedioNegativos = negativos/cantidadNegativos;
	document.write("Suma de negativos: " + negativos + "<br>"
	      + "Suma de positivos: " + positivos + "<br>"
	      + "Cantidad de positivos: " + cantidadPositivos + "<br>"
	      + "Cantidad de negativos: " + cantidadNegativos + "<br>"
	      + "Cantidad de ceros: " + cantidadCeros + "<br>"
	      + "Cantidad de numeros pares: " + cantidadPares + "<br>"
	      + "Promedio de positivos: " + promedioPositivos + "<br>"
	      + "Promedio de negativos: " + promedioNegativos + "<br>"
	      + "Diferencia entre negativos y positivos: " + diferencia);


}//FIN DE LA FUNCIÓN