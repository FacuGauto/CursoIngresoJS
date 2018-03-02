
function Mostrar()
{
	var base;
	var altura;
	var perimetro;

	base = document.getElementById('laBase').value;
	altura = prompt("Ingrese la altura del triaungulo");

	base = parseInt(base);
	altura = parseInt(altura);

	perimetro = base * 3;
	superficie = (base * altura) / 2;


	alert("El perimetro del triangulo es: " + perimetro
		+ " y la superficie del triangulo es: " + superficie);

}


//Pedir base y altura de un triangulo equilatero informar perimtero y superficie