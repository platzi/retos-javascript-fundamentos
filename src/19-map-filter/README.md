# Map y Filter: Manipula arreglos de objetos

Reto de la clase 19 del Curso de Fundamentos de JavaScript.

## Ejercicios

| #   | Función               | Concepto                                             |
| --- | --------------------- | ---------------------------------------------------- |
| 01  | `extraerTitulos`      | Usar `map()` para extraer propiedades de objetos     |
| 02  | `agregarFechaCreacion`| Usar `map()` y spread operator para agregar campos   |
| 03  | `filtrarFavoritas`    | Usar `filter()` con condiciones booleanas            |
| 04  | `buscarPorTitulo`     | Combinar `filter()`, `toLowerCase()` e `includes()`  |
| 05  | `aplicarDescuento`    | Transformar datos con `map()` y cálculos             |
| 06  | `filtrarPorRango`     | Filtrar con condiciones numéricas comparativas       |

## Conceptos clave

- **Métodos de orden superior**: Funciones que reciben otra función como argumento
- **map()**: Transforma cada elemento, retorna nuevo array sin mutar original
- **filter()**: Selecciona elementos que cumplan condición, retorna nuevo array
- **Spread operator (`...`)**: Copia propiedades de objetos
- **Arrow functions**: Sintaxis concisa para callbacks
- **toLowerCase() + includes()**: Búsquedas insensibles a mayúsculas/minúsculas

## Cómo ejecutar los tests

```bash
npx vitest src/19-map-filter
```

O ejecuta todos los tests:

```bash
npm test
```
