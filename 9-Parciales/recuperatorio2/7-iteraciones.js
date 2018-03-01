//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 7-iteraciones");

	var nota;
	var sexo;
	var acumulador = 0;
	var promedio;
	var notaBaja;
	var cantVarones = 0;
	
	for (var i = 1; i <= 7; i++) 
	{
		nota = prompt("Ingrese nota (entre 0 y 10) del alumno " + i + ": ");
		nota = parseInt(nota);

		while(isNaN(nota) || (nota < 0 || nota > 10))
		{
			nota = prompt("Ingrese nota (entre 0 y 10) del alumno " + i + ": ");
			nota = parseInt(nota);
		}

		acumulador = acumulador + nota;
		sexo = prompt("Ingrese el sexo (m o f) del alumno " + i + ": ");

		while(sexo != 'f' && sexo != 'm')
		{
			sexo = prompt("Ingrese el sexo (m o f) del alumno " + i + ": ");
		}

		if (i == 1) 
		{
			notaBaja = nota;
		}
		else
		{
			if (notaBaja > nota) 
			{
				notaBaja = nota;
			}
		}
		if (nota >= 6 && sexo == 'm') 
		{
			cantVarones ++;
		}
	}
	
	promedio = acumulador/i;

	alert("Promedio: " + promedio);
	alert("Nota mas baja: " + notaBaja);
	alert("Cantidad de varones con nota mayor o igual a 6: " + cantVarones);

	
}

