# Brief de la marca

> **Estudiante:** este archivo lo genera la IA (fase 2) a partir de tu plan aprobado. Revísalo antes de usar Cline: todo lo que dice aquí es lo que se va a construir.
> Si algo queda pendiente, decídelo tú y pídele a la IA que lo actualice.
>
> **Agente:** este brief es la única fuente de decisiones de diseño y contenido.
> Si un campo que necesitas está pendiente o vacío, **detente y pregunta**: no inventes, no busques en otros archivos, no supongas.
> Copia los textos tal cual están escritos (no los reescribas ni "mejores").

## 1. Marca

| Campo | Decisión |
| --- | --- |
| Nombre de la marca | Mountain Web Studio |
| Tipo | mi propio estudio |
| Qué hace, en una frase | Diseña sitios web a medida que transmiten autoridad, atraen clientes internacionales y respaldan postulaciones a fondos. |
| Para quién es (público) | Artistas independientes, estudios creativos, académicos e investigadores, y Pymes boutique de Ecuador. |
| Personalidad (3 adjetivos) | directo, editorial, preciso |
| Eslogan | Muestra tu trabajo al mundo. |
| Descripción para Google (máx. 155 caracteres) | Mountain Web Studio diseña sitios web para artistas, estudios creativos, académicos y Pymes boutique de Ecuador. Muestra tu trabajo al mundo. |

## 2. Referencias

Qué tomar de cada sitio de referencia (las capturas están en el plan, `pack/plan.pdf`).

| Ref | Sitio | Detalle que tomamos | Dónde se aplica |
| --- | --- | --- | --- |
| 1a | Locomotive · https://locomotive.ca | Lista de proyectos con nombres gigantes separados por líneas finas y una imagen pequeña intercalada dentro del texto. | Inicio, sección Proyectos destacados |
| 1b | Locomotive · https://locomotive.ca | Pie con columnas (Menú, Redes, Contacto) bajo una línea de 1px y datos de contacto en tipografía enorme. | Pie de página de todo el sitio |
| 2a | Obys · https://obys.agency | Grid editorial asimétrico: la ficha del proyecto en columnas de texto pequeño junto a una imagen grande. | Proyectos, sección Casos de estudio |
| 2b | Obys · https://obys.agency | Menú mínimo en línea, con los enlaces separados por comas y el contacto aislado a la derecha. | Encabezado de todo el sitio |

## 3. Paleta de color

Exactamente estos 7 colores, en hex (`#1a1a1a`). No se agregan otros.
`npm run verificar` exige contraste 4.5:1 o más en: `texto` sobre `fondo` y `superficie`, `texto-suave` sobre `fondo`, `marca-contraste` sobre `marca`.

| Token | Hex | Para qué se usa |
| --- | --- | --- |
| `fondo` | #0b0b0a | Fondo de toda la página |
| `superficie` | #141412 | Tarjetas de planes y bloques destacados |
| `texto` | #e6e0d2 | Texto principal (hueso) |
| `texto-suave` | #9c9586 | Rótulos, metadatos y texto secundario |
| `borde` | #3a3731 | Líneas de 1px y bordes |
| `marca` | #efe8d8 | Botones, plan destacado, foco, línea del proceso |
| `marca-contraste` | #0b0b0a | Texto encima del color de marca |

El sitio es oscuro fijo: no tiene modo claro.

## 4. Tipografías

Archivos (`.woff2`, `.woff`, `.ttf` u `.otf`) en `pack/fuentes/`. Solo fuentes con licencia libre.

| Uso | Nombre de la fuente | Archivo(s) en `pack/fuentes/` | Grosores |
| --- | --- | --- | --- |
| Títulos (h1, h2, titulares, siempre en MAYÚSCULAS) | Anton | `pack/fuentes/anton-400.woff2` | 400 |
| Texto (párrafos, menú, rótulos, h3) | Hanken Grotesk | `pack/fuentes/hanken-grotesk-400.woff2`, `pack/fuentes/hanken-grotesk-500.woff2` | 400 y 500 |

Los rótulos pequeños van en Hanken Grotesk, en mayúsculas y con espaciado amplio entre letras. Licencia de las dos: OFL (Fontsource).

## 5. Forma

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Esquinas (`radio`) | `0px` recto · `4px` · `8px` · `16px` · `9999px` píldora | `0px` |
| Grosor de borde | `0px` sin borde · `1px` · `2px` · `3px` | `1px` |
| Sombra | `none` · suave `0 4px 12px rgb(0 0 0 / 0.12)` · dura `4px 4px 0 0 <hex de borde>` | `none` |
| Ancho máximo del contenido | `max-w-3xl` estrecho · `max-w-5xl` medio · `max-w-7xl` ancho | `max-w-7xl` |

Detalles de estilo:

- Colores planos. Ningún gradiente en todo el sitio.
- Grano fino estático sobre todo el sitio.
- Todas las imágenes llevan marcas de encuadre en las cuatro esquinas (líneas de 1px en color texto) y un rótulo pequeño arriba a la izquierda.
- Mucho espacio vertical entre secciones.

## 6. Animación

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Intensidad | `ninguna` · `sutil` · `marcada` | `marcada` |

- Los títulos y bloques aparecen con un desvanecido y una subida corta al entrar en pantalla.
- Prohibido: scroll secuestrado o suave, WebGL, pantallas de carga, cursor personalizado.
- Con "reducir movimiento" activado en el sistema: ninguna animación y todo visible.

Cuatro interacciones del sitio:

1. **Palabra que cambia (Hero de Inicio):** en el título "MUESTRA TU [OBRA] AL MUNDO", la palabra entre corchetes rota sola cada 2 segundos entre OBRA, MÚSICA, INVESTIGACIÓN, ESTUDIO y MARCA. Va en letra de contorno (solo el borde, en color marca).
2. **Imagen intercalada (Proyectos destacados de Inicio):** en computadora, al pasar el mouse sobre el nombre de un proyecto, las palabras se separan y aparece una imagen pequeña del proyecto en medio del nombre. En celular la imagen se ve siempre, encima del nombre.
3. **Botón HUD (pie de página):** un botón pequeño "HUD: OFF". Al activarlo cambia a "HUD: ON" y muestra sobre todo el sitio las columnas de la grilla en líneas finas (12 en computadora, 4 en celular).
4. **Ruta del proceso (Estudio):** al bajar por la sección, una línea vertical en color marca se dibuja hacia abajo y enciende cada estación al llegar a ella.

## 7. Logo y menú

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Logo (archivo en `pack/logos/` + texto alternativo) | o "sin logo, solo nombre" | `pack/logos/logo.svg`, a la izquierda del nombre "MOUNTAIN WEB STUDIO" en Anton. Texto alternativo: vacío (el nombre ya está escrito al lado). |
| Tipo de menú | `barra` · `desplegable` · `desplegable-siempre` | `desplegable` |
| Encabezado fijo arriba al bajar | `sí` · `no` | `sí` |

- **Computadora:** logo y nombre a la izquierda · menú en línea "Inicio, Proyectos, Estudio, Planes" (la página actual subrayada) · botón "Hablemos" a la derecha, que aparece al salir del Hero.
- **Celular:** logo y nombre + botón "Menú", que abre la lista a pantalla completa.
- **Botón del encabezado:** Hablemos → WhatsApp.
- **En todas las páginas:** botón flotante de WhatsApp, solo en celular: un cuadrado en color marca abajo a la derecha.

## 8. Mapa del sitio

Una fila por página. La primera es Inicio.

| Página | Ruta | Archivo | Texto en el menú | Título de la pestaña |
| --- | --- | --- | --- | --- |
| Inicio | `/` | `src/pages/index.astro` | Inicio | Mountain Web Studio · Muestra tu trabajo al mundo |
| Proyectos | `/proyectos` | `src/pages/proyectos.astro` | Proyectos | Proyectos · Mountain Web Studio |
| Estudio | `/estudio` | `src/pages/estudio.astro` | Estudio | Estudio · Mountain Web Studio |
| Planes | `/planes` | `src/pages/planes.astro` | Planes | Planes · Mountain Web Studio |

Grilla de 12 columnas en computadora y una columna en celular.

## 9. Contenido por página

Una sub-sección por página del mapa, y dentro sus secciones en orden de arriba hacia abajo.
La **disposición** describe el boceto en palabras (el agente no ve imágenes).
La primera sección de Inicio lleva el título principal (`<h1>`); en las demás páginas, la primera sección también lleva el `<h1>` de esa página.

**WhatsApp:** +593 99 000 0000 · mensaje precargado: "Hola, quiero un sitio web para mi trabajo."

### Común a todas las páginas: Llamado final (se repite al cierre de cada página)

- **id:** llamado-final
- **Título:** HABLEMOS DE TU PROYECTO
- **Texto:** Tomamos dos proyectos nuevos por mes.
- **Elementos:** ninguno
- **Imágenes:** ninguna
- **Botones:** Escríbenos por WhatsApp → WhatsApp
- **Disposición:** celular: igual, apilado / computadora: título gigante centrado · texto · botón principal
- **Referencia aplicada:** ninguna

### Página: Inicio (`/`)

#### Sección: Hero

- **id:** hero
- **Título:** MUESTRA TU OBRA AL MUNDO (palabras que rotan: OBRA, MÚSICA, INVESTIGACIÓN, ESTUDIO, MARCA)
- **Rótulo:** Estudio web · Quito
- **Texto:** Sitios web a medida para artistas, estudios creativos, académicos y Pymes boutique.
- **Elementos:** ninguno
- **Imágenes:** ninguna (Hero tipográfico)
- **Botones:** Escríbenos por WhatsApp → WhatsApp · Ver proyectos → página Proyectos
- **Disposición:** celular: título apilado y más pequeño · texto · botones a todo el ancho / computadora: rótulo pequeño arriba · título gigante en 3 líneas (MUESTRA TU / [OBRA] / AL MUNDO) · abajo, el texto a la izquierda y a la derecha el botón principal y el enlace "Ver proyectos"
- **Referencia aplicada:** ninguna

#### Sección: Clientes

- **id:** clientes
- **Título:** ninguno
- **Rótulo:** Han confiado en nosotros
- **Texto:** ninguno
- **Elementos:** Sesiones Al Parque · Tania Cortés Becerra · Mountain Studio Lab · Ana Cristina Torres
- **Imágenes:** ninguna
- **Botones:** ninguno
- **Disposición:** celular: rótulo arriba, nombres debajo / computadora: rótulo a la izquierda · nombres en línea separados por "·"
- **Referencia aplicada:** ninguna

#### Sección: Problema

- **id:** problema
- **Título:** TU TRABAJO ES BUENO. TU WEB NO LO DICE.
- **Texto:** ninguno
- **Elementos:**
  1. Clientes de fuera que no te encuentran: si no apareces bien en Google, las consultas internacionales se van a otro.
  2. Fondos que piden un portafolio serio: becas y convocatorias revisan tu presencia en línea antes de leer tu propuesta.
  3. Proyectos perdidos entre redes: Instagram muestra lo último, no lo mejor. Tu mejor trabajo queda enterrado.
- **Imágenes:** ninguna
- **Botones:** ninguno
- **Disposición:** celular: apilado / computadora: título gigante en las columnas 1 a 7 · a la derecha, 3 puntos numerados 01, 02, 03, cada uno con una línea encima
- **Referencia aplicada:** ninguna

#### Sección: Proyectos destacados

- **id:** proyectos-destacados
- **Título:** ninguno
- **Rótulo:** Proyectos destacados
- **Texto:** ninguno
- **Elementos:**
  1. Sesiones Al Parque: plataforma de música en espacios públicos · Quito
  2. Tania Cortés Becerra: compositora y artista multimedia
  3. Mountain Studio Lab: estudio de arte multimedia · Quito
- **Imágenes:** `pack/imagenes/sesiones-al-parque.jpg` (alt: "Página de inicio del sitio de Sesiones Al Parque") · `pack/imagenes/tania-cortes-becerra.jpg` (alt: "Página de biografía del sitio de Tania Cortés Becerra") · `pack/imagenes/mountain-studio-lab.jpg` (alt: "Lista de obras del sitio de Mountain Studio Lab")
- **Botones:** Ver todos los proyectos → página Proyectos
- **Disposición:** celular: imagen encima de cada nombre, siempre visible / computadora: rótulo · 3 nombres gigantes centrados con líneas de 1px entre ellos · imagen intercalada al pasar el mouse · enlace "Ver todos los proyectos" a la derecha
- **Referencia aplicada:** 1a

#### Sección: Llamado final

- Ver "Común a todas las páginas: Llamado final".

### Página: Proyectos (`/proyectos`)

#### Sección: Encabezado de página

- **id:** encabezado
- **Título:** PROYECTOS
- **Rótulo:** Mountain Web Studio
- **Texto:** Cada proyecto es una historia de reto, solución y resultado.
- **Elementos:** ninguno
- **Imágenes:** ninguna
- **Botones:** ninguno
- **Disposición:** celular: apilado / computadora: rótulo · título gigante a la izquierda · texto a la derecha
- **Referencia aplicada:** ninguna

#### Sección: Casos de estudio

- **id:** casos
- **Título:** ninguno
- **Rótulo:** Casos de estudio
- **Texto:** ninguno. Los casos no llevan métricas ni testimonios: cada caso debe verse completo sin ellos.
- **Elementos:**
  1. **Caso 01 · Sesiones Al Parque.** Título: Sitio para Sesiones Al Parque. Cliente: Sesiones Al Parque · Plataforma de música en espacios públicos · Quito. Reto: reunir más de una década de sesiones y abrir canales para artistas, donantes y auspiciantes. Solución: un sitio con el archivo de sesiones, la serie Bajo Tierra y secciones para aplicar, donar y auspiciar. Resultado: un solo lugar para el archivo desde 2012 y las convocatorias. Enlace: Ver sitio → https://sesionesalparque.com
  2. **Caso 02 · Tania Cortés Becerra.** Título: Portafolio para Tania Cortés Becerra. Cliente: Tania Cortés Becerra · Compositora y artista multimedia. Reto: presentar una obra experimental ante festivales y curadores internacionales. Solución: un portafolio en inglés con biografía, obras, noticias y contacto. Resultado: un sitio que acompaña una trayectoria con participación en la Biennale Musica de Venecia (2022 y 2023). Enlace: Ver sitio → https://taniacortesbecerra.com
  3. **Caso 03 · Mountain Studio Lab.** Título: Sitio para Mountain Studio Lab. Cliente: Mountain Studio Lab · Estudio de arte multimedia · Quito. Reto: mostrar instalaciones, conciertos y performances en varios países sin perder claridad. Solución: un archivo de obras ordenado por formato, año y ciudad, con un taller y una página del estudio. Resultado: un portafolio con obras desde 2019 en Ecuador, Francia, España e Italia. Enlace: Ver sitio → https://mountainstudiolab.com
  4. **Caso 04 · Ana Cristina Torres.** Título: Sitio académico para Ana Cristina Torres. Cliente: Ana Cristina Torres · Docente e investigadora socio-ecológica. Reto: comunicar una investigación que cruza antropología, ecología y métodos creativos, más allá de las revistas académicas. Solución: un sitio sobrio con una portada de presentación y una sección de trabajo. Resultado: una presencia académica propia para compartir su investigación sobre naturaleza urbana. Enlace: Ver sitio → https://actorres.com
- **Imágenes:**
  1. `pack/imagenes/sesiones-al-parque.jpg` · alt: "La página de inicio del sitio de Sesiones Al Parque" · rótulo: CASO 01 · ARCHIVO
  2. `pack/imagenes/tania-cortes-becerra.jpg` · alt: "La página de biografía del sitio de Tania Cortés Becerra" · rótulo: CASO 02 · ARCHIVO
  3. `pack/imagenes/mountain-studio-lab.jpg` · alt: "La lista de obras del sitio de Mountain Studio Lab" · rótulo: CASO 03 · ARCHIVO
  4. `pack/imagenes/ana-cristina-torres.jpg` · alt: "La portada del sitio de Ana Cristina Torres con su presentación" · rótulo: CASO 04 · ARCHIVO
- **Botones:** Ver sitio → enlace de cada caso
- **Disposición:** celular: imagen arriba, ficha abajo / computadora: cada caso en una fila: imagen grande en las columnas 1 a 8 y ficha en las 9 a 12 (cliente, título, reto, solución, resultado, enlace) · línea de 1px entre casos
- **Referencia aplicada:** 2a

#### Sección: Llamado final

- Ver "Común a todas las páginas: Llamado final".

### Página: Estudio (`/estudio`)

#### Sección: Encabezado de página

- **id:** encabezado
- **Título:** ESTUDIO
- **Rótulo:** Mountain Web Studio
- **Texto:** Un estudio pequeño en Quito, para trabajo que merece verse bien.
- **Elementos:** ninguno
- **Imágenes:** ninguna
- **Botones:** ninguno
- **Disposición:** celular: apilado / computadora: rótulo · título gigante · texto
- **Referencia aplicada:** ninguna

#### Sección: Equipo

- **id:** equipo
- **Título:** QUIÉN SUBE CONTIGO
- **Texto:** Un equipo pequeño. Dos integrantes, cero plantillas genéricas.
- **Elementos:**
  1. DS285A001 · Diseño y dirección de arte: defiende cada espacio en blanco como si fuera suyo. Nunca ha usado un degradado.
  2. DV285B002 · Desarrollo y código: hace que todo cargue rápido y funcione en cualquier pantalla. Revisa el contraste por diversión.
- **Imágenes:**
  1. `pack/imagenes/equipo-ds285a001.jpg` · alt: "Silueta de una persona a contraluz, sin rostro visible, en blanco y negro con grano" · rótulo: OPERADOR 01
  2. `pack/imagenes/equipo-dv285b002.jpg` · alt: "Silueta de una persona de perfil en sombra, sin rostro visible, en blanco y negro con grano" · rótulo: OPERADOR 02
- **Botones:** ninguno
- **Disposición:** celular: integrantes apilados / computadora: título y texto · dos columnas, una por integrante: foto, código, rol y texto
- **Referencia aplicada:** ninguna

#### Sección: Proceso

- **id:** proceso
- **Título:** LA RUTA
- **Texto:** Cuatro etapas, del diagnóstico al lanzamiento.
- **Elementos (estaciones):**
  1. Campo base · 2.850 m · Diagnóstico: conversamos sobre tu trabajo, tu público y tus metas, y definimos qué debe lograr el sitio.
  2. Campo 1 · 3.800 m · Contenido: ordenamos textos, imágenes y proyectos; decidimos qué se muestra y en qué orden.
  3. Campo 2 · 4.800 m · Diseño y desarrollo: diseñamos y construimos el sitio, y lo revisas en cada avance.
  4. Cumbre · 6.263 m · Lanzamiento: publicamos, te enseñamos a actualizarlo y el sitio queda a tu nombre.
- **Imágenes:** ninguna
- **Botones:** ninguno
- **Disposición:** celular: línea pegada al borde izquierdo, estaciones a su derecha / computadora: título y texto · línea vertical hacia la columna 3 · estaciones a su derecha: altitud (rótulo), nombre (h3) y descripción
- **Referencia aplicada:** ninguna

#### Sección: Llamado final

- Ver "Común a todas las páginas: Llamado final".

### Página: Planes (`/planes`)

#### Sección: Encabezado de página

- **id:** encabezado
- **Título:** PLANES
- **Rótulo:** Mountain Web Studio
- **Texto:** Elige la ruta según hasta dónde quieres llegar.
- **Elementos:** ninguno
- **Imágenes:** ninguna
- **Botones:** ninguno
- **Disposición:** celular: apilado / computadora: rótulo · título gigante · texto
- **Referencia aplicada:** ninguna

#### Sección: Oferta

- **id:** oferta
- **Título:** UNA INVERSIÓN, NO UN GASTO
- **Texto:** ninguno
- **Elementos:**
  1. Autoridad: te toman en serio desde el primer clic.
  2. Alcance: clientes y curadores de otros países te encuentran.
  3. Respaldo: tu sitio sostiene postulaciones a fondos, becas y residencias.
- **Imágenes:** ninguna
- **Botones:** ninguno
- **Disposición:** celular: apilados / computadora: título · 3 beneficios en columnas con línea encima
- **Referencia aplicada:** ninguna

#### Sección: Planes

- **id:** planes
- **Título:** ninguno
- **Rótulo:** Planes
- **Texto:** ninguno (precios en USD)
- **Elementos:**
  1. Esencial · $450: Sitio de una página · Presentación, trabajo y contacto · Adaptado a celular · Entrega en 2 semanas. Botón: Elegir Esencial → WhatsApp con "Hola, me interesa el plan Esencial."
  2. Profesional · $950 · rótulo "Recomendado" · tarjeta destacada: Hasta 5 páginas · Portafolio con fichas de proyecto · Español e inglés · Posicionamiento básico en Google · Entrega en 4 semanas. Botón: Elegir Profesional → WhatsApp con "Hola, me interesa el plan Profesional."
  3. Integral · $1.800: Todo lo del plan Profesional · Páginas ilimitadas y casos de estudio · Textos y estructura de contenido · Capacitación y 3 meses de soporte · Entrega en 6 semanas. Botón: Elegir Integral → WhatsApp con "Hola, me interesa el plan Integral."
- **Imágenes:** ninguna
- **Botones:** los de cada plan
- **Disposición:** celular: apiladas en orden / computadora: 3 tarjetas sobre superficie con borde de 1px · la del medio con borde en color marca y rótulo "Recomendado" · nombre, precio, lista y botón
- **Referencia aplicada:** ninguna

#### Sección: Preguntas

- **id:** preguntas
- **Título:** PREGUNTAS
- **Texto:** ninguno
- **Elementos:**
  1. ¿Emiten factura? Sí, emitimos factura electrónica por cada proyecto.
  2. ¿Qué pasa después de publicar? Te enseñamos a actualizar tu sitio y respondemos dudas durante el periodo de soporte de tu plan.
  3. ¿El sitio será mío? Sí. El dominio y los archivos quedan a tu nombre desde el primer día.
  4. ¿Cuánto tarda? Entre 2 y 6 semanas según el plan, desde que recibimos tu contenido.
  5. ¿Puedo pagar por partes? Sí: 50 % al iniciar y 50 % al publicar.
- **Imágenes:** ninguna
- **Botones:** ninguno
- **Disposición:** celular: igual / computadora: lista con líneas de 1px y "+" a la derecha; al tocar una pregunta se abre la respuesta
- **Referencia aplicada:** ninguna

#### Sección: Llamado final

- Ver "Común a todas las páginas: Llamado final".

## 10. Contacto y pie de página

| Campo | Decisión |
| --- | --- |
| Correo | hola@mountainweb.studio |
| Redes (nombre → enlace) | Instagram → https://instagram.com/mountainwebstudio · Behance → https://behance.net/mountainwebstudio · LinkedIn → https://linkedin.com/company/mountainwebstudio |
| Texto del pie | Mountain Web Studio · Quito, Ecuador · Lunes a viernes, 9:00 a 18:00 · © 2026 |

Pie:

- **Computadora:** línea de 1px · tres columnas (Menú · Redes · Contacto), cada una con su rótulo sobre una línea · correo gigante en Anton · última línea pequeña con los datos del estudio y el botón HUD a la derecha.
- **Celular:** columnas apiladas y correo en dos líneas.
- Columna Menú: Inicio, Proyectos, Estudio, Planes · Columna Redes: Instagram, Behance, LinkedIn · Columna Contacto: WhatsApp, Correo.
- Correo en grande: hola@mountainweb.studio
- Botón: HUD: OFF
- **Referencia aplicada:** 1b
