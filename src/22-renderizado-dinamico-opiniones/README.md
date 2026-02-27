# Reto: Renderizado dinámico de opiniones con JavaScript

Aprende a manipular el DOM para crear y renderizar elementos de forma dinámica a partir de datos en JavaScript.

## Tabla de ejercicios

| # | Función | Concepto que practica |
|---|---------|----------------------|
| 1 | `crearElementoOpinion` | Creación básica de elementos con `createElement` |
| 2 | `crearElementoOpinionConEstilos` | Agregar clases con `classList.add` y `dataset` |
| 3 | `renderizarOpiniones` | Limpieza y renderizado con `replaceChildren` y `appendChild` |
| 4 | `crearImagenConAtributos` | Creación de elementos con atributos |
| 5 | `construirTarjetaOpinion` | Estructura semántica compleja |
| 6 | `renderizarOpinionesFiltradas` | Renderizado condicional con `filter` |
| 7 | `crearOpinionConTemplate` | Uso de `innerHTML` con template literals |
| 8 | `renderizarOpinionesSeguro` | Manejo de errores con `try-catch` |
| 9 | `agregarOpinionAlInicio` | Inserción con `prepend` |
| 10 | `renderizarOpinionesOptimizado` | Optimización con `DocumentFragment` |

## Conceptos clave

- **createElement**: Crea nuevos elementos HTML desde JavaScript
- **classList.add**: Agrega clases CSS a elementos
- **dataset**: Almacena datos personalizados en atributos `data-*`
- **appendChild**: Agrega elementos como hijos
- **replaceChildren**: Limpia y reemplaza todos los hijos
- **innerHTML**: Asigna contenido HTML a un elemento
- **DocumentFragment**: Contenedor ligero para optimizar renderizado
- **prepend**: Inserta elementos al principio de un contenedor

## Instrucciones para ejecutar los tests

```bash
npx vitest src/22-renderizado-dinamico-opiniones
```

## Estructura de datos

Las opiniones utilizan la siguiente estructura:

```javascript
{
  id: 1,
  nombre: 'Juan Pérez',
  rating: 5,
  comentario: 'Excelente servicio',
  fecha: '2024-01-15'
}
```

## Buenas prácticas

- Siempre verifica que los elementos existan antes de manipularlos
- Usa `DocumentFragment` para múltiples inserciones y mejorar el rendimiento
- Implementa manejo de errores para operaciones DOM que puedan fallar
- Mantén la semántica HTML usando las etiquetas apropiadas
- Separa la lógica de creación de elementos del renderizado
