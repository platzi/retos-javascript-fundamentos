function buscarNotaPorId(notas, id) {
  return notas.find(nota => nota.id === id);
}

function buscarNotaPorTituloExacto(notas, titulo) {
  return notas.find(nota => nota.title === titulo);
}

function filtrarNotasPorCategoria(notas, categoria) {
  return notas.filter(nota => nota.category === categoria);
}

function filtrarNotasPorLongitudMinima(notas, longitudMinima) {
  return notas.filter(nota => nota.content.length >= longitudMinima);
}

function sumarIds(notas) {
  return notas.reduce((acc, nota) => acc + nota.id, 0);
}

function concatenarTitulos(notas) {
  return notas.reduce((acc, nota, index) => {
    if (index === 0) {
      return nota.title;
    }
    return acc + "-" + nota.title;
  }, "");
}

function contarNotasPorCategoria(notas) {
  return notas.reduce((acc, nota) => {
    const categoria = nota.category;
    acc[categoria] = (acc[categoria] || 0) + 1;
    return acc;
  }, {});
}

function calcularPromedioDeIds(notas) {
  if (notas.length === 0) return 0;
  const suma = notas.reduce((acc, nota) => acc + nota.id, 0);
  return suma / notas.length;
}

module.exports = {
  buscarNotaPorId,
  buscarNotaPorTituloExacto,
  filtrarNotasPorCategoria,
  filtrarNotasPorLongitudMinima,
  sumarIds,
  concatenarTitulos,
  contarNotasPorCategoria,
  calcularPromedioDeIds,
};
