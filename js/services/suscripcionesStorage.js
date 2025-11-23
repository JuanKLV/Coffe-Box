const CLAVE_STORAGE = "coffeeBox_suscripciones";

export function obtenerSuscripciones() {
  const texto = localStorage.getItem(CLAVE_STORAGE);
  if (!texto) return [];
  try {
    return JSON.parse(texto);
  } catch (e) {
    console.warn("Error parseando suscripciones, se reinicia la lista", e);
    return [];
  }
}

export function guardarSuscripcion(suscripcionBase) {
  const suscripciones = obtenerSuscripciones();

  const nuevaSuscripcion = {
    id: generarIdSuscripcion(),
    creadaEn: new Date().toISOString(),
    ...suscripcionBase,
  };

  suscripciones.push(nuevaSuscripcion);
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(suscripciones));

  return nuevaSuscripcion;
}

function generarIdSuscripcion() {
  if (window.crypto && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return "sub_" + Date.now();
}
