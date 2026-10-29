# Diseño del portfolio

Referencia visual vinculante: PDF de captura de Lovable proporcionado por el usuario
el 28 de octubre de 2026. Reproducir su composición, no introducir otra dirección.

- Fondo marfil grisáceo, tinta azul marino y acentos rosa apagado, lavanda y ocre.
- Portada centrada: año y avatar, título serif de gran tamaño, rol en contorno.
- Playfair Display 800 para la portada; Inter 400–700 para el cuerpo. Aproximación
  visual: el PDF rasterizado no proporciona metadatos de las fuentes originales.
- Columna central de contenido; fotografía junto a biografía; contacto, herramientas,
  formación y proyectos en ese orden. Etiquetas de sección y puntos decorativos
  reproducen la referencia explícita del usuario.
- Foto y logotipos extraídos de la captura; sustituir por originales cuando estén
  disponibles para mejorar nitidez.
- Los proyectos quedan reservados, sin mensaje «Coming soon» ni casos ficticios.
- No hay datos de contacto ni rutas de proyecto disponibles todavía.
- En móvil se apilan fotografía y texto; las herramientas usan rejillas compactas.

## Legibilidad e interacción

- Biografía: 1.0625rem (17px con raíz de 16px), 1rem en móvil; interlineado 1.75.
- Formación: 1rem; herramientas y etiquetas de sección: .875rem.
- Columna central: máximo 58rem, texto de biografía limitado a 68ch.
- Cards informativas: hover con elevación de 4px, sombra por capas y fondo claro;
  respuesta de 150ms, solo con puntero fino. No hay acción de clic ficticia.
- Formación: hover de fondo y color del título, sin interferir con la entrada.
- Movimiento reducido conserva feedback de color/sombra y elimina el desplazamiento.

## Contacto

Cuatro canales: Gmail, LinkedIn, Behance y Mobile. Composición de dos columnas
con Gmail destacado; una columna en móvil. Iconos SVG con trazo consistente,
separadores finos y acento rosa. Cada ítem tiene entrada independiente de izquierda
a derecha, usando los tokens existentes (800ms, 30px y trigger 5.5rem). Enlaces con
foco visible, hover y respuesta de pulsación; movimiento reducido sin desplazamiento.
Los datos y enlaces actuales son ejemplos autorizados por el usuario, identificados
como «Demo contact details», centralizados en `src/components/ContactItems.tsx`.

## Casos de estudio demo

Tres casos autorizados por el usuario, con datos ficticios en JSON separados.
Listado editorial: composición de interfaz junto a resumen, disciplina y enlace.
Detalle con nueve bloques según los PDF 01–09: presentación, propuesta de valor,
proceso, problema, arquitectura, wireframes, interfaz, sistema y cierre.
La identidad del portfolio se conserva; cada concepto usa una superficie suave
rosa, lavanda o arena. Vistas de interfaz dibujadas con HTML/CSS y rotuladas como
conceptos, sin simular funcionalidades. Contenido y datos de cada caso desde JSON.

## Márgenes y portadas de proyectos

Un único contenedor gobierna la columna de contenido: `--layout-max-width: 58rem`
y `--layout-gutter: 1.5rem`. About, Contact, Tools, Education y Case studies comparten
sus bordes sin rellenos laterales extra. Las vistas de detalle usan esos mismos tokens.
Las portadas de Case studies son imágenes PNG de dispositivos con interfaces demo,
definidas en el campo `cover` de cada JSON. Orden de imagen en escritorio: izquierda,
derecha, izquierda. En móvil, imagen seguida de descripción en todos los casos.
Los wireframes y otras exploraciones del detalle conservan sus composiciones HTML.

## Narrativa e interacción por scroll

La navegación compacta aparece después de la portada y señala la sección activa.
En los detalles, un índice persistente enlaza a encabezados con foco de teclado.
Las portadas se revelan con barrido; la descripción entra desde el lado contrario.
Se conservan los tokens configurados por el usuario: entradas de 800ms y 30px;
los cambios de pantalla del proceso usan 250ms y las respuestas de control 150ms.
El proceso muestra texto a la izquierda y dispositivo sticky a la derecha, con
pasos activos al hacer scroll y botones para saltar de paso. En móvil, pantallas
bajas y movimiento reducido, cada paso incluye su ilustración en flujo vertical.
El cierre incluye contacto demo y botón de copiar correo con confirmación viva;
si el portapapeles falla, selecciona el correo y explica cómo copiarlo manualmente.
Los vídeos de prototipo son opcionales en cada JSON: no hay grabaciones reales
suministradas. Se mantienen imágenes y no se generan grabaciones ficticias.

## Estado activo de navegación

Grupo de navegación centrado. Texto de 1rem en escritorio y .875rem en móvil.
El activo usa estrella SVG a la izquierda, negrita y acento rosa, sin relleno.
Se reserva el ancho de la etiqueta en negrita para evitar saltos entre estados.
Hover con color/subrayado, foco visible y estrella con fade de 150ms y escala
suave de 250ms. En movimiento reducido, los cambios son inmediatos. La lista
horizontal mantiene visible el enlace activo en pantallas estrechas.

## Tools compacto

Rediseño local: dos grupos con título lateral en escritorio y herramientas en
líneas flexibles, cada una con logotipo de 24px y nombre visible. En móvil los
títulos se apilan y los elementos saltan de línea; no hay carrusel ni tarjetas
de gran altura. Se conservan los ocho nombres y las entradas independientes de
Design e IA. Hover de color, sin sugerir una acción de clic inexistente.
Verificado en producción: alturas de sección ~191px a 1440, ~243px a 768 y
~325px a 390; sin desbordamiento horizontal.

## Cabecera y tags de herramientas

Orden de portada: tag UX/UI Designer, PORTFOLIO, avatar dibujado + Laura Benavides
en acento + estrella. El nombre usa tracking moderado para facilitar la lectura.
Tools tiene una franja rosa de ancho completo y un contenedor interior con los
mismos márgenes del portfolio. Herramientas en tags blancos con logotipo y nombre;
categorías Design y AI. Los grupos conservan su entrada independiente.
Verificado en producción a 1440, 768 y 390px: ocho tags, sin overflow horizontal.

## Campos de About y Contact

About usa lavanda suave (`--color-surface-about: #ece8f2`) y Contact azul grisáceo
(`--color-surface-contact: #e5e7ec`), ambos de ancho completo con el contenedor
interior compartido. Se elimina el separador tras About porque el cambio de
superficie ya comunica el límite. Tools conserva tags blancos y añade hover
con elevación de 2px, sombra suave y acento en texto, a 150ms; sin desplazamiento
con movimiento reducido. Verificado a 1440, 768 y 390px: márgenes alineados,
sin overflow. Hover inspeccionado al 10% de velocidad.
