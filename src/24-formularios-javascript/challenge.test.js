import { describe, it, expect } from "vitest";
const {
  prevenirEnvioPorDefecto,
  extraerDatosFormulario,
  guardarEnLocalStorage,
  leerDesdeLocalStorage,
  crearObjetoConTimestamp,
  renderizarMensajeGuardado,
  validarFormulario,
} = require("./challenge.js");

describe("Reto 24 - Formularios en JavaScript", () => {
  describe("Reto 1: prevenirEnvioPorDefecto", () => {
    it("debe agregar preventDefault true al evento", () => {
      const evento = {};
      const resultado = prevenirEnvioPorDefecto(evento);
      expect(resultado.preventDefault).toBe(true);
    });

    it("debe retornar el mismo objeto modificado", () => {
      const evento = { target: "form" };
      const resultado = prevenirEnvioPorDefecto(evento);
      expect(resultado).toBe(evento);
    });
  });

  describe("Reto 2: extraerDatosFormulario", () => {
    it("debe extraer name y message del formulario", () => {
      const formulario = { name: "Juan", message: "Hola mundo" };
      const resultado = extraerDatosFormulario(formulario);
      expect(resultado).toEqual({ name: "Juan", message: "Hola mundo" });
    });

    it("debe manejar valores vacíos", () => {
      const formulario = { name: "", message: "" };
      const resultado = extraerDatosFormulario(formulario);
      expect(resultado).toEqual({ name: "", message: "" });
    });
  });

  describe("Reto 3: guardarEnLocalStorage", () => {
    it("debe simular el guardado sin errores", () => {
      const datos = { name: "Test", message: "Mensaje de prueba" };
      expect(() => guardarEnLocalStorage(datos)).not.toThrow();
    });
  });

  describe("Reto 4: leerDesdeLocalStorage", () => {
    it("debe retornar null (simulación)", () => {
      const resultado = leerDesdeLocalStorage();
      expect(resultado).toBeNull();
    });
  });

  describe("Reto 5: crearObjetoConTimestamp", () => {
    it("debe crear objeto con timestamp ISO", () => {
      const nombre = "Ana";
      const mensaje = "Mensaje de prueba";
      const resultado = crearObjetoConTimestamp(nombre, mensaje);
      
      expect(resultado).toHaveProperty("name", nombre);
      expect(resultado).toHaveProperty("message", mensaje);
      expect(resultado).toHaveProperty("date");
      expect(typeof resultado.date).toBe("string");
      
      // Verificar formato ISO
      const fecha = new Date(resultado.date);
      expect(fecha.toISOString()).toBe(resultado.date);
    });
  });

  describe("Reto 6: renderizarMensajeGuardado", () => {
    it("debe renderizar HTML con los datos", () => {
      const datos = { name: "Carlos", message: "Hola a todos" };
      const resultado = renderizarMensajeGuardado(datos);
      
      expect(resultado).toContain("Carlos");
      expect(resultado).toContain("Hola a todos");
      expect(resultado).toContain("Último mensaje guardado");
      expect(resultado).toContain("Nombre:");
      expect(resultado).toContain("Mensaje:");
    });

    it("debe retornar string vacío si no hay datos", () => {
      const resultado = renderizarMensajeGuardado(null);
      expect(resultado).toBe("");
    });

    it("debe manejar datos vacíos", () => {
      const resultado = renderizarMensajeGuardado({});
      expect(resultado).toContain("Último mensaje guardado");
    });
  });

  describe("Reto 7: validarFormulario", () => {
    it("debe validar datos correctos", () => {
      const resultado = validarFormulario("Juan", "Este es un mensaje válido");
      expect(resultado.valido).toBe(true);
      expect(resultado.errores).toHaveLength(0);
    });

    it("debe rechazar nombre muy corto", () => {
      const resultado = validarFormulario("J", "Mensaje válido");
      expect(resultado.valido).toBe(false);
      expect(resultado.errores).toContain("El nombre debe tener al menos 2 caracteres");
    });

    it("debe rechazar mensaje muy corto", () => {
      const resultado = validarFormulario("Juan", "Corto");
      expect(resultado.valido).toBe(false);
      expect(resultado.errores).toContain("El mensaje debe tener al menos 10 caracteres");
    });

    it("debe rechazar ambos campos inválidos", () => {
      const resultado = validarFormulario("", "");
      expect(resultado.valido).toBe(false);
      expect(resultado.errores).toHaveLength(2);
      expect(resultado.errores).toContain("El nombre debe tener al menos 2 caracteres");
      expect(resultado.errores).toContain("El mensaje debe tener al menos 10 caracteres");
    });

    it("debe manejar valores nulos o undefined", () => {
      const resultado1 = validarFormulario(null, "Mensaje válido");
      expect(resultado1.valido).toBe(false);
      
      const resultado2 = validarFormulario("Juan", null);
      expect(resultado2.valido).toBe(false);
    });
  });
});
