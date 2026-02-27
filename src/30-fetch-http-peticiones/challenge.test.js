import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  obtenerProductos,
  obtenerProductosParseados,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
  obtenerProductosConError,
  verificarStatusResponse,
} from './challenge.js';

// Mock de fetch global
global.fetch = vi.fn();

describe('Reto 30 - Fetch en JavaScript: peticiones HTTP reales', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  describe('Reto 1: obtenerProductos', () => {
    it('debe retornar una promesa de fetch', () => {
      const mockResponse = { ok: true, status: 200 };
      fetch.mockResolvedValue(mockResponse);

      const result = obtenerProductos();
      expect(result).toBeInstanceOf(Promise);
      expect(fetch).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products');
    });
  });

  describe('Reto 2: obtenerProductosParseados', () => {
    it('debe retornar una promesa con el JSON parseado', () => {
      const mockResponse = {
        ok: true,
        status: 200,
        json: vi.fn().mockResolvedValue([{ id: 1, title: 'Producto 1' }]),
      };
      fetch.mockResolvedValue(mockResponse);

      const result = obtenerProductosParseados();
      expect(result).toBeInstanceOf(Promise);
      expect(fetch).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products');
    });
  });

  describe('Reto 3: crearProducto', () => {
    it('debe hacer una petición POST con los datos del producto', () => {
      const mockResponse = { ok: true, status: 201 };
      fetch.mockResolvedValue(mockResponse);

      const result = crearProducto('Nuevo Producto', 100, 'Descripción del producto');
      expect(result).toBeInstanceOf(Promise);
      expect(fetch).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Nuevo Producto',
          price: 100,
          description: 'Descripción del producto',
        }),
      });
    });
  });

  describe('Reto 4: actualizarProducto', () => {
    it('debe hacer una petición PUT con los datos actualizados', () => {
      const mockResponse = { ok: true, status: 200 };
      fetch.mockResolvedValue(mockResponse);

      const result = actualizarProducto(1, 'Producto Actualizado', 150);
      expect(result).toBeInstanceOf(Promise);
      expect(fetch).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Producto Actualizado',
          price: 150,
        }),
      });
    });
  });

  describe('Reto 5: eliminarProducto', () => {
    it('debe hacer una petición DELETE al producto especificado', () => {
      const mockResponse = { ok: true, status: 200 };
      fetch.mockResolvedValue(mockResponse);

      const result = eliminarProducto(1);
      expect(result).toBeInstanceOf(Promise);
      expect(fetch).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products/1', {
        method: 'DELETE',
      });
    });
  });

  describe('Reto 6: obtenerProductosConError', () => {
    it('debe manejar errores y retornar objeto de error', async () => {
      fetch.mockRejectedValue(new Error('Error de red'));

      const result = await obtenerProductosConError();
      expect(result).toEqual({
        error: true,
        message: 'Error al obtener productos',
      });
    });

    it('debe funcionar correctamente cuando no hay errores', () => {
      const mockResponse = { ok: true, status: 200 };
      fetch.mockResolvedValue(mockResponse);

      const result = obtenerProductosConError();
      expect(result).toBeInstanceOf(Promise);
      expect(fetch).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products');
    });
  });

  describe('Reto 7: verificarStatusResponse', () => {
    it('debe retornar la respuesta cuando el status es 200', async () => {
      const mockResponse = { ok: true, status: 200 };
      fetch.mockResolvedValue(mockResponse);

      const result = await verificarStatusResponse();
      expect(result).toBe(mockResponse);
    });

    it('debe lanzar error cuando el status no es 200', async () => {
      const mockResponse = { ok: false, status: 404 };
      fetch.mockResolvedValue(mockResponse);

      await expect(verificarStatusResponse()).rejects.toThrow('Status no es 200');
    });
  });
});
