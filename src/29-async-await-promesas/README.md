# Reto 29: Async/await vs promesas en JavaScript

Aprende a escribir código asíncrono más legible y mantenible usando promesas con then/catch y la azúcar sintáctica de async/await.

## 📋 Ejercicios

| # | Función | Concepto que practica |
|---|---------|----------------------|
| 1 | `esperar` | Crear una promesa con setTimeout |
| 2 | `obtenerUsuario` | Función async básica con await |
| 3 | `obtenerNotas` | Async con parámetros y retorno |
| 4 | `procesarNotas` | Procesamiento asíncrono de datos |
| 5 | `obtenerPromedioUsuario` | Orquestación completa con try/catch |
| 6 | `obtenerPromedioConPromesas` | Encadenamiento con then/catch |
| 7 | `validarUsuario` | Manejo de errores con throw |
| 8 | `operacionesParalelas` | Promise.all con await |
| 9 | `convertirCallbackAsync` | Conversión de callback a promesa |
| 10 | `flujoMixto` | Combinación de async/await con then |

## 🎯 Conceptos clave

- **Async/await**: Azúcar sintáctica sobre promesas para código más legible
- **Promesas**: Objetos que representan un valor futuro
- **Then/catch**: Encadenamiento de promesas tradicional
- **Try/catch**: Manejo de errores en funciones async
- **Promise.all**: Ejecución paralela de múltiples promesas
- **Await**: Pausa la ejecución hasta que la promesa se resuelva
- **Throw**: Lanzar errores en funciones async

## 🚀 Cómo ejecutar los tests

```bash
npx vitest src/29-async-await-promesas
```

## 📝 Notas importantes

- Las funciones async siempre retornan una promesa
- Await solo puede usarse dentro de funciones async
- Try/catch captura errores de promesas rechazadas
- Promise.all falla si alguna promesa se rechaza
- Then/catch y async/await pueden coexistir
