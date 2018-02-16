function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaAleatorio;

	notaAleatorio = Math.floor(Math.random()*11);

	alert(notaAleatorio);


	if (notaAleatorio < 4) 
	{
		alert("Vamos la proxima se puede");
	}
	else
	{
		if (notaAleatorio > 8) 
		{
			alert("EXCELENTE");
		}
		else
		{
			alert("Aprobó");
		}

	}

}//FIN DE LA FUNCIÓN