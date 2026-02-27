import { describe, it, expect, beforeEach } from 'vitest';
import calcularAreaCirculo, { PI, sumar, restar, config, Usuario, addition, utils } from './challenge.js';

describe('ES Modules Challenge', () => {
  describe('Ejercicio 1: Exportar constante PI', () => {
    it('debe exportar PI con el valor correcto', () => {
      expect(PI).toBe(3.14159);
    });
  });

  describe('Ejercicio 2: Exportar funciones matemáticas', () => {
    it('debe exportar función sumar que funciona correctamente', () => {
      const resultado = sumar(5, 3);
      expect(resultado).toBe(8);
    });

    it('debe exportar función restar que funciona correctamente', () => {
      const resultado = restar(10, 4);
      expect(resultado).toBe(6);
    });

    it('debe manejar números negativos', () => {
      expect(sumar(-2, 3)).toBe(1);
      expect(restar(5, -2)).toBe(7);
    });
  });

  describe('Ejercicio 3: Exportar función por defecto', () => {
    it('debe exportar por defecto calcularAreaCirculo', () => {
      expect(typeof calcularAreaCirculo).toBe('function');
    });

    it('debe calcular el área correctamente', () => {
      const area = calcularAreaCirculo(2);
      expect(area).toBeCloseTo(12.56636, 4);
    });

    it('debe usar la constante PI', () => {
      const area = calcularAreaCirculo(1);
      expect(area).toBe(PI);
    });
  });

  describe('Ejercicio 4: Exportar objeto de configuración', () => {
    it('debe exportar un objeto config', () => {
      expect(typeof config).toBe('object');
      expect(config).not.toBeNull();
    });

    it('debe tener propiedades básicas de configuración', () => {
      expect(config).toHaveProperty('nombre');
      expect(config).toHaveProperty('version');
      expect(config).toHaveProperty('tema');
    });
  });

  describe('Ejercicio 5: Exportar clase Usuario', () => {
    it('debe exportar la clase Usuario', () => {
      expect(typeof Usuario).toBe('function');
    });

    it('debe crear instancias correctamente', () => {
      const usuario = new Usuario('Juan', 'juan@email.com');
      expect(usuario.nombre).toBe('Juan');
      expect(usuario.email).toBe('juan@email.com');
    });

    it('debe tener método saludar', () => {
      const usuario = new Usuario('Ana', 'ana@email.com');
      const saludo = usuario.saludar();
      expect(typeof saludo).toBe('string');
      expect(saludo).toContain('Ana');
      expect(saludo).toContain('ana@email.com');
    });
  });

  describe('Ejercicio 6: Re-exportar con alias', () => {
    it('debe exportar sumar como addition', () => {
      expect(typeof addition).toBe('function');
      expect(addition(3, 4)).toBe(7);
      expect(addition).toBe(sumar);
    });
  });

  describe('Ejercicio 8: Módulo de utilidades', () => {
    it('debe exportar objeto utils', () => {
      expect(typeof utils).toBe('object');
      expect(utils).not.toBeNull();
    });

    it('debe tener función formatearFecha', () => {
      expect(typeof utils.formatearFecha).toBe('function');
      const fecha = utils.formatearFecha('2024-01-15');
      expect(typeof fecha).toBe('string');
    });

    it('debe tener función validarEmail', () => {
      expect(typeof utils.validarEmail).toBe('function');
      expect(utils.validarEmail('test@email.com')).toBe(true);
      expect(utils.validarEmail('email-invalido')).toBe(false);
    });
  });

  describe('Integración de módulos', () => {
    it('debe poder combinar diferentes exportaciones', () => {
      const usuario = new Usuario('María', 'maria@test.com');
      const area = calcularAreaCirculo(sumar(2, 3));
      
      expect(usuario.saludar()).toContain('María');
      expect(area).toBeCloseTo(78.53975, 4);
    });

    it('debe mantener encapsulamiento', () => {
      // Las funciones internas no deberían estar disponibles globalmente
      expect(typeof formatearFecha).toBe('undefined');
      expect(typeof validarEmail).toBe('undefined');
    });
  });
});
