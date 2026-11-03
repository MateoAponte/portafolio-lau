# Interacciones de project detail

Revisión completa del alcance solicitado con make-interfaces-feel-better:
hover de wireframes, Final solution y tools; visor de arquitectura; partículas
de EcoGiro. React, CSS existente, Lucide React y GSAP con useGSAP.

| Categoría | Evidencia revisada | Resultado |
| --- | --- | --- |
| Tipografía | Etiquetas existentes y controles del visor | Se conservan los tamaños de tags; porcentaje con cifras tabulares |
| Superficies | Galerías, tags, modal en 1440 y 390 px | Hover sin alterar medidas; visor sin desbordar la página |
| Animación | Transiciones al 10 % y GSAP con movimiento reducido | Feedback interrumpible; movimiento desactivado al solicitarlo |
| Iconos | ZoomIn, ZoomOut, Maximize, X | Lucide, currentColor, etiquetas accesibles, controles de 44 px |
| Rendimiento | useStarSpin y ciclo de vida del visor | Reutiliza limpieza de useGSAP; desconecta ResizeObserver al cerrar |

| Severidad | Ubicación | Antes | Después | Motivo |
| --- | --- | --- | --- | --- |
| LOW | src/index.css:854 | Galerías sin hover | Desplazamiento de 7 px y sombra discreta sobre el conjunto | Mantener pantalla y marco alineados durante el feedback |
| LOW | src/index.css:858 | Tools con cambio de color | Fondo derivado de su paleta, sombra y desplazamiento de 2 px | Hacer visible el hover sin cambiar tamaño ni semántica |
| MEDIUM | src/components/ArchitectureImage.tsx | Diagrama limitado al ancho de la página | Botón inferior derecho y dialog con zoom hasta 400 %, arrastre y scroll | Poder leer los nodos pequeños en escritorio y móvil |
| LOW | src/views/ProjectDetailView.tsx:27, src/index.css:753 | EcoGiro sin partículas | Misma distribución y animación de MiFarma, verde y mint | Aplicar la dirección visual solicitada y respetar movimiento reducido |

Alternativas descartadas:

- Escalar solo la captura al hacer hover: separaría visualmente pantalla y marco.
- Convertir los tags en botones: no tienen una acción asociada.
- Crear otra animación de partículas: duplicaría el patrón existente de MiFarma.

Verificación realizada:

- `npx tsc -b`: correcto.
- `.taste-skill/check-detail-interactions.mjs`: MiFarma y EcoGiro en 1440 y 390 px.
  Apertura modal, ajuste inicial, zoom máximo, arrastre, scroll, cierre con Escape,
  restauración de foco y del scroll del documento. Sin imágenes rotas ni overflow.
- Hover de las dos galerías y tools. Transición de wireframes observada al 10 %.
- Rotación GSAP comprobada; movimiento reducido elimina rotación y desplazamientos.
- Controles del visor traducidos al español y cierre por botón comprobados.
- Capturas revisadas del visor de EcoGiro en escritorio y MiFarma en móvil.
- Refinamiento posterior: hover de paleta con elevación de 3 px y sombra; iconos
  con fondo de la paleta, elevación de 2 px y escala 1.08. Verificado con
  `--hover` en ambos proyectos a 1440 y 390 px, incluyendo movimiento reducido.
  Los colores de las muestras y las dimensiones de los iconos en reposo se conservan.
- El mismo hover de 7 px y sombra se aplica a los teléfonos de overview,
  propuesta de valor y Process, incluyendo sus presentaciones de escritorio y
  móvil. El conjunto completo se mueve una sola vez. Comprobado con
  `--phone-hover` en ambos proyectos a 1440 y 390 px, con movimiento reducido.

**Veredicto: Approve** para el alcance comprobado. Compilación de producción sin
verificar: Vite falló por acceso del sandbox y la ejecución externa no fue
autorizada. Dispositivos táctiles físicos no verificados; se probaron anchos de
viewport y navegación por teclado y ratón.
