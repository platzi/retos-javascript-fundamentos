function crearCuentaBancaria(saldoInicial) {
  let saldo = saldoInicial;

  return {
    depositar(cantidad) {
      saldo += cantidad;
      return `Depositado $${cantidad}. Saldo actual: $${saldo}.`;
    },
    retirar(cantidad) {
      if (cantidad > saldo) {
        return 'Fondos insuficientes.';
      }
      saldo -= cantidad;
      return `Retirado $${cantidad}. Saldo actual: $${saldo}.`;
    },
    consultarSaldo() {
      return `Saldo: $${saldo}.`;
    },
  };
}

function crearContador() {
  let contador = 0;

  return {
    incrementar() {
      contador++;
      return contador;
    },
    decrementar() {
      contador--;
      return contador;
    },
    obtenerValor() {
      return contador;
    },
  };
}

function crearAcumulador() {
  let total = 0;

  return {
    sumar(valor) {
      total += valor;
      return total;
    },
    total() {
      return total;
    },
  };
}

function crearCarrito() {
  let productos = [];

  return {
    agregar(producto, precio) {
      productos.push({ producto, precio });
      return `Producto ${producto} agregado al carrito.`;
    },
    remover(producto) {
      productos = productos.filter((p) => p.producto !== producto);
      return `Producto ${producto} removido del carrito.`;
    },
    total() {
      return productos.reduce((sum, p) => sum + p.precio, 0);
    },
    vaciar() {
      productos = [];
      return 'Carrito vaciado.';
    },
  };
}

function crearCache() {
  let datos = {};

  return {
    guardar(clave, valor) {
      datos[clave] = valor;
      return `Valor guardado en clave: ${clave}`;
    },
    obtener(clave) {
      return datos[clave];
    },
    existe(clave) {
      return clave in datos;
    },
    limpiar() {
      datos = {};
      return 'Cache limpiado.';
    },
  };
}

function crearTemporizador() {
  let segundos = 0;
  let intervalo = null;
  let corriendo = false;

  return {
    iniciar() {
      if (!corriendo) {
        corriendo = true;
        intervalo = setInterval(() => {
          segundos++;
        }, 1000);
        return 'Temporizador iniciado.';
      }
      return 'El temporizador ya está corriendo.';
    },
    detener() {
      if (corriendo) {
        clearInterval(intervalo);
        corriendo = false;
        return 'Temporizador detenido.';
      }
      return 'El temporizador no está corriendo.';
    },
    reiniciar() {
      segundos = 0;
      return 'Temporizador reiniciado.';
    },
    obtenerTiempo() {
      return segundos;
    },
  };
}

function crearGestorTareas() {
  let tareas = [];
  let idCounter = 1;

  return {
    agregarTarea(tarea) {
      tareas.push({
        id: idCounter++,
        tarea,
        completada: false,
      });
      return `Tarea "${tarea}" agregada con ID ${idCounter - 1}.`;
    },
    completarTarea(id) {
      const tarea = tareas.find((t) => t.id === id);
      if (tarea) {
        tarea.completada = true;
        return `Tarea ${id} marcada como completada.`;
      }
      return `Tarea con ID ${id} no encontrada.`;
    },
    obtenerTareas() {
      return tareas;
    },
    tareasPendientes() {
      return tareas.filter((t) => !t.completada);
    },
  };
}

function crearBanco() {
  let cuentas = {};
  let idCounter = 1;

  return {
    crearCuenta(saldoInicial) {
      const id = idCounter++;
      cuentas[id] = crearCuentaBancaria(saldoInicial);
      return `Cuenta ${id} creada con saldo inicial $${saldoInicial}.`;
    },
    obtenerCuenta(id) {
      return cuentas[id] || null;
    },
    eliminarCuenta(id) {
      if (cuentas[id]) {
        delete cuentas[id];
        return `Cuenta ${id} eliminada.`;
      }
      return `Cuenta con ID ${id} no encontrada.`;
    },
  };
}

module.exports = {
  crearCuentaBancaria,
  crearContador,
  crearAcumulador,
  crearCarrito,
  crearCache,
  crearTemporizador,
  crearGestorTareas,
  crearBanco,
};
