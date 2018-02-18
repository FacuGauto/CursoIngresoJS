function Mostrar()
{
	var mes;

	mes = prompt("Ingrese un mes","Enero");

	switch(mes)
	{
		case "Enero":
			alert("Comienza el año");
			break;
		case "Diciembre":
			alert("Se vienen las fiestas");
			break;
		default:
			alert("No es Enero ni Diciembre");
	}
}
