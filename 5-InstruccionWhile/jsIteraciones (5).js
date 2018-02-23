function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while(sexo != "m" && sexo != "f")
	{
		sexo = prompt("ingrese f ó m .");
	}

	if (sexo == "m") 
	{
		document.getElementById('Sexo').value="Masculino";
	}
	else
	{
		document.getElementById('Sexo').value="Femenino";	
	}

	

}//FIN DE LA FUNCIÓN