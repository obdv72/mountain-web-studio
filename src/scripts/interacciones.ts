/*
  Las cuatro interacciones del sitio (sección 6 del brief) y el botón "Hablemos".
  Cada función busca su elemento; si la página no lo tiene, no hace nada.
  Con "reducir movimiento" activado: nada se mueve y todo queda visible.
*/

import { animate } from "motion";

const reducirMovimiento = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* 1. Palabra que cambia (Hero de Inicio): rota cada 2 segundos. */
function palabraQueCambia(): void {
  const palabra = document.querySelector<HTMLElement>("[data-palabra]");
  if (!palabra || reducirMovimiento()) return;

  const palabras = (palabra.dataset.palabras ?? "").split(",");
  let indice = 0;

  window.setInterval(async () => {
    indice = (indice + 1) % palabras.length;
    await animate(palabra, { opacity: [1, 0], y: [0, -12] }, { duration: 0.25 }).finished;
    palabra.textContent = palabras[indice];
    await animate(palabra, { opacity: [0, 1], y: [12, 0] }, { duration: 0.3 }).finished;
  }, 2000);
}

/* Botón "Hablemos" del encabezado: aparece al salir del Hero (en las otras páginas, siempre). */
function botonHablemos(): void {
  const boton = document.querySelector<HTMLElement>("[data-hablemos]");
  const hero = document.querySelector<HTMLElement>("#hero");
  if (!boton || !hero) return;

  const mostrar = (visible: boolean) => {
    boton.classList.toggle("opacity-0", !visible);
    boton.classList.toggle("pointer-events-none", !visible);
    boton.toggleAttribute("inert", !visible);
  };

  mostrar(false);
  new IntersectionObserver(([entrada]) => mostrar(!entrada.isIntersecting), {
    rootMargin: "-80px 0px 0px 0px",
  }).observe(hero);
}

/* 3. Botón HUD (pie de página): muestra u oculta la grilla. */
function botonHud(): void {
  const boton = document.querySelector<HTMLButtonElement>("[data-hud-boton]");
  if (!boton) return;

  boton.addEventListener("click", () => {
    const encendido = document.documentElement.dataset.hud !== "on";
    document.documentElement.dataset.hud = encendido ? "on" : "off";
    boton.textContent = encendido ? "HUD: ON" : "HUD: OFF";
    boton.setAttribute("aria-pressed", String(encendido));
  });
}

/* 4. Ruta del proceso (Estudio): la línea se dibuja al bajar y enciende cada estación. */
function rutaDelProceso(): void {
  const ruta = document.querySelector<HTMLElement>("[data-ruta]");
  const linea = document.querySelector<HTMLElement>("[data-ruta-linea]");
  if (!ruta || !linea) return;

  const estaciones = Array.from(ruta.querySelectorAll<HTMLElement>("[data-estacion]"));

  if (reducirMovimiento()) {
    estaciones.forEach((e) => e.setAttribute("data-encendida", ""));
    return;
  }

  const actualizar = () => {
    const caja = ruta.getBoundingClientRect();
    const punta = window.innerHeight * 0.6 - caja.top; // hasta dónde llega la línea
    const avance = Math.min(Math.max(punta / caja.height, 0), 1);
    linea.style.transform = `scaleY(${avance})`;
    estaciones.forEach((e) => e.toggleAttribute("data-encendida", e.offsetTop + 8 <= punta));
  };

  actualizar();
  window.addEventListener("scroll", actualizar, { passive: true });
  window.addEventListener("resize", actualizar);
}

/* Menú de celular: se cierra al elegir un enlace o con la tecla Escape. */
function menuCelular(): void {
  const menu = document.querySelector<HTMLDetailsElement>("[data-menu-celular]");
  if (!menu) return;
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => (menu.open = false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary")?.focus();
    }
  });
}

export function iniciarInteracciones(): void {
  palabraQueCambia();
  botonHablemos();
  botonHud();
  rutaDelProceso();
  menuCelular();
}
