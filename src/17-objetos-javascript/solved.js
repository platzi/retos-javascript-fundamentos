function crearUsuario() {
  const usuario = {
    nombre: "Ana",
    edad: 28,
    email: "ana@example.com"
  };
  return usuario;
}

function obtenerNombre(usuario) {
  return usuario.nombre;
}

function obtenerPropiedadDinamica(objeto, propiedad) {
  return objeto[propiedad];
}

function tieneEmail(usuario) {
  return usuario.hasOwnProperty('email');
}

function obtenerCiudad(usuario) {
  return usuario?.direccion?.ciudad;
}

function crearProducto() {
  const producto = {
    id: 1,
    nombre: "Laptop",
    precio: 999.99,
    especificaciones: {
      marca: "TechBrand",
      memoria: "16GB",
      almacenamiento: "512GB SSD"
    }
  };
  return producto;
}

function obtenerMemoria(producto) {
  return producto?.especificaciones?.memoria;
}

function agregarPropiedad(objeto, nombrePropiedad, valor) {
  objeto[nombrePropiedad] = valor;
  return objeto;
}

function crearCalculadora() {
  const calculadora = {
    valor: 0,
    sumar: function(numero) {
      this.valor += numero;
    },
    restar: function(numero) {
      this.valor -= numero;
    },
    obtenerValor: function() {
      return this.valor;
    }
  };
  return calculadora;
}

function obtenerTwitter(usuario) {
  return usuario?.perfil?.redes?.twitter || "no-disponible";
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
