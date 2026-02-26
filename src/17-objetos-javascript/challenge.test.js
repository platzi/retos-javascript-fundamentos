import { describe, it, expect } from "vitest";
const {
  crearUsuario,
  obtenerNombre,
  obtenerPropiedadDinamica,
  tieneEmail,
  obtenerCiudad,
  crearProducto,
  obtenerMemoria,
  agregarPropiedad,
  crearCalculadora,
  obtenerTwitter,
} = require("./challenge.js");

describe("Reto 17 - Objetos en JavaScript", () => {
  describe("Reto 1: crearUsuario", () => {
    it("debe retornar un objeto con nombre, edad y email", () => {
      const usuario = crearUsuario();
      expect(usuario).toHaveProperty("nombre");
      expect(usuario).toHaveProperty("edad");
      expect(usuario).toHaveProperty("email");
    });

    it("debe tener los valores correctos", () => {
      const usuario = crearUsuario();
      expect(usuario.nombre).toBe("Ana");
      expect(usuario.edad).toBe(28);
      expect(usuario.email).toBe("ana@example.com");
    });
  });

  describe("Reto 2: obtenerNombre", () => {
    it("debe retornar el nombre del usuario", () => {
      const usuario = { nombre: "Carlos", edad: 30 };
      expect(obtenerNombre(usuario)).toBe("Carlos");
    });

    it("debe funcionar con diferentes nombres", () => {
      const usuario = { nombre: "María", edad: 25 };
      expect(obtenerNombre(usuario)).toBe("María");
    });
  });

  describe("Reto 3: obtenerPropiedadDinamica", () => {
    it("debe retornar el valor de la propiedad dinámica", () => {
      const objeto = { nombre: "Juan", edad: 35, ciudad: "Madrid" };
      expect(obtenerPropiedadDinamica(objeto, "edad")).toBe(35);
      expect(obtenerPropiedadDinamica(objeto, "ciudad")).toBe("Madrid");
    });

    it("debe retornar undefined si la propiedad no existe", () => {
      const objeto = { nombre: "Juan" };
      expect(obtenerPropiedadDinamica(objeto, "edad")).toBeUndefined();
    });
  });

  describe("Reto 4: tieneEmail", () => {
    it("debe retornar true si el usuario tiene email", () => {
      const usuario = { nombre: "Ana", email: "ana@example.com" };
      expect(tieneEmail(usuario)).toBe(true);
    });

    it("debe retornar false si el usuario no tiene email", () => {
      const usuario = { nombre: "Ana", telefono: "123456" };
      expect(tieneEmail(usuario)).toBe(false);
    });
  });

  describe("Reto 5: obtenerCiudad", () => {
    it("debe retornar la ciudad si existe", () => {
      const usuario = {
        nombre: "Ana",
        direccion: {
          calle: "Calle Principal",
          ciudad: "Barcelona"
        }
      };
      expect(obtenerCiudad(usuario)).toBe("Barcelona");
    });

    it("debe retornar undefined si direccion no existe", () => {
      const usuario = { nombre: "Ana" };
      expect(obtenerCiudad(usuario)).toBeUndefined();
    });

    it("debe retornar undefined si ciudad no existe", () => {
      const usuario = {
        nombre: "Ana",
        direccion: {
          calle: "Calle Principal"
        }
      };
      expect(obtenerCiudad(usuario)).toBeUndefined();
    });
  });

  describe("Reto 6: crearProducto", () => {
    it("debe retornar un objeto con todas las propiedades", () => {
      const producto = crearProducto();
      expect(producto).toHaveProperty("id");
      expect(producto).toHaveProperty("nombre");
      expect(producto).toHaveProperty("precio");
      expect(producto).toHaveProperty("especificaciones");
    });

    it("debe tener los valores correctos", () => {
      const producto = crearProducto();
      expect(producto.id).toBe(1);
      expect(producto.nombre).toBe("Laptop");
      expect(producto.precio).toBe(999.99);
      expect(producto.especificaciones.marca).toBe("TechBrand");
      expect(producto.especificaciones.memoria).toBe("16GB");
      expect(producto.especificaciones.almacenamiento).toBe("512GB SSD");
    });
  });

  describe("Reto 7: obtenerMemoria", () => {
    it("debe retornar la memoria del producto", () => {
      const producto = {
        nombre: "Laptop",
        especificaciones: {
          marca: "TechBrand",
          memoria: "16GB",
          almacenamiento: "512GB SSD"
        }
      };
      expect(obtenerMemoria(producto)).toBe("16GB");
    });

    it("debe retornar undefined si especificaciones no existe", () => {
      const producto = { nombre: "Laptop" };
      expect(obtenerMemoria(producto)).toBeUndefined();
    });

    it("debe retornar undefined si memoria no existe", () => {
      const producto = {
        nombre: "Laptop",
        especificaciones: {
          marca: "TechBrand",
          almacenamiento: "512GB SSD"
        }
      };
      expect(obtenerMemoria(producto)).toBeUndefined();
    });
  });

  describe("Reto 8: agregarPropiedad", () => {
    it("debe agregar la propiedad al objeto", () => {
      const objeto = { nombre: "Juan" };
      const resultado = agregarPropiedad(objeto, "edad", 30);
      expect(resultado).toHaveProperty("edad", 30);
      expect(resultado.nombre).toBe("Juan");
    });

    it("debe sobrescribir si la propiedad ya existe", () => {
      const objeto = { nombre: "Juan", edad: 25 };
      const resultado = agregarPropiedad(objeto, "edad", 30);
      expect(resultado.edad).toBe(30);
    });
  });

  describe("Reto 9: crearCalculadora", () => {
    it("debe retornar un objeto con valor inicial 0", () => {
      const calc = crearCalculadora();
      expect(calc.valor).toBe(0);
      expect(typeof calc.sumar).toBe("function");
      expect(typeof calc.restar).toBe("function");
      expect(typeof calc.obtenerValor).toBe("function");
    });

    it("debe sumar correctamente", () => {
      const calc = crearCalculadora();
      calc.sumar(5);
      expect(calc.obtenerValor()).toBe(5);
      calc.sumar(3);
      expect(calc.obtenerValor()).toBe(8);
    });

    it("debe restar correctamente", () => {
      const calc = crearCalculadora();
      calc.sumar(10);
      calc.restar(3);
      expect(calc.obtenerValor()).toBe(7);
      calc.restar(7);
      expect(calc.obtenerValor()).toBe(0);
    });
  });

  describe("Reto 10: obtenerTwitter", () => {
    it("debe retornar el twitter si existe", () => {
      const usuario = {
        nombre: "Ana",
        perfil: {
          redes: {
            twitter: "@ana_dev",
            instagram: "@ana_insta"
          }
        }
      };
      expect(obtenerTwitter(usuario)).toBe("@ana_dev");
    });

    it("debe retornar 'no-disponible' si perfil no existe", () => {
      const usuario = { nombre: "Ana" };
      expect(obtenerTwitter(usuario)).toBe("no-disponible");
    });

    it("debe retornar 'no-disponible' si redes no existe", () => {
      const usuario = {
        nombre: "Ana",
        perfil: {
          bio: "Desarrolladora"
        }
      };
      expect(obtenerTwitter(usuario)).toBe("no-disponible");
    });

    it("debe retornar 'no-disponible' si twitter no existe", () => {
      const usuario = {
        nombre: "Ana",
        perfil: {
          redes: {
            instagram: "@ana_insta"
          }
        }
      };
      expect(obtenerTwitter(usuario)).toBe("no-disponible");
    });
  });
});
