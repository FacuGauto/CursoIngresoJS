function Mostrar()
{
  var importe;
  var importeFinal;
  var iva;

  importe = prompt("Ingrese el  importe del producto: ");

  importe = parseInt(importe);

  iva = importe * 0.21

  importeFinal = importe + iva;

  document.getElementById('importeFinal').value = importeFinal;	 


}
