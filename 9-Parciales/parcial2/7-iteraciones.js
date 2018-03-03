//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 7-iteraciones");
	
	var nota;
	var sexo;
	var sumaNotas;
	var promedio;
	var notaMasBaja;
	var varonesNotaMayor;

	sumaNotas = 0;
	varonesNotaMayor = 0;

	for (var i = 1; i <= 6; i++) 
	{
		 nota = prompt("Ingresar la nota del alumno " + i);
		 nota = parseInt(nota);

		 while(isNaN(nota) || nota <0 || nota > 10)
		 {
			nota = prompt("Ingresar la nota del alumno " + i);
		 	nota = parseInt(nota);		 	
		 }

		 sexo = prompt("Ingresar el sexo del alumno ('f' o 'm'): " + i);

		 while(sexo !="m" && sexo !="f")
		 {
			sexo = prompt("Ingresar el sexo del alumno ('f' o 'm'): " + i);		 	
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
		 if (sexo == "m" && nota >= 6) 
		 {
		 	varonesNotaMayor ++;
		 }


		 sumaNotas = sumaNotas + nota;
	}

	promedio = sumaNotas / 6;

	alert("El promedio de las notas totas es: " + promedio +
		", la nota mas baja es: " + notaMasBaja + 
		" Y la cantidad de varones que su nta es mayor o igual a seis es: " + varonesNotaMayor);
}

