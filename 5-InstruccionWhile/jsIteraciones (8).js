function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

	while(respuesta == "si")
	{
		
		numero = prompt("Ingrese un numero:","1");
		numero = parseInt(numero);
		if(numero > 0)
		{
			positivo = positivo + numero;
		}
		else
		{
			if (numero < 0) 
			{
				negativo = negativo * numero;
			}
			else
			{}
		}


		respuesta = prompt("Desea seguir ingresando numeros:", "si");
	}

	if (negativo == 1)
	{
		negativo = "No ingreso numeros negativos";
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN