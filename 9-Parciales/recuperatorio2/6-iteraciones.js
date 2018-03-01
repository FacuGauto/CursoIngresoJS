//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 6-iteraciones");
	
	var importeDiario;
	var mayorImporte;
	var menorImporte;

	for (var i = 1; i < 8; i++) {
	
		importeDiario = prompt("Ingrese el importe del dia " + i + ": ");
		importeDiario = parseInt(importeDiario);

		while(isNaN(importeDiario) || importeDiario <= 0)
		{
			importeDiario = prompt("Ingrese el importe del dia " + i + ": ");
			importeDiario = parseInt(importeDiario);
		}

		if (i == 1) 
		{
			mayorImporte = importeDiario;
			menorImporte = importeDiario;
		}
		else
		{
			if (mayorImporte < importeDiario) 
			{
				mayorImporte = importeDiario;
			}
			if (menorImporte > importeDiario) 
			{
				menorImporte = importeDiario;
			}
		}

	}

	alert("El mayor importe de la semana es: " + mayorImporte  
		 + " y el menor importe de la semana es: " + menorImporte);
	
}

