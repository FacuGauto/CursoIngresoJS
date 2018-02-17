function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
var mensajeMañana = "Es de mañana";
var mensajeTarde = "Es de tarde";
var mensajeNoche = "Es de noche";

switch(laHora)
{
	case "7":
		alert(mensajeMañana);
		break;
	case "8":
		alert(mensajeMañana);
		break;
	case "9":
		alert(mensajeMañana);
		break;
	case "10":
		alert(mensajeMañana);
		break;
	case "11":
		alert(mensajeMañana);
		break;
	case "12":
		alert(mensajeTarde);
		break;
	case "13":
		alert(mensajeTarde);
		break;
	case "14":
		alert(mensajeTarde);
		break;
	case "15":
		alert(mensajeTarde);
		break;
	case "16":
		alert(mensajeTarde);
		break;
	case "17":
		alert(mensajeTarde);
		break;
	case "18":
		alert(mensajeTarde);
		break;
	case "19":
		alert(mensajeTarde);
		break;
	case "20":
		alert(mensajeNoche);
		break;
	case "21":
		alert(mensajeNoche);
		break;
	case "22":
		alert(mensajeNoche);
		break;
	case "23":
		alert(mensajeNoche);
		break;
	case "24":
		alert(mensajeNoche);
		break;
	case "1":
		alert(mensajeNoche);
		break;
	case "2":
		alert(mensajeNoche);
		break;
	case "3":
		alert(mensajeNoche);
		break;
	case "4":
		alert(mensajeNoche);
		break;
	case "5":
		alert(mensajeNoche);
		break;
	case "6":
		alert(mensajeNoche);
		break;
	default:
		alert("La hora no existe");
}

}//FIN DE LA FUNCIÓN