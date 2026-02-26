function crearArrayFrutas() {
  const frutas = ['manzana', 'banana', 'naranja'];
  return frutas;
}

function crearArrayMixto() {
  const mixto = [1, 'texto', true, null, { tipo: 'objeto' }];
  return mixto;
}

function obtenerPrimerElemento(array) {
  return array[0];
}

function obtenerUltimoElemento(array) {
  return array[array.length - 1];
}

function agregarAlFinal(array, elemento) {
  array.push(elemento);
  return array;
}

function agregarAlInicio(array, elemento) {
  array.unshift(elemento);
  return array;
}

function insertarEnPosicion(array, posicion, elemento) {
  array.splice(posicion, 0, elemento);
  return array;
}

function reemplazarEnPosicion(array, posicion, nuevoElemento) {
  array.splice(posicion, 1, nuevoElemento);
  return array;
}

function eliminarUltimo(array) {
  array.pop();
  return array;
}

function eliminarPrimero(array) {
  array.shift();
  return array;
}

function eliminarEnPosicion(array, posicion) {
  array.splice(posicion, 1);
  return array;
}

function obtenerLongitud(array) {
  return array.length;
}

function esArray(valor) {
  return Array.isArray(valor);
}

function encontrarIndice(array, elemento) {
  return array.indexOf(elemento);
}

function crudCompleto() {
  let numeros = [1, 2, 3];
  numeros.unshift(0);
  numeros.push(4);
  numeros.splice(1, 1, 10);
  numeros.pop();
  numeros.splice(2, 1); // Eliminar el elemento 2 que quedó en la posición 2
  return numeros;
}

module.exports = {
  crearArrayFrutas,
  crearArrayMixto,
  obtenerPrimerElemento,
  obtenerUltimoElemento,
  agregarAlFinal,
  agregarAlInicio,
  insertarEnPosicion,
  reemplazarEnPosicion,
  eliminarUltimo,
  eliminarPrimero,
  eliminarEnPosicion,
  obtenerLongitud,
  esArray,
  encontrarIndice,
  crudCompleto,
};
