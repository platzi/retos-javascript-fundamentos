// Reto 29: Async/await vs promesas en JavaScript

/**
 * Ejercicio 1: Función utilidad esperar
 * Crea una función que retorna una promesa que se resuelve después de ms milisegundos
 * Debe usar setTimeout y new Promise
 */
function esperar(ms) {
  // Tu código aquí
}

/**
 * Ejercicio 2: Función asíncrona básica
 * Crea una función async que usa esperar para simular una operación
 * Después de 100ms debe retornar { id: 1, nombre: "Usuario" }
 */
async function obtenerUsuario() {
  // Tu código aquí
}

/**
 * Ejercicio 3: Async con parámetro
 * Crea una función async que recibe un usuarioId
 * Usa esperar(150) y retorna { usuarioId, notas: [10, 9, 8] }
 */
async function obtenerNotas(usuarioId) {
  // Tu código aquí
}

/**
 * Ejercicio 4: Procesamiento con async
 * Crea función async que recibe un objeto con notas
 * Usa esperar(100) y retorna el promedio de las notas
 */
async function procesarNotas(data) {
  // Tu código aquí
}

/**
 * Ejercicio 5: Orquestación con async/await
 * Combina las funciones anteriores en orden:
 * obtenerUsuario → obtenerNotas → procesarNotas
 * Usa try/catch para manejar errores
 */
async function obtenerPromedioUsuario() {
  // Tu código aquí
}

/**
 * Ejercicio 6: Promesa con then/catch
 * Implementa el mismo flujo anterior pero con then/catch
 * Sin usar async/await, solo promesas encadenadas
 */
function obtenerPromedioConPromesas() {
  // Tu código aquí
}

/**
 * Ejercicio 7: Manejo de errores con async
 * Crea función async que lanza un error si el usuarioId es 0
 * Usa throw new Error("Usuario no válido")
 */
async function validarUsuario(usuarioId) {
  // Tu código aquí
}

/**
 * Ejercicio 8: Múltiples awaits en paralelo
 * Usa Promise.all con await para ejecutar múltiples operaciones
 * Debe ejecutar 3 funciones que retornan promesas en paralelo
 */
async function operacionesParalelas() {
  // Tu código aquí
}

/**
 * Ejercicio 9: Conversión de callback a async
 * Convierte una función callback a async/await
 */
function callbackAsincrono(valor, callback) {
  setTimeout(() => {
    callback(valor * 3);
  }, 200);
}

async function convertirCallbackAsync(valor) {
  // Tu código aquí - usa callbackAsincrono pero con async/await
}

/**
 * Ejercicio 10: Encadenamiento mixto
 * Combina async/await con then/catch en el mismo flujo
 * Demuestra que ambos enfoques pueden coexistir
 */
async function flujoMixto() {
  // Tu código aquí - usa await y then juntos
}

module.exports = {
  esperar,
  obtenerUsuario,
  obtenerNotas,
  procesarNotas,
  obtenerPromedioUsuario,
  obtenerPromedioConPromesas,
  validarUsuario,
  operacionesParalelas,
  convertirCallbackAsync,
  flujoMixto
};
