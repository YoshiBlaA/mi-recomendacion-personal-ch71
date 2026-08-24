# Mini sitio web generado con apoyo de IA

## Descripción
Este proyecto es un recomendador de música personal que muestra canciones favoritas agrupadas por artista/compositor (Panic! At The Disco, Fall Out Boy, Queen, Square Enix Music, HOYO-MiX). Cada canción se presenta en una tarjeta con imagen, información básica y un botón de enlace directo a Spotify. Al hacer clic en la imagen de una tarjeta, se abre un offcanvas con más detalle. Cuenta con un sidebar de índices por artista/compositor para navegar rápido entre secciones, y un diseño responsive que adapta el layout en pantallas pequeñas.

## Tecnologías
- **HTML** — estructura de la página y el contenido de las fichas
- **CSS** — estilos personalizados, media queries para responsividad y personalización del pseudoelemento `::selection`
- **Bootstrap** — navbar, sidebar y componente offcanvas
- **JavaScript**. 
- **Git** — control de versiones del proyecto
- **GitHub** — repositorio remoto y respaldo del código
- **IAs utilizadas** — Claude, Gemini

## Proceso con IA

### 1. ¿Qué voy a recomendar?

Música organizada por autor, incluyendo una o varias canciones por cada artista.

### 2. ¿A quién va dirigida la página?

A público en general que busque descubrir, explorar o disfrutar de recomendaciones musicales de forma directa y accesible.

### 3. ¿Qué información tendrá cada recomendación?

Cada ficha / tarjeta de recomendación incluirá los siguientes datos:

- **Título de la canción**
- **Nombre del autor / artista**
- **Año de lanzamiento**
- **Portada del álbum**
- **Letra de la canción (pendiente)** _(se recomienda un extracto corto o enlace para optimizar el diseño y respetar derechos)_

### 4. Interactividad

- **Diseño visual:** offcanvas interactivos cuando el usuario selecciona la imagen del album.
- **Acciones del usuario:**
  - Enlace o botón para escuchar/reproducir la canción (Spotify/YouTube).
  - Botón de ayuda sobre cómo usar la página.

### 5. Registro de prompts

| #   | ¿Qué necesitábamos? | Prompt                                                                                                                                                                                   | ¿Qué respondió?                                                                                                                                                                                       | ¿Qué utilicé?                                                                                                                                   | ¿Qué aprendí?                                                                                                                                                                            |
| --- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Planificar página   | "Eres un experto en creación de páginas web de recomendaciones musicales. Ayúdame a mejorar / complementar estas respuestas" _(referenciando las 4 preguntas de la metodología PIENSO)_. | Formuló una pregunta a la vez para definir: qué recomendar (música), público objetivo (público general), datos por ficha (título, autor, año, portada, letra) y la interacción esperada _flip cards_) | <br>• Estructura de preguntas secuenciales.<br>• Markdown para documentación.                                                                   | Importancia de definir el alcance técnico antes de programar.<br>• Cómo acoplar la idea de un proyecto al nivel técnico actual.<br>• Diseñar pensando en fases.                          |
| 2   | HTML                | "Dame la siguiente información de (canción) del artista (artista): nombre del álbum, fecha de lanzamiento y duración."                                                                   | Datos estructurados de las canciones/artistas que necesitaba.                                                                                                                                         | La información para llenar cada ficha (nombre de álbum, fecha de lanzamiento, duración) dentro del HTML.                                        | Que la IA es útil no solo para código, sino para recopilar y organizar datos reales que luego yo estructuro manualmente.                                                                 |
| 3   | Bootstrap           | (sin IA)                                                                                                                                                                                 |                                                                                                                                                                                                       |                                                                                                                                                 |                                                                                                                                                                                          |
| 4   | JavaScript          | (sin IA)                                                                                                                                                                                 |                                                                                                                                                                                                       |                                                                                                                                                 |                                                                                                                                                                                          |
| 5   | CSS                 | "Dame el esqueleto de una media query en CSS" / "¿Hay alguna propiedad en CSS que me permita modificar el estilo del texto cuando el usuario lo selecciona?"                             | La sintaxis base de una media query (con @media), y que existe el pseudoelemento ::selection para ese propósito                                                                                       | La estructura de la media query como punto de partida para el diseño responsive, y ::selection para personalizar el color de selección de texto | Que en CSS existen pseudoelementos poco comunes como ::selection para casos muy específicos, y que a veces conviene preguntar por el problema en lugar del nombre exacto de la propiedad |

### ¿Cuál fue el prompt más útil y por qué?

**"Eres un experto en creación de páginas web de recomendaciones musicales. Ayúdame a mejorar / complementar estas respuestas", basado en la metodología PIENSO)"** porque no resolvió una duda puntual de sintaxis, sino que definió el rumbo de todo el proyecto: qué recomendar, para quién, qué datos mostrar por ficha y cómo podía ser la interacción. Al formular una pregunta a la vez, me obligó a tomar decisiones concretas antes de escribir una sola línea de código, así el 90% de lo que resolví después (HTML, Bootstrap, JS, CSS) ya tenía un objetivo claro detrás, en lugar de ir improvisando sobre la marcha, a excpeción de toma de decisión de cómo poner algunas etiquetas en el HTML que se puede ver en el CSS con una explicación.

## Código generado vs. código propio
**¿Qué generó la IA?**
La IA no generó código completo de HTML, Bootstrap ni JavaScript del proyecto; su aporte fue puntual: el esqueleto base de una media query en CSS, y la sugerencia de usar `::selection` para personalizar el estilo del texto seleccionado. También ayudó a recopilar y estructurar la información de contenido (título, autor, año, portada, letra) usada dentro del HTML.

**¿Qué modifiqué?**
Todo el HTML, Bootstrap (navbar, sidebar, offcanvas), JavaScript (lógica de las tarjetas e interactividad) y CSS fue construido y ajustado directamente por mí, consultando documentación oficial y resolviendo por prueba y error. El esqueleto de la media query sugerida por la IA fue adaptada por mí, según el diseño real de la página.

## Aprendizaje
Gracias a la IA comprendí que existen pseudoelementos poco comunes en CSS, como `::selection`, que permiten personalizar detalles muy específicos de la interacción del usuario (en este caso, el estilo del texto al seleccionarlo). También aprendí que es más efectivo preguntarle a la IA describiendo el problema o la necesidad ("¿hay alguna propiedad que me permita...?") en lugar de intentar adivinar el nombre exacto de una propiedad.

## Reflexión
En general no hubo código generado por la IA que no comprendiera, ya que su uso se limitó a investigación de contenido y resolución de dudas puntuales de CSS, más que a generación de código complejo. Cuando recibí el esqueleto de la media query, entendí su estructura antes de usarla y la adapté a mis propios valores en lugar de copiarla tal cual.