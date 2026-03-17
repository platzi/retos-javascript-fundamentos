// ============================================
//  Reto 16: Arrays en JavaScript
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con:
// npx vitest src/16-arrays-javascript
// ============================================

// --- Reto 1: Crear Array de Frutas
// crea un array frutas con valores: manzana, banana y naranja
// retorna el array
function crearArrayFrutas() {
  // tu codigo aquí
}

// --- Reto 2: Crear Array Mixto
// Retorna un array con 1,'texto', true, null y {tipo: 'objeto'}
function crearArrayMixto() {
  // tu codigo aquí
}

// --- Reto 3: Obtener Primer Elemento
// recibe array y retorna el primer elemento
function obtenerPrimerElemento(array) {
  // tu codigo aquí
}

// --- Reto 4: Obtener Último Elemento
// recibe array retorna el último elemento
// pista: .length
function obtenerUltimoElemento(array) {
  // tu codigo aquí
}

// --- Reto 5: Agregar al Final
// recibe array y elemento
// agrega elemento al array en la posicion final y retorna array
function agregarAlFinal(array, elemento) {
  // tu codigo aquí
}

// --- Reto 6: Agregar al Inicio
// recibe array y elemento
// agrega elemento al inicio del array y retorna array
function agregarAlInicio(array, elemento) {
  // tu codigo aquí
}

// --- Reto 7: Insertar en Posición
// recibe array, posicion, elemento
// inserta elemento con base a posición sin eliminar en el array
// pista: .splice()
// retorna el array
function insertarEnPosicion(array, posicion, elemento) {
  // tu codigo aquí
}

// --- Reto 8: Reemplazar en Posición
// recibe array, posicion, nuevoElemento
// (posicion, 1, nuevoElemento) → reemplaza y retorna el array
function reemplazarEnPosicion(array, posicion, nuevoElemento) {
  // tu codigo aquí
}

// --- Reto 9: Eliminar Último elemento
// recibe array y elimina el ultimo elemento y retorna el array
function eliminarUltimo(array) {
  // tu codigo aquí
}

// --- Reto 10: Eliminar Primero
// recibe array y elimina el primer elemento y retorna el array
function eliminarPrimero(array) {
  // tu codigo aquí
}

// --- Reto 11: Eliminar en Posición
// recibe array y posicion
// elimina un elemento con base a posicion
function eliminarEnPosicion(array, posicion) {
  // tu codigo aquí
}

// --- Reto 12: Obtener Longitud
// recibe array y retorna la longitud del array
function obtenerLongitud(array) {
  // tu codigo aquí
}

// --- Reto 13: Verificar si es Array
// recibe valor y verifica si es un array
// retorna true o false
function esArray(valor) {
  // tu codigo aquí
}

// --- Reto 14: Encontrar Índice
// recibe array y elemento, array contiene [contenido] y elemento (numero)
// retorna el el array con el elemento buscando el indice recibido por elemento
// pista: .indexOf
function encontrarIndice(array, elemento) {
  // tu codigo aquí
}

// --- Reto 15: CRUD (Create, Read, Delete y Update)
// declara un array con valores : [1,2,3]
// cre las siguientes Operaciones:
// unshift(0),
// push(4),
// splice(1,1,10),
// pop(),
// splice(2,1)
// retorna el array
// Resultado → solo  debe realizar todas las operaciones CRUD correctamente
function crudCompleto() {
  // tu codigo aquí
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
