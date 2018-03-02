function Mostrar()
{
	var edad;
	var sexo;
	var promedio;
	var sumaEdad;
	var edadMasBaja;
	var cantVaronesMayores;

	sumaEdad = 0;
	cantVaronesMayores = 0;

	for (var i = 1; i <= 10; i++) 
	{
		edad = prompt("Ingreso " + i + " edad: ");
		edad = parseInt(edad);

		while(isNaN(edad) || (edad <= 0) || (edad >100))
		{
			edad = prompt("Ingreso " + i + " edad: ");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingreso " + i + " sexo ('f' o 'm'): ");

		while( sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingreso " + i + " sexo ('f' o 'm'): ");			
		}

		if (i == 1) 
		{
			edadMasBaja = edad;
		}
		else
		{
			if (edadMasBaja > edad) 
			{
				edadMasBaja = edad;
			}
		}
		if (sexo == "m" && edad >= 20) 
		{
			cantVaronesMayores ++;
		}
		sumaEdad = sumaEdad + edad;
	}

	promedio = sumaEdad/100;

	alert("El promedio de las edades ingresadas es: " + promedio +
		", la edad mas baja es: " + edadMasBaja + " y la cantidad de varones de 20 o mas años es: " + cantVaronesMayores );
}
