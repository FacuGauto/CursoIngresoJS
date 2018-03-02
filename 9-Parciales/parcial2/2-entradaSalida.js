//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 2-EntradaSalida");
	
	var importe;
	var iva;
	var importeFinal;
	var subtotal;

	iva = 0.21;
	importe = prompt("Ingrese el importe del producto: ");
	importe = parseInt(importe);

	subtotal = importe * iva;
	importeFinal = importe + subtotal;

	document.getElementById('importe').value = importeFinal;

}

