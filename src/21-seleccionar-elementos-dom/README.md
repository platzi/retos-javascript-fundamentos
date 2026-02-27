# Reto: Seleccionar elementos del DOM con JavaScript

Aprende a controlar el DOM con JavaScript usando diferentes métodos de selección. Desde selectores modernos hasta métodos clásicos, practicarás cómo leer y acceder a elementos específicos del documento.

## 📋 Tabla de ejercicios

| # | Función | Concepto que practica |
|---|---------|----------------------|
| 1 | `obtenerTextoPorId` | `getElementById()` y `textContent` |
| 2 | `obtenerHTMLPorClase` | `querySelector()` y `innerHTML` |
| 3 | `contarBotones` | `getElementsByTagName()` |
| 4 | `obtenerTextosNavegacion` | `querySelectorAll()` y `Array.from()` |
| 5 | `contarProductosClase` | `getElementsByClassName()` |
| 6 | `obtenerIdProductoDestacado` | Selectores combinados y descendientes |
| 7 | `obtenerCategoriasPorAtributo` | Selectores de atributos `[data-*]` |
| 8 | `obtenerPrimerosElementosLista` | Pseudo-clases `:first-child` |
| 9 | `obtenerTituloHeader` | Selectores jerárquicos |
| 10 | `contarTitulosYSubtitulos` | Selectores múltiples con coma |

## 🎯 Conceptos clave

- **DOM (Document Object Model)**: Representación estructurada del HTML en forma de árbol
- **Selectores modernos**: `querySelector()` y `querySelectorAll()` - más flexibles y potentes
- **Métodos clásicos**: `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()` - más rápidos pero menos flexibles
- **NodeList vs HTMLCollection**: Diferencias entre los tipos de colecciones que retornan los métodos
- **Selectores CSS**: Uso de sintaxis CSS para seleccionar elementos (clases, IDs, atributos, pseudo-clases)

## 🚀 Cómo ejecutar los tests

```bash
npx vitest src/21-seleccionar-elementos-dom
```

## 📝 Notas importantes

- Los tests simulan un entorno DOM con HTML predefinido
- Cada función debe manejar casos donde el elemento no existe
- Practica la diferencia entre `textContent` y `innerHTML`
- Aprende a convertir colecciones DOM en arrays JavaScript con `Array.from()`
