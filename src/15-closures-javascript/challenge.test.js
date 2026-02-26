import { describe, it, expect, beforeEach } from 'vitest';
import {
  crearCuentaBancaria,
  crearContador,
  crearAcumulador,
  crearCarrito,
  crearCache,
  crearTemporizador,
  crearGestorTareas,
  crearBanco
} from './challenge.js';

describe('Reto 1: Crear cuenta bancaria básica', () => {
  it('debe crear una cuenta con saldo inicial', () => {
    const cuenta = crearCuentaBancaria(1000);
    expect(cuenta.consultarSaldo()).toBe('Saldo: $1000.');
  });

  it('debe permitir depositar dinero', () => {
    const cuenta = crearCuentaBancaria(500);
    const resultado = cuenta.depositar(300);
    expect(resultado).toBe('Depositado $300. Saldo actual: $800.');
    expect(cuenta.consultarSaldo()).toBe('Saldo: $800.');
  });

  it('debe permitir retirar dinero con fondos suficientes', () => {
    const cuenta = crearCuentaBancaria(1000);
    const resultado = cuenta.retirar(400);
    expect(resultado).toBe('Retirado $400. Saldo actual: $600.');
    expect(cuenta.consultarSaldo()).toBe('Saldo: $600.');
  });

  it('debe rechazar retiros con fondos insuficientes', () => {
    const cuenta = crearCuentaBancaria(200);
    const resultado = cuenta.retirar(300);
    expect(resultado).toBe('Fondos insuficientes.');
    expect(cuenta.consultarSaldo()).toBe('Saldo: $200.');
  });

  it('debe mantener el saldo privado entre cuentas', () => {
    const cuenta1 = crearCuentaBancaria(1000);
    const cuenta2 = crearCuentaBancaria(500);
    
    cuenta1.depositar(500);
    cuenta2.retirar(200);
    
    expect(cuenta1.consultarSaldo()).toBe('Saldo: $1500.');
    expect(cuenta2.consultarSaldo()).toBe('Saldo: $300.');
  });
});

describe('Reto 2: Contador privado', () => {
  it('debe iniciar en 0', () => {
    const contador = crearContador();
    expect(contador.obtenerValor()).toBe(0);
  });

  it('debe incrementar el contador', () => {
    const contador = crearContador();
    contador.incrementar();
    expect(contador.obtenerValor()).toBe(1);
    contador.incrementar();
    expect(contador.obtenerValor()).toBe(2);
  });

  it('debe decrementar el contador', () => {
    const contador = crearContador();
    contador.incrementar();
    contador.incrementar();
    contador.decrementar();
    expect(contador.obtenerValor()).toBe(1);
  });

  it('debe mantener estado privado entre instancias', () => {
    const contador1 = crearContador();
    const contador2 = crearContador();
    
    contador1.incrementar();
    contador1.incrementar();
    contador2.incrementar();
    
    expect(contador1.obtenerValor()).toBe(2);
    expect(contador2.obtenerValor()).toBe(1);
  });
});

describe('Reto 3: Acumulador', () => {
  it('debe iniciar en 0', () => {
    const acumulador = crearAcumulador();
    expect(acumulador.total()).toBe(0);
  });

  it('debe sumar valores correctamente', () => {
    const acumulador = crearAcumulador();
    acumulador.sumar(10);
    expect(acumulador.total()).toBe(10);
    acumulador.sumar(5);
    expect(acumulador.total()).toBe(15);
  });

  it('debe manejar números negativos', () => {
    const acumulador = crearAcumulador();
    acumulador.sumar(20);
    acumulador.sumar(-5);
    expect(acumulador.total()).toBe(15);
  });
});

describe('Reto 4: Carrito de compras', () => {
  it('debe iniciar vacío', () => {
    const carrito = crearCarrito();
    expect(carrito.total()).toBe(0);
  });

  it('debe agregar productos', () => {
    const carrito = crearCarrito();
    const resultado = carrito.agregar('Libro', 25);
    expect(resultado).toBe('Producto Libro agregado al carrito.');
    expect(carrito.total()).toBe(25);
  });

  it('debe calcular total con múltiples productos', () => {
    const carrito = crearCarrito();
    carrito.agregar('Libro', 25);
    carrito.agregar('Cuaderno', 10);
    expect(carrito.total()).toBe(35);
  });

  it('debe remover productos', () => {
    const carrito = crearCarrito();
    carrito.agregar('Libro', 25);
    carrito.agregar('Cuaderno', 10);
    const resultado = carrito.remover('Libro');
    expect(resultado).toBe('Producto Libro removido del carrito.');
    expect(carrito.total()).toBe(10);
  });

  it('debe vaciar el carrito', () => {
    const carrito = crearCarrito();
    carrito.agregar('Libro', 25);
    carrito.agregar('Cuaderno', 10);
    const resultado = carrito.vaciar();
    expect(resultado).toBe('Carrito vaciado.');
    expect(carrito.total()).toBe(0);
  });
});

describe('Reto 5: Cache simple', () => {
  it('debe guardar y obtener valores', () => {
    const cache = crearCache();
    cache.guardar('nombre', 'Juan');
    expect(cache.obtener('nombre')).toBe('Juan');
  });

  it('debe verificar si existe una clave', () => {
    const cache = crearCache();
    cache.guardar('edad', 25);
    expect(cache.existe('edad')).toBe(true);
    expect(cache.existe('nombre')).toBe(false);
  });

  it('debe limpiar el cache', () => {
    const cache = crearCache();
    cache.guardar('nombre', 'Juan');
    cache.guardar('edad', 25);
    const resultado = cache.limpiar();
    expect(resultado).toBe('Cache limpiado.');
    expect(cache.existe('nombre')).toBe(false);
    expect(cache.existe('edad')).toBe(false);
  });
});

describe('Reto 6: Temporizador con estado', () => {
  beforeEach(() => {
    // Limpiar temporizadores después de cada test
    if (typeof global !== 'undefined' && global.clearInterval) {
      global.clearInterval();
    }
  });

  it('debe iniciar en 0', () => {
    const temporizador = crearTemporizador();
    expect(temporizador.obtenerTiempo()).toBe(0);
  });

  it('debe reiniciar el tiempo', () => {
    const temporizador = crearTemporizador();
    temporizador.reiniciar();
    expect(temporizador.obtenerTiempo()).toBe(0);
  });

  it('debe retornar mensajes de estado correctos', () => {
    const temporizador = crearTemporizador();
    expect(temporizador.iniciar()).toBe('Temporizador iniciado.');
    expect(temporizador.detener()).toBe('Temporizador detenido.');
    expect(temporizador.reiniciar()).toBe('Temporizador reiniciado.');
  });
});

describe('Reto 7: Gestor de tareas', () => {
  it('debe agregar tareas', () => {
    const gestor = crearGestorTareas();
    const resultado = gestor.agregarTarea('Estudiar JavaScript');
    expect(resultado).toBe('Tarea "Estudiar JavaScript" agregada con ID 1.');
    const tareas = gestor.obtenerTareas();
    expect(tareas).toHaveLength(1);
    expect(tareas[0].tarea).toBe('Estudiar JavaScript');
    expect(tareas[0].completada).toBe(false);
  });

  it('debe completar tareas', () => {
    const gestor = crearGestorTareas();
    gestor.agregarTarea('Estudiar JavaScript');
    const resultado = gestor.completarTarea(1);
    expect(resultado).toBe('Tarea 1 marcada como completada.');
    const tareas = gestor.obtenerTareas();
    expect(tareas[0].completada).toBe(true);
  });

  it('debe filtrar tareas pendientes', () => {
    const gestor = crearGestorTareas();
    gestor.agregarTarea('Estudiar JavaScript');
    gestor.agregarTarea('Hacer ejercicio');
    gestor.completarTarea(1);
    const pendientes = gestor.tareasPendientes();
    expect(pendientes).toHaveLength(1);
    expect(pendientes[0].tarea).toBe('Hacer ejercicio');
  });
});

describe('Reto 8: Banco con múltiples cuentas', () => {
  it('debe crear cuentas', () => {
    const banco = crearBanco();
    const resultado = banco.crearCuenta(1000);
    expect(resultado).toBe('Cuenta 1 creada con saldo inicial $1000.');
  });

  it('debe obtener cuentas existentes', () => {
    const banco = crearBanco();
    banco.crearCuenta(500);
    const cuenta = banco.obtenerCuenta(1);
    expect(cuenta).toBeDefined();
    expect(cuenta.consultarSaldo()).toBe('Saldo: $500.');
  });

  it('debe retornar null para cuentas no existentes', () => {
    const banco = crearBanco();
    expect(banco.obtenerCuenta(99)).toBeNull();
  });

  it('debe eliminar cuentas', () => {
    const banco = crearBanco();
    banco.crearCuenta(500);
    const resultado = banco.eliminarCuenta(1);
    expect(resultado).toBe('Cuenta 1 eliminada.');
    expect(banco.obtenerCuenta(1)).toBeNull();
  });

  it('debe mantener cuentas independientes', () => {
    const banco = crearBanco();
    banco.crearCuenta(1000);
    banco.crearCuenta(500);
    
    const cuenta1 = banco.obtenerCuenta(1);
    const cuenta2 = banco.obtenerCuenta(2);
    
    cuenta1.depositar(200);
    cuenta2.retirar(100);
    
    expect(cuenta1.consultarSaldo()).toBe('Saldo: $1200.');
    expect(cuenta2.consultarSaldo()).toBe('Saldo: $400.');
  });
});
