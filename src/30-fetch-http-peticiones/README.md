# Reto 30 - Fetch en JavaScript: peticiones HTTP reales

## Descripción

En este reto dominarás la API `fetch` de JavaScript para realizar peticiones HTTP reales. Aprenderás a consumir APIs, manejar diferentes métodos HTTP (GET, POST, PUT, DELETE), trabajar con headers, parsear respuestas JSON y manejar errores de forma efectiva.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `obtenerProductos()` | Hacer una petición GET básica con fetch |
| 2 | `obtenerProductosParseados()` | Parsear respuesta JSON con .json() |
| 3 | `crearProducto()` | Enviar datos con método POST y headers |
| 4 | `actualizarProducto()` | Actualizar recursos con método PUT |
| 5 | `eliminarProducto()` | Eliminar recursos con método DELETE |
| 6 | `obtenerProductosConError()` | Manejar errores con .catch() |
| 7 | `verificarStatusResponse()` | Verificar códigos de estado HTTP |

## Conceptos clave

- **Fetch API**: La forma moderna de hacer peticiones HTTP en JavaScript
- **Promesas**: fetch retorna una promesa que se resuelve con la respuesta
- **Métodos HTTP**: GET (obtener), POST (crear), PUT (actualizar), DELETE (eliminar)
- **Headers**: Metadatos de la petición como Content-Type
- **Body**: Datos enviados en peticiones POST/PUT, generalmente JSON.stringify()
- **Status codes**: Códigos que indican el resultado (200=éxito, 404=no encontrado, 500=error)
- **Manejo de errores**: Usar .catch() para capturar fallos de red o del servidor

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/30-fetch-http-peticiones
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/30-fetch-http-peticiones
```

Todos los tests deben pasar en verde para completar el reto.

## Nota sobre los tests

Los tests usan `vi.fn()` para mockear la función `fetch` global, lo que permite probar la lógica sin hacer peticiones HTTP reales durante las pruebas.
