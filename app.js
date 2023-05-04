const productos = [
  { nombre: 'Bombay', precio: 9700, cantidad: 0, envioGratis: false},
  { nombre: 'Fernet', precio: 3000, cantidad: 0, envioGratis: true},
  { nombre: 'Smirnoff', precio: 4500, cantidad: 0, envioGratis: true }
];

// filtra los productos si tienen envio gratis o no
function filtrarProductos(envioGratis) {
    const productosFiltrados = productos.filter(producto => producto.envioGratis === envioGratis);
    return productosFiltrados;
  }
  
  // Filtra los productos que tienen envio gratis
  const productosConEnvioGratis = filtrarProductos(true);
  console.log(productosConEnvioGratis);
  
  function mostrarResultado(total) {
    let mensaje = `Compraste:\n`;
    const productosConEnvioGratis = productos.filter(producto => producto.envioGratis && producto.cantidad > 0);
    
    console.log("Productos con envío gratis:");
    console.log(productosConEnvioGratis);
    
    for (const producto of productos) {
      if (producto.cantidad > 0) {
        mensaje += `${producto.cantidad} ${producto.nombre}\n`;
      }
    }
    mensaje += `Total de su compra: $ ${total}`;
  
    console.log(mensaje);
    alert(mensaje);
  
    let medioDePago = 0;
  
    while (total != 0) {
      medioDePago = prompt(`
        Seleccione medio de pago:
        1 Transferencia 
        2 Efectivo
        3 *Sin interes* 3 Cuotas
        4 *40% interes 6 Cuotas*
        5 12 Cuotas`);
  
      if (medioDePago == 1 || medioDePago == 2 || medioDePago == 3 || medioDePago == 4) {
        switch (medioDePago) {
          case "1":
            if (total >= 50000) {
              total = (total * 0.90).toFixed(2);
              alert(`Con Efectivo obtenes un 10% DESC, debe abonar : $ ${total} ARS
              Gracias por su Compra!`);
            } else {
              alert(`Debe abonar : $ ${total} ARS.
              Gracias por su compra`);
            }
            break;
          case "2":
            if (total >= 50000) {
              total = (total * 0.90).toFixed(2);
              alert(`Con Transferencia obtenes un 10% DESC, debe abonar : $ ${total} ARS
               Gracias por su Compra!`);
            } else {
              alert(`Debe abonar : $ ${total} ARS.
               Gracias por su compra!`);
            }
            break;
          case "3":
            total = (total / 3).toFixed(2);
            alert(`Debe Abonar 3 cuotas de : $ ${total} ARS.
              Gracias por su compra!`);
            break;
          case "4":
            total = (total * 1.40).toFixed(2);
            let cuotas = (total / 6).toFixed(2);
            alert(`Debe Abonar 6 cuotas de : $ ${cuotas} ARS.
               El total de la compra es : $ ${total} ARS.
              Gracias por confiar en nosotros!`);
            break;
        }
        break;
      } else {
        alert("12 Cuotas se encuentra temporalmente deshabilitada ");
        continue;
      }
    }
  }
  

let total = 0;

while (true) {
    let mensaje = `Seleccionar bebidas:\n`;
  
    for (const [i, producto] of productos.entries()) {
      mensaje += `${i + 1} ${producto.nombre} - $${producto.precio}\n`;
    }
  
    mensaje += `buy Para finalizar compra`;
  
    const seleccion = prompt(mensaje);
  
    if (seleccion == "buy" || seleccion == "BUY") {
      mostrarResultado(total);
      break;
    }
  
    const productoSeleccionado = productos.find((producto) => 
      producto.nombre.toLowerCase() === seleccion.toLowerCase() || 
      (parseInt(seleccion) > 0 && parseInt(seleccion) <= productos.length && parseInt(seleccion) === productos.indexOf(producto) + 1));
  
    if (!productoSeleccionado) {
      alert("Producto inválido");
      continue;
    }
  
    const cantidad = parseInt(prompt(`Cantidad de ${productoSeleccionado.nombre} que desea comprar:`));
  
    if (isNaN(cantidad) || cantidad < 0) {
      alert("Cantidad inválida");
      continue;
    }
  
    productoSeleccionado.cantidad += cantidad;
    total += productoSeleccionado.precio * cantidad;
  }
  

while (true) {
    const cantidad = prompt(`Seleccionar cantidad de ${productoSeleccionado.nombre}:`);
    const cantidadNumerica = Number.parseInt(cantidad);
  
    if (Number.isNaN(cantidadNumerica)) {
      alert("Debe ingresar un número");
      continue;
    }
  
    productoSeleccionado.cantidad += cantidadNumerica;
    total += cantidadNumerica * productoSeleccionado.precio;
  
    const seguirComprando = confirm("Desea seguir comprando?");
  
    if (!seguirComprando) {
      mostrarResultado(total);
      break;
    }
  }