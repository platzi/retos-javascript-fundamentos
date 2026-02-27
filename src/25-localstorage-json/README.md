# Reto 25: LocalStorage con JSON.stringify y JSON.parse

Aprende a implementar un sistema de persistencia para tus notas usando local storage en JavaScript. Verás cómo guardar y cargar datos con JSON.stringify y JSON.parse, aplicar validaciones para evitar errores y documentar funciones con formato yesdoc.

## Tabla de ejercicios

| # | Función | Concepto que practica |
|---|---------|----------------------|
| 1 | `obtenerStorageKey` | Definir clave de almacenamiento global |
| 2 | `guardarNotas` | Guardar datos con JSON.stringify y setItem |
| 3 | `cargarNotas` | Cargar datos con getItem y JSON.parse |
| 4 | `validarYGuardar` | Validación de datos antes de guardar |
| 5 | `limpiarStorage` | Eliminar datos con removeItem |
| 6 | `existenDatos` | Verificar existencia de datos |
| 7 | `obtenerCantidadNotas` | Contar elementos almacenados |

## Conceptos clave

- **localStorage**: Almacenamiento persistente en el navegador
- **JSON.stringify**: Convertir objetos a strings para almacenamiento
- **JSON.parse**: Convertir strings a objetos para uso
- **Validación de datos**: Verificar tipos antes de procesar
- **Array.isArray**: Comprobar si un valor es un array
- **console.error**: Mostrar mensajes de error
- **setItem/getItem/removeItem**: Métodos de localStorage

## Instrucciones para ejecutar los tests

```bash
npx vitest src/25-localstorage-json
```

## Estructura del reto

1. **challenge.js**: Archivo con las funciones sin resolver (tú las completarás)
2. **solved.js**: Solución de referencia para verificar tu progreso
3. **challenge.test.js**: Tests automatizados para validar tus soluciones

## Flujo de trabajo

1. Completa cada función en `challenge.js` según las instrucciones
2. Ejecuta los tests para verificar tus soluciones
3. Si necesitas ayuda, consulta `solved.js` como referencia
4. No sobrescribas `challenge.js` con `solved.js`

¡Buena suerte con el reto!
