import { describe, it, expect } from 'vitest';
const {
  extraerTitulos,
  agregarFechaCreacion,
  filtrarFavoritas,
  buscarPorTitulo,
  aplicarDescuento,
  filtrarPorRango,
} = require('./challenge.js');

describe('Map y Filter - Manipula arreglos de objetos', () => {
  describe('Ejercicio 1: extraerTitulos', () => {
    it('debe extraer los títulos de un array de notas', () => {
      const notas = [
        { id: 1, title: 'Nota uno', content: 'Contenido 1' },
        { id: 2, title: 'Nota dos', content: 'Contenido 2' },
        { id: 3, title: 'Nota tres', content: 'Contenido 3' },
      ];
      const resultado = extraerTitulos(notas);
      expect(resultado).toEqual(['Nota uno', 'Nota dos', 'Nota tres']);
    });

    it('debe retornar un array vacío si el input está vacío', () => {
      expect(extraerTitulos([])).toEqual([]);
    });
  });

  describe('Ejercicio 2: agregarFechaCreacion', () => {
    it('debe agregar fechaCreacion a cada objeto', () => {
      const notas = [{ id: 1, title: 'Nota' }];
      const resultado = agregarFechaCreacion(notas);

      expect(resultado).toHaveLength(1);
      expect(resultado[0].id).toBe(1);
      expect(resultado[0].title).toBe('Nota');
      expect(resultado[0].fechaCreacion).toBeTypeOf('number');
    });

    it('no debe modificar el array original', () => {
      const notas = [{ id: 1, title: 'Nota' }];
      agregarFechaCreacion(notas);
      expect(notas[0]).not.toHaveProperty('fechaCreacion');
    });
  });

  describe('Ejercicio 3: filtrarFavoritas', () => {
    it('debe filtrar solo las notas favoritas', () => {
      const notas = [
        { id: 1, title: 'Fav 1', esFavorita: true },
        { id: 2, title: 'Normal', esFavorita: false },
        { id: 3, title: 'Fav 2', esFavorita: true },
      ];
      const resultado = filtrarFavoritas(notas);

      expect(resultado).toHaveLength(2);
      expect(resultado.every((n) => n.esFavorita)).toBe(true);
    });

    it('debe retornar array vacío si no hay favoritas', () => {
      const notas = [
        { id: 1, title: 'A', esFavorita: false },
        { id: 2, title: 'B', esFavorita: false },
      ];
      expect(filtrarFavoritas(notas)).toEqual([]);
    });
  });

  describe('Ejercicio 4: buscarPorTitulo', () => {
    it('debe buscar por título sin importar mayúsculas', () => {
      const notas = [
        { id: 1, title: 'Nota Importante' },
        { id: 2, title: 'Otra Cosa' },
        { id: 3, title: 'nota simple' },
      ];
      const resultado = buscarPorTitulo(notas, 'IMPORTANTE');

      expect(resultado).toHaveLength(1);
      expect(resultado[0].id).toBe(1);
    });

    it('debe encontrar coincidencias parciales', () => {
      const notas = [
        { id: 1, title: 'Comprar leche' },
        { id: 2, title: 'Llamar al médico' },
        { id: 3, title: 'Estudiar JavaScript' },
      ];
      const resultado = buscarPorTitulo(notas, 'll');

      expect(resultado).toHaveLength(1);
      expect(resultado[0].id).toBe(2);
    });

    it('debe retornar vacío si no hay coincidencias', () => {
      const notas = [{ id: 1, title: 'A' }];
      expect(buscarPorTitulo(notas, 'xyz')).toEqual([]);
    });
  });

  describe('Ejercicio 5: aplicarDescuento', () => {
    it('debe calcular precioFinal con descuento', () => {
      const productos = [
        { id: 1, nombre: 'Camisa', precio: 100 },
        { id: 2, nombre: 'Pantalón', precio: 200 },
      ];
      const resultado = aplicarDescuento(productos, 20);

      expect(resultado[0].precioFinal).toBe(80);
      expect(resultado[1].precioFinal).toBe(160);
    });

    it('no debe modificar el array original', () => {
      const productos = [{ id: 1, nombre: 'Item', precio: 100 }];
      aplicarDescuento(productos, 10);
      expect(productos[0]).not.toHaveProperty('precioFinal');
    });
  });

  describe('Ejercicio 6: filtrarPorRango', () => {
    it('debe filtrar productos dentro del rango', () => {
      const productos = [
        { nombre: 'Barato', precio: 50 },
        { nombre: 'Medio', precio: 150 },
        { nombre: 'Caro', precio: 250 },
      ];
      const resultado = filtrarPorRango(productos, 100, 200);

      expect(resultado).toHaveLength(1);
      expect(resultado[0].nombre).toBe('Medio');
    });

    it('debe incluir los límites del rango', () => {
      const productos = [
        { nombre: 'A', precio: 100 },
        { nombre: 'B', precio: 200 },
      ];
      const resultado = filtrarPorRango(productos, 100, 200);

      expect(resultado).toHaveLength(2);
    });
  });
});
