function prevenirEnvioPorDefecto(evento) {
  evento.preventDefault = true;
  return evento;
}

function extraerDatosFormulario(formulario) {
  const payload = {
    name: formulario.name,
    message: formulario.message,
  };
  return payload;
}

function guardarEnLocalStorage(datos) {
  const clave = 'contact-form';
  const datosString = JSON.stringify(datos);
  // Simulación del guardado en localStorage
  // En un entorno real sería: localStorage.setItem(clave, datosString);
}

function leerDesdeLocalStorage() {
  const clave = 'contact-form';
  // Simulación de lectura desde localStorage
  // En un entorno real sería: const datosString = localStorage.getItem(clave);
  // Como es simulación, retornamos null
  return null;
}

function crearObjetoConTimestamp(nombre, mensaje) {
  return {
    name: nombre,
    message: mensaje,
    date: new Date().toISOString(),
  };
}

function renderizarMensajeGuardado(datos) {
  if (!datos) return '';
  
  return `
    <p><strong>Último mensaje guardado:</strong></p>
    <p><strong>Nombre:</strong> ${datos.name}</p>
    <p><strong>Mensaje:</strong> ${datos.message}</p>
  `;
}

function validarFormulario(nombre, mensaje) {
  const errores = [];
  
  if (!nombre || nombre.length < 2) {
    errores.push('El nombre debe tener al menos 2 caracteres');
  }
  
  if (!mensaje || mensaje.length < 10) {
    errores.push('El mensaje debe tener al menos 10 caracteres');
  }
  
  return {
    valido: errores.length === 0,
    errores: errores,
  };
}

module.exports = {
  prevenirEnvioPorDefecto,
  extraerDatosFormulario,
  guardarEnLocalStorage,
  leerDesdeLocalStorage,
  crearObjetoConTimestamp,
  renderizarMensajeGuardado,
  validarFormulario,
};
