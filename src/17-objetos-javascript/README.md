# Reto 17: Objetos en JavaScript

## Descripción

Practica la creación y manipulación de objetos en JavaScript, incluyendo el acceso a propiedades con notación de punto y corchetes, objetos anidados, y el uso de optional chaining para evitar errores.

## Ejercicios

| # | Función | Concepto que practica |
|---|---------|----------------------|
| 1 | `crearUsuario` | Creación de objeto básico |
| 2 | `obtenerNombre` | Acceso con notación de punto |
| 3 | `obtenerPropiedadDinamica` | Acceso con notación de corchetes |
| 4 | `tieneEmail` | Verificación de propiedades |
| 5 | `obtenerCiudad` | Optional chaining |
| 6 | `crearProducto` | Objetos anidados |
| 7 | `obtenerMemoria` | Acceso a propiedades anidadas |
| 8 | `agregarPropiedad` | Propiedades dinámicas |
| 9 | `crearCalculadora` | Objetos con métodos |
| 10 | `obtenerTwitter` | Optional chaining anidado |

## Conceptos clave

- **Objetos**: Colecciones de pares clave-valor que agrupan datos relacionados
- **Notación de punto**: `objeto.propiedad` - forma directa y legible de acceder
- **Notación de corchetes**: `objeto[propiedad]` - permite claves dinámicas
- **Optional chaining**: `objeto?.propiedad` - acceso seguro que evita TypeError
- **Objetos anidados**: Objetos dentro de otros objetos
- **Propiedades dinámicas**: Agregar propiedades usando variables como nombres

## Instrucciones

1. Completa cada función en `challenge.js` según las instrucciones
2. Ejecuta los tests para verificar tus soluciones:
   ```bash
   npx vitest src/17-objetos-javascript
   ```
3. Si necesitas ayuda, puedes revisar el archivo `solved.js` para ver las soluciones

## Buenas prácticas

- Usa notación de punto para acceso directo y legible
- Usa corchetes cuando necesites claves dinámicas
- Aplica optional chaining cuando trabajes con datos que pueden faltar (APIs)
- Agrupa datos relacionados en objetos estructurados
- Usa nombres de propiedades claros y consistentes
