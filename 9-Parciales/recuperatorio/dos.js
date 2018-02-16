function Mostrar()
{
  var importe;
  var importeFinal;
  var descuento;

  importe = prompt("Ingrese el importe del producto: ");

  descuento = importe * 0.25;

  importeFinal = importe - descuento;

  document.getElementById('importeFinal').value = importeFinal; 

}
