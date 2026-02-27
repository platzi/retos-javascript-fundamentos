import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
const {
  obtenerStorageKey,
  guardarNotas,
  cargarNotas,
  validarYGuardar,
  limpiarStorage,
  existenDatos,
  obtenerCantidadNotas,
} = require('./challenge.js');

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value;
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Reto 25 - LocalStorage con JSON.stringify y JSON.parse', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('Reto 1: obtenerStorageKey', () => {
    it("debe retornar 'markdown-notes'", () => {
      expect(obtenerStorageKey()).toBe('markdown-notes');
    });

    it('debe retornar un string', () => {
      expect(typeof obtenerStorageKey()).toBe('string');
    });
  });

  describe('Reto 2: guardarNotas', () => {
    it('debe guardar notas válidas en localStorage', () => {
      const notas = ['nota1', 'nota2'];
      guardarNotas(notas);
      expect(localStorage.getItem('markdown-notes')).toBe(JSON.stringify(notas));
    });

    it('debe mostrar error si las notas son undefined', () => {
      const consoleSpy = vi.spyOn(console, 'error');
      guardarNotas(undefined);
      expect(consoleSpy).toHaveBeenCalledWith('No se pueden guardar notas, datos inválidos');
      consoleSpy.mockRestore();
    });

    it('debe mostrar error si las notas son null', () => {
      const consoleSpy = vi.spyOn(console, 'error');
      guardarNotas(null);
      expect(consoleSpy).toHaveBeenCalledWith('No se pueden guardar notas, datos inválidos');
      consoleSpy.mockRestore();
    });
  });

  describe('Reto 3: cargarNotas', () => {
    it('debe retornar array vacío si no hay datos', () => {
      const resultado = cargarNotas();
      expect(resultado).toEqual([]);
    });

    it('debe cargar y parsear notas existentes', () => {
      const notas = ['nota1', 'nota2'];
      localStorage.setItem('markdown-notes', JSON.stringify(notas));
      const resultado = cargarNotas();
      expect(resultado).toEqual(notas);
    });

    it('debe retornar array vacío si los datos no son un array', () => {
      localStorage.setItem('markdown-notes', JSON.stringify('no es array'));
      const resultado = cargarNotas();
      expect(resultado).toEqual([]);
    });
  });

  describe('Reto 4: validarYGuardar', () => {
    it('debe retornar true y guardar si es un array válido', () => {
      const notas = ['nota1'];
      const resultado = validarYGuardar(notas);
      expect(resultado).toBe(true);
      expect(localStorage.getItem('markdown-notes')).toBe(JSON.stringify(notas));
    });

    it('debe retornar false y mostrar error si no es un array', () => {
      const consoleSpy = vi.spyOn(console, 'error');
      const resultado = validarYGuardar('no es array');
      expect(resultado).toBe(false);
      expect(consoleSpy).toHaveBeenCalledWith('Los datos deben ser un array');
      consoleSpy.mockRestore();
    });
  });

  describe('Reto 5: limpiarStorage', () => {
    it('debe eliminar los datos del localStorage', () => {
      localStorage.setItem('markdown-notes', 'datos');
      limpiarStorage();
      expect(localStorage.getItem('markdown-notes')).toBeNull();
    });
  });

  describe('Reto 6: existenDatos', () => {
    it('debe retornar false si no hay datos', () => {
      expect(existenDatos()).toBe(false);
    });

    it('debe retornar true si hay datos', () => {
      localStorage.setItem('markdown-notes', 'datos');
      expect(existenDatos()).toBe(true);
    });
  });

  describe('Reto 7: obtenerCantidadNotas', () => {
    it('debe retornar 0 si no hay notas', () => {
      expect(obtenerCantidadNotas()).toBe(0);
    });

    it('debe retornar la cantidad correcta de notas', () => {
      const notas = ['nota1', 'nota2', 'nota3'];
      localStorage.setItem('markdown-notes', JSON.stringify(notas));
      expect(obtenerCantidadNotas()).toBe(3);
    });
  });
});
