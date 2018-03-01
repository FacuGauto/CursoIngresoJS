function Mostrar()
{
	var nota;
	var sexo;
	var promedio;
	var notaMasBaja;
	var cantVarones = 0;
	var sumaNotas = 0;

	for (var i = 1; i <= 10; i++) 
	{
		nota = parseInt(prompt("Ingrese la nota del alumno " + i + ": "));

		while(isNaN(nota) || nota > 10 || nota < 0)
		{
			nota = parseInt(prompt("Ingrese la nota del alumno "  + i + ": "));
		}

		sexo = prompt("Ingrese el sexo del alumno " + i + ": ", "m o f");

		while(sexo != 'f' && sexo != 'm')
		{
			sexo = prompt("Ingrese el sexo del alumno " + i + ": ", "m o f");			
		}
		if (i == 1) 
		{
			notaMasBaja = nota;
		}
		else
		{
			if (notaMasBaja > nota) 
			{
				notaMasBaja = nota;
			}
		}

		if (nota >= 6 && sexo == 'm') 
		{
			cantVarones ++;
		}

		sumaNotas = sumaNotas + nota;
	}

	promedio = sumaNotas / (i - 1);

	console.log(promedio);
	console.log(notaMasBaja);
	console.log(cantVarones);

}
