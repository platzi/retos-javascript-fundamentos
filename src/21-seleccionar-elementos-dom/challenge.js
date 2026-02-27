// ============================================
// Reto: Seleccionar elementos del DOM con JavaScript
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/21-seleccionar-elementos-dom
// ============================================

// --- Reto 1: Seleccionar elemento por ID ---
// Usa getElementById para seleccionar el elemento con id "titulo-principal"
// y retorna su contenido de texto (textContent).
function obtenerTextoPorId() {
  // Tu código aquí
}

// --- Reto 2: Seleccionar elemento por clase con querySelector ---
// Usa querySelector para seleccionar el primer elemento con clase "producto"
// y retorna su contenido HTML (innerHTML).
function obtenerHTMLPorClase() {
  // Tu código aquí
}

// --- Reto 3: Seleccionar todos los elementos por etiqueta ---
// Usa getElementsByTagName para seleccionar todos los elementos <button>
// y retorna la cantidad de elementos encontrados.
function contarBotones() {
  // Tu código aquí
}

// --- Reto 4: Seleccionar múltiples elementos por clase ---
// Usa querySelectorAll para seleccionar todos los elementos con clase "nav-link"
// y retorna un array con los textContent de cada elemento.
function obtenerTextosNavegacion() {
  // Tu código aquí
}

// --- Reto 5: Seleccionar elementos por clase clásica ---
// Usa getElementsByClassName para seleccionar todos los elementos con clase "producto"
// y retorna la cantidad de elementos encontrados.
function contarProductosClase() {
  // Tu código aquí
}

// --- Reto 6: Selector combinado ---
// Usa querySelector para seleccionar el primer elemento que tenga
// clase "producto" y sea descendiente de un elemento con clase "destacados"
// y retorna su atributo id si existe, o null si no tiene.
function obtenerIdProductoDestacado() {
  // Tu código aquí
}

// --- Reto 7: Selector de atributo ---
// Usa querySelectorAll para seleccionar todos los elementos que tengan
// el atributo "data-categoria" y retorna un array con los valores de dicho atributo.
function obtenerCategoriasPorAtributo() {
  // Tu código aquí
}

// --- Reto 8: Selector de pseudo-clase ---
// Usa querySelectorAll para seleccionar el primer elemento <li> de cada lista <ul>
// usando la pseudo-clase :first-child y retorna un array con sus textos.
function obtenerPrimerosElementosLista() {
  // Tu código aquí
}

// --- Reto 9: Selector jerárquico ---
// Usa querySelector para seleccionar el elemento <h1> dentro del <header>
// y retorna su texto. Si no existe, retorna "No encontrado".
function obtenerTituloHeader() {
  // Tu código aquí
}

// --- Reto 10: Selector múltiple ---
// Usa querySelectorAll para seleccionar todos los elementos que sean
// <h2>, <h3> o tengan clase "subtitulo" y retorna la cantidad total.
function contarTitulosYSubtitulos() {
  // Tu código aquí
}

module.exports = {
  obtenerTextoPorId,
  obtenerHTMLPorClase,
  contarBotones,
  obtenerTextosNavegacion,
  contarProductosClase,
  obtenerIdProductoDestacado,
  obtenerCategoriasPorAtributo,
  obtenerPrimerosElementosLista,
  obtenerTituloHeader,
  contarTitulosYSubtitulos,
};
