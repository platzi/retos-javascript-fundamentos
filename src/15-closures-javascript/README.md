# Reto 15: Closures en JavaScript: estado privado en cuentas

## Descripción
Aprende a dominar los closures en JavaScript creando diferentes estructuras con estado privado. Este reto te enseñará a encapsular datos y exponer métodos seguros para mantener la consistencia del estado.

## Ejercicios

| # | Función | Concepto que practica |
|---|---------|----------------------|
| 1 | `crearCuentaBancaria` | Closure básico con estado privado |
| 2 | `crearContador` | Contador con estado encapsulado |
| 3 | `crearAcumulador` | Acumulación de valores con closure |
| 4 | `crearCarrito` | Gestión de array privado |
| 5 | `crearCache` | Objeto privado como cache |
| 6 | `crearTemporizador` | Estado con temporización |
| 7 | `crearGestorTareas` | Gestión compleja de estado |
| 8 | `crearBanco` | Múltiples instancias con closures anidados |

## Conceptos clave

- **Closure**: Función que recuerda el scope en el cual fue creada
- **Estado privado**: Variables accesibles solo a través de métodos
- **Encapsulación**: Protección de datos sensibles
- **Independencia de instancias**: Cada closure mantiene su propio estado
- **Métodos seguros**: Control de operaciones disponibles sobre el estado

## Instrucciones para ejecutar los tests

```bash
npx vitest src/15-closures-javascript
```

## Ejemplo de uso

```javascript
// Crear una cuenta bancaria
const miCuenta = crearCuentaBancaria(1000);
console.log(miCuenta.consultarSaldo());    // Saldo: $1000.
console.log(miCuenta.depositar(500));      // Depositado $500. Saldo actual: $1500.
console.log(miCuenta.retirar(200));        // Retirado $200. Saldo actual: $1300.

// Cada instancia es independiente
const otraCuenta = crearCuentaBancaria(200);
console.log(otraCuenta.consultarSaldo());   // Saldo: $200.
```
