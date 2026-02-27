function mensajeRetrasado(callback) {
  setTimeout(() => {
    callback('mensaje retrasado');
  }, 2000);
}

function obtenerDatos(callback) {
  setTimeout(() => {
    callback('datos obtenidos');
  }, 1500);
}

function operacionConError(exito, callback) {
  setTimeout(() => {
    if (exito) {
      callback(null, 'operación exitosa');
    } else {
      callback(new Error('algo salió mal'));
    }
  }, 1000);
}

function obtenerInfoCompleta(callback) {
  setTimeout(() => {
    const usuario = { id: 1, nombre: 'Juan' };
    
    setTimeout(() => {
      const notas = ['nota1', 'nota2', 'nota3'];
      
      setTimeout(() => {
        const notasProcesadas = notas.map(nota => nota.toUpperCase());
        callback(null, { usuario, notas: notasProcesadas });
      }, 500);
    }, 500);
  }, 500);
}

function promesaBasica() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('operación exitosa');
    }, 1000);
  });
}

function promesaConError(exito) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve('promesa cumplida');
      } else {
        reject(new Error('promesa rechazada'));
      }
    }, 1000);
  });
}

function encadenarPromesas() {
  return new Promise((resolve) => {
    resolve(10);
  })
  .then(resultado => resultado * 2)
  .then(resultado => resultado + 5);
}

function simularApiCall(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuarios = {
        1: { id: 1, nombre: 'Ana', email: 'ana@example.com' },
        2: { id: 2, nombre: 'Luis', email: 'luis@example.com' }
      };
      
      if (usuarios[userId]) {
        resolve(usuarios[userId]);
      } else {
        reject(new Error('usuario no encontrado'));
      }
    }, 800);
  });
}

function multiplesPromesas() {
  const promesa1 = Promise.resolve('resultado 1');
  const promesa2 = Promise.resolve('resultado 2');
  const promesa3 = Promise.resolve('resultado 3');
  
  return Promise.all([promesa1, promesa2, promesa3]);
}

function convertirCallbackAPromesa(funcionCallback) {
  return new Promise((resolve, reject) => {
    funcionCallback((error, resultado) => {
      if (error) {
        reject(error);
      } else {
        resolve(resultado);
      }
    });
  });
}

module.exports = {
  mensajeRetrasado,
  obtenerDatos,
  operacionConError,
  obtenerInfoCompleta,
  promesaBasica,
  promesaConError,
  encadenarPromesas,
  simularApiCall,
  multiplesPromesas,
  convertirCallbackAPromesa
};
