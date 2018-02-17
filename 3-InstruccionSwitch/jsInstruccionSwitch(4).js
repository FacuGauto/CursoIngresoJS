function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	var treintaDias = "Este mes tiene 30 dias";
	//alert (mesDelAño);
	
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		case "Abril":
			alert(treintaDias);
			break;
		case "Junio":
			alert(treintaDias);
			break;
		case "Septiembre":
			alert(treintaDias);
			break;
		case "Noviembre":
			alert(treintaDias);
			break;
		default:
			alert("Este mes tiene 31 dias");
	}	



}//FIN DE LA FUNCIÓN