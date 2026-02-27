import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  obtenerTextoPorId,
  obtenerHTMLPorClase,
  contarBotones,
  obtenerTextosNavegacion,
  contarProductosClase,
  obtenerIdProductoDestacado,
  obtenerCategoriasPorAtributo,
  obtenerPrimerosElementosLista,
  obtenerTituloHeader,
  contarTitulosYSubtitulos,
} from './challenge.js';

// Configurar el DOM para los tests
// Simular el objeto document para el entorno de test
Object.defineProperty(global, 'document', {
  value: {
    getElementById: vi.fn(),
    querySelector: vi.fn(),
    getElementsByTagName: vi.fn(),
    querySelectorAll: vi.fn(),
    getElementsByClassName: vi.fn(),
    body: {
      innerHTML: '',
    },
  },
  writable: true,
});

beforeEach(() => {
  // Configurar el HTML del DOM para los tests
  const mockHTML = `
    <header>
      <h1 id="titulo-principal">Productos útiles, entrega rápida</h1>
      <nav>
        <a href="#" class="nav-link">Inicio</a>
        <a href="#" class="nav-link">Productos</a>
        <a href="#" class="nav-link">Contacto</a>
      </nav>
    </header>
    
    <main>
      <section class="destacados">
        <div class="producto" id="producto-1" data-categoria="electronica">
          <h3>Audífonos Nova</h3>
          <p>Audio premium con cancelación de ruido</p>
        </div>
        <div class="producto" id="producto-2" data-categoria="accesorios">
          <h3>Mouse inalámbrico</h3>
          <p>Precisión y comodidad para tu trabajo</p>
        </div>
      </section>
      
      <section class="productos">
        <div class="producto" data-categoria="electronica">
          <h3>Teclado mecánico</h3>
          <p>Iluminación RGB y switches táctiles</p>
        </div>
        <div class="producto" data-categoria="accesorios">
          <h3>Webcam HD</h3>
          <p>Video nítido para videollamadas</p>
        </div>
      </section>
      
      <h2 class="subtitulo">Ofertas especiales</h2>
      <h3 class="subtitulo">Productos nuevos</h3>
      <h2>Otras categorías</h2>
      
      <ul>
        <li>Elemento 1 de lista 1</li>
        <li>Elemento 2 de lista 1</li>
      </ul>
      
      <ul>
        <li>Elemento 1 de lista 2</li>
        <li>Elemento 2 de lista 2</li>
        <li>Elemento 3 de lista 2</li>
      </ul>
      
      <button id="btnComprar">Ver ofertas</button>
      <button class="btn-secondary">Más información</button>
    </main>
    
    <footer>
      <button>Newsletter</button>
    </footer>
  `;

  // Mockear los métodos del DOM con respuestas realistas
  document.getElementById.mockImplementation((id) => {
    if (id === 'titulo-principal') {
      return { textContent: 'Productos útiles, entrega rápida' };
    }
    return null;
  });

  document.querySelector.mockImplementation((selector) => {
    if (selector === '.producto') {
      return {
        innerHTML: '<h3>Audífonos Nova</h3><p>Audio premium con cancelación de ruido</p>',
      };
    }
    if (selector === '.destacados .producto') {
      return { id: 'producto-1' };
    }
    if (selector === 'header h1') {
      return { textContent: 'Productos útiles, entrega rápida' };
    }
    return null;
  });

  document.getElementsByTagName.mockImplementation((tag) => {
    if (tag === 'button') {
      return { length: 3 };
    }
    return { length: 0 };
  });

  document.querySelectorAll.mockImplementation((selector) => {
    if (selector === '.nav-link') {
      return [{ textContent: 'Inicio' }, { textContent: 'Productos' }, { textContent: 'Contacto' }];
    }
    if (selector === '[data-categoria]') {
      return [
        { getAttribute: () => 'electronica' },
        { getAttribute: () => 'accesorios' },
        { getAttribute: () => 'electronica' },
        { getAttribute: () => 'accesorios' },
      ];
    }
    if (selector === 'ul li:first-child') {
      return [{ textContent: 'Elemento 1 de lista 1' }, { textContent: 'Elemento 1 de lista 2' }];
    }
    if (selector === 'h2, h3, .subtitulo') {
      return [{}, {}, {}, {}]; // 4 elementos
    }
    return [];
  });

  document.getElementsByClassName.mockImplementation((className) => {
    if (className === 'producto') {
      return { length: 4 };
    }
    return { length: 0 };
  });
});

describe('Seleccionar elementos del DOM', () => {
  it('debe obtener texto por ID usando getElementById', () => {
    const resultado = obtenerTextoPorId();
    expect(resultado).toBe('Productos útiles, entrega rápida');
  });

  it('debe obtener HTML por clase usando querySelector', () => {
    const resultado = obtenerHTMLPorClase();
    expect(resultado).toContain('<h3>Audífonos Nova</h3>');
    expect(resultado).toContain('<p>Audio premium con cancelación de ruido</p>');
  });

  it('debe contar botones usando getElementsByTagName', () => {
    const resultado = contarBotones();
    expect(resultado).toBe(3);
  });

  it('debe obtener textos de navegación usando querySelectorAll', () => {
    const resultado = obtenerTextosNavegacion();
    expect(resultado).toEqual(['Inicio', 'Productos', 'Contacto']);
  });

  it('debe contar productos por clase usando getElementsByClassName', () => {
    const resultado = contarProductosClase();
    expect(resultado).toBe(4);
  });

  it('debe obtener ID de producto destacado usando selector combinado', () => {
    const resultado = obtenerIdProductoDestacado();
    expect(resultado).toBe('producto-1');
  });

  it('debe obtener categorías por atributo usando querySelectorAll', () => {
    const resultado = obtenerCategoriasPorAtributo();
    expect(resultado).toEqual(['electronica', 'accesorios', 'electronica', 'accesorios']);
  });

  it('debe obtener primeros elementos de lista usando :first-child', () => {
    const resultado = obtenerPrimerosElementosLista();
    expect(resultado).toEqual(['Elemento 1 de lista 1', 'Elemento 1 de lista 2']);
  });

  it('debe obtener título del header usando selector jerárquico', () => {
    const resultado = obtenerTituloHeader();
    expect(resultado).toBe('Productos útiles, entrega rápida');
  });

  it('debe contar títulos y subtítulos usando selector múltiple', () => {
    const resultado = contarTitulosYSubtitulos();
    expect(resultado).toBe(4); // 2 h2 + 1 h3 + 1 .subtitulo (h2)
  });
});
