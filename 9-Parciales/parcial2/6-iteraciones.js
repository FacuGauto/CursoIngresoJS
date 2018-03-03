//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 6-iteraciones");

	var importe;
	var mayor;
	var menor;

	for (var i = 1; i <= 7; i++) 
	{
		importe = prompt("Ingreso " + i + " importe de la venta (mayor a cero):");
		importe = parseInt(importe);

		while(isNaN(importe) || importe <= 0 )
		{
			importe = prompt("Ingreso " + i + " importe de la venta (mayor a cero):");
			importe = parseInt(importe);
		}
		if (i == 1) 
		{
			mayor = importe;
			menor = importe;
		}
		else
		{
			if (mayor < importe) 
			{
				mayor = importe;
			}
			if (menor > importe) 
			{
				menor = importe;
			}
		}
	}
	
	alert("Mayor importe: " + mayor + ". Menor importe: " + menor);
}

