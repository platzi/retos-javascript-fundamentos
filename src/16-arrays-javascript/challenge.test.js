import { describe, it, expect } from 'vitest';
import {
  crearArrayFrutas,
  crearArrayMixto,
  obtenerPrimerElemento,
  obtenerUltimoElemento,
  agregarAlFinal,
  agregarAlInicio,
  insertarEnPosicion,
  reemplazarEnPosicion,
  eliminarUltimo,
  eliminarPrimero,
  eliminarEnPosicion,
  obtenerLongitud,
  esArray,
  encontrarIndice,
  crudCompleto,
} from './challenge.js';

describe('Reto: Arrays en JavaScript', () => {
  describe('crearArrayFrutas', () => {
    it('debe crear un array con frutas específicas', () => {
      const resultado = crearArrayFrutas();
      expect(resultado).toEqual(['manzana', 'banana', 'naranja']);
      expect(Array.isArray(resultado)).toBe(true);
    });
  });

  describe('crearArrayMixto', () => {
    it('debe crear un array con tipos de datos mixtos', () => {
      const resultado = crearArrayMixto();
      expect(resultado).toEqual([1, 'texto', true, null, {tipo: 'objeto'}]);
      expect(resultado[0]).toBe(1);
      expect(resultado[1]).toBe('texto');
      expect(resultado[2]).toBe(true);
      expect(resultado[3]).toBe(null);
      expect(resultado[4]).toEqual({tipo: 'objeto'});
    });
  });

  describe('obtenerPrimerElemento', () => {
    it('debe retornar el primer elemento del array', () => {
      expect(obtenerPrimerElemento(['a', 'b', 'c'])).toBe('a');
      expect(obtenerPrimerElemento([1, 2, 3])).toBe(1);
      expect(obtenerPrimerElemento(['primero'])).toBe('primero');
    });
  });

  describe('obtenerUltimoElemento', () => {
    it('debe retornar el último elemento del array', () => {
      expect(obtenerUltimoElemento(['a', 'b', 'c'])).toBe('c');
      expect(obtenerUltimoElemento([1, 2, 3])).toBe(3);
      expect(obtenerUltimoElemento(['solo'])).toBe('solo');
    });
  });

  describe('agregarAlFinal', () => {
    it('debe agregar un elemento al final del array', () => {
      const array = [1, 2, 3];
      const resultado = agregarAlFinal(array, 4);
      expect(resultado).toEqual([1, 2, 3, 4]);
      expect(array).toEqual([1, 2, 3, 4]); // El array original debe ser modificado
    });
  });

  describe('agregarAlInicio', () => {
    it('debe agregar un elemento al inicio del array', () => {
      const array = [2, 3, 4];
      const resultado = agregarAlInicio(array, 1);
      expect(resultado).toEqual([1, 2, 3, 4]);
      expect(array).toEqual([1, 2, 3, 4]); // El array original debe ser modificado
    });
  });

  describe('insertarEnPosicion', () => {
    it('debe insertar un elemento en la posición especificada sin eliminar', () => {
      const array = [1, 3, 4];
      const resultado = insertarEnPosicion(array, 1, 2);
      expect(resultado).toEqual([1, 2, 3, 4]);
      expect(array).toEqual([1, 2, 3, 4]); // El array original debe ser modificado
    });

    it('debe insertar al inicio si la posición es 0', () => {
      const array = [2, 3];
      const resultado = insertarEnPosicion(array, 0, 1);
      expect(resultado).toEqual([1, 2, 3]);
    });

    it('debe insertar al final si la posición es igual al length', () => {
      const array = [1, 2];
      const resultado = insertarEnPosicion(array, 2, 3);
      expect(resultado).toEqual([1, 2, 3]);
    });
  });

  describe('reemplazarEnPosicion', () => {
    it('debe reemplazar el elemento en la posición especificada', () => {
      const array = [1, 2, 3];
      const resultado = reemplazarEnPosicion(array, 1, 10);
      expect(resultado).toEqual([1, 10, 3]);
      expect(array).toEqual([1, 10, 3]); // El array original debe ser modificado
    });

    it('debe reemplazar el primer elemento si la posición es 0', () => {
      const array = [1, 2, 3];
      const resultado = reemplazarEnPosicion(array, 0, 0);
      expect(resultado).toEqual([0, 2, 3]);
    });
  });

  describe('eliminarUltimo', () => {
    it('debe eliminar el último elemento del array', () => {
      const array = [1, 2, 3, 4];
      const resultado = eliminarUltimo(array);
      expect(resultado).toEqual([1, 2, 3]);
      expect(array).toEqual([1, 2, 3]); // El array original debe ser modificado
    });

    it('debe dejar el array vacío si solo tiene un elemento', () => {
      const array = [1];
      const resultado = eliminarUltimo(array);
      expect(resultado).toEqual([]);
    });
  });

  describe('eliminarPrimero', () => {
    it('debe eliminar el primer elemento del array', () => {
      const array = [1, 2, 3, 4];
      const resultado = eliminarPrimero(array);
      expect(resultado).toEqual([2, 3, 4]);
      expect(array).toEqual([2, 3, 4]); // El array original debe ser modificado
    });

    it('debe dejar el array vacío si solo tiene un elemento', () => {
      const array = [1];
      const resultado = eliminarPrimero(array);
      expect(resultado).toEqual([]);
    });
  });

  describe('eliminarEnPosicion', () => {
    it('debe eliminar el elemento en la posición especificada', () => {
      const array = [1, 2, 3, 4];
      const resultado = eliminarEnPosicion(array, 2);
      expect(resultado).toEqual([1, 2, 4]);
      expect(array).toEqual([1, 2, 4]); // El array original debe ser modificado
    });

    it('debe eliminar el primer elemento si la posición es 0', () => {
      const array = [1, 2, 3];
      const resultado = eliminarEnPosicion(array, 0);
      expect(resultado).toEqual([2, 3]);
    });
  });

  describe('obtenerLongitud', () => {
    it('debe retornar la longitud correcta del array', () => {
      expect(obtenerLongitud([])).toBe(0);
      expect(obtenerLongitud([1])).toBe(1);
      expect(obtenerLongitud([1, 2, 3, 4, 5])).toBe(5);
    });
  });

  describe('esArray', () => {
    it('debe identificar correctamente si un valor es array', () => {
      expect(esArray([])).toBe(true);
      expect(esArray([1, 2, 3])).toBe(true);
      expect(esArray('texto')).toBe(false);
      expect(esArray(123)).toBe(false);
      expect(esArray({})).toBe(false);
      expect(esArray(null)).toBe(false);
      expect(esArray(undefined)).toBe(false);
    });
  });

  describe('encontrarIndice', () => {
    it('debe encontrar el índice de un elemento existente', () => {
      expect(encontrarIndice(['a', 'b', 'c'], 'b')).toBe(1);
      expect(encontrarIndice([1, 2, 3], 3)).toBe(2);
      expect(encontrarIndice(['x', 'y', 'z'], 'x')).toBe(0);
    });

    it('debe retornar -1 si el elemento no existe', () => {
      expect(encontrarIndice(['a', 'b', 'c'], 'd')).toBe(-1);
      expect(encontrarIndice([1, 2, 3], 4)).toBe(-1);
    });
  });

  describe('crudCompleto', () => {
    it('debe realizar todas las operaciones CRUD correctamente', () => {
      const resultado = crudCompleto();
      expect(resultado).toEqual([0, 10, 3]);
    });
  });
});
