// ============================================
// Reto: Scope en JavaScript: global, función y bloque
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/14-scope-javascript
// ============================================

// --- Reto 1: Acceso a variable global ---
// Declara una variable global llamada "mensajeGlobal" con el valor "Hola mundo"
// y retórnala desde la función.
function accederGlobal() {
  // Tu código aquí
}

// --- Reto 2: Scope de función ---
// Dentro de la función, declara una variable local "secreto" con el valor "1234"
// y retorna un objeto que tenga acceso a la variable local.
function scopeFuncion() {
  // Tu código aquí
}

// --- Reto 3: Scope de bloque ---
// Dentro de un bloque if, declara una variable "mensajeBloque" con let
// y retorna su valor. La variable solo debe existir dentro del bloque.
function scopeBloque() {
  // Tu código aquí
  // Usa un if (true) para crear el bloque
}

// --- Reto 4: Acceso anidado de scopes ---
// Crea una variable global, una de función y una de bloque.
// Retorna un objeto con los tres valores para demostrar qué se puede acceder
// desde cada nivel.
function accesoAnidado() {
  // Tu código aquí
  // Variable global: globalValor = "global"
  // Variable de función: funcionValor = "funcion"
  // Variable de bloque: bloqueValor = "bloque"
}

// --- Reto 5: Error de scope ---
// Esta función debe intentar acceder a una variable declarada en un bloque
// desde fuera del bloque. Debes manejar el error usando try-catch
// y retornar un objeto con { error: true, mensaje: "Variable no accesible" }
function errorScope() {
  // Tu código aquí
  // Intenta acceder a una variable de bloque desde fuera
}

// --- Reto 6: Return vs console.log ---
// Crea una variable dentro de la función, haz console.log de ella,
// pero retorna un string diferente. Demuestra que console.log no afecta el return.
function returnVsConsole() {
  // Tu código aquí
  // Variable interna: valor = "interno"
  // console.log(valor)
  // return "retorno diferente"
}

// --- Reto 7: Hoisting con var ---
// Sin cambiar el orden de las líneas, usa var para demostrar hoisting.
// La función debe retornar un objeto con:
//   { antes: undefined, despues: "hoisting" }
function demostrarHoistingVar() {
  // Tu código aquí
  // Accede a la variable ANTES de declararla
  // Declara la variable con var después
  // Accede a la variable DESPUÉS de declararla
}

// --- Reto 8: Template literals y scope ---
// Usa template literals para construir un mensaje que incluya variables
// de diferentes scopes (global, función, bloque).
// Retorna el mensaje completo.
function templateLiteralsScope() {
  // Tu código aquí
  // Variable global: app = "MiApp"
  // Variable de función: usuario = "Ana"
  // Variable de bloque: rol = "admin"
  // Retorna: `Bienvenido ${usuario} con rol ${rol} en ${app}`
}

module.exports = {
  accederGlobal,
  scopeFuncion,
  scopeBloque,
  accesoAnidado,
  errorScope,
  returnVsConsole,
  demostrarHoistingVar,
  templateLiteralsScope,
};
