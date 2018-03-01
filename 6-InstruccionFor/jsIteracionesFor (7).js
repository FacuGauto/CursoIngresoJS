function Mostrar()
{

	var numero;
	var cantDivisores = 0;

	numero = prompt("Ingrese un numero: ");
	numero = parseInt(numero);

	for (var i = 1; i <= numero; i++) 
	{
		if ((numero % i) == 0)
		{
			console.log(i);
			cantDivisores ++;
		} 	
	}
	console.log("La cantidad de numeros divisores es: " + cantDivisores);

}//FIN DE LA FUNCIÓN