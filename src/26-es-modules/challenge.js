// ES Modules: cómo dividir código en JavaScript
// En este reto practicarás la modularidad con export e import

// Ejercicio 1: Exportar una constante
// Exporta una constante llamada PI con el valor 3.14159
export const PI = 3.14159;

// Ejercicio 2: Exportar funciones matemáticas
// Crea y exporta las funciones sumar y restar que reciben dos parámetros
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

// Ejercicio 3: Exportar una función por defecto
// Crea y exporta por defecto una función que calcule el área de un círculo
// Recibe el radio como parámetro y usa la constante PI
export default function calcularAreaCirculo(radio) {
  return PI * radio * radio;
}

// Ejercicio 4: Exportar un objeto de configuración
// Crea y exporta un objeto con configuración de una aplicación
export const config = {
  nombre: "Mi App",
  version: "1.0.0",
  tema: "oscuro",
  lenguaje: "es"
};

// Ejercicio 5: Exportar una clase
// Crea y exporta una clase llamada Usuario con constructor y método saludar
export class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  saludar() {
    return `Hola, soy ${this.nombre} y mi email es ${this.email}`;
  }
}

// Ejercicio 6: Re-exportar (export renombrado)
// Re-exporta la función sumar como addition
export { sumar as addition };

// Ejercicio 7: Exportar todo junto (export * from)
// Este ejercicio se resolverá en el archivo de pruebas

// Ejercicio 8: Crear un módulo de utilidades
// Crea funciones internas y exporta solo lo necesario
function formatearFecha(fecha) {
  return new Date(fecha).toLocaleDateString();
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Exporta un objeto con las utilidades públicas
export const utils = {
  formatearFecha,
  validarEmail
};
