# ES Modules: cómo dividir código en JavaScript

Aprende a modularizar tu código JavaScript usando ES Modules (ESM), el estándar moderno para organizar y reutilizar código tanto en navegador como en Node.js.

## 📋 Ejercicios

| # | Función/Concepto | Descripción |
|---|------------------|-------------|
| 1 | `PI` | Exportar una constante |
| 2 | `sumar`, `restar` | Exportar funciones nombradas |
| 3 | `calcularAreaCirculo` | Exportar función por defecto |
| 4 | `config` | Exportar un objeto de configuración |
| 5 | `Usuario` | Exportar una clase con métodos |
| 6 | `addition` | Re-exportar con alias (export as) |
| 8 | `utils` | Crear módulo de utilidades encapsulado |

## 🎯 Conceptos Clave

- **Export nombrado**: `export const nombre = valor`
- **Export por defecto**: `export default function() {}`
- **Import nombrado**: `import { nombre } from './modulo'`
- **Import por defecto**: `import nombre from './modulo'`
- **Re-export**: `export { original as nuevo }`
- **Encapsulamiento**: Exponer solo lo necesario

## 🚀 Instrucciones

1. **Resuelve los ejercicios** en `challenge.js`
2. **Ejecuta los tests** para verificar tu progreso:
   ```bash
   npx vitest src/26-es-modules
   ```
3. **Compara con la solución** en `solved.js` si necesitas ayuda

## 💡 Tips

- Usa `export` para funciones, constantes, clases y objetos
- Usa `export default` para el elemento principal del módulo
- Importa solo lo que necesitas para mantener el código limpio
- Agrupa funcionalidades relacionadas en el mismo módulo
- Los nombres de archivo deben coincidir exactamente en los imports

## 🔧 Requisitos

- Node.js con `"type": "module"` en package.json
- Conocimiento básico de funciones y objetos en JavaScript
