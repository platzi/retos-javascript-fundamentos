// ============================================
//  Reto 24: Formularios - preventDefault, FormData, localStorage y JSON
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/24-formularios-javascript
// ============================================

// --- Reto 1: Prevenir Envío por Defecto
// debe agregar preventDefault true al evento para evitar recarga
// Retorna el evento tras prevenirlo
function prevenirEnvioPorDefecto(evento) {
  // tu codigo aquí
}

// --- Reto 2: Extraer Datos Formulario
// Extrae valores del formulario en un objeto:
// {name: formulario.name, message: formulario.message}
function extraerDatosFormulario(formulario) {
  // tu codigo aquí
}

// --- Reto 3: Guardar en localStorage
// JSON.stringify(datos) y guardar en clave 'contact-form'
// localStorage.setItem('contact-form', datosString)
function guardarEnLocalStorage(datos) {
  // tu codigo aquí
  // En un entorno real sería: localStorage.setItem(clave, datosString);
}

// --- Reto 4: Leer desde localStorage
// localStorage.getItem('contact-form') → JSON.parse() → retorna objeto
// Si no existe, retorna null
function leerDesdeLocalStorage() {
  // tu codigo aquí
}

// --- Reto 5: Crear Objeto con Timestamp
// recibe nombre y mensaje para el objeto:
// Retorna {name, message, date: new Date().toISOString()}
function crearObjetoConTimestamp(nombre, mensaje) {
  // tu codigo aquí
}

// --- Reto 6: Renderizar Mensaje Guardado
// Si !datos → retorna ''
// Si datos → retorna HTML con:
// <p><strong>Último mensaje guardado:</strong></p>
// <p><strong>Nombre:</strong> {datos.name}</p>
// <p><strong>Mensaje:</strong> {datos.message}</p>
function renderizarMensajeGuardado(datos) {
  // tu codigo aquí
}

// --- Reto 7: Validar Formulario
// crea un array vacio para almacenar los errores []
// nombre < 2 caracteres → almacena en el array "El nombre debe tener al menos 2 caracteres"
// mensaje < 10 caracteres → almacena en el array "El mensaje debe tener al menos 10 caracteres"
// tambien debe manejar valores nulos o undefined
// Retorna {valido: true/false, errores: []}
function validarFormulario(nombre, mensaje) {
  // tu codigo aquí
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
