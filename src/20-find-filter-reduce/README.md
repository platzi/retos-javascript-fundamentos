# find, filter y reduce: cuándo usar cada uno

Practica los tres métodos de orden superior más importantes de JavaScript para manipular arreglos.

## Ejercicios

| #   | Función                      | Concepto                                           |
| --- | ---------------------------- | -------------------------------------------------- |
| 01  | `buscarNotaPorId`            | find para obtener un solo elemento por id          |
| 02  | `buscarNotaPorTituloExacto`  | find con comparación estricta                      |
| 03  | `filtrarNotasPorCategoria`   | filter para obtener múltiples coincidencias        |
| 04  | `filtrarNotasPorLongitudMinima` | filter con condición de longitud                |
| 05  | `sumarIds`                   | reduce para sumar valores numéricos              |
| 06  | `concatenarTitulos`          | reduce para concatenar strings                     |
| 07  | `contarNotasPorCategoria`    | reduce para agrupar y contar (objeto acumulador) |
| 08  | `calcularPromedioDeIds`      | reduce para calcular promedios                     |

## Conceptos clave

- **find**: Retorna el primer elemento que cumple la condición. Si no hay coincidencias, retorna `undefined`.
- **filter**: Retorna un nuevo array con todos los elementos que cumplen la condición. Si no hay coincidencias, retorna un array vacío `[]`.
- **reduce**: Ejecuta una función reductora sobre cada elemento, acumulando un solo valor de retorno. Recibe un acumulador y el valor actual.

## Ejecutar tests

```bash
npx vitest src/20-find-filter-reduce
```
