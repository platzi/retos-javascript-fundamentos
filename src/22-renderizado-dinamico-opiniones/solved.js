function crearElementoOpinion(opinion) {
  const article = document.createElement('article');
  
  const header = document.createElement('header');
  
  const meta = document.createElement('div');
  const nombre = document.createElement('strong');
  nombre.textContent = opinion.nombre;
  const rating = document.createElement('span');
  rating.textContent = `★ ${opinion.rating}/5`;
  meta.appendChild(nombre);
  meta.appendChild(rating);
  
  const fecha = document.createElement('small');
  fecha.textContent = opinion.fecha;
  
  header.appendChild(meta);
  header.appendChild(fecha);
  
  const comentario = document.createElement('p');
  comentario.textContent = opinion.comentario;
  
  article.appendChild(header);
  article.appendChild(comentario);
  
  return article;
}

function crearElementoOpinionConEstilos(opinion) {
  const article = document.createElement('article');
  article.classList.add('opinion');
  article.dataset.id = opinion.id;
  
  const header = document.createElement('header');
  
  const meta = document.createElement('div');
  meta.classList.add('meta');
  
  const nombre = document.createElement('strong');
  nombre.textContent = opinion.nombre;
  
  const rating = document.createElement('span');
  rating.textContent = `★ ${opinion.rating}/5`;
  
  meta.appendChild(nombre);
  meta.appendChild(rating);
  
  const fecha = document.createElement('small');
  fecha.classList.add('muted');
  fecha.textContent = opinion.fecha;
  
  header.appendChild(meta);
  header.appendChild(fecha);
  
  const comentario = document.createElement('p');
  comentario.textContent = opinion.comentario;
  
  article.appendChild(header);
  article.appendChild(comentario);
  
  return article;
}

function renderizarOpiniones(lista) {
  const contenedor = document.querySelector('#opiniones');
  contenedor.replaceChildren();
  
  lista.forEach((opinion) => {
    const elemento = crearElementoOpinionConEstilos(opinion);
    contenedor.appendChild(elemento);
  });
}

function crearImagenConAtributos(datosImagen) {
  const img = document.createElement('img');
  img.src = datosImagen.src;
  img.alt = datosImagen.alt;
  img.className = datosImagen.class;
  return img;
}

function construirTarjetaOpinion(opinion) {
  const article = document.createElement('article');
  article.classList.add('tarjeta');
  
  const header = document.createElement('header');
  
  const h3 = document.createElement('h3');
  h3.textContent = opinion.nombre;
  
  const rating = document.createElement('span');
  rating.classList.add('rating');
  rating.textContent = `★ ${opinion.rating}/5`;
  
  header.appendChild(h3);
  header.appendChild(rating);
  
  const section = document.createElement('section');
  
  const comentario = document.createElement('p');
  comentario.classList.add('comentario');
  comentario.textContent = opinion.comentario;
  
  section.appendChild(comentario);
  
  const footer = document.createElement('footer');
  
  const fecha = document.createElement('small');
  fecha.classList.add('fecha');
  fecha.textContent = opinion.fecha;
  
  footer.appendChild(fecha);
  
  article.appendChild(header);
  article.appendChild(section);
  article.appendChild(footer);
  
  return article;
}

function renderizarOpinionesFiltradas(lista) {
  const contenedor = document.querySelector('#opiniones');
  contenedor.replaceChildren();
  
  const opinionesFiltradas = lista.filter(opinion => opinion.rating >= 4);
  
  opinionesFiltradas.forEach((opinion) => {
    const elemento = crearElementoOpinionConEstilos(opinion);
    contenedor.appendChild(elemento);
  });
}

function crearOpinionConTemplate(opinion) {
  const article = document.createElement('article');
  article.classList.add('opinion');
  article.dataset.id = opinion.id;
  
  article.innerHTML = `
    <header>
      <div class="meta">
        <strong>${opinion.nombre}</strong>
        <span>★ ${opinion.rating}/5</span>
      </div>
      <small class="muted">${opinion.fecha}</small>
    </header>
    <p>${opinion.comentario}</p>
  `;
  
  return article;
}

function renderizarOpinionesSeguro(lista) {
  try {
    const contenedor = document.querySelector('#opiniones');
    if (!contenedor) {
      console.error('Contenedor #opiniones no encontrado');
      return;
    }
    
    contenedor.replaceChildren();
    
    lista.forEach((opinion) => {
      const elemento = crearElementoOpinionConEstilos(opinion);
      contenedor.appendChild(elemento);
    });
  } catch (error) {
    console.error('Error al renderizar opiniones:', error);
  }
}

function agregarOpinionAlInicio(opinion) {
  const contenedor = document.querySelector('#opiniones');
  const elemento = crearElementoOpinionConEstilos(opinion);
  contenedor.prepend(elemento);
}

function renderizarOpinionesOptimizado(lista) {
  const contenedor = document.querySelector('#opiniones');
  contenedor.replaceChildren();
  
  const fragment = document.createDocumentFragment();
  
  lista.forEach((opinion) => {
    const elemento = crearElementoOpinionConEstilos(opinion);
    fragment.appendChild(elemento);
  });
  
  contenedor.appendChild(fragment);
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
