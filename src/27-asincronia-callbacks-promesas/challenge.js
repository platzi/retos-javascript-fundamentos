// Reto 27: Asincronía en JavaScript - callbacks y promesas

/**
 * Ejercicio 1: setTimeout básico
 * Usa setTimeout para mostrar un mensaje después de 2 segundos
 * Debe retornar "mensaje retrasado" después del tiempo especificado
 */
function mensajeRetrasado(callback) {
  // Tu código aquí
}

/**
 * Ejercicio 2: Callback simple
 * Simula obtener datos de una API usando un callback
 * Después de 1.5 segundos, llama al callback con el string "datos recibidos"
 */
function obtenerDatos(callback) {
  // Tu código aquí
}

/**
 * Ejercicio 3: Callback con error
 * Simula una operación que puede fallar
 * Si el parámetro exito es true, llama al callback con "operación exitosa"
 * Si es false, llama al callback con null y el error "falló la operación"
 */
function operacionConError(exito, callback) {
  // Tu código aquí
}

/**
 * Ejercicio 4: Callback hell simple
 * Encadena 3 operaciones con callbacks:
 * 1. obtenerUsuario → callback con {id: 1, nombre: "Ana"}
 * 2. obtenerNotasPorUsuario → callback con ["nota1", "nota2"]
 * 3. procesarNotas → callback con "NOTAS PROCESADAS"
 */
function obtenerInfoCompleta(callback) {
  // Tu código aquí
}

/**
 * Ejercicio 5: Promesa básica
 * Crea una promesa que se resuelve después de 1 segundo con "promesa cumplida"
 */
function promesaBasica() {
  // Tu código aquí
}

/**
 * Ejercicio 6: Promesa con reject
 * Crea una promesa que se resuelve o rechaza según el parámetro exito
 * Si exito es true, resuelve con "éxito"
 * Si es false, rechaza con new Error("error en la operación")
 */
function promesaConError(exito) {
  // Tu código aquí
}

/**
 * Ejercicio 7: Encadenar promesas
 * Usa then para encadenar dos operaciones:
 * Primera promesa resuelve con un número, segunda promesa duplica ese número
 */
function encadenarPromesas() {
  // Tu código aquí
}

/**
 * Ejercicio 8: Promesa con setTimeout
 * Combina promesa con setTimeout para simular una llamada a API
 * Después de 2 segundos resuelve con {data: "respuesta api"}
 */
function simularApiCall() {
  // Tu código aquí
}

/**
 * Ejercicio 9: Múltiples promesas
 * Usa Promise.all para ejecutar 3 promesas en paralelo
 * Cada promesa resuelve con un string diferente
 */
function multiplesPromesas() {
  // Tu código aquí
}

/**
 * Ejercicio 10: Convertir callback a promesa
 * Convierte una función que usa callback a una que retorna una promesa
 */
function callbackAPromesa(valor, callback) {
  setTimeout(() => {
    callback(valor * 2);
  }, 500);
}

function convertirCallbackAPromesa(valor) {
  // Tu código aquí - usa callbackAPromesa pero retorna una promesa
}

module.exports = {
  mensajeRetrasado,
  obtenerDatos,
  operacionConError,
  obtenerInfoCompleta,
  promesaBasica,
  promesaConError,
  encadenarPromesas,
  simularApiCall,
  multiplesPromesas,
  convertirCallbackAPromesa
};
