import { describe, it, expect } from "vitest";
const {
  extraerDatosBasicos,
  extraerNotaRenombrada,
  extraerCiudadAnidada,
  copiarProducto,
  combinarObjetos,
  agregarPropiedadesUsuario,
  obtenerClaves,
  obtenerValores,
  obtenerEntradas,
  objetoAStringArray,
} = require("./challenge.js");

describe("Reto 18 - Destructuración de objetos en JavaScript", () => {
  describe("Reto 1: extraerDatosBasicos", () => {
    it("debe retornar un array con nombre y edad", () => {
      const persona = { nombre: "Ana", edad: 28, email: "ana@example.com" };
      expect(extraerDatosBasicos(persona)).toEqual(["Ana", 28]);
    });

    it("debe funcionar con diferentes valores", () => {
      const persona = { nombre: "Carlos", edad: 35, ciudad: "Madrid" };
      expect(extraerDatosBasicos(persona)).toEqual(["Carlos", 35]);
    });
  });

  describe("Reto 2: extraerNotaRenombrada", () => {
    it("debe retornar objeto con titulo y contenido renombrados", () => {
      const nota = { ID: 1, title: "Mi nota", content: "Contenido aquí" };
      const resultado = extraerNotaRenombrada(nota);
      expect(resultado).toEqual({ titulo: "Mi nota", contenido: "Contenido aquí" });
      expect(resultado).not.toHaveProperty("title");
      expect(resultado).not.toHaveProperty("content");
    });

    it("debe funcionar con diferentes notas", () => {
      const nota = { ID: 2, title: "Otra nota", content: "Otro contenido" };
      expect(extraerNotaRenombrada(nota)).toEqual({
        titulo: "Otra nota",
        contenido: "Otro contenido",
      });
    });
  });

  describe("Reto 3: extraerCiudadAnidada", () => {
    it("debe retornar la ciudad del objeto anidado", () => {
      const usuario = {
        nombre: "Ana",
        direccion: {
          calle: "Calle Principal",
          ciudad: "Barcelona",
        },
      };
      expect(extraerCiudadAnidada(usuario)).toBe("Barcelona");
    });

    it("debe funcionar con diferentes ciudades", () => {
      const usuario = {
        nombre: "Carlos",
        direccion: {
          calle: "Avenida Central",
          ciudad: "Madrid",
        },
      };
      expect(extraerCiudadAnidada(usuario)).toBe("Madrid");
    });
  });

  describe("Reto 4: copiarProducto", () => {
    it("debe retornar una copia del objeto", () => {
      const producto = { id: 1, nombre: "Laptop", precio: 999.99 };
      const copia = copiarProducto(producto);
      expect(copia).toEqual(producto);
      expect(copia).not.toBe(producto);
    });

    it("la copia debe ser independiente del original", () => {
      const producto = { id: 1, nombre: "Laptop", precio: 999.99 };
      const copia = copiarProducto(producto);
      copia.precio = 899.99;
      expect(producto.precio).toBe(999.99);
    });
  });

  describe("Reto 5: combinarObjetos", () => {
    it("debe combinar dos objetos", () => {
      const a = { x: 1, y: 2 };
      const b = { z: 3 };
      expect(combinarObjetos(a, b)).toEqual({ x: 1, y: 2, z: 3 });
    });

    it("objetoB debe sobrescribir propiedades de objetoA", () => {
      const a = { x: 1, y: 2 };
      const b = { y: 10, z: 3 };
      expect(combinarObjetos(a, b)).toEqual({ x: 1, y: 10, z: 3 });
    });
  });

  describe("Reto 6: agregarPropiedadesUsuario", () => {
    it("debe agregar activo y rol al usuario", () => {
      const usuario = { nombre: "Ana", email: "ana@example.com" };
      const resultado = agregarPropiedadesUsuario(usuario);
      expect(resultado).toEqual({
        nombre: "Ana",
        email: "ana@example.com",
        activo: true,
        rol: "admin",
      });
    });

    it("no debe modificar el objeto original", () => {
      const usuario = { nombre: "Ana", email: "ana@example.com" };
      const copiaOriginal = { ...usuario };
      agregarPropiedadesUsuario(usuario);
      expect(usuario).toEqual(copiaOriginal);
    });
  });

  describe("Reto 7: obtenerClaves", () => {
    it("debe retornar un array con las claves del objeto", () => {
      const objeto = { a: 1, b: 2, c: 3 };
      expect(obtenerClaves(objeto)).toEqual(["a", "b", "c"]);
    });

    it("debe funcionar con objeto vacío", () => {
      expect(obtenerClaves({})).toEqual([]);
    });
  });

  describe("Reto 8: obtenerValores", () => {
    it("debe retornar un array con los valores del objeto", () => {
      const objeto = { a: 1, b: 2, c: 3 };
      expect(obtenerValores(objeto)).toEqual([1, 2, 3]);
    });

    it("debe funcionar con diferentes tipos de valores", () => {
      const objeto = { nombre: "Ana", edad: 28, activo: true };
      expect(obtenerValores(objeto)).toEqual(["Ana", 28, true]);
    });
  });

  describe("Reto 9: obtenerEntradas", () => {
    it("debe retornar un array con pares [clave, valor]", () => {
      const objeto = { a: 1, b: 2 };
      expect(obtenerEntradas(objeto)).toEqual([
        ["a", 1],
        ["b", 2],
      ]);
    });

    it("debe funcionar con objeto vacío", () => {
      expect(obtenerEntradas({})).toEqual([]);
    });
  });

  describe("Reto 10: objetoAStringArray", () => {
    it("debe transformar objeto a array de strings formateados", () => {
      const objeto = { a: 1, b: 2 };
      expect(objetoAStringArray(objeto)).toEqual(["a: 1", "b: 2"]);
    });

    it("debe funcionar con valores de tipo string", () => {
      const objeto = { nombre: "Ana", ciudad: "Madrid" };
      expect(objetoAStringArray(objeto)).toEqual(["nombre: Ana", "ciudad: Madrid"]);
    });
  });
});
