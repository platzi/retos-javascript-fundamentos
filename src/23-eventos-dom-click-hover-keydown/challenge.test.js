import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { JSDOM } from 'jsdom';
import {
  crearEstadoInicial,
  obtenerMensajeEstado,
  renderizarEstado,
  configurarEventoLike,
  configurarEventoReset,
  configurarEventosHover,
  configurarEventoTeclado,
  inicializarAplicacion,
  obtenerTextoHover,
  obtenerTituloHover,
} from './challenge.js';

// Configurar el entorno DOM para los tests
const dom = new JSDOM(`
<!DOCTYPE html>
<html>
<head>
  <title>Test</title>
</head>
<body>
  <div class="status"></div>
  <button class="btn-like">Like</button>
  <button class="btn-reset">Reset</button>
  <div class="hover-zone">
    <div class="hover-pill"></div>
    <div class="hover-title"></div>
    <div class="hover-text"></div>
  </div>
</body>
</html>
`, { runScripts: 'dangerously' });

global.document = dom.window.document;
global.window = dom.window;

describe('Eventos del DOM: click, hover y keydown', () => {
  let state;

  beforeEach(() => {
    state = crearEstadoInicial();
    // Limpiar eventos anteriores
    document.querySelectorAll('*').forEach(el => {
      const clone = el.cloneNode(true);
      el.parentNode?.replaceChild(clone, el);
    });
  });

  afterEach(() => {
    // Limpiar eventos globales
    document.removeEventListener('keydown', () => {});
  });

  describe('crearEstadoInicial', () => {
    it('debe crear un estado con likes en 0 y isHovering en false', () => {
      const estado = crearEstadoInicial();
      expect(estado).toEqual({
        likes: 0,
        isHovering: false,
      });
    });
  });

  describe('obtenerMensajeEstado', () => {
    it('debe retornar mensaje para 0 likes', () => {
      const mensaje = obtenerMensajeEstado({ likes: 0, isHovering: false });
      expect(mensaje).toBe('Aún no hay likes. Haz clic en me gusta');
    });

    it('debe retornar mensaje para 1 like', () => {
      const mensaje = obtenerMensajeEstado({ likes: 1, isHovering: false });
      expect(mensaje).toBe('Tienes un like. Buen inicio');
    });

    it('debe retornar mensaje para múltiples likes', () => {
      const mensaje = obtenerMensajeEstado({ likes: 5, isHovering: false });
      expect(mensaje).toBe('Tienes 5 likes. Sigue así');
    });
  });

  describe('obtenerTextoHover', () => {
    it('debe retornar "mouse dentro" cuando isHovering es true', () => {
      const texto = obtenerTextoHover(true);
      expect(texto).toBe('mouse dentro');
    });

    it('debe retornar "mouse fuera" cuando isHovering es false', () => {
      const texto = obtenerTextoHover(false);
      expect(texto).toBe('mouse fuera');
    });
  });

  describe('obtenerTituloHover', () => {
    it('debe retornar "hover detectado" cuando isHovering es true', () => {
      const titulo = obtenerTituloHover(true);
      expect(titulo).toBe('hover detectado');
    });

    it('debe retornar "pasa el mouse por aquí" cuando isHovering es false', () => {
      const titulo = obtenerTituloHover(false);
      expect(titulo).toBe('pasa el mouse por aquí');
    });
  });

  describe('renderizarEstado', () => {
    it('debe actualizar el texto del estado', () => {
      renderizarEstado({ likes: 2, isHovering: false });
      const status = document.querySelector('.status');
      expect(status.textContent).toBe('Tienes 2 likes. Sigue así');
    });

    it('debe deshabilitar el botón reset cuando likes es 0', () => {
      renderizarEstado({ likes: 0, isHovering: false });
      const btnReset = document.querySelector('.btn-reset');
      expect(btnReset.disabled).toBe(true);
      expect(btnReset.style.opacity).toBe('0.55');
    });

    it('debe habilitar el botón reset cuando likes > 0', () => {
      renderizarEstado({ likes: 1, isHovering: false });
      const btnReset = document.querySelector('.btn-reset');
      expect(btnReset.disabled).toBe(false);
      expect(btnReset.style.opacity).toBe('1');
    });

    it('debe agregar clase is-hover cuando isHovering es true', () => {
      renderizarEstado({ likes: 0, isHovering: true });
      const hoverZone = document.querySelector('.hover-zone');
      expect(hoverZone.classList.contains('is-hover')).toBe(true);
    });

    it('debe remover clase is-hover cuando isHovering es false', () => {
      const hoverZone = document.querySelector('.hover-zone');
      hoverZone.classList.add('is-hover');
      
      renderizarEstado({ likes: 0, isHovering: false });
      expect(hoverZone.classList.contains('is-hover')).toBe(false);
    });

    it('debe actualizar textos de hover según isHovering', () => {
      renderizarEstado({ likes: 0, isHovering: true });
      
      const hoverPill = document.querySelector('.hover-pill');
      const hoverTitle = document.querySelector('.hover-title');
      const hoverText = document.querySelector('.hover-text');
      
      expect(hoverPill.textContent).toBe('mouse dentro');
      expect(hoverTitle.textContent).toBe('hover detectado');
      expect(hoverText.textContent).toBe('Este cambio se disparó por el mouse enter del DOM');
    });
  });

  describe('configurarEventoLike', () => {
    it('debe incrementar likes al hacer click en el botón like', () => {
      configurarEventoLike(state);
      
      const btnLike = document.querySelector('.btn-like');
      btnLike.click();
      
      expect(state.likes).toBe(1);
    });
  });

  describe('configurarEventoReset', () => {
    it('debe reiniciar likes a 0 al hacer click en el botón reset', () => {
      state.likes = 5;
      configurarEventoReset(state);
      
      const btnReset = document.querySelector('.btn-reset');
      btnReset.click();
      
      expect(state.likes).toBe(0);
    });
  });

  describe('configurarEventosHover', () => {
    it('debe activar isHovering en mouseenter', () => {
      configurarEventosHover(state);
      
      const hoverZone = document.querySelector('.hover-zone');
      hoverZone.dispatchEvent(new dom.window.Event('mouseenter'));
      
      expect(state.isHovering).toBe(true);
    });

    it('debe desactivar isHovering en mouseleave', () => {
      state.isHovering = true;
      configurarEventosHover(state);
      
      const hoverZone = document.querySelector('.hover-zone');
      hoverZone.dispatchEvent(new dom.window.Event('mouseleave'));
      
      expect(state.isHovering).toBe(false);
    });
  });

  describe('configurarEventoTeclado', () => {
    it('debe incrementar likes al presionar la tecla "l"', () => {
      configurarEventoTeclado(state);
      
      document.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'l' }));
      
      expect(state.likes).toBe(1);
    });

    it('debe incrementar likes al presionar la tecla "L" (mayúscula)', () => {
      configurarEventoTeclado(state);
      
      document.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'L' }));
      
      expect(state.likes).toBe(1);
    });

    it('no debe incrementar likes al presionar otras teclas', () => {
      configurarEventoTeclado(state);
      
      document.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'a' }));
      
      expect(state.likes).toBe(0);
    });
  });

  describe('inicializarAplicacion', () => {
    it('debe crear estado y configurar todo correctamente', () => {
      const estado = inicializarAplicacion();
      
      expect(estado).toEqual({
        likes: 0,
        isHovering: false,
      });
      
      // Verificar que el estado inicial se renderiza
      const status = document.querySelector('.status');
      expect(status.textContent).toBe('Aún no hay likes. Haz clic en me gusta');
    });
  });
});
