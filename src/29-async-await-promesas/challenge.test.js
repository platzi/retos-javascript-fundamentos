import { describe, it, expect, vi } from 'vitest';
import {
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
} from './challenge.js';

describe('Reto 29: Async/await vs promesas en JavaScript', () => {
  
  describe('esperar', () => {
    it('debería resolver después del tiempo especificado', async () => {
      const start = Date.now();
      await esperar(100);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(90);
    });
  });

  describe('obtenerUsuario', () => {
    it('debería retornar un objeto usuario', async () => {
      const usuario = await obtenerUsuario();
      expect(usuario).toEqual({ id: 1, nombre: "Usuario" });
    });
  });

  describe('obtenerNotas', () => {
    it('debería retornar notas para un usuarioId', async () => {
      const notas = await obtenerNotas(1);
      expect(notas).toEqual({ usuarioId: 1, notas: [10, 9, 8] });
    });
  });

  describe('procesarNotas', () => {
    it('debería calcular el promedio correctamente', async () => {
      const data = { notas: [10, 9, 8] };
      const resultado = await procesarNotas(data);
      expect(resultado).toEqual({ promedio: 9 });
    });
  });

  describe('obtenerPromedioUsuario', () => {
    it('debería ejecutar el flujo completo con async/await', async () => {
      const resultado = await obtenerPromedioUsuario();
      expect(resultado).toEqual({ promedio: 9 });
    });
  });

  describe('obtenerPromedioConPromesas', () => {
    it('debería ejecutar el flujo con then/catch', async () => {
      const resultado = await obtenerPromedioConPromesas();
      expect(resultado).toEqual({ promedio: 9 });
    });
  });

  describe('validarUsuario', () => {
    it('debería validar un usuario correcto', async () => {
      const resultado = await validarUsuario(5);
      expect(resultado).toEqual({ id: 5, valido: true });
    });

    it('debería lanzar error para usuarioId 0', async () => {
      await expect(validarUsuario(0)).rejects.toThrow("Usuario no válido");
    });
  });

  describe('operacionesParalelas', () => {
    it('debería ejecutar operaciones en paralelo', async () => {
      const resultados = await operacionesParalelas();
      expect(resultados).toEqual(["resultado 1", "resultado 2", "resultado 3"]);
    });
  });

  describe('convertirCallbackAsync', () => {
    it('debería convertir callback a async/await', async () => {
      const resultado = await convertirCallbackAsync(5);
      expect(resultado).toBe(15);
    });
  });

  describe('flujoMixto', () => {
    it('debería combinar async/await con then/catch', async () => {
      const resultado = await flujoMixto();
      expect(resultado).toEqual({ promedio: 9 });
    });
  });
});
