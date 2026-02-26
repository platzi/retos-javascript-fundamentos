function extraerTitulos(notas) {
  return notas.map(nota => nota.title);
}

function agregarFechaCreacion(notas) {
  return notas.map(nota => ({
    ...nota,
    fechaCreacion: Date.now()
  }));
}

function filtrarFavoritas(notas) {
  return notas.filter(nota => nota.esFavorita);
}

function buscarPorTitulo(notas, busqueda) {
  const terminoBusqueda = busqueda.toLowerCase();
  return notas.filter(nota =>
    nota.title.toLowerCase().includes(terminoBusqueda)
  );
}

function aplicarDescuento(productos, porcentajeDescuento) {
  return productos.map(producto => ({
    ...producto,
    precioFinal: producto.precio * (1 - porcentajeDescuento / 100)
  }));
}

function filtrarPorRango(productos, min, max) {
  return productos.filter(producto =>
    producto.precio >= min && producto.precio <= max
  );
}

module.exports = {
  extraerTitulos,
  agregarFechaCreacion,
  filtrarFavoritas,
  buscarPorTitulo,
  aplicarDescuento,
  filtrarPorRango,
};
