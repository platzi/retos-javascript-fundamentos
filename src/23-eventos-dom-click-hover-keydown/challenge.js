function crearEstadoInicial() {
  return {
    likes: 0,
    isHovering: false,
  };
}

function obtenerMensajeEstado(state) {
  if (state.likes === 0) return 'Aún no hay likes. Haz clic en me gusta';
  if (state.likes === 1) return 'Tienes un like. Buen inicio';
  return `Tienes ${state.likes} likes. Sigue así`;
}

function renderizarEstado(state) {
  const status = document.querySelector('.status');
  const btnReset = document.querySelector('.btn-reset');
  const hoverZone = document.querySelector('.hover-zone');
  const hoverPill = document.querySelector('.hover-pill');
  const hoverTitle = document.querySelector('.hover-title');
  const hoverText = document.querySelector('.hover-text');

  if (status) status.textContent = obtenerMensajeEstado(state);
  
  if (btnReset) {
    btnReset.disabled = state.likes === 0;
    btnReset.style.opacity = state.likes === 0 ? 0.55 : 1;
  }

  if (hoverZone) {
    hoverZone.classList.toggle('is-hover', state.isHovering);
  }

  if (hoverPill) hoverPill.textContent = obtenerTextoHover(state.isHovering);
  if (hoverTitle) hoverTitle.textContent = obtenerTituloHover(state.isHovering);
  if (hoverText) {
    hoverText.textContent = state.isHovering
      ? 'Este cambio se disparó por el mouse enter del DOM'
      : 'Cuando entras, sales, cambias una clase y el texto';
  }
}

function configurarEventoLike(state) {
  const btnLike = document.querySelector('.btn-like');
  if (btnLike) {
    btnLike.addEventListener('click', function () {
      state.likes += 1;
      renderizarEstado(state);
    });
  }
}

function configurarEventoReset(state) {
  const btnReset = document.querySelector('.btn-reset');
  if (btnReset) {
    btnReset.addEventListener('click', function () {
      state.likes = 0;
      renderizarEstado(state);
    });
  }
}

function configurarEventosHover(state) {
  const hoverZone = document.querySelector('.hover-zone');
  if (hoverZone) {
    hoverZone.addEventListener('mouseenter', function () {
      state.isHovering = true;
      renderizarEstado(state);
    });

    hoverZone.addEventListener('mouseleave', function () {
      state.isHovering = false;
      renderizarEstado(state);
    });
  }
}

function configurarEventoTeclado(state) {
  document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() !== 'l') return;
    state.likes += 1;
    renderizarEstado(state);
  });
}

function inicializarAplicacion() {
  const state = crearEstadoInicial();
  configurarEventoLike(state);
  configurarEventoReset(state);
  configurarEventosHover(state);
  configurarEventoTeclado(state);
  renderizarEstado(state);
  return state;
}

function obtenerTextoHover(isHovering) {
  return isHovering ? 'mouse dentro' : 'mouse fuera';
}

function obtenerTituloHover(isHovering) {
  return isHovering ? 'hover detectado' : 'pasa el mouse por aquí';
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
