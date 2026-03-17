// ============================================
//  Reto 17: Objetos en JavaScript
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con:
// npx vitest src/17-objetos-javascript
// ============================================

// --- Reto 1: Crear Usuario
// Crea y retorna un objeto con las siguientes propiedades:
// nombre: "Ana", edad: 28, email: "ana@example.com"
function crearUsuario() {
  // tu codigo aquí
}

// --- Reto 2: Obtener Nombre
// Recibe un usuario (objeto)
// Retorna la propiedad "nombre" del objeto usuario.
function obtenerNombre(usuario) {
  // tu codigo aqui
}

// --- Reto 3: Obtener Propiedad Dinámica
// Recibe: objeto y propiedad
// Retorna el valor de la propiedad indicada.
// Pista: usa acceso con corchetes []
function obtenerPropiedadDinamica(objeto, propiedad) {
  // tu codigo aqui
}

// --- Reto 4: Tiene Email
// Recibe un usuario (objeto)
// Retorna true si el objeto tiene la propiedad "email"
// Retorna false si no existe.
// Pista: usa hasOwnProperty()
function tieneEmail(usuario) {
  // tu codigo aqui
}

// --- Reto 5: Obtener Ciudad
// Recibe un usuario (objeto)
// Retorna la ciudad dentro de: usuario.direccion.ciudad
// Si la propiedad no existe debe retornar undefined.
// Pista: optional chaining
function obtenerCiudad(usuario) {
  // tu codigo aqui
}

// --- Reto 6: Crear Producto
// Retorna un objeto con la siguiente estructura:
// id: 1
// nombre: "Laptop"
// precio: 999.99
// especificaciones: {
//   marca: "TechBrand",
//   memoria: "16GB",
//   almacenamiento: "512GB SSD"
// }
function crearProducto() {
  // tu codigo aqui
}

// --- Reto 7: Obtener Memoria
// Recibe el objeto producto
// Retorna la propiedad:
// producto.especificaciones.memoria
// Debe retornar undefined si memoria no existe.
function obtenerMemoria(producto) {
  // tu codigo aqui
}

// --- Reto 8: Agregar Propiedad
// Recibe: objeto, nombrePropiedad y valor
// Agrega la propiedad al objeto y asígnale el valor.
// Retorna el objeto actualizado.
function agregarPropiedad(objeto, nombrePropiedad, valor) {
  // tu codigo aqui
}

// --- Reto 9: Crear Calculadora
// Retorna un objeto con:
// valor: 0
//
// Métodos:
// sumar(num) => suma num al valor
// restar(num) => resta num al valor
// obtenerValor() => retorna el valor actual
//
// Pista:
// usa this.valor dentro de los métodos.
function crearCalculadora() {
  // tu codigo aqui
}

// --- Reto 10: Obtener Twitter
// Recibe un usuario (objeto)
// Retorna la propiedad: usuario.perfil.redes.twitter
// Si no existe debe retornar:
// "no-disponible"
//
// Pista:
// optional chaining + operador OR
function obtenerTwitter(usuario) {
  // tu codigo aqui
}

module.exports = {
  crearUsuario,
  obtenerNombre,
  obtenerPropiedadDinamica,
  tieneEmail,
  obtenerCiudad,
  crearProducto,
  obtenerMemoria,
  agregarPropiedad,
  crearCalculadora,
  obtenerTwitter,
};
