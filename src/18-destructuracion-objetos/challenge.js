// ============================================
// Reto: Destructuración de objetos en JavaScript
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/18-destructuracion-objetos
// ============================================

// --- Reto 1: Destructuración básica ---
// Usa destructuración para extraer las propiedades "nombre" y "edad"
// del objeto recibido y retórnalas como un array [nombre, edad].
function extraerDatosBasicos(persona) {
  // Tu código aquí
}

// --- Reto 2: Destructuración con renombrado ---
// Usa destructuración con renombrado para extraer "title" como "titulo"
// y "content" como "contenido" del objeto nota recibido.
// Retorna un objeto { titulo, contenido }.
function extraerNotaRenombrada(nota) {
  // Tu código aquí
}

// --- Reto 3: Destructuración anidada ---
// Usa destructuración para extraer directamente la propiedad "ciudad"
// del objeto anidado "direccion" dentro del objeto usuario.
// Retorna la ciudad.
function extraerCiudadAnidada(usuario) {
  // Tu código aquí
  // Tip: const { direccion: { ciudad } } = usuario;
}

// --- Reto 4: Copia con spread operator ---
// Crea y retorna una copia superficial del objeto producto recibido
// usando el spread operator (...).
function copiarProducto(producto) {
  // Tu código aquí
}

// --- Reto 5: Composición de objetos ---
// Crea un nuevo objeto que combine las propiedades de objetoA y objetoB.
// Las propiedades de objetoB deben sobrescribir las de objetoA si hay conflictos.
// Usa spread operator.
function combinarObjetos(objetoA, objetoB) {
  // Tu código aquí
}

// --- Reto 6: Añadir propiedades con spread ---
// Crea un nuevo objeto a partir del objeto usuario recibido,
// añadiendo las propiedades "activo: true" y "rol: 'admin'".
// No modifiques el objeto original.
function agregarPropiedadesUsuario(usuario) {
  // Tu código aquí
}

// --- Reto 7: Object.keys ---
// Retorna un array con todas las claves (keys) del objeto recibido
// usando Object.keys().
function obtenerClaves(objeto) {
  // Tu código aquí
}

// --- Reto 8: Object.values ---
// Retorna un array con todos los valores del objeto recibido
// usando Object.values().
function obtenerValores(objeto) {
  // Tu código aquí
}

// --- Reto 9: Object.entries ---
// Retorna un array con los pares [clave, valor] del objeto recibido
// usando Object.entries().
function obtenerEntradas(objeto) {
  // Tu código aquí
}

// --- Reto 10: Transformar objeto a array de strings ---
// Usa destructuración y Object.entries para transformar el objeto recibido
// en un array de strings con formato "clave: valor".
// Ejemplo: { a: 1, b: 2 } → ["a: 1", "b: 2"]
function objetoAStringArray(objeto) {
  // Tu código aquí
  // Tip: Usa Object.entries() y map()
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
