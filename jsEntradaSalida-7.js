/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
/*
var numeroUno;
var numeroDos;
var resultado;

numeroUno = parseInt(document.getElementById('numeroUno').value);
numeroDos = parseInt(document.getElementById('numeroDos').value);
*/ 

function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	resultado = numeroUno + numeroDos;


	alert("Resultado: " + resultado);

}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	resultado = numeroUno - numeroDos;


	alert("Resultado: " + resultado);

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	resultado = numeroUno * numeroDos;


	alert("Resultado: " + resultado);

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	resultado = numeroUno * numeroDos;


	alert("Resultado: " + resultado);	
}

