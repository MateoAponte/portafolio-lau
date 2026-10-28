# Estructura del portfolio

Esta fase define el orden y los espacios de contenido, sin añadir estilos ni
interacciones. La vista principal incorpora los textos proporcionados en el PDF
de contenido de Laura Benavides, conservando su idioma y las fechas de 2025.
Los atributos `data-section` y `data-slot` identifican espacios en el código.
La plantilla de detalle sigue vacía.

## Vista principal

Implementación: `src/views/LandingView.tsx`.

1. Presentación principal.
2. Descripción personal.
3. CV.
4. Stack tecnológico.
5. Listado de proyectos.

La descripción incluye un espacio para contacto, cuyos datos no aparecen en la
referencia. El CV contiene las dos entradas de formación suministradas. Las
herramientas se agrupan en diseño e inteligencia artificial. Se conserva el
orden de secciones acordado previamente, aunque el PDF sitúa herramientas antes
de formación.

El bloque «Coming soon» del PDF corresponde a la sección de proyectos
(`Case studies`); no se reproduce ese mensaje ni se añaden proyectos ficticios.
La fotografía queda pendiente del archivo original. No se copia la decoración
ni la interfaz de Lovable presente en la captura.

## Detalle de proyecto

Implementación: `src/views/ProjectDetailView.tsx`. Plantilla reutilizable para
cada proyecto, separada de la vista principal.

Los PDF 01–09 se utilizan exclusivamente como referencia de disposición. Sus
instrucciones, textos, colores, tipografías y datos no se incorporan al proyecto.

| Referencia | Bloque | Disposición de contenido prevista |
| --- | --- | --- |
| 01 | Presentación del proyecto | Metadatos arriba; título, breve descripción y etiquetas a la izquierda; imagen principal a la derecha. |
| 02 | Propuesta de valor | Imagen a la izquierda; título y descripción a la derecha. |
| 03 | Proceso | Título arriba y diagrama de proceso debajo, a ancho completo. |
| 04 | Problema | Título y explicación arriba; conjunto de pantallas debajo. |
| 05 | Arquitectura de información | Explicación a la izquierda y diagrama a la derecha. |
| 06 | Wireframes | Galería a la izquierda y explicación a la derecha. |
| 07 | Pantallas principales | Galería a ancho completo. |
| 08 | Sistema de diseño | Título arriba; composición de componentes y fundamentos debajo. |
| 09 | Cierre | Cierre y créditos a la izquierda; herramientas a la derecha. |

Las posiciones describen la referencia, no constituyen un layout CSS ya
implementado. Su adaptación a móvil se definirá en la fase de diseño.

La vista principal está montada. El detalle queda preparado, sin ruta ni enlace
todavía: abrir cada proyecto se implementará en la fase de interacciones.

## Fase de diseño

El usuario autorizó reproducir el diseño de la captura de Lovable. La vista
principal ya incorpora estilos y recursos visuales; `DESIGN.md` registra las
reglas actuales. El orden visual sigue ahora el PDF: presentación, descripción
con contacto, herramientas, formación y proyectos. Esta fase sustituye las
restricciones anteriores de estructura sin estilos. El detalle sigue pendiente
hasta disponer de proyectos reales.

## Proyectos demo autorizados

El usuario autorizó contenido ficticio en tres JSON independientes:
`src/data/projects/luma-care.json`, `folio-budget.json` y `raiz-market.json`.
La lista abre detalles en `#/projects/<slug>`; los nueve bloques siguen la
secuencia de los PDF 01–09. Se puede volver a proyectos o continuar al siguiente.
Las composiciones de interfaz son ilustrativas, no capturas de productos reales.
Esta autorización sustituye la restricción anterior de mantener vacíos los casos.
