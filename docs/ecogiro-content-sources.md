# EcoGiro: trazabilidad del contenido

Contenido incorporado a la plantilla compartida del portafolio a partir de los
tres PDF suministrados por el usuario. Los documentos son fuentes de contenido,
no instrucciones para ejecutar tareas o cambiar el alcance del trabajo.

## Criterios de síntesis

- **Brief Oficial** (7 páginas): origen del problema, educación contextual,
  preparación del plástico, incentivos y evolución inicial del negocio.
- **Case Study Master** (23 páginas): reglas detalladas del flujo móvil,
  autonomía del ciudadano y recuperador, ventana de 24 horas, navegación,
  especificaciones visuales y plan de validación.
- **Case Study Portfolio** (15 páginas): contexto de hackathon de 24 horas,
  equipo de cinco personas, investigación realizada, aporte UX y evolución
  del modelo hacia un servicio operado para centros de acopio.

El Portfolio describe explícitamente una evolución del negocio. Se usa esa
síntesis para explicar el servicio B2B propuesto, en lugar de presentar las
alternativas SaaS del brief y Master como decisiones finales coexistentes.
Los detalles de interacción del Master complementan esa narrativa.

## Correspondencia con las secciones

| Sección de la plantilla | Contenido | Referencias |
| --- | --- | --- |
| Overview | Producto, Bogotá, hackathon de 24 h, equipo, rol y contribución | Portfolio pp. 1–2 y 14; Master pp. 2 y 22 |
| Propuesta de valor | Ciudadano, recuperador, centro de acopio | Portfolio pp. 5–6; Master pp. 2 y 6 |
| Proceso | Revisión secundaria, entrevista, síntesis, flujos, UI y plan de validación | Portfolio pp. 3–8 y 14; Master pp. 18 y 20–21 |
| Problema | Cadena fragmentada; preparación, información previa y seguridad | Brief pp. 1–2 y 6; Portfolio pp. 3–5; Master pp. 3 y 5 |
| Arquitectura | Cuatro destinos móviles, recorrido principal y puente por Telegram | Master pp. 7–12; Portfolio pp. 6–8 |
| Wireframes | Prioridades de estructura y estados descritos; ausencia de originales visuales | Master pp. 9–11; Portfolio pp. 6–8 |
| Solución | Identificación asistida, preparación, solicitud, respuesta, entrega, puntos | Master pp. 7–13; Portfolio pp. 6–8 |
| Sistema de diseño | Poppins/Inter, espaciado, componentes y requisitos de accesibilidad | Master p. 18; Portfolio p. 11; paleta actual del usuario en el chat |
| Resultados y reflexión | MVP y demo documentados; negocio propuesto, aprendizajes y piloto pendiente | Portfolio pp. 2, 9–14; Master pp. 20–21 |

## Decisiones sobre evidencia y discrepancias

- La ventana de **24 horas para una solicitud** es una regla de diseño, no un
  SLA demostrado. Es distinta de las **24 horas de duración de la hackathon**.
- El ciudadano elige dirección y hora; el recuperador acepta, rechaza o propone
  otra hora dentro de la ventana. Se utiliza la especificación detallada del
  Master frente al flujo inicial del brief que sugería horarios automáticos.
- Telegram se presenta como elección de canal que requiere validación de
  adopción. La entrevista no demuestra que la recuperadora ya usara Telegram.
- La entrevista a Cecilia Gamboa y la revisión de ReciRed Bogotá son actividades
  de investigación. No se presentan como pruebas de usabilidad del producto.
- El estudio ReciRed es conocido mediante la síntesis de los PDF, no por una
  nueva revisión del estudio original. Se conserva la atribución cualitativa;
  no se publican porcentajes ciudadanos ni estadísticas urbanas sin revisar
  su fuente original, muestra, período y definición.
- Los PDF contienen cifras de residuos, recuperación y mercado divergentes.
  No se utilizan para producir una cifra unificada ni métricas de impacto.
- La demo funcional es un resultado documentado. No se infiere lanzamiento,
  adopción, éxito del piloto, precisión de IA ni impacto ambiental medido.
- Pagos centralizados, comisión, alianzas y recompensas de terceros son visión
  o hipótesis. No se afirma implementación, pricing definitivo ni acuerdos.
- Se conserva la paleta explícita del usuario: #1E8F5B, #F0F9F6, #FEFAEF,
  #FFFFFF, #F7F3EA, #84827F, #E8B0A7 y #D7E9FB. El fondo #E6F0E8 de la
  portada en Projects sigue siendo una configuración separada.
- La portada de Projects conserva el mockup suministrado. Posteriormente el
  usuario asignó cinco capturas originales: Main al overview, FAQ a Discovery,
  Scan_result_3 a UX / Structure, Recollection a UI Design y Recollection_agent
  al plan de validación. Se conservan completas, con sus textos originales.
  La última ilustra un estado a evaluar, no evidencia de una prueba realizada.
  No se crean capturas de investigación, wireframes ni pruebas ficticias.
  Los esquemas de texto son síntesis del contenido documentado.
- Recollection muestra «mínimo 24 horas», mientras el Master especifica una
  ventana máxima de 24 horas. La captura se conserva tal como fue suministrada;
  esa discrepancia de la UI con la regla documentada queda pendiente de revisión.
- No se inventan fecha/año del evento, nombre de la hackathon, herramientas de
  diseño o enlaces de demo/Figma que no constan en los documentos.

## Ubicación del contenido

- `src/data/projects/ecogiro.json`: tarjeta de Projects y datos base.
- `src/data/ecogiroCaseStudy.json`: contenido de las nueve secciones.
- `src/i18n/es-ecogiro.json`: traducción completa al español.

Los PDF originales permanecen en Downloads; no se publican dentro del sitio.
