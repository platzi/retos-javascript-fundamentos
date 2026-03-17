// ============================================
//  Reto 22: Renderizado Dinámico de Opiniones
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/22-renderizado-dinamico-opiniones
// ============================================

// --- Reto 1: Crear Elemento Opinión
// Crea estructura: <article><header><div>nombre rating</div><small>fecha</small></header><p>comentario</p></article>
// Usa: createElement, textContent, appendChild
function crearElementoOpinion(opinion) {
  // tu codigo aquí
}

// --- Reto 2: Crear Elemento Opinión con Estilos
// Igual que Reto 1 pero agrega clases y dataset.id
// Usa: classList.add, dataset.id
function crearElementoOpinionConEstilos(opinion) {
  // tu codigo aquí
}

// --- Reto 3: Renderizar Opiniones
// Limpia #opiniones y agrega elementos de la lista
// Usa: querySelector, replaceChildren, appendChild, forEach
function renderizarOpiniones(lista) {
  // tu codigo aquí
}

// --- Reto 4: Crear Imagen con Atributos
// Crea <img> con src, alt, className
// datosImagen = {src, alt, class}
function crearImagenConAtributos(datosImagen) {
  // tu codigo aquí
}

// --- Reto 5: Construir Tarjeta Opinión
// Estructura semántica: <article><header><h3>nombre</h3><span>rating</span></header>
//                       <section><p>comentario</p></section><footer><small>fecha</small></footer></article>
// Usa: classList.add para todas las clases
function construirTarjetaOpinion(opinion) {
  // tu codigo aquí
}

// --- Reto 6: Renderizar Opiniones Filtradas
// Filtra opiniones con rating >= 4 y renderiza en #opiniones
// Usa: filter, renderizarOpiniones
function renderizarOpinionesFiltradas(lista) {
  // tu codigo aquí
}

// --- Reto 7: Crear Opinión con Template
// Usa innerHTML con template literals
// Estructura: <article class="opinion" data-id={id}><header>...</header><p>comentario</p></article>
function crearOpinionConTemplate(opinion) {
  // tu codigo aquí
}

// --- Reto 8: Renderizar Opiniones Seguro
// Renderiza en #opiniones con manejo de errores
// Usa: try-catch, querySelector, console.error
function renderizarOpinionesSeguro(lista) {
  // tu codigo aquí
}

// --- Reto 9: Agregar Opinión al Inicio
// Inserta opinión al inicio de #opiniones
// Usa: prepend en lugar de appendChild
function agregarOpinionAlInicio(opinion) {
  // tu codigo aquí
}

// --- Reto 10: Renderizar Opiniones Optimizado
// Renderiza usando DocumentFragment para mejor rendimiento
// Usa: createElement, createDocumentFragment, appendChild
function renderizarOpinionesOptimizado(lista) {
  // tu codigo aquí
}

module.exports = {
  crearElementoOpinion,
  crearElementoOpinionConEstilos,
  renderizarOpiniones,
  crearImagenConAtributos,
  construirTarjetaOpinion,
  renderizarOpinionesFiltradas,
  crearOpinionConTemplate,
  renderizarOpinionesSeguro,
  agregarOpinionAlInicio,
  renderizarOpinionesOptimizado,
};
