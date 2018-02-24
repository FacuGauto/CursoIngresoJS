function Mostrar()
{

	var repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones = parseInt(repeticiones);

	while(isNaN(repeticiones))
	{
		var repeticiones = prompt("ingrese el número de repeticiones");
		repeticiones = parseInt(repeticiones);
	}


	for (var i = 1; i <= repeticiones; i++) 
	{
		alert("Hola UTN FRA");
	}


}//FIN DE LA FUNCIÓN