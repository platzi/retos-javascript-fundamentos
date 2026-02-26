function extraerDatosBasicos(persona) {
  const { nombre, edad } = persona;
  return [nombre, edad];
}

function extraerNotaRenombrada(nota) {
  const { title: titulo, content: contenido } = nota;
  return { titulo, contenido };
}

function extraerCiudadAnidada(usuario) {
  const { direccion: { ciudad } } = usuario;
  return ciudad;
}

function copiarProducto(producto) {
  return { ...producto };
}

function combinarObjetos(objetoA, objetoB) {
  return { ...objetoA, ...objetoB };
}

function agregarPropiedadesUsuario(usuario) {
  return { ...usuario, activo: true, rol: 'admin' };
}

function obtenerClaves(objeto) {
  return Object.keys(objeto);
}

function obtenerValores(objeto) {
  return Object.values(objeto);
}

function obtenerEntradas(objeto) {
  return Object.entries(objeto);
}

function objetoAStringArray(objeto) {
  return Object.entries(objeto).map(([clave, valor]) => `${clave}: ${valor}`);
}

module.exports = {
  extraerDatosBasicos,
  extraerNotaRenombrada,
  extraerCiudadAnidada,
  copiarProducto,
  combinarObjetos,
  agregarPropiedadesUsuario,
  obtenerClaves,
  obtenerValores,
  obtenerEntradas,
  objetoAStringArray,
};
