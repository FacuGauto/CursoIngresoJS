/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precioProductoUno;
var precioProductoDos;
var precioProductoTres;


function Sumar () 
{
	precioProductoUno = parseInt(document.getElementById('PrecioUno').value);
	precioProductoDos = parseInt(document.getElementById('PrecioDos').value);
	precioProductoTres = parseInt(document.getElementById('PrecioTres').value);
	
	var suma;
	suma = precioProductoUno + precioProductoDos + precioProductoTres;
	alert("La suma de los produtos es: " + suma);
}
function Promedio () 
{
	precioProductoUno = parseInt(document.getElementById('PrecioUno').value);
	precioProductoDos = parseInt(document.getElementById('PrecioDos').value);
	precioProductoTres = parseInt(document.getElementById('PrecioTres').value);
	
	var promedio;
	promedio = (precioProductoUno + precioProductoDos + precioProductoTres)/3
	alert("El promedio de los productos es: " + promedio);
}
function PrecioFinal () 
{
	precioProductoUno = parseInt(document.getElementById('PrecioUno').value);
	precioProductoDos = parseInt(document.getElementById('PrecioDos').value);
	precioProductoTres = parseInt(document.getElementById('PrecioTres').value);
	
	var iva;
	var precioFinal;
	var subtotal;

	subtotal = precioProductoUno + precioProductoDos + precioProductoTres;

	iva = subtotal * 0.21;

	precioFinal = subtotal + iva;

	alert("El precio final con iva incluido es: " + precioFinal);

}