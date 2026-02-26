# Reto 02 - Scope en JavaScript: global, función y bloque

## Descripción

En este reto pondrás en práctica los conceptos de **scope** en JavaScript. Aprenderás cómo funcionan los ámbitos global, de función y de bloque, entenderás el hoisting con `var`, y practicarás el manejo de errores al intentar acceder a variables fuera de su alcance.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| #   | Función                   | Qué practicas                                             |
| --- | ------------------------- | --------------------------------------------------------- |
| 1   | `accederGlobal()`         | Acceder a variables desde el scope global                 |
| 2   | `scopeFuncion()`          | Declarar y acceder a variables locales de función         |
| 3   | `scopeBloque()`           | Declarar variables con let dentro de bloques              |
| 4   | `accesoAnidado()`         | Acceder a variables de diferentes scopes anidados         |
| 5   | `errorScope()`            | Manejar errores al acceder a variables fuera de alcance   |
| 6   | `returnVsConsole()`       | Diferenciar entre console.log y return                    |
| 7   | `demostrarHoistingVar()`  | Entender el hoisting con var                              |
| 8   | `templateLiteralsScope()` | Usar template literals con variables de diferentes scopes |

## Conceptos clave

- **Scope global**: Variables accesibles desde cualquier parte del programa.
- **Scope de función**: Variables accesibles solo dentro de la función donde se declaran.
- **Scope de bloque**: Variables (con let/const) accesibles solo dentro de llaves `{}`.
- **Hoisting**: Las declaraciones con `var` se "elevan" al inicio del scope con valor `undefined`.
- **Error de ReferenceError**: Ocurre cuando intentas acceder a una variable fuera de su scope.
- **console.log vs return**: `console.log` muestra en consola pero no afecta el valor retornado.

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/14-scope-javascript
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/14-scope-javascript
```

Todos los tests deben pasar en verde para completar el reto.
