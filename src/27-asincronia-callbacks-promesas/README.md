# Reto 27: Asincronía en JavaScript - callbacks y promesas

Aprende a manejar operaciones asíncronas en JavaScript usando callbacks y promesas para construir aplicaciones ágiles sin bloquear la ejecución.

## 📋 Ejercicios

| # | Función | Concepto que practica |
|---|---------|----------------------|
| 1 | `mensajeRetrasado` | setTimeout básico |
| 2 | `obtenerDatos` | Callback simple |
| 3 | `operacionConError` | Callback con manejo de errores |
| 4 | `obtenerInfoCompleta` | Callback hell (anidación) |
| 5 | `promesaBasica` | Promesa básica con resolve |
| 6 | `promesaConError` | Promesa con resolve/reject |
| 7 | `encadenarPromesas` | Encadenamiento con then |
| 8 | `simularApiCall` | Promesa con setTimeout |
| 9 | `multiplesPromesas` | Promise.all para ejecución paralela |
| 10 | `convertirCallbackAPromesa` | Conversión de callback a promesa |

## 🎯 Conceptos clave

- **Single thread**: JavaScript ejecuta en un solo hilo
- **Event loop**: Mecanismo que permite la asincronía sin bloqueo
- **Callback**: Función pasada como argumento que se ejecuta al completar una operación
- **Callback hell**: Anidación excesiva de callbacks que dificulta la lectura
- **Promise**: Objeto que representa un valor futuro con estados (pendiente, cumplida, rechazada)
- **then/catch**: Métodos para manejar el éxito y error de una promesa
- **Promise.all**: Ejecuta múltiples promesas en paralelo

## 🚀 Cómo ejecutar los tests

```bash
npx vitest src/27-asincronia-callbacks-promesas
```

## 📝 Notas importantes

- Los tests usan timeouts para esperar las operaciones asíncronas
- Practica el manejo de errores con `new Error()`
- Las promesas proporcionan una sintaxis más limpia que los callbacks anidados
- `Promise.all` es útil cuando necesitas ejecutar varias operaciones en paralelo
