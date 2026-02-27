// ============================================
// Reto: LocalStorage con JSON.stringify y JSON.parse
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/25-localstorage-json
// ============================================

// --- Reto 1: Definir clave de almacenamiento ---
// Declara una constante llamada STORAGE_KEY con el valor 'markdown-notes'
// y retórnala.
function obtenerStorageKey() {
  // Tu código aquí
}

// --- Reto 2: Guardar datos en localStorage ---
// Crea una función que guarde notas en localStorage.
// Debe validar que el parámetro no sea undefined o null.
// Usa JSON.stringify para serializar los datos.
// Usa localStorage.setItem con la clave global.
function guardarNotas(notes) {
  // Tu código aquí
}

// --- Reto 3: Cargar datos desde localStorage ---
// Crea una función que cargue notas desde localStorage.
// Si no hay datos, retorna un array vacío.
// Usa JSON.parse para convertir los datos.
// Verifica que el resultado sea un array con Array.isArray.
function cargarNotas() {
  // Tu código aquí
}

// --- Reto 4: Validar datos antes de guardar ---
// Crea una función que valide si los datos son un array antes de guardar.
// Si no es un array, muestra un error con console.error y retorna false.
// Si es válido, llama a guardarNotas y retorna true.
function validarYGuardar(notes) {
  // Tu código aquí
}

// --- Reto 5: Limpiar localStorage ---
// Crea una función que elimine todos los datos del localStorage
// usando localStorage.removeItem con la clave global.
function limpiarStorage() {
  // Tu código aquí
}

// --- Reto 6: Verificar si existen datos ---
// Crea una función que verifique si existen datos en localStorage.
// Retorna true si hay datos, false si no hay datos o es null.
function existenDatos() {
  // Tu código aquí
}

// --- Reto 7: Obtener cantidad de notas ---
// Carga las notas desde localStorage y retorna la cantidad.
// Si no hay notas, retorna 0.
function obtenerCantidadNotas() {
  // Tu código aquí
}

module.exports = {
  obtenerStorageKey,
  guardarNotas,
  cargarNotas,
  validarYGuardar,
  limpiarStorage,
  existenDatos,
  obtenerCantidadNotas,
};
