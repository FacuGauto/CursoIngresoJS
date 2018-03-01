//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 3-EntradaSalida");

	var ancho;
	var largo;
	var perimetro;
	var resultado;

	ancho = document.getElementById('ancho').value
	largo = document.getElementById('largo').value

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	if(isNaN(ancho) || isNaN(largo))
	{
		alert("Los valores ingresados no son numericos");
	}
	else
	{
		perimetro = (largo + ancho) * 2;

		resultado = perimetro * 6;

		alert("La cantidad de alambre necesario es: " + resultado);
	
	}

	

	
}

