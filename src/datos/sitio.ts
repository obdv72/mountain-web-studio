/*
  Datos generales del sitio, en un solo lugar.
  Salen del brief (pack/brief.md): secciones 1, 6, 7, 8 y 10.
  Encabezado, pie de página y <head> leen de aquí: si cambias algo, cambia en todo el sitio.
*/

export const sitio = {
  nombre: "Mountain Web Studio",
  descripcion:
    "Mountain Web Studio diseña sitios web para artistas, estudios creativos, académicos y Pymes boutique de Ecuador. Muestra tu trabajo al mundo.",
  correo: "hola@mountainweb.studio",
  pie: "Mountain Web Studio · Quito, Ecuador · Lunes a viernes, 9:00 a 18:00 · © 2026",
  animacion: "marcada" as "ninguna" | "sutil" | "marcada",
};

/*
  Tipo de menú (sección 7 del brief):
  - "barra": enlaces siempre visibles (en celular bajan a otra línea si no caben).
  - "desplegable": botón "Menú" en celular y tablet; barra desde computadora.
  - "desplegable-siempre": botón "Menú" en todas las pantallas.
  fijo: true = el encabezado queda pegado arriba al bajar.
*/
export const encabezado = {
  menu: "desplegable" as "barra" | "desplegable" | "desplegable-siempre",
  fijo: true,
};

/* Menú principal: un enlace por página del mapa del sitio (sección 8 del brief). */
export const menu: { texto: string; href: string }[] = [
  { texto: "Inicio", href: "/" },
  { texto: "Proyectos", href: "/proyectos" },
  { texto: "Estudio", href: "/estudio" },
  { texto: "Planes", href: "/planes" },
];

/* Redes sociales (sección 10 del brief). Vacío = no se muestran. */
export const redes: { nombre: string; href: string }[] = [
  { nombre: "Instagram", href: "https://instagram.com/mountainwebstudio" },
  { nombre: "Behance", href: "https://behance.net/mountainwebstudio" },
  { nombre: "LinkedIn", href: "https://linkedin.com/company/mountainwebstudio" },
];

/* WhatsApp (sección 9 del brief): número sin "+" ni espacios y mensaje precargado. */
export const whatsapp = {
  numero: "593990000000",
  mensaje: "Hola, quiero un sitio web para mi trabajo.",
};

/* Enlace de WhatsApp con el mensaje ya escrito. */
export function enlaceWhatsApp(mensaje: string = whatsapp.mensaje): string {
  return `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;
}
