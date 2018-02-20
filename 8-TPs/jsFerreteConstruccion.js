/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var	largo;
var ancho;
var radio;

function Rectangulo () 
{
	largo = parseInt(document.getElementById('Largo').value);
	ancho = parseInt(document.getElementById('Ancho').value);

	resultado = ((largo * 2) + (ancho * 2))*3;
	alert("Cantidad de almabre a comprar: " + resultado);
}
function Circulo () 
{
	radio = parseInt(document.getElementById('Radio').value);
	resultado = (2 * 3.14 * radio)*3;
	alert("Cantidad de alambre a comprar: " + resultado);
}
function Materiales () 
{
	var area;
	var bolsasDeCemento;
	var bolsasDeCal;

	largo = parseInt(document.getElementById('Largo').value);
	ancho = parseInt(document.getElementById('Ancho').value);

	area = largo * ancho;

	bolsasDeCemento = area * 2;
	bolsasDeCal = area * 3;

	alert("Se necesitan " + bolsasDeCemento + " bolsas de cemento y " + bolsasDeCal + " bolsas de cal.");
	
}