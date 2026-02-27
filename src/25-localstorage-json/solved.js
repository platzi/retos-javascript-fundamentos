function obtenerStorageKey() {
  const STORAGE_KEY = 'markdown-notes';
  return STORAGE_KEY;
}

function guardarNotas(notes) {
  if (notes === undefined || notes === null) {
    console.error('No se pueden guardar notas, datos inválidos');
    return;
  }

  const STORAGE_KEY = 'markdown-notes';
  const notesJSON = JSON.stringify(notes);
  localStorage.setItem(STORAGE_KEY, notesJSON);
}

function cargarNotas() {
  const STORAGE_KEY = 'markdown-notes';
  const notesJSON = localStorage.getItem(STORAGE_KEY);
  
  if (notesJSON === null || notesJSON === undefined) {
    return [];
  }

  let notes = [];
  const parsedNotes = JSON.parse(notesJSON);
  if (Array.isArray(parsedNotes)) {
    notes = parsedNotes;
  }

  return notes;
}

function validarYGuardar(notes) {
  if (!Array.isArray(notes)) {
    console.error('Los datos deben ser un array');
    return false;
  }
  
  guardarNotas(notes);
  return true;
}

function limpiarStorage() {
  const STORAGE_KEY = 'markdown-notes';
  localStorage.removeItem(STORAGE_KEY);
}

function existenDatos() {
  const STORAGE_KEY = 'markdown-notes';
  const notesJSON = localStorage.getItem(STORAGE_KEY);
  return notesJSON !== null && notesJSON !== undefined;
}

function obtenerCantidadNotas() {
  const notes = cargarNotas();
  return notes.length;
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
