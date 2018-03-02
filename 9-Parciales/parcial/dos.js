//Se ingresa un porcentaje de descuento y el importe mostar cuanto se debe pagar
function Mostrar()
{
  /*var importe;
  var importeFinal;
  var iva;

  importe = prompt("Ingrese el  importe del producto: ");

  importe = parseInt(importe);

  iva = importe * 0.21

  importeFinal = importe + iva;

  document.getElementById('importeFinal').value = importeFinal;	 
*/


	var descuento;
	var importe;
	var subtotal;
	var importeFinal;
	
	descuento = prompt("Ingrese el descuento a aplicar sobre el producto: ");
	descuento = parseInt(descuento);

	importe = prompt("Ingrese el importe del producto: ");
	importe = parseInt(importe);

	subtotal = (importe * descuento) /100

	importeFinal = importe - (subtotal)

	document.getElementById('importeFinal').value = importeFinal;	 	

}


