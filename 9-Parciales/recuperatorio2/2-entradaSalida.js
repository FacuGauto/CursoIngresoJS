//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 2-EntradaSalida");

	var importe;
	var precioFinal;
	var iva;
	iva = 0.21;

	importe = prompt("Ingrese el importe del producto: ");
	importe = parseInt(importe);

	precioFinal = importe + (importe * iva);

	document.getElementById('importe').value = precioFinal;

	
}

