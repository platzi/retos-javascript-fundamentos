import { describe, it, expect } from "vitest";
const {
  accederGlobal,
  scopeFuncion,
  scopeBloque,
  accesoAnidado,
  errorScope,
  returnVsConsole,
  demostrarHoistingVar,
  templateLiteralsScope,
} = require("./challenge.js");

describe("Reto 02 - Scope en JavaScript: global, función y bloque", () => {
  describe("Reto 1: accederGlobal", () => {
    it("debe retornar el valor de la variable global", () => {
      expect(accederGlobal()).toBe("Hola mundo");
    });

    it("debe retornar un string", () => {
      expect(typeof accederGlobal()).toBe("string");
    });
  });

  describe("Reto 2: scopeFuncion", () => {
    it("debe retornar un objeto con la propiedad secreto", () => {
      const resultado = scopeFuncion();
      expect(resultado).toHaveProperty("secreto");
    });

    it("el valor de secreto debe ser '1234'", () => {
      expect(scopeFuncion().secreto).toBe("1234");
    });
  });

  describe("Reto 3: scopeBloque", () => {
    it("debe retornar el valor de la variable de bloque", () => {
      expect(scopeBloque()).toBe("bloque");
    });

    it("debe retornar un string", () => {
      expect(typeof scopeBloque()).toBe("string");
    });
  });

  describe("Reto 4: accesoAnidado", () => {
    it("debe retornar un objeto con las tres propiedades", () => {
      const resultado = accesoAnidado();
      expect(resultado).toHaveProperty("global");
      expect(resultado).toHaveProperty("funcion");
      expect(resultado).toHaveProperty("bloque");
    });

    it("global debe ser 'global'", () => {
      expect(accesoAnidado().global).toBe("global");
    });

    it("funcion debe ser 'funcion'", () => {
      expect(accesoAnidado().funcion).toBe("funcion");
    });

    it("bloque debe ser 'bloque'", () => {
      expect(accesoAnidado().bloque).toBe("bloque");
    });
  });

  describe("Reto 5: errorScope", () => {
    it("debe manejar el error de acceso a variable de bloque", () => {
      const resultado = errorScope();
      expect(resultado).toHaveProperty("error");
      expect(resultado).toHaveProperty("mensaje");
    });

    it("error debe ser true", () => {
      expect(errorScope().error).toBe(true);
    });

    it("mensaje debe ser 'Variable no accesible'", () => {
      expect(errorScope().mensaje).toBe("Variable no accesible");
    });
  });

  describe("Reto 6: returnVsConsole", () => {
    it("debe retornar 'retorno diferente'", () => {
      expect(returnVsConsole()).toBe("retorno diferente");
    });

    it("debe retornar un string", () => {
      expect(typeof returnVsConsole()).toBe("string");
    });
  });

  describe("Reto 7: demostrarHoistingVar", () => {
    it("debe retornar un objeto con antes y despues", () => {
      const resultado = demostrarHoistingVar();
      expect(resultado).toHaveProperty("antes");
      expect(resultado).toHaveProperty("despues");
    });

    it("antes debe ser undefined (hoisting)", () => {
      expect(demostrarHoistingVar().antes).toBeUndefined();
    });

    it("despues debe ser 'hoisting'", () => {
      expect(demostrarHoistingVar().despues).toBe("hoisting");
    });
  });

  describe("Reto 8: templateLiteralsScope", () => {
    it("debe retornar el mensaje completo con template literals", () => {
      expect(templateLiteralsScope()).toBe("Bienvenido Ana con rol admin en MiApp");
    });

    it("debe retornar un string", () => {
      expect(typeof templateLiteralsScope()).toBe("string");
    });
  });
});
