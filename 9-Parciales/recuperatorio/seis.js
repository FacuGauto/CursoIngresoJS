function Mostrar()
{
	var peso;
	var contenedorMasPesado;
	var contenedorMenosPesado;
	var masPesado;
	var menosPesado;

	for (var i = 1; i <= 50; i++) 
	{
		peso = prompt("Ingrese el peso en kilos del contenedor numero " + i + ":");
		peso = parseInt(peso);

		while(isNaN(peso) || peso <=0)
		{
			peso = prompt("Ingrese el peso en kilos del contenedor numero " + i + ":");
			peso = parseInt(peso);
		}

		if(i == 1)
		{
			masPesado = peso;
			contenedorMasPesado = i;
			menosPesado = peso;
			contenedorMenosPesado = i; 
		}
		else
		{
			if (masPesado < peso) 
			{
				masPesado = peso;
				contenedorMasPesado = i;
			}
			if (menosPesado > peso) 
			{
				menosPesado = peso;
				contenedorMenosPesado = i;
			}
		}
	}
	alert("El contenedor mas pesado es el " + contenedorMasPesado + "con " + masPesado + " kilos y el menos pesado es el "
	+ contenedorMenosPesado + " con " + menosPesado + " kilos." );
}
