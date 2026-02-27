function obtenerProductos() {
  const FAKE_API = 'https://api.escuelajs.co/api/v1/products';
  return fetch(FAKE_API);
}

function obtenerProductosParseados() {
  const FAKE_API = 'https://api.escuelajs.co/api/v1/products';
  return fetch(FAKE_API).then((response) => response.json());
}

function crearProducto(title, price, description) {
  const FAKE_API = 'https://api.escuelajs.co/api/v1/products';
  return fetch(FAKE_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      price,
      description,
    }),
  });
}

function actualizarProducto(id, title, price) {
  const FAKE_API = 'https://api.escuelajs.co/api/v1/products';
  return fetch(`${FAKE_API}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      price,
    }),
  });
}

function eliminarProducto(id) {
  const FAKE_API = 'https://api.escuelajs.co/api/v1/products';
  return fetch(`${FAKE_API}/${id}`, {
    method: 'DELETE',
  });
}

function obtenerProductosConError() {
  const FAKE_API = 'https://api.escuelajs.co/api/v1/products';
  return fetch(FAKE_API).catch((error) => {
    return { error: true, message: 'Error al obtener productos' };
  });
}

function verificarStatusResponse() {
  const FAKE_API = 'https://api.escuelajs.co/api/v1/products';
  return fetch(FAKE_API).then((response) => {
    if (response.status !== 200) {
      throw new Error('Status no es 200');
    }
    return response;
  });
}

export {
  obtenerProductos,
  obtenerProductosParseados,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
  obtenerProductosConError,
  verificarStatusResponse,
};
