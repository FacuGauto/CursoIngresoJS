/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	
	var importeConDescuento;

	importe = document.getElementById('importe').value;
	
	importe = parseInt(importe);

	importeConDescuento = importe - (importe * 0.25);

	document.getElementById('resultado').value = importeConDescuento;

	
}
