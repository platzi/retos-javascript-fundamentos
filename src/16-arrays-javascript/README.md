# Reto: Arrays en JavaScript

**Nombre de la clase:** Qué es un array y cómo funciona en JavaScript

## Descripción

Practica el manejo de arrays en JavaScript, incluyendo creación, acceso por índice, y operaciones CRUD (Create, Read, Update, Delete) usando métodos nativos como push, unshift, splice, pop y shift.

## Tabla de ejercicios

| # | Función | Concepto que practica |
|---|---------|-----------------------|
| 1 | `crearArrayFrutas` | Creación de array básico |
| 2 | `crearArrayMixto` | Array con tipos de datos mixtos |
| 3 | `obtenerPrimerElemento` | Acceso por índice (posición 0) |
| 4 | `obtenerUltimoElemento` | Acceso al último elemento con length |
| 5 | `agregarAlFinal` | Agregar elementos con push |
| 6 | `agregarAlInicio` | Agregar elementos con unshift |
| 7 | `insertarEnPosicion` | Insertar con splice (sin eliminar) |
| 8 | `reemplazarEnPosicion` | Reemplazar con splice (eliminando 1) |
| 9 | `eliminarUltimo` | Eliminar último elemento con pop |
| 10 | `eliminarPrimero` | Eliminar primer elemento con shift |
| 11 | `eliminarEnPosicion` | Eliminar con splice |
| 12 | `obtenerLongitud` | Propiedad length |
| 13 | `esArray` | Verificar tipo con Array.isArray() |
| 14 | `encontrarIndice` | Buscar elemento con indexOf() |
| 15 | `crudCompleto` | Combinación de todas las operaciones |

## Conceptos clave

- **Array:** Estructura ordenada que almacena múltiples valores en una variable
- **Índice:** Posición de un elemento, inicia en 0
- **const con arrays:** No se puede reasignar la referencia, pero sí mutar el contenido
- **push():** Agrega elementos al final
- **unshift():** Agrega elementos al inicio  
- **splice(pos, cant, elems):** Inserta/elimina elementos en posición específica
- **pop():** Elimina el último elemento
- **shift():** Elimina el primer elemento
- **length:** Propiedad que indica cantidad de elementos
- **Array.isArray():** Verifica si un valor es array
- **indexOf():** Encuentra el índice de un elemento

## Instrucciones

1. Completa cada función en `challenge.js` según las instrucciones en los comentarios
2. Cada función debe exportarse para que sea testeable
3. No modifiques los nombres de las funciones ni los parámetros
4. Usa los métodos específicos mencionados en cada reto

## Ejecutar tests

```bash
npx vitest src/16-arrays-javascript
```

## Tips

- Recuerda que los índices inician en 0, no en 1
- El último índice válido es `array.length - 1`
- Los métodos como push, unshift, pop, shift y splice modifican el array original
- Usa `splice(posicion, 0, elemento)` para insertar sin eliminar
- Usa `splice(posicion, 1, nuevoElemento)` para reemplazar
- `indexOf()` retorna -1 si no encuentra el elemento
