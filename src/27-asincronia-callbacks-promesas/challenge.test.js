import { describe, it, expect, vi } from 'vitest';
import {
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
} from './challenge.js';

describe('Reto 27: Asincronía en JavaScript - callbacks y promesas', () => {
  
  describe('Ejercicio 1: setTimeout básico', () => {
    it('debe llamar al callback con "mensaje retrasado" después de 2 segundos', async () => {
      const callback = vi.fn();
      mensajeRetrasado(callback);
      
      await new Promise(resolve => setTimeout(resolve, 2100));
      
      expect(callback).toHaveBeenCalledWith('mensaje retrasado');
    });
  });

  describe('Ejercicio 2: Callback simple', () => {
    it('debe llamar al callback con "datos recibidos" después de 1.5 segundos', async () => {
      const callback = vi.fn();
      obtenerDatos(callback);
      
      await new Promise(resolve => setTimeout(resolve, 1600));
      
      expect(callback).toHaveBeenCalledWith('datos recibidos');
    });
  });

  describe('Ejercicio 3: Callback con error', () => {
    it('debe llamar al callback con éxito cuando exito es true', async () => {
      const callback = vi.fn();
      operacionConError(true, callback);
      
      await new Promise(resolve => setTimeout(resolve, 100));
      
      expect(callback).toHaveBeenCalledWith('operación exitosa', null);
    });

    it('debe llamar al callback con error cuando exito es false', async () => {
      const callback = vi.fn();
      operacionConError(false, callback);
      
      await new Promise(resolve => setTimeout(resolve, 100));
      
      expect(callback).toHaveBeenCalledWith(null, 'falló la operación');
    });
  });

  describe('Ejercicio 4: Callback hell simple', () => {
    it('debe encadenar 3 operaciones y retornar el resultado completo', async () => {
      const callback = vi.fn();
      obtenerInfoCompleta(callback);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      expect(callback).toHaveBeenCalledWith('Ana: NOTAS PROCESADAS', null);
    });
  });

  describe('Ejercicio 5: Promesa básica', () => {
    it('debe resolver con "promesa cumplida" después de 1 segundo', async () => {
      const result = await promesaBasica();
      expect(result).toBe('promesa cumplida');
    });
  });

  describe('Ejercicio 6: Promesa con reject', () => {
    it('debe resolver con "éxito" cuando exito es true', async () => {
      const result = await promesaConError(true);
      expect(result).toBe('éxito');
    });

    it('debe rechazar con error cuando exito es false', async () => {
      await expect(promesaConError(false)).rejects.toThrow('error en la operación');
    });
  });

  describe('Ejercicio 7: Encadenar promesas', () => {
    it('debe encadenar dos promesas y duplicar el número', async () => {
      const result = await encadenarPromesas();
      expect(result).toBe(10);
    });
  });

  describe('Ejercicio 8: Promesa con setTimeout', () => {
    it('debe simular una llamada a API y resolver con datos', async () => {
      const result = await simularApiCall();
      expect(result).toEqual({data: 'respuesta api'});
    });
  });

  describe('Ejercicio 9: Múltiples promesas', () => {
    it('debe ejecutar 3 promesas en paralelo con Promise.all', async () => {
      const result = await multiplesPromesas();
      expect(result).toEqual(['resultado 1', 'resultado 2', 'resultado 3']);
    });
  });

  describe('Ejercicio 10: Convertir callback a promesa', () => {
    it('debe convertir una función callback a una promesa', async () => {
      const result = await convertirCallbackAPromesa(5);
      expect(result).toBe(10);
    });
  });
});
