function mensajeRetrasado(callback) {
  setTimeout(() => {
    callback('mensaje retrasado');
  }, 2000);
}

function obtenerDatos(callback) {
  setTimeout(() => {
    callback('datos recibidos');
  }, 1500);
}

function operacionConError(exito, callback) {
  setTimeout(() => {
    if (exito) {
      callback('operación exitosa', null);
    } else {
      callback(null, 'falló la operación');
    }
  }, 1000);
}

function obtenerInfoCompleta(callback) {
  setTimeout(() => {
    const usuario = {id: 1, nombre: 'Ana'};
    callback(usuario, null);
  }, 500);
}

function obtenerNotasPorUsuario(usuarioId, callback) {
  setTimeout(() => {
    const notas = ['nota1', 'nota2'];
    callback(notas, null);
  }, 500);
}

function procesarNotas(notas, callback) {
  setTimeout(() => {
    callback('NOTAS PROCESADAS', null);
  }, 500);
}

function obtenerInfoCompleta(callback) {
  obtenerUsuario((usuario, error) => {
    if (error) {
      callback(null, error);
      return;
    }
    obtenerNotasPorUsuario(usuario.id, (notas, error) => {
      if (error) {
        callback(null, error);
        return;
      }
      procesarNotas(notas, (resultado, error) => {
        if (error) {
          callback(null, error);
          return;
        }
        callback(`${usuario.nombre}: ${resultado}`, null);
      });
    });
  });
}

function obtenerUsuario(callback) {
  setTimeout(() => {
    callback({id: 1, nombre: 'Ana'}, null);
  }, 500);
}

function promesaBasica() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('promesa cumplida');
    }, 1000);
  });
}

function promesaConError(exito) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve('éxito');
      } else {
        reject(new Error('error en la operación'));
      }
    }, 500);
  });
}

function encadenarPromesas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(5);
    }, 500);
  })
  .then(numero => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(numero * 2);
      }, 500);
    });
  });
}

function simularApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({data: 'respuesta api'});
    }, 2000);
  });
}

function multiplesPromesas() {
  const promesa1 = Promise.resolve('resultado 1');
  const promesa2 = Promise.resolve('resultado 2');
  const promesa3 = Promise.resolve('resultado 3');
  
  return Promise.all([promesa1, promesa2, promesa3]);
}

function callbackAPromesa(valor, callback) {
  setTimeout(() => {
    callback(valor * 2);
  }, 500);
}

function convertirCallbackAPromesa(valor) {
  return new Promise((resolve) => {
    callbackAPromesa(valor, (resultado) => {
      resolve(resultado);
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
