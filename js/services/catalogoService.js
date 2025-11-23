export async function cargarCatalogo() {
    const respuesta = await fetch("js/data/catalogo.json");
  
    if (!respuesta.ok) {
      throw new Error("No se pudo cargar el catálogo de café");
    }
  
    const datos = await respuesta.json();
    return datos;
  }  