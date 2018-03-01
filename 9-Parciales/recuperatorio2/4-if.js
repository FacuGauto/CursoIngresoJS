//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 4-if");

	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Ingrese el primer numero: ");
	numeroDos = prompt("Ingrese el segundo numero: ");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	if (numeroUno == numeroDos) 
	{
		resultado = numeroUno * numeroDos;
	}
	else if (numeroUno > numeroDos)
	{
		resultado = numeroUno - numeroDos;
	}
	else
	{
		resultado = numeroUno + numeroDos;
	}

	document.write("El resultado es : " + resultado);
}

