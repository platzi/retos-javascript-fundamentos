# Reto 24 - Formularios en JavaScript: preventDefault y localStorage

## Descripción

En este reto dominarás el flujo completo de un formulario en JavaScript: aprenderás a evitar recargas con `event.preventDefault()`, capturar datos con `FormData`, persistir información usando `localStorage` con JSON, y renderizar el último mensaje guardado en la interfaz.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `prevenirEnvioPorDefecto()` | Evitar el comportamiento por defecto del formulario |
| 2 | `extraerDatosFormulario()` | Extraer datos simulando FormData API |
| 3 | `guardarEnLocalStorage()` | Guardar objetos como strings JSON |
| 4 | `leerDesdeLocalStorage()` | Leer y parsear datos desde localStorage |
| 5 | `crearObjetoConTimestamp()` | Agregar timestamps ISO a objetos |
| 6 | `renderizarMensajeGuardado()` | Generar HTML dinámicamente |
| 7 | `validarFormulario()` | Validar inputs con reglas específicas |

## Conceptos clave

- **`event.preventDefault()`**: Bloquea la recarga y envío por URL del formulario.
- **`FormData` API**: Permite leer valores de formulario usando `formData.get('name')`.
- **`localStorage`**: Almacenamiento persistente en el navegador con `setItem`/`getItem`.
- **`JSON.stringify/parse`**: Convierte objetos a strings y viceversa para almacenamiento.
- **`Date.toISOString()`**: Genera timestamps consistentes y legibles.
- **Validación de inputs**: Asegura calidad de datos antes de procesarlos.

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/24-formularios-javascript
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/24-formularios-javascript
```

Todos los tests deben pasar en verde para completar el reto.
