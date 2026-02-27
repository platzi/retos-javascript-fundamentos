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

describe('Reto 28: Asincronía en JavaScript', () => {
  
  describe('mensajeRetrasado', () => {
    it('debe ejecutar el callback después de 2 segundos', async () => {
      const callback = vi.fn();
      mensajeRetrasado(callback);
      
      // Esperar un poco más de 2 segundos
      await new Promise(resolve => setTimeout(resolve, 2100));
      
      expect(callback).toHaveBeenCalledWith('mensaje retrasado');
    });
  });

  describe('obtenerDatos', () => {
    it('debe llamar al callback con "datos obtenidos" después de 1.5 segundos', async () => {
      const callback = vi.fn();
      obtenerDatos(callback);
      
      // Esperar un poco más de 1.5 segundos
      await new Promise(resolve => setTimeout(resolve, 1600));
      
      expect(callback).toHaveBeenCalledWith('datos obtenidos');
    });
  });

  describe('operacionConError', () => {
    it('debe llamar al callback con resultado cuando exito es true', async () => {
      const callback = vi.fn();
      operacionConError(true, callback);
      
      await new Promise(resolve => setTimeout(resolve, 1100));
      
      expect(callback).toHaveBeenCalledWith(null, 'operación exitosa');
    });

    it('debe llamar al callback con error cuando exito es false', async () => {
      const callback = vi.fn();
      operacionConError(false, callback);
      
      await new Promise(resolve => setTimeout(resolve, 1100));
      
      expect(callback).toHaveBeenCalledWith(expect.any(Error));
      expect(callback.mock.calls[0][0].message).toBe('algo salió mal');
    });
  });

  describe('obtenerInfoCompleta', () => {
    it('debe encadenar 3 operaciones y retornar información completa', async () => {
      const callback = vi.fn();
      obtenerInfoCompleta(callback);
      
      // Esperar la suma de todos los timeouts (500 + 500 + 500)
      await new Promise(resolve => setTimeout(resolve, 1600));
      
      expect(callback).toHaveBeenCalledWith(null, {
        usuario: { id: 1, nombre: 'Juan' },
        notas: ['NOTA1', 'NOTA2', 'NOTA3']
      });
    });
  });

  describe('promesaBasica', () => {
    it('debe resolver con "operación exitosa" después de 1 segundo', async () => {
      const promesa = promesaBasica();
      
      await expect(promesa).resolves.toBe('operación exitosa');
    });
  });

  describe('promesaConError', () => {
    it('debe resolver cuando exito es true', async () => {
      const promesa = promesaConError(true);
      
      await expect(promesa).resolves.toBe('promesa cumplida');
    });

    it('debe rechazar cuando exito es false', async () => {
      const promesa = promesaConError(false);
      
      await expect(promesa).rejects.toThrow('promesa rechazada');
    });
  });

  describe('encadenarPromesas', () => {
    it('debe encadenar promesas correctamente', async () => {
      const resultado = await encadenarPromesas();
      
      // 10 * 2 + 5 = 25
      expect(resultado).toBe(25);
    });
  });

  describe('simularApiCall', () => {
    it('debe resolver con datos del usuario cuando userId existe', async () => {
      const resultado = await simularApiCall(1);
      
      expect(resultado).toEqual({
        id: 1,
        nombre: 'Ana',
        email: 'ana@example.com'
      });
    });

    it('debe rechazar cuando userId no existe', async () => {
      await expect(simularApiCall(99)).rejects.toThrow('usuario no encontrado');
    });
  });

  describe('multiplesPromesas', () => {
    it('debe resolver con array de resultados', async () => {
      const resultado = await multiplesPromesas();
      
      expect(resultado).toEqual(['resultado 1', 'resultado 2', 'resultado 3']);
    });
  });

  describe('convertirCallbackAPromesa', () => {
    it('debe convertir función callback a promesa exitosa', async () => {
      const funcionCallback = (callback) => {
        setTimeout(() => {
          callback(null, 'datos convertidos');
        }, 100);
      };
      
      const promesa = convertirCallbackAPromesa(funcionCallback);
      
      await expect(promesa).resolves.toBe('datos convertidos');
    });

    it('debe convertir función callback a promesa rechazada', async () => {
      const funcionCallback = (callback) => {
        setTimeout(() => {
          callback(new Error('error de conversión'));
        }, 100);
      };
      
      const promesa = convertirCallbackAPromesa(funcionCallback);
      
      await expect(promesa).rejects.toThrow('error de conversión');
    });
  });
});
