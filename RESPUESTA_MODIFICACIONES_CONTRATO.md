# RESPUESTA A PROPUESTAS DE MODIFICACIÓN CONTRACTUAL

**Proyecto:** AGRARIA - Aplicación Móvil de Servicios Agrícolas
**Fecha:** 26 de diciembre de 2025
**De:** CODELIO S.L. (Proveedor)
**Para:** AGRICULTURAL SERVICES MANAGEMENT, S.L. (Cliente)
**Referencia:** Contrato de Desarrollo de Aplicación Móvil y Servicios Asociados

---

## INTRODUCCIÓN

El presente documento constituye la respuesta formal de CODELIO S.L. a las propuestas de modificación remitidas por el Cliente sobre el borrador del Contrato de Desarrollo de Aplicación Móvil con fecha 25/10/2025.

Hemos analizado cada una de las propuestas con el objetivo de alcanzar un acuerdo equilibrado que permita la firma del contrato definitivo.

Las propuestas se clasifican en tres categorías:
- **ACEPTADA:** Se incorporará al contrato definitivo
- **ACEPTADA CON MODIFICACIONES:** Se acepta el espíritu de la propuesta con ajustes
- **NO ACEPTADA:** No se incorporará, se ofrece alternativa

---

## ANÁLISIS DE PROPUESTAS

---

### PROPUESTA 1: Objeto del Contrato (Cláusula 1)

**Texto propuesto por el Cliente:**
> "Donde dice '…destinado a conectar oferta y demanda de trabajo agrícola y…', debería recoger que esta conexión se hará mediante la gestión centralizada del Administrador, pasando indefectiblemente por el control y conocimiento del CLIENTE, hasta el momento de la firma de los contratos."

**RESOLUCIÓN: ✅ ACEPTADA**

**Argumentación:**
Esta propuesta es coherente con el diseño funcional del sistema documentado en el Análisis Funcional (Anexo I), donde se establece expresamente que:
- Las identidades de los usuarios permanecen anónimas mediante pseudónimos hasta la selección
- El administrador actúa como intermediario en la fase de coordinación
- Los datos reales solo se revelan post-selección para la formalización del servicio

La modificación clarifica el funcionamiento sin alterar el alcance técnico ni económico del proyecto.

**Texto propuesto para incorporar:**
> "…destinada a conectar oferta y demanda de trabajo agrícola, **cuya coordinación se realizará de forma centralizada a través del panel de administración del Cliente, manteniéndose las identidades de los usuarios anónimas hasta la fase de formalización del servicio**."

---

### PROPUESTA 2: Panel de Administración Web (Cláusula 3.1)

**Texto propuesto por el Cliente:**
> "Panel de administración web. Debería quedar expresada la confirmación escrita de si dicho Panel está incluido o no, como entregable obligatorio."

**RESOLUCIÓN: ✅ ACEPTADA**

**Argumentación:**
El Panel de Administración Web está incluido en el alcance del proyecto según el Análisis Funcional (Anexo I), sección "Panel de Administración (Web)", que detalla las siguientes funcionalidades:
- Lista de trabajos asignados pendientes de coordinación
- Acceso a datos reales (email, teléfono) post-selección
- Cambio manual de estados
- Reportes mensuales
- Gestión de usuarios sancionados
- Moderación de contenido reportado

**Texto propuesto para incorporar:**
> "Panel de administración web **(incluido como entregable obligatorio)** para la gestión de contenidos, usuarios y ofertas, conforme a las especificaciones detalladas en el Anexo I."

---

### PROPUESTA 3: Aceptación Tácita en UAT (Cláusula 4.3)

**Texto propuesto por el Cliente:**
> "La aceptación tácita solo operará si el Proveedor envía un recordatorio escrito a mitad de plazo y transcurren quince (15) días hábiles adicionales sin respuesta."

**RESOLUCIÓN: ⚠️ ACEPTADA CON MODIFICACIONES**

**Argumentación:**
Entendemos la necesidad del Cliente de disponer de tiempo suficiente para realizar las pruebas de aceptación de forma exhaustiva. Aceptamos ampliar el plazo de validación de 10 a 15 días naturales.

Sin embargo, no consideramos necesario establecer un sistema de recordatorios formales a mitad de plazo, ya que:
- Añade carga administrativa innecesaria
- El Cliente es consciente de los plazos acordados desde la entrega
- La comunicación fluida durante el proyecto hace innecesarios recordatorios formalizados

**Texto propuesto para incorporar:**

> "El Cliente dispondrá de un plazo de **quince (15) días naturales** desde la notificación para realizar las pruebas y comunicar por escrito su aceptación o, en su caso, una relación detallada de incidencias clasificadas como bloqueantes. Transcurrido dicho plazo sin comunicación, se entenderá otorgada la Aceptación Tácita a todos los efectos."

---

### PROPUESTA 4: Bolsa de Ajustes Menores (Cláusula 5.5)

**Texto propuesto por el Cliente:**
> "Se considerarán ajustes menores, e incluidos sin necesidad de solicitud de cambio (CR), las modificaciones de textos, iconografía, estilos visuales, etiquetas, mensajes de error, colores, espaciados y correcciones en la interfaz de usuario (UI) y experiencia de usuario (UX) que no impliquen alteración funcional ni esfuerzo superior a dos (2) horas de desarrollo. Cada hito incluirá una bolsa de diez (10) horas de ajustes menores."

**RESOLUCIÓN: ⚠️ ACEPTADA CON MODIFICACIONES**

**Argumentación:**
Comprendemos que durante el desarrollo pueden surgir ajustes menores de presentación visual que no constituyen cambios funcionales. Sin embargo, la propuesta de 10 horas por hito (30 horas totales en el proyecto) representa un incremento significativo no contemplado en el presupuesto original.

El alcance cerrado del proyecto (Cláusula 5.1) tiene como objetivo proteger a ambas partes: al Proveedor de scope creep y al Cliente de sobrecostes imprevistos.

**Alternativa propuesta:**
Aceptamos incluir una bolsa de ajustes menores con las siguientes condiciones:

> "Se incluirá una bolsa de **cinco (5) horas por hito** (15 horas totales en el proyecto) para ajustes menores que cumplan TODOS los siguientes criterios:
> - Modificaciones exclusivamente visuales: textos, colores, espaciados, iconografía
> - Sin alteración de funcionalidad, lógica de negocio ni flujos de navegación
> - Esfuerzo individual inferior a una (1) hora por ajuste
> - Comunicados por escrito con descripción clara
>
> Las horas no consumidas en un hito NO son acumulables para hitos posteriores. El uso de esta bolsa se documentará y comunicará al Cliente."

---

### PROPUESTA 5: Estimación de Costes Cloud (Cláusula 6.6)

**Texto propuesto por el Cliente:**
> "El Proveedor presentará al Cliente una estimación de costes de infraestructura previa al despliegue, junto con alternativas de optimización. No se incorporará ningún componente, servicio cloud, API o recurso externo con coste adicional sin aprobación previa del Cliente por escrito."

**RESOLUCIÓN: ✅ ACEPTADA**

**Argumentación:**
Esta propuesta refleja buenas prácticas de transparencia y gestión de proyectos. El Proveedor ya contemplaba asesorar al Cliente en la selección de servicios cloud, y formalizar esta obligación por escrito beneficia a ambas partes.

**Texto propuesto para incorporar:**
> "El Proveedor presentará al Cliente, con anterioridad al despliegue en producción, una estimación detallada de los costes de infraestructura cloud, incluyendo alternativas y recomendaciones de optimización. No se incorporará ningún componente, servicio, API o recurso externo que genere coste recurrente sin la aprobación previa y por escrito del Cliente."

---

### PROPUESTA 6: Continuidad Operativa (Cláusula 7.1)

**Texto propuesto por el Cliente:**
> "En caso de cese de actividad del Proveedor, incumplimiento grave, imposibilidad técnica de continuar prestando el servicio o ausencia de respuesta durante más de quince (15) días naturales tras requerimiento por escrito del Cliente, este podrá realizar, directamente o a través de un tercero, modificaciones estrictamente necesarias para garantizar la continuidad operativa del sistema."

**RESOLUCIÓN: ⚠️ ACEPTADA CON MODIFICACIONES**

**Argumentación:**
Entendemos la preocupación legítima del Cliente por garantizar la continuidad de su negocio. Sin embargo, el plazo de 15 días naturales es excesivamente breve considerando que:
- Pueden existir periodos vacacionales o circunstancias temporales justificadas
- Un plazo tan corto podría activarse por situaciones no graves
- El concepto de "incumplimiento grave" requiere definición objetiva

**Alternativa propuesta:**
Aceptamos incluir una cláusula de continuidad operativa con salvaguardas equilibradas:

> "En caso de que concurra alguna de las siguientes circunstancias:
> - Cese definitivo de actividad del Proveedor debidamente acreditado
> - Declaración de concurso de acreedores del Proveedor
> - Incumplimiento grave y reiterado de las obligaciones contractuales, previa notificación fehaciente y transcurrido un plazo de subsanación de quince (15) días naturales
> - Ausencia total de respuesta durante más de **treinta (30) días naturales** tras requerimiento fehaciente por escrito
>
> El Cliente quedará facultado para realizar, directamente o a través de terceros, las modificaciones estrictamente necesarias para garantizar la continuidad operativa del sistema, limitándose a correcciones de errores críticos y actualizaciones de seguridad urgentes, sin que ello implique cesión de derechos de propiedad intelectual más allá de lo estrictamente necesario para dicha continuidad."

---

### PROPUESTA 7: Detección de Contenido Problemático (Cláusula 7.4)

**Texto propuesto por el Cliente:**
> "No obstante lo anterior, el Proveedor informará al Cliente si detecta contenido que pueda resultar problemático (legal, técnico o de propiedad intelectual)."

**RESOLUCIÓN: ✅ ACEPTADA**

**Argumentación:**
Esta propuesta constituye una buena práctica profesional que el Proveedor ya contempla en su metodología de trabajo. Formalizar esta obligación no supone coste adicional y refuerza la relación de confianza.

**Texto propuesto para incorporar:**
> "El Proveedor informará al Cliente de forma diligente si, durante la ejecución del proyecto, detecta contenido proporcionado por el Cliente que pudiera resultar problemático desde el punto de vista legal, técnico o de propiedad intelectual, a fin de que el Cliente pueda tomar las medidas oportunas."

---

### PROPUESTA 8: Soporte Post-Producción 60 Días (Cláusula 9.1)

**Texto propuesto por el Cliente:**
> "Además del periodo de garantía, el Proveedor prestará sin coste un servicio de soporte post-producción de sesenta (60) días adicionales, incluyendo correcciones de errores no cubiertos por garantía y ajustes derivados de requisitos de publicación en App Store o Google Play."

**RESOLUCIÓN: ❌ NO ACEPTADA**

**Argumentación:**
El contrato actual establece un periodo de garantía de 45 días naturales que cubre defectos de software reproducibles, imputables al desarrollo y de carácter bloqueante. Este plazo es estándar en la industria y suficiente para detectar incidencias derivadas del desarrollo.

La propuesta de 60 días adicionales (105 días totales de cobertura gratuita) presenta los siguientes problemas:

1. **Alcance indefinido:** "Errores no cubiertos por garantía" es una categoría abierta que podría incluir cualquier tipo de incidencia, incluso las no imputables al Proveedor.

2. **Requisitos de stores:** Los requisitos de App Store y Google Play cambian frecuentemente y de forma impredecible. Cubrir estos ajustes de forma ilimitada durante 60 días adicionales equivale a un servicio de mantenimiento no presupuestado.

3. **Impacto económico:** El coste estimado de este servicio adicional oscila entre 1.500€ y 2.500€, no contemplado en el precio del proyecto.

**Alternativa propuesta:**
Se ofrecen las siguientes opciones:

> **Opción A - Extensión de garantía (recomendada):**
> Ampliar el periodo de garantía de 45 a 60 días naturales, manteniendo los mismos criterios de cobertura (defectos reproducibles, imputables al desarrollo, bloqueantes). Sin coste adicional.
>
> **Opción B - Paquete de soporte post-lanzamiento:**
> Contratar un paquete de 20 horas de soporte post-producción a tarifa reducida de 40€/hora (vs 60€/hora tarifa estándar) = 800€, válido durante 90 días desde la puesta en producción, que incluiría:
> - Corrección de incidencias no bloqueantes
> - Ajustes menores derivados de requisitos de stores
> - Soporte técnico por email
>
> **Opción C - Contrato de mantenimiento:**
> Formalizar un contrato de mantenimiento mensual según Anexo V (SLA), con condiciones preferentes por ser proyecto inicial.

---

### PROPUESTA 9: Actualizaciones Técnicas 6 Meses (Cláusula 9.2)

**Texto propuesto por el Cliente:**
> "El Proveedor realizará sin coste, durante los primeros seis (6) meses desde la puesta en producción, las actualizaciones técnicas mínimas para mantener la aplicación operativa y publicable en App Store y Google Play."

**RESOLUCIÓN: ❌ NO ACEPTADA**

**Argumentación:**
Esta propuesta constituye un servicio de mantenimiento evolutivo, sustancialmente diferente de la garantía por defectos:

1. **Naturaleza del servicio:** Mantener una aplicación "publicable" en las stores requiere:
   - Actualización de SDKs cuando Apple/Google deprecan versiones
   - Adaptación a nuevas versiones de iOS/Android
   - Cumplimiento de nuevas políticas de privacidad
   - Actualización de dependencias y librerías
   - Compilación, testing y despliegue de nuevas versiones

2. **Frecuencia impredecible:** Apple y Google publican nuevos requisitos varias veces al año, algunos con plazos de cumplimiento de semanas.

3. **Coste estimado:** Un servicio de mantenimiento de 6 meses tiene un valor de mercado entre 3.000€ y 5.000€, dependiendo de la frecuencia de actualizaciones requeridas.

4. **Diferencia con garantía:** La garantía cubre defectos del código desarrollado. Las actualizaciones por cambios externos (Apple, Google, librerías) no son defectos sino evolución natural del ecosistema.

**Alternativa propuesta:**

> **Incluido sin coste adicional (primeros 90 días):**
> - Actualizaciones de seguridad críticas que afecten directamente al código desarrollado
> - Correcciones urgentes requeridas por Apple/Google para mantener la publicación, siempre que no impliquen cambios funcionales y el esfuerzo sea inferior a 4 horas
>
> **Servicio de mantenimiento (recomendado):**
> Para garantizar la continuidad operativa a medio plazo, se recomienda la contratación del servicio de mantenimiento según Anexo V, con las siguientes condiciones preferentes para el primer año:
> - Tarifa mensual: 300€/mes (vs 400€/mes tarifa estándar)
> - Incluye: hasta 8 horas mensuales de mantenimiento preventivo y correctivo
> - Actualizaciones de stores incluidas
> - Tiempo de respuesta según SLA acordado

---

### PROPUESTA 10: Plazos de Resolución de Incidencias (Cláusula 9.3)

**Texto propuesto por el Cliente:**
> "Las incidencias se resolverán en los siguientes plazos máximos:
> - Bloqueantes: 48 horas
> - Críticas: 3 días hábiles
> - Medias: 7 días hábiles
> - Menores: en la siguiente versión programada"

**RESOLUCIÓN: ✅ ACEPTADA**

**Argumentación:**
Los plazos propuestos son razonables y alineados con las prácticas estándar del sector. El Proveedor ya contemplaba plazos similares en su operativa interna.

**Texto propuesto para incorporar:**
> "Durante el periodo de garantía, las incidencias cubiertas se resolverán en los siguientes plazos máximos desde su comunicación formal:
> - **Bloqueantes** (impiden el uso de la aplicación): 48 horas
> - **Críticas** (afectan funcionalidad principal): 3 días hábiles
> - **Medias** (afectan funcionalidad secundaria): 7 días hábiles
> - **Menores** (cosméticas o de baja prioridad): siguiente versión programada
>
> Estos plazos se computan en horario laboral (lunes a viernes, 9:00-18:00, excepto festivos nacionales). Los plazos podrán ajustarse mediante acuerdo de SLA si el Cliente contrata el servicio de mantenimiento."

---

### PROPUESTA 11: Mediación Obligatoria (Cláusula 14.2)

**Texto propuesto por el Cliente:**
> "Donde dice '…someterse a un procedimiento de mediación o arbitraje de carácter voluntario', debería decir 'obligatorio'."

**RESOLUCIÓN: ⚠️ ACEPTADA CON MODIFICACIONES**

**Argumentación:**
Compartimos el interés del Cliente en fomentar la resolución alternativa de conflictos antes de acudir a la vía judicial, lo cual beneficia a ambas partes en términos de tiempo y costes.

Sin embargo, el arbitraje obligatorio presenta inconvenientes:
- Costes elevados (árbitros, tasas administrativas)
- Laudos de difícil recurso
- Puede no ser apropiado para todas las controversias

**Alternativa propuesta:**
Aceptamos la mediación obligatoria como paso previo, manteniendo el arbitraje como opción voluntaria:

> "Antes de someter cualquier controversia derivada del presente contrato a la jurisdicción ordinaria, las Partes se comprometen a intentar resolver el conflicto mediante un procedimiento de **mediación de carácter obligatorio**, a realizar en un plazo máximo de treinta (30) días desde la solicitud de cualquiera de las Partes.
>
> Si la mediación no alcanzara acuerdo satisfactorio, las Partes podrán, de mutuo acuerdo, someterse a arbitraje de derecho. En defecto de acuerdo sobre arbitraje, serán competentes los Juzgados y Tribunales de Madrid."

---

### PROPUESTA 12: Chat Interno con Administrador (Anexos I y II)

**Texto propuesto por el Cliente:**
> "Tanto 'Para Demandantes', como 'Para Oferentes': Chat interno para contacto directo y negociación/notificaciones con el Administrador."

**RESOLUCIÓN: ❌ NO ACEPTADA**

**Argumentación:**
Esta propuesta constituye una funcionalidad nueva no contemplada en el alcance original del proyecto. El Análisis Funcional (Anexo I) establece expresamente en la sección "Funcionalidades ELIMINADAS":

> "❌ Chat en tiempo real entre usuarios (intercambiaban contactos, trabajaban fuera de app)"
> "❌ Mensajería libre"

La decisión de eliminar el chat fue una decisión de diseño fundamentada:

1. **Complejidad técnica:** Un sistema de chat en tiempo real requiere:
   - Infraestructura de WebSockets o similar
   - Sistema de persistencia de mensajes
   - Notificaciones push específicas
   - Interfaz de usuario adicional
   - Testing específico

2. **Coste estimado:** El desarrollo de un módulo de chat interno se estima en 80-120 horas de desarrollo, equivalentes a 2.880€ - 4.320€.

3. **Diseño actual:** El sistema actual contempla que la coordinación se realice vía WhatsApp/teléfono una vez el administrador tiene acceso a los datos reales, lo cual es más eficiente y no requiere que los usuarios aprendan una nueva herramienta de comunicación.

**Alternativa propuesta:**

> **Opción A - Mantener diseño actual (recomendada):**
> La coordinación se realiza a través de WhatsApp/teléfono por el administrador, una vez seleccionado el proveedor. Este flujo está probado y es familiar para los usuarios del sector agrícola.
>
> **Opción B - Desarrollo como Change Request:**
> Si el Cliente considera imprescindible esta funcionalidad, se puede formalizar como Solicitud de Cambio (CR) con las siguientes condiciones:
> - Alcance: Chat básico usuario-administrador (sin chat entre usuarios)
> - Funcionalidades: Mensajes de texto, notificaciones, historial
> - Estimación: 80 horas de desarrollo
> - Presupuesto adicional: 3.360€
> - Impacto en plazos: +3 semanas sobre cronograma actual
>
> **Opción C - Sistema de tickets:**
> Implementar un sistema simplificado de comunicación mediante tickets/solicitudes (sin tiempo real), con menor coste:
> - Presupuesto adicional: 1.440€
> - Impacto en plazos: +1 semana

---

## RESUMEN DE RESOLUCIONES

| # | Cláusula | Propuesta | Resolución |
|---|----------|-----------|------------|
| 1 | 1. Objeto | Conexión centralizada por administrador | ✅ ACEPTADA |
| 2 | 3.1 Panel Admin | Confirmación escrita de inclusión | ✅ ACEPTADA |
| 3 | 4.3 UAT | Recordatorio + plazo extendido | ⚠️ ACEPTADA CON MODIFICACIONES |
| 4 | 5.5 Ajustes menores | Bolsa 10h/hito | ⚠️ ACEPTADA CON MODIFICACIONES |
| 5 | 6.6 Costes Cloud | Estimación previa y aprobación | ✅ ACEPTADA |
| 6 | 7.1 Continuidad | Modificación por cese/incumplimiento | ⚠️ ACEPTADA CON MODIFICACIONES |
| 7 | 7.4 Contenido | Informar contenido problemático | ✅ ACEPTADA |
| 8 | 9.1 Soporte 60 días | Soporte gratuito adicional | ❌ NO ACEPTADA |
| 9 | 9.2 Actualizaciones | 6 meses mantenimiento gratuito | ❌ NO ACEPTADA |
| 10 | 9.3 Plazos | Tiempos de resolución | ✅ ACEPTADA |
| 11 | 14.2 Mediación | Mediación obligatoria | ⚠️ ACEPTADA CON MODIFICACIONES |
| 12 | Anexos | Chat con administrador | ❌ NO ACEPTADA |

---

## PRÓXIMOS PASOS

Solicitamos confirmación por escrito de la conformidad con las resoluciones aquí expuestas.

Una vez recibida, procederemos a actualizar el contrato y la documentación técnica incorporando los acuerdos alcanzados, para su firma definitiva.

Quedamos a disposición para aclarar cualquier aspecto.

---

**CODELIO S.L.**

Vicente José Moreno Escobar
Representante Legal

Madrid, 26 de diciembre de 2025
