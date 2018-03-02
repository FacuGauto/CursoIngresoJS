//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 3-EntradaSalida");

	var largo;
	var ancho;
	var perimetro;
	var resultado;

	largo = document.getElementById('largo').value;
	ancho = document.getElementById('ancho').value;
	largo = parseInt(largo);
	ancho = parseInt(ancho); 

	perimetro = (largo + ancho) * 2;
	console.log(perimetro);
	resultado = perimetro * 6;

	alert("Se necesitan " + resultado + " metros de alambre." );
	
}

