import { describe, it, expect } from 'vitest';
import {
  buscarNotaPorId,
  buscarNotaPorTituloExacto,
  filtrarNotasPorCategoria,
  filtrarNotasPorLongitudMinima,
  sumarIds,
  concatenarTitulos,
  contarNotasPorCategoria,
  calcularPromedioDeIds,
} from './challenge';

const notas = [
  { id: 1, title: 'Comprar leche', content: 'Ir al supermercado', category: 'personal' },
  {
    id: 2,
    title: 'Reunión con equipo',
    content: 'Discutir el proyecto de la próxima semana y asignar tareas',
    category: 'trabajo',
  },
  {
    id: 3,
    title: 'Estudiar JavaScript',
    content: 'Repasar map, filter y reduce',
    category: 'estudio',
  },
  { id: 4, title: 'Llamar al banco', content: 'Consultar saldo', category: 'personal' },
  {
    id: 5,
    title: 'Code review',
    content: 'Revisar PRs pendientes del equipo de backend',
    category: 'trabajo',
  },
];

describe('find - buscar un solo elemento', () => {
  it('buscarNotaPorId retorna la nota con el id especificado', () => {
    const resultado = buscarNotaPorId(notas, 2);
    expect(resultado).toEqual({
      id: 2,
      title: 'Reunión con equipo',
      content: 'Discutir el proyecto de la próxima semana y asignar tareas',
      category: 'trabajo',
    });
  });

  it('buscarNotaPorId retorna undefined si no existe', () => {
    const resultado = buscarNotaPorId(notas, 999);
    expect(resultado).toBeUndefined();
  });

  it('buscarNotaPorTituloExacto retorna la nota con el título exacto', () => {
    const resultado = buscarNotaPorTituloExacto(notas, 'Estudiar JavaScript');
    expect(resultado).toEqual({
      id: 3,
      title: 'Estudiar JavaScript',
      content: 'Repasar map, filter y reduce',
      category: 'estudio',
    });
  });

  it('buscarNotaPorTituloExacto retorna undefined si no hay coincidencia exacta', () => {
    const resultado = buscarNotaPorTituloExacto(notas, 'estudiar javascript');
    expect(resultado).toBeUndefined();
  });
});

describe('filter - obtener múltiples coincidencias', () => {
  it('filtrarNotasPorCategoria retorna todas las notas de esa categoría', () => {
    const resultado = filtrarNotasPorCategoria(notas, 'trabajo');
    expect(resultado).toHaveLength(2);
    expect(resultado.every((nota) => nota.category === 'trabajo')).toBe(true);
  });

  it('filtrarNotasPorCategoria retorna array vacío si no hay coincidencias', () => {
    const resultado = filtrarNotasPorCategoria(notas, 'inexistente');
    expect(resultado).toEqual([]);
  });

  it('filtrarNotasPorLongitudMinima retorna notas con content suficientemente largo', () => {
    const resultado = filtrarNotasPorLongitudMinima(notas, 30);
    expect(resultado).toHaveLength(2);
    expect(resultado.map((n) => n.id)).toContain(2);
    expect(resultado.map((n) => n.id)).toContain(5);
  });

  it('filtrarNotasPorLongitudMinima retorna array vacío si ninguna cumple', () => {
    const resultado = filtrarNotasPorLongitudMinima(notas, 1000);
    expect(resultado).toEqual([]);
  });
});

describe('reduce - acumular resultados', () => {
  it('sumarIds retorna la suma de todos los ids', () => {
    const resultado = sumarIds(notas);
    expect(resultado).toBe(15);
  });

  it('sumarIds retorna 0 para array vacío', () => {
    const resultado = sumarIds([]);
    expect(resultado).toBe(0);
  });

  it('concatenarTitulos retorna string con títulos separados por guión', () => {
    const resultado = concatenarTitulos(notas);
    expect(resultado).toBe(
      'Comprar leche-Reunión con equipo-Estudiar JavaScript-Llamar al banco-Code review',
    );
  });

  it('concatenarTitulos retorna string vacío para array vacío', () => {
    const resultado = concatenarTitulos([]);
    expect(resultado).toBe('');
  });

  it('contarNotasPorCategoria retorna objeto con conteos correctos', () => {
    const resultado = contarNotasPorCategoria(notas);
    expect(resultado).toEqual({
      personal: 2,
      trabajo: 2,
      estudio: 1,
    });
  });

  it('contarNotasPorCategoria retorna objeto vacío para array vacío', () => {
    const resultado = contarNotasPorCategoria([]);
    expect(resultado).toEqual({});
  });

  it('calcularPromedioDeIds retorna el promedio correcto', () => {
    const resultado = calcularPromedioDeIds(notas);
    expect(resultado).toBe(3);
  });

  it('calcularPromedioDeIds retorna 0 para array vacío', () => {
    const resultado = calcularPromedioDeIds([]);
    expect(resultado).toBe(0);
  });
});
