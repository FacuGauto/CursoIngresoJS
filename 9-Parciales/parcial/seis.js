function Mostrar()
{
	var importe;
	var dia = 1;
	var mayorImporte;
	var diaMayor;
	var menorImporte;
	var diaMenor;
	
	while(dia < 25)
	{
		importe = prompt("Ingrese el importe final del dia " + dia + ": ");
		importe = parseInt(importe);

		while(isNaN(importe) || importe <= 0)
		{
			importe = prompt("Ingrese el importe final (mayor a cero) del dia " + dia + " : ");
			importe = parseInt(importe);
		}

		if (dia == 1) 
		{
			mayorImporte = importe;
			diaMayor = dia;
			menorImporte = importe;
			diaMenor = dia;
		}
		else
		{
			if (mayorImporte < importe) 
			{
				mayorImporte = importe;
				diaMayor = dia;
			}
			if (menorImporte > importe) 
			{
				menorImporte = importe;
				diaMenor = dia;
			}
		}

		dia ++;
	}
	console.log(mayorImporte);
	console.log(diaMayor);
	console.log(menorImporte);
	console.log(diaMenor);

	alert("El mayor importe fue: " + mayorImporte + ", el dia: " + diaMayor + " de este mes.");
	alert("El menor importe fue: " + menorImporte + ", el dia: " + diaMenor + " de este mes.");
	
}
