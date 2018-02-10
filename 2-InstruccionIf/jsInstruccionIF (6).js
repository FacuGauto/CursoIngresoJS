function Mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById('edad').value;

edad = parseInt(edad);

if (edad >= 18) {
	alert("Usted es mayor de edad");
}else if(edad < 13){
	alert("Usted es un niño");
}else{
	alert("Usted es adolescente");
}



}//FIN DE LA FUNCIÓN