function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	alert (mesDelAño);

	switch(mesDelAño)
	{
		case "Julio":
			alert("abrigate que hace frio");
			break;
		case "Agosto":
			alert("abrigate que hace frio");
			break;
		case "Septiembre":
			alert("Ya pasamo el invierno, ahora calor");
			break;
		case "Octubre":
			alert("Ya pasamo el invierno, ahora calor");
			break;
		case "Noviembre":
			alert("Ya pasamo el invierno, ahora calor");
			break;
		case "Diciembre":
			alert("Ya pasamo el invierno, ahora calor");
			break;
		default:
			alert("Falta para el invierno");
	}


}//FIN DE LA FUNCIÓN