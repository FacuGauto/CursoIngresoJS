function Mostrar()
{
	/*var numero;
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
*/
	alert("fdfdfdf");

	var nombreAnimal;
	var pesoAnimal;
	var temperaturaHabitat;
	var respuesta;
	var mayorPeso;
	var nombreAnimalMayorPeso;
	var tempBaja;
	var nombreAnimalTempBaja;
	var cantPares;
	var sumaPeso;
	var tempMaxima;
	var promedio;
	var contador;

	respuesta = "si"
	cantPares = 0;
	sumaPeso = 0;
	contador = 0;

	while(respuesta != "no")
	{
		contador ++;
		nombreAnimal = prompt("Ingrese el nombre del animal numero " + contador  + ": ");
		pesoAnimal = prompt("Ingrese el peso del animal numero " + contador  + ": ");
		pesoAnimal = parseInt(pesoAnimal);
		temperaturaHabitat = prompt("Ingrese la temperatura del habitat en el que vive el animal numero " + contador  + ": ");
		temperaturaHabitat = parseInt(temperaturaHabitat);

		while(isNaN(pesoAnimal) || pesoAnimal <= 0)
		{
			pesoAnimal = prompt("Ingrese el peso del animal numero " + contador  + ": ");
			pesoAnimal = parseInt(pesoAnimal);
		}
		while(isNaN(temperaturaHabitat))
		{
			temperaturaHabitat = prompt("Ingrese la temperatura del habitat en el que vive el animal numero " + contador  + ": ");
			temperaturaHabitat = parseInt(temperaturaHabitat);			
		}

		console.log(nombreAnimal);
		console.log(pesoAnimal);
		console.log(temperaturaHabitat);
		if (contador == 1) 
		{
			mayorPeso = pesoAnimal;
			nombreAnimalMayorPeso = nombreAnimal;
			tempBaja = temperaturaHabitat;
			nombreAnimalTempBaja = nombreAnimal;
			tempMaxima = temperaturaHabitat;

		}
		else
		{
			if (mayorPeso < pesoAnimal) 
			{
				mayorPeso = pesoAnimal;
				nombreAnimalMayorPeso = nombreAnimal;
			}
			if (tempBaja > temperaturaHabitat) 
			{
				tempBaja = temperaturaHabitat;
				nombreAnimalTempBaja = nombreAnimal;
			}
			if (tempMaxima < temperaturaHabitat) 
			{
				tempMaxima = temperaturaHabitat;
			}
		}

		if (temperaturaHabitat % 2 == 0 && temperaturaHabitat != 0) 
		{
			cantPares ++;
		}

		
		sumaPeso = sumaPeso + pesoAnimal;
		respuesta = prompt("¿Desea seguir ingresando animales?(De no querer ingresar 'no')");

	}
		
	promedio = sumaPeso / contador;
	document.write(	"El animal mas pesado es: " + nombreAnimalMayorPeso + "<br>" +
					"El animal que vive en el habitat con la temperatura mas baja es: " + nombreAnimalTempBaja + "<br>" +
					"La cantidad de temperaturas pares que se ingresaron es: " + cantPares + "<br>" +
					"El promedio del peso de todos los animales es: " + promedio + "<br>" +
					"La temperatura maxima es: " + tempMaxima + "<br>" +
					"La temperatura minima es: " + nombreAnimalTempBaja);


}



/*Tres datos hasta que el usuario quiera
	*nombre del animal
	*peso del animal(mayor a cero)
	*la temperatura del habitat del animal(entre -40 y +40)
Informar: 
	*nombre del animal mas pesado
	*nombre del animal de la temperatura mas baja
	*cant de temp pares que se ingresaron
	*promedio del peso de todos los animales
	*temperatura maxima
	* temp minima

*/