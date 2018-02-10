function Mostrar()
{
	var largo;
	var ancho;
	var resultado;

	largo = document.getElementById('largo').value;
	ancho = document.getElementById('ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	resultado = 3 * (2 *(largo + ancho))

	alert(resultado);
}
