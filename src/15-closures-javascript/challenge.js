// ============================================
// Reto 15 — Closures en JavaScript (Estado Privado)
// ============================================
// En estos ejercicios practicarás closures en JavaScript.
// Un closure permite que una función recuerde variables
// definidas dentro de ella incluso después de ejecutarse.
// La idea es crear variables privadas que solo puedan
// modificarse mediante métodos.

// Ejecuta los tests con:
// npx vitest src/15-closures-javascript
// ============================================

// ============================================
// Nivel 1 — Básico
// ============================================

// --- Reto 1: Contador Privado ---
// Dentro de la función declara una variable privada:
// let contador = 0;
// La función debe retornar un objeto con los métodos:
// incrementar()
// - aumenta el contador en 1
// - retorna el nuevo valor
// decrementar()
// - resta 1 al contador
// - retorna el nuevo valor
// obtenerValor()
// - retorna el valor actual del contador
// Pista:
// Las funciones deben poder acceder a la variable contador
// gracias al closure.
function crearContador() {
  // tu codigo aquí
}

// --- Reto 2: Acumulador ---
// Declara una variable privada:
// let total = 0;
// Retorna un objeto con:
// sumar(valor)
// - suma valor al total
// - retorna el nuevo total
// total()
// - retorna el valor acumulado
// Ejemplo:
// const acumulador = crearAcumulador()
// acumulador.total()   // 0
// acumulador.sumar(10) // 10
// acumulador.sumar(5)  // 15
function crearAcumulador() {
  // tu codigo aquí
}

// ============================================
// Nivel 2 — Intermedio
// ============================================

// --- Reto 3: Cuenta Bancaria ---
// Declara una variable privada:
// let saldo = saldoInicial;
// Retorna un objeto con los métodos:
// depositar(cantidad)
// - suma la cantidad al saldo
// - retorna:
//   "Depositado $cantidad. Saldo actual: $saldo."
// retirar(cantidad)
// - si la cantidad es mayor al saldo retorna:
//   "Fondos insuficientes."
// - si hay fondos suficientes:
//   resta la cantidad y retorna:
//   "Retirado $cantidad. Saldo actual: $saldo."
// consultarSaldo()
// - retorna:
//   "Saldo: $saldo."

function crearCuentaBancaria(saldoInicial) {
  // tu codigo aquí
}

// --- Reto 4: Cache Simple ---
// Declara un objeto privado:
// let datos = {};
// Retorna un objeto con:
// guardar(clave, valor)
// - guarda el valor usando:
//   datos[clave] = valor
// - retorna:
//   "Valor guardado en clave: clave"
// obtener(clave)
// - retorna el valor asociado a la clave
// existe(clave)
// - retorna true o false dependiendo si la clave existe
// - Pista: usa - in -
// limpiar()
// - elimina todos los datos del cache
function crearCache() {
  // tu codigo aquí
}

// ============================================
// Nivel 3 — Intermedio / Avanzado
// ============================================

// --- Reto 5: Carrito de Compras ---
// Declara un arreglo privado:
// let productos = [];
// Cada producto debe guardarse como un objeto:
// { producto, precio }
// Retorna un objeto con:
// agregar(producto, precio)
// - agrega el producto al carrito
// - retorna:
//   "Producto X agregado al carrito."
// remover(producto)
// - elimina el producto del carrito
// - pista: usa filter()
// - retorna:
//   "Producto X removido del carrito."
// total()
// - calcula y retorna el total de todos los precios
// - pista:usa  reduce()
// vaciar()
// - elimina todos los productos
// - retorna:
//   "Carrito vaciado."
function crearCarrito() {
  // tu codigo aquí
}

// ============================================
// Nivel 4 — Avanzado
// ============================================

// --- Reto 6: Temporizador con Estado ---
// Declara variables privadas:
// let segundos = 0
// let intervalo = null
// let corriendo = false
// Retorna un objeto con:
// iniciar()
//   si el temporizador no está corriendo:
// - usa setInterval para incrementar segundos
// detener()
//   si el temporizador está corriendo:
// - detiene el temporizador usando clearInterval()
// reiniciar()
// - reinicia segundos a 0
// - retorna: 'Temporizador reiniciado.';
// obtenerTiempo()
// - retorna los segundos actuales
function crearTemporizador() {
  // tu codigo aquí
}

// ============================================
// Nivel 5 — Avanzado
// ============================================

// --- Reto 7: Gestor de Tareas ---
// Declara variables privadas:
// let tareas = []
// let idCounter = 1
// Cada tarea debe tener esta estructura:
// {
//   id,
//   tarea,
//   completada
// }
// Retorna un objeto con:
// agregarTarea(tarea)
// - crea una nueva tarea
// - completada inicia en false
// - el ID se incrementa automáticamente
//  retorna: `Tarea "${}" agregada con ID ${}.`
// completarTarea(id)
// - busca la tarea por ID
// - pista: usa .find()
// - cambia completada a true
// obtenerTareas()
// - retorna todas las tareas
// tareasPendientes()
// - retorna solo las tareas no completadas
//  pista: usa .filter()

function crearGestorTareas() {
  // tu codigo aquí
}

// ============================================
// Nivel 6 — Desafío Final
// ============================================

// --- Reto 8: Banco con Múltiples Cuentas ---
// Declara variables privadas:
// let cuentas = {}
// let idCounter = 1
// Cada cuenta debe crearse usando:
// crearCuentaBancaria()
// Métodos:
// crearCuenta(saldoInicial)
// - crea una nueva cuenta bancaria
// - la guarda en el objeto cuentas
// - incrementa el ID automáticamente
// obtenerCuenta(id)
// - retorna la cuenta con ese ID
// - si no existe retorna null
// eliminarCuenta(id)
// - elimina la cuenta
// - retorna:
//   "Cuenta ${id} eliminada."
function crearBanco() {
  // tu codigo aquí
}

module.exports = {
  crearContador,
  crearAcumulador,
  crearCuentaBancaria,
  crearCache,
  crearCarrito,
  crearTemporizador,
  crearGestorTareas,
  crearBanco,
};
