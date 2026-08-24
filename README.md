# Mini sitio web generado con apoyo de IA

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

- **Diseño visual:** Canvas interactivos cuando el usuario selecciona la imagen del album.
- **Acciones del usuario:**
  - Enlace o botón para escuchar/reproducir la canción (Spotify/YouTube).

## Registro de prompts

| #   | ¿Qué necesitábamos? | Prompt                                                                                                                                                                                   | ¿Qué respondió?                                                                                                                                                                                       | ¿Qué utilicé?                                                                                                                                   | ¿Qué aprendí?                                                                                                                                                                            |
| --- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Planificar página   | "Eres un experto en creación de páginas web de recomendaciones musicales. Ayúdame a mejorar / complementar estas respuestas" _(referenciando las 4 preguntas de la metodología PIENSO)_. | Formuló una pregunta a la vez para definir: qué recomendar (música), público objetivo (público general), datos por ficha (título, autor, año, portada, letra) y la interacción esperada _flip cards_) | <br>• Estructura de preguntas secuenciales.<br>• Markdown para documentación.                                                                   | Importancia de definir el alcance técnico antes de programar.<br>• Cómo acoplar la idea de un proyecto al nivel técnico actual.<br>• Diseñar pensando en fases.                          |
| 2   | HTML                | "Dame la siguiente información de (canción) del artista (artista): nombre del álbum, fecha de lanzamiento y duración."                                                                   | Datos estructurados de las canciones/artistas que necesitaba.                                                                                                                                         | La información para llenar cada ficha (nombre de álbum, fehca de lanzamiento, duración) dentro del HTML.                                        | Que la IA es útil no solo para código, sino para recopilar y organizar datos reales que luego yo estructuro manualmente.                                                                 |
| 3   | Bootstrap           | (sin IA)                                                                                                                                                                                 |                                                                                                                                                                                                       |                                                                                                                                                 |                                                                                                                                                                                          |
| 4   | JavaScript          | (sin IA)                                                                                                                                                                                 |                                                                                                                                                                                                       |                                                                                                                                                 |                                                                                                                                                                                          |
| 5   | CSS                 | "Dame el esqueleto de una media query en CSS" / "¿Hay alguna propiedad en CSS que me permita modificar el estilo del texto cuando el usuario lo selecciona?"                             | La sintaxis base de una media query (con @media), y que existe el pseudoelemento ::selection para ese propósito                                                                                       | La estructura de la media query como punto de partida para el diseño responsive, y ::selection para personalizar el color de selección de texto | Que en CSS existen pseudoelementos poco comunes como ::selection para casos muy específicos, y que a veces conviene preguntar por el problema en lugar del nombre exacto de la propiedad |

## ¿Cuál fue el prompt más útil y por qué?

**"Eres un experto en creación de páginas web de recomendaciones musicales. Ayúdame a mejorar / complementar estas respuestas", basado en la metodología PIENSO)"** porque no resolvió una duda puntual de sintaxis, sino que definió el rumbo de todo el proyecto: qué recomendar, para quién, qué datos mostrar por ficha y cómo podía ser la interacción. Al formular una pregunta a la vez, me obligó a tomar decisiones concretas antes de escribir una sola línea de código, así que todo lo que resolví después (HTML, Bootstrap, JS, CSS) ya tenía un objetivo claro detrás, en lugar de ir improvisando sobre la marcha, a excpeción de toma de decisión de cómo poner algunas etiquetas en el HTML que se puede ver en el CSS con una explicación.