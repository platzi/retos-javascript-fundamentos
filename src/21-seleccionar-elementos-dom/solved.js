function obtenerTextoPorId() {
  const elemento = document.getElementById('titulo-principal');
  return elemento ? elemento.textContent : null;
}

function obtenerHTMLPorClase() {
  const elemento = document.querySelector('.producto');
  return elemento ? elemento.innerHTML : null;
}

function contarBotones() {
  const botones = document.getElementsByTagName('button');
  return botones.length;
}

function obtenerTextosNavegacion() {
  const elementos = document.querySelectorAll('.nav-link');
  return Array.from(elementos).map(el => el.textContent);
}

function contarProductosClase() {
  const productos = document.getElementsByClassName('producto');
  return productos.length;
}

function obtenerIdProductoDestacado() {
  const elemento = document.querySelector('.destacados .producto');
  return elemento ? elemento.id || null : null;
}

function obtenerCategoriasPorAtributo() {
  const elementos = document.querySelectorAll('[data-categoria]');
  return Array.from(elementos).map(el => el.getAttribute('data-categoria'));
}

function obtenerPrimerosElementosLista() {
  const elementos = document.querySelectorAll('ul li:first-child');
  return Array.from(elementos).map(el => el.textContent);
}

function obtenerTituloHeader() {
  const elemento = document.querySelector('header h1');
  return elemento ? elemento.textContent : "No encontrado";
}

function contarTitulosYSubtitulos() {
  const elementos = document.querySelectorAll('h2, h3, .subtitulo');
  return elementos.length;
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
