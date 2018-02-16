function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = prompt("Ingrese el primer numero: ");
	numeroDos = prompt("Ingrese el segundo numero: ");
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	if (suma == 0) 
	{
		document.write("CERO");
	}
	else
	{
		if (suma < 0)
		{
			document.write("NEGATIVO");
		}
		else
		{
			document.write("POSITIVO");
		}
	}
}
