# Reto: Eventos del DOM: click, hover y keydown en JavaScript

Domina los eventos en JavaScript y la manipulación del DOM con una interfaz mínima y eficaz. Aprenderás a modelar un estado, renderizar texto con textContent y responder a click, hover y keydown usando addEventListener, funciones anónimas y el operador ternario.

## Tabla de ejercicios

| # | Función | Concepto que practica |
|---|---------|----------------------|
| 1 | `crearEstadoInicial` | Creación de objetos de estado |
| 2 | `obtenerMensajeEstado` | Condicionales y template literals |
| 3 | `renderizarEstado` | Manipulación del DOM y clases CSS |
| 4 | `configurarEventoLike` | Event listeners y click |
| 5 | `configurarEventoReset` | Event listeners y estado |
| 6 | `configurarEventosHover` | Eventos mouseenter/mouseleave |
| 7 | `configurarEventoTeclado` | Eventos de teclado y keydown |
| 8 | `inicializarAplicacion` | Orquestación de la aplicación |
| 9 | `obtenerTextoHover` | Operador ternario |
| 10 | `obtenerTituloHover` | Operador ternario |

## Conceptos clave

- **Estado centralizado**: Objeto que sincroniza la UI con las interacciones
- **addEventListener**: Método para vincular eventos a elementos del DOM
- **Funciones anónimas**: Funciones sin nombre que se ejecutan al dispararse eventos
- **Operador ternario**: Expresión condicional en una sola línea
- **textContent**: Propiedad para actualizar texto en elementos del DOM
- **classList.toggle**: Método para alternar clases CSS
- **Retornos tempranos**: Técnica para simplificar lógica condicional
- **Template literals**: Comillas invertidas para interpolación de variables

## Instrucciones para ejecutar los tests

```bash
npx vitest src/23-eventos-dom-click-hover-keydown
```

## Descripción del reto

En este reto crearás una aplicación interactiva que gestiona un sistema de likes con eventos del DOM. La aplicación debe:

1. Mantener un estado centralizado con likes y estado de hover
2. Renderizar dinámicamente la interfaz según el estado
3. Responder a eventos de click en botones
4. Detectar cuando el mouse entra y sale de una zona específica
5. Escuchar atajos de teclado para incrementar likes

Los estudiantes practicarán patrones importantes como el manejo de estado, la renderización declarativa y la configuración de eventos usando JavaScript vanilla.
