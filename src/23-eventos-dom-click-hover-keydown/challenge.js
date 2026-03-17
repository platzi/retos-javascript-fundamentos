// ============================================
//  Reto 23: Eventos del DOM - click, hover y keydown
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/23-eventos-dom-click-hover-keydown
// ============================================

// --- Reto 1: Crear Estado Inicial
// Retorna objeto → {likes: 0, isHovering: false}
function crearEstadoInicial() {
  // tu codigo aquí
}

// --- Reto 2: Obtener Mensaje Estado
// Usa condicionales (if) y template literals para retornar:
// - "Aún no hay likes. Haz clic en me gusta" si likes === 0
// - "Tienes un like. Buen inicio" si likes === 1
// - "Tienes {likes} likes. Sigue así" si likes > 1
function obtenerMensajeEstado(state) {
  // tu codigo aquí
}

function renderizarEstado(state) {
  const status = document.querySelector(".status");
  const btnReset = document.querySelector(".btn-reset");
  const hoverZone = document.querySelector(".hover-zone");
  const hoverPill = document.querySelector(".hover-pill");
  const hoverTitle = document.querySelector(".hover-title");
  const hoverText = document.querySelector(".hover-text");

  if (status) status.textContent = obtenerMensajeEstado(state);

  if (btnReset) {
    btnReset.disabled = state.likes === 0;
    btnReset.style.opacity = state.likes === 0 ? 0.55 : 1;
  }

  if (hoverZone) {
    hoverZone.classList.toggle("is-hover", state.isHovering);
  }

  if (hoverPill) hoverPill.textContent = obtenerTextoHover(state.isHovering);
  if (hoverTitle) hoverTitle.textContent = obtenerTituloHover(state.isHovering);
  if (hoverText) {
    hoverText.textContent = state.isHovering
      ? "Este cambio se disparó por el mouse enter del DOM"
      : "Cuando entras, sales, cambias una clase y el texto";
  }
}

// --- Reto 4: Configurar Evento Like
// .btn-like → addEventListener('click', ...) → state.likes += 1 → renderizar
// Usa función anónima
function configurarEventoLike(state) {
  // tu codigo aquí
}

// --- Reto 5: Configurar Evento Reset
// .btn-reset → addEventListener('click', ...) → state.likes = 0 → renderizar
function configurarEventoReset(state) {
  // tu codigo aquí
}

// --- Reto 6: Configurar Eventos Hover
// .hover-zone → mouseenter: state.isHovering = true → renderizar
//              → mouseleave: state.isHovering = false → renderizar
function configurarEventosHover(state) {
  // tu codigo aquí
}

// --- Reto 7: Configurar Evento Teclado
// document → addEventListener('keydown', ...)
// Si event.key === 'l' o 'L' → state.likes += 1 → renderizar
// usa event.key.toLowerCase() !== 'l' return
function configurarEventoTeclado(state) {
  // tu codigo aquí
}

// --- Reto 8: Inicializar Aplicación
// 1. Crea estado inicial
// 2. Configura todos los eventos (Like, Reset, Hover, Teclado)
// 3. Renderiza estado
// 4. Retorna state
function inicializarAplicacion() {
  // tu codigo aquí
}

// --- Reto 9: Obtener Texto Hover
// Operador ternario: isHovering ? 'mouse dentro' : 'mouse fuera'
function obtenerTextoHover(isHovering) {
  // tu codigo aquí
}

// --- Reto 10: Obtener Titulo Hover
// Operador ternario: isHovering ? 'hover detectado' : 'pasa el mouse por aquí'
function obtenerTituloHover(isHovering) {
  // tu codigo aquí
}

module.exports = {
  crearEstadoInicial,
  obtenerMensajeEstado,
  renderizarEstado,
  configurarEventoLike,
  configurarEventoReset,
  configurarEventosHover,
  configurarEventoTeclado,
  inicializarAplicacion,
  obtenerTextoHover,
  obtenerTituloHover,
};
