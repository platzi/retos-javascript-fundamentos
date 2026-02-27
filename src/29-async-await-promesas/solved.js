function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function obtenerUsuario() {
  await esperar(100);
  return { id: 1, nombre: "Usuario" };
}

async function obtenerNotas(usuarioId) {
  await esperar(150);
  return { usuarioId, notas: [10, 9, 8] };
}

async function procesarNotas(data) {
  await esperar(100);
  const promedio = data.notas.reduce((a, b) => a + b) / data.notas.length;
  return { promedio };
}

async function obtenerPromedioUsuario() {
  try {
    const usuario = await obtenerUsuario();
    const data = await obtenerNotas(usuario.id);
    const resultado = await procesarNotas(data);
    return resultado;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

function obtenerPromedioConPromesas() {
  return obtenerUsuario()
    .then((usuario) => obtenerNotas(usuario.id))
    .then((data) => procesarNotas(data))
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}

async function validarUsuario(usuarioId) {
  await esperar(50);
  if (usuarioId === 0) {
    throw new Error("Usuario no válido");
  }
  return { id: usuarioId, valido: true };
}

async function operacionesParalelas() {
  const promesa1 = esperar(100).then(() => "resultado 1");
  const promesa2 = esperar(150).then(() => "resultado 2");
  const promesa3 = esperar(200).then(() => "resultado 3");
  
  const resultados = await Promise.all([promesa1, promesa2, promesa3]);
  return resultados;
}

function callbackAsincrono(valor, callback) {
  setTimeout(() => {
    callback(valor * 3);
  }, 200);
}

async function convertirCallbackAsync(valor) {
  return new Promise((resolve) => {
    callbackAsincrono(valor, (resultado) => {
      resolve(resultado);
    });
  });
}

async function flujoMixto() {
  try {
    const usuario = await obtenerUsuario();
    return Promise.resolve(usuario)
      .then((user) => obtenerNotas(user.id))
      .then(async (data) => {
        const resultado = await procesarNotas(data);
        return resultado;
      });
  } catch (error) {
    console.error("Error en flujo mixto:", error);
    throw error;
  }
}

module.exports = {
  esperar,
  obtenerUsuario,
  obtenerNotas,
  procesarNotas,
  obtenerPromedioUsuario,
  obtenerPromedioConPromesas,
  validarUsuario,
  operacionesParalelas,
  convertirCallbackAsync,
  flujoMixto
};
