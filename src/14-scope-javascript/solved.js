const mensajeGlobal = "Hola mundo";

function accederGlobal() {
  return mensajeGlobal;
}

function scopeFuncion() {
  const secreto = "1234";
  return { secreto };
}

function scopeBloque() {
  if (true) {
    let mensajeBloque = "bloque";
    return mensajeBloque;
  }
}

function accesoAnidado() {
  const globalValor = "global";
  const funcionValor = "funcion";
  
  if (true) {
    const bloqueValor = "bloque";
    return {
      global: globalValor,
      funcion: funcionValor,
      bloque: bloqueValor
    };
  }
}

function errorScope() {
  try {
    if (true) {
      let variableBloque = "solo en bloque";
    }
    // Intento acceder fuera del bloque - esto causará error
    return variableBloque;
  } catch (error) {
    return { error: true, mensaje: "Variable no accesible" };
  }
}

function returnVsConsole() {
  const valor = "interno";
  console.log(valor);
  return "retorno diferente";
}

function demostrarHoistingVar() {
  var antes = variable;
  var variable = "hoisting";
  var despues = variable;
  return { antes, despues };
}

function templateLiteralsScope() {
  const app = "MiApp";
  const usuario = "Ana";
  
  if (true) {
    const rol = "admin";
    return `Bienvenido ${usuario} con rol ${rol} en ${app}`;
  }
}

module.exports = {
  accederGlobal,
  scopeFuncion,
  scopeBloque,
  accesoAnidado,
  errorScope,
  returnVsConsole,
  demostrarHoistingVar,
  templateLiteralsScope,
};
