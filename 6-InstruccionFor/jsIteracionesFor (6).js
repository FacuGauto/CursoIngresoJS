function Mostrar()
{
	var numero;
	var cantNumPares = 0;

	numero =prompt("Ingrese un numero:","0");
	numero = parseInt(numero);

	for (var i = 1; i <= numero; i++) 
	{
		if (i % 2 == 0)
		{
			console.log(i);
			cantNumPares ++;
		}
	}
	
	alert("Cantidad de numeros pares: " + cantNumPares);


}//FIN DE LA FUNCIÓN