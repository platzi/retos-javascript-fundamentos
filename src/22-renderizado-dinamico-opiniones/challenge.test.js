import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  crearElementoOpinion,
  crearElementoOpinionConEstilos,
  renderizarOpiniones,
  crearImagenConAtributos,
  construirTarjetaOpinion,
  renderizarOpinionesFiltradas,
  crearOpinionConTemplate,
  renderizarOpinionesSeguro,
  agregarOpinionAlInicio,
  renderizarOpinionesOptimizado,
} from './challenge.js';

describe('Reto: Renderizado dinámico de opiniones con JavaScript', () => {
  let contenedor;

  beforeEach(() => {
    // Crear contenedor para las pruebas
    contenedor = document.createElement('div');
    contenedor.id = 'opiniones';
    document.body.appendChild(contenedor);
  });

  afterEach(() => {
    // Limpiar el DOM después de cada prueba
    document.body.removeChild(contenedor);
  });

  const opinionEjemplo = {
    id: 1,
    nombre: 'Juan Pérez',
    rating: 5,
    comentario: 'Excelente servicio, muy recomendado',
    fecha: '2024-01-15',
  };

  const listaOpiniones = [
    opinionEjemplo,
    {
      id: 2,
      nombre: 'María García',
      rating: 3,
      comentario: 'Servicio regular, podría mejorar',
      fecha: '2024-01-20',
    },
    {
      id: 3,
      nombre: 'Carlos López',
      rating: 4,
      comentario: 'Buena atención al cliente',
      fecha: '2024-01-25',
    },
  ];

  describe('crearElementoOpinion', () => {
    it('debe crear un article con estructura básica', () => {
      const article = crearElementoOpinion(opinionEjemplo);

      expect(article.tagName).toBe('ARTICLE');
      expect(article.querySelector('header')).toBeTruthy();
      expect(article.querySelector('p')).toBeTruthy();
    });

    it('debe contener el nombre y rating en el header', () => {
      const article = crearElementoOpinion(opinionEjemplo);
      const header = article.querySelector('header');

      expect(header.textContent).toContain('Juan Pérez');
      expect(header.textContent).toContain('★ 5/5');
    });

    it('debe contener el comentario en un párrafo', () => {
      const article = crearElementoOpinion(opinionEjemplo);
      const comentario = article.querySelector('p');

      expect(comentario.textContent).toBe('Excelente servicio, muy recomendado');
    });
  });

  describe('crearElementoOpinionConEstilos', () => {
    it('debe agregar clase opinion y dataset.id', () => {
      const article = crearElementoOpinionConEstilos(opinionEjemplo);

      expect(article.classList.contains('opinion')).toBe(true);
      expect(article.dataset.id).toBe('1');
    });

    it('debe agregar clase meta al div contenedor', () => {
      const article = crearElementoOpinionConEstilos(opinionEjemplo);
      const meta = article.querySelector('.meta');

      expect(meta).toBeTruthy();
      expect(meta.querySelector('strong')).toBeTruthy();
      expect(meta.querySelector('span')).toBeTruthy();
    });

    it('debe agregar clase muted a la fecha', () => {
      const article = crearElementoOpinionConEstilos(opinionEjemplo);
      const fecha = article.querySelector('small.muted');

      expect(fecha).toBeTruthy();
      expect(fecha.textContent).toBe('2024-01-15');
    });
  });

  describe('renderizarOpiniones', () => {
    it('debe limpiar el contenedor y renderizar todas las opiniones', () => {
      renderizarOpiniones(listaOpiniones);

      expect(contenedor.children.length).toBe(3);
      expect(contenedor.querySelectorAll('.opinion').length).toBe(3);
    });

    it('debe reemplazar el contenido existente', () => {
      // Agregar contenido inicial
      contenedor.innerHTML = '<div class="inicial">Contenido inicial</div>';

      renderizarOpiniones(listaOpiniones);

      expect(contenedor.children.length).toBe(3);
      expect(contenedor.querySelector('.inicial')).toBeNull();
    });
  });

  describe('crearImagenConAtributos', () => {
    it('debe crear una img con los atributos correctos', () => {
      const datosImagen = {
        src: 'imagen.jpg',
        alt: 'Descripción de la imagen',
        class: 'imagen-perfil',
      };

      const img = crearImagenConAtributos(datosImagen);

      expect(img.tagName).toBe('IMG');
      expect(img.src).toContain('imagen.jpg');
      expect(img.alt).toBe('Descripción de la imagen');
      expect(img.className).toBe('imagen-perfil');
    });
  });

  describe('construirTarjetaOpinion', () => {
    it('debe crear una tarjeta completa con todas las secciones', () => {
      const tarjeta = construirTarjetaOpinion(opinionEjemplo);

      expect(tarjeta.classList.contains('tarjeta')).toBe(true);
      expect(tarjeta.querySelector('header h3')).toBeTruthy();
      expect(tarjeta.querySelector('header .rating')).toBeTruthy();
      expect(tarjeta.querySelector('section .comentario')).toBeTruthy();
      expect(tarjeta.querySelector('footer .fecha')).toBeTruthy();
    });

    it('debe contener el contenido correcto en cada sección', () => {
      const tarjeta = construirTarjetaOpinion(opinionEjemplo);

      expect(tarjeta.querySelector('h3').textContent).toBe('Juan Pérez');
      expect(tarjeta.querySelector('.rating').textContent).toBe('★ 5/5');
      expect(tarjeta.querySelector('.comentario').textContent).toBe(
        'Excelente servicio, muy recomendado',
      );
      expect(tarjeta.querySelector('.fecha').textContent).toBe('2024-01-15');
    });
  });

  describe('renderizarOpinionesFiltradas', () => {
    it('debe renderizar solo opiniones con rating >= 4', () => {
      renderizarOpinionesFiltradas(listaOpiniones);

      expect(contenedor.children.length).toBe(2); // Solo 2 opiniones con rating >= 4
    });

    it('debe incluir las opiniones correctas', () => {
      renderizarOpinionesFiltradas(listaOpiniones);
      const nombres = Array.from(contenedor.querySelectorAll('.opinion')).map(
        (el) => el.querySelector('strong').textContent,
      );

      expect(nombres).toContain('Juan Pérez'); // rating 5
      expect(nombres).toContain('Carlos López'); // rating 4
      expect(nombres).not.toContain('María García'); // rating 3
    });
  });

  describe('crearOpinionConTemplate', () => {
    it('debe crear un article usando innerHTML', () => {
      const article = crearOpinionConTemplate(opinionEjemplo);

      expect(article.tagName).toBe('ARTICLE');
      expect(article.classList.contains('opinion')).toBe(true);
      expect(article.dataset.id).toBe('1');
    });

    it('debe contener la estructura HTML correcta', () => {
      const article = crearOpinionConTemplate(opinionEjemplo);

      expect(article.querySelector('header')).toBeTruthy();
      expect(article.querySelector('.meta')).toBeTruthy();
      expect(article.querySelector('strong').textContent).toBe('Juan Pérez');
      expect(article.querySelector('p').textContent).toBe('Excelente servicio, muy recomendado');
    });
  });

  describe('renderizarOpinionesSeguro', () => {
    it('debe manejar errores sin lanzar excepciones', () => {
      // Eliminar el contenedor para provocar un error
      document.body.removeChild(contenedor);

      expect(() => {
        renderizarOpinionesSeguro(listaOpiniones);
      }).not.toThrow();

      // Restaurar el contenedor
      document.body.appendChild(contenedor);
    });

    it('debe renderizar normalmente cuando no hay errores', () => {
      renderizarOpinionesSeguro(listaOpiniones);

      expect(contenedor.children.length).toBe(3);
    });
  });

  describe('agregarOpinionAlInicio', () => {
    it('debe agregar una opinión al principio del contenedor', () => {
      // Renderizar opiniones iniciales
      renderizarOpiniones(listaOpiniones);

      // Agregar nueva opinión al inicio
      const nuevaOpinion = {
        id: 4,
        nombre: 'Ana Martínez',
        rating: 5,
        comentario: 'Servicio excepcional',
        fecha: '2024-02-01',
      };

      agregarOpinionAlInicio(nuevaOpinion);

      expect(contenedor.children.length).toBe(4);
      expect(contenedor.firstElementChild.querySelector('strong').textContent).toBe('Ana Martínez');
    });
  });

  describe('renderizarOpinionesOptimizado', () => {
    it('debe renderizar usando DocumentFragment', () => {
      renderizarOpinionesOptimizado(listaOpiniones);

      expect(contenedor.children.length).toBe(3);
      expect(contenedor.querySelectorAll('.opinion').length).toBe(3);
    });

    it('debe mantener el mismo resultado que renderizarOpiniones', () => {
      renderizarOpiniones(listaOpiniones);
      const resultadoNormal = contenedor.innerHTML;

      contenedor.replaceChildren();
      renderizarOpinionesOptimizado(listaOpiniones);
      const resultadoOptimizado = contenedor.innerHTML;

      expect(resultadoOptimizado).toBe(resultadoNormal);
    });
  });
});
