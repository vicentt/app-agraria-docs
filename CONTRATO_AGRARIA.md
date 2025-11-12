# CONTRATO DE DESARROLLO DE APLICACIÓN MÓVIL Y SERVICIOS ASOCIADOS

**En Madrid, a 25/10/2025**

---

## REUNIDOS

**De una parte**, **CODELIO S.L.**, con C.I.F. B56797426, y domicilio social en Calle Estrella Denébola, 21, 5ºA, 28045 Madrid, representada en este acto por Vicente José Moreno Escobar, en su calidad de Representante Legal, en adelante denominada el "**Proveedor**" o "**CODELIO**".

**Y de otra**, **AGRICULTURAL SERVICES MANAGEMENT, SL**, con C.I.F./N.I.F. B56603343, y domicilio en C/ AFORES, 1 BUTSENIT D'URGELL, 25616 MONTGAI (LLEIDA), representada en este acto por JOSEP AMIGO MARSA, en su calidad de ADMINISTRADOR ÚNICO, en adelante denominada el "**Cliente**".

El Proveedor y el Cliente, conjuntamente denominados las "**Partes**", reconocen recíprocamente la capacidad legal necesaria para contratar y, a tal efecto,

---

## EXPONEN

- Que el **Proveedor** es una empresa especializada en el desarrollo de aplicaciones informáticas, software a medida y soluciones tecnológicas, con experiencia en proyectos basados en .NET, React Native y SQL Server/MySQL, así como en la gestión integral del ciclo de vida de proyectos digitales.

- Que el **Cliente** está interesado en el desarrollo de una aplicación móvil orientada al sector agrícola, con funcionalidades y alcances definidos en la Propuesta Comercial / Presupuesto emitida por el Proveedor con fecha [dd/mm/aaaa], versión [vX.Y] (en adelante, la "**Propuesta**").

- Que ambas Partes desean formalizar la relación contractual que regirá el desarrollo del proyecto, conforme a los términos y condiciones establecidos en el presente contrato y sus anexos.

Las Partes manifiestan que las obligaciones contenidas en este contrato reflejan íntegramente los acuerdos alcanzados entre ellas y sustituyen a cualquier comunicación previa que no se haya incorporado expresamente como anexo al mismo.

En virtud de lo expuesto, las Partes acuerdan formalizar el presente **Contrato de Desarrollo de Aplicación Móvil y Servicios Asociados**, el cual se regirá por las cláusulas que se detallan a continuación, junto con los anexos que forman parte integrante del mismo.

---

## 1. Objeto

El presente contrato tiene por objeto el diseño, desarrollo e implantación de una aplicación móvil denominada "**Proyecto AGRARIA**" (nombre provisional, en adelante la "Aplicación"), destinada a conectar oferta y demanda de trabajo agrícola y a optimizar procesos en entornos rurales, conforme a las especificaciones funcionales y técnicas recogidas en la Propuesta Comercial / Presupuesto de fecha [dd/mm/aaaa], versión [vX.Y] (en adelante, la "Propuesta"), que se incorpora como **Anexo I** y forma parte integrante del presente contrato.

El nombre "Proyecto AGRARIA" se utiliza únicamente como denominación interna provisional hasta que el Cliente confirme el nombre comercial definitivo de la Aplicación.

### A tales efectos:

#### Alcance técnico

El proyecto comprenderá:

- Frontend desarrollado en **React Native** (iOS y Android).
- Backend desarrollado en **.NET**, con base de datos SQL Server o MySQL (según se confirme en la Propuesta).
- Pipeline de integración y despliegue continuo (CI/CD) y gestión del código fuente en [GitHub / Azure DevOps].
- Ambientes de Desarrollo, Preproducción y Producción.

Los repositorios de código, pipelines CI/CD y entornos intermedios (Desarrollo y Preproducción) utilizados internamente por el Proveedor para la ejecución del proyecto son de titularidad del Proveedor. El Cliente tendrá derecho a recibir el código fuente y toda la documentación técnica en el momento y condiciones establecidas en la cláusula 7, pero no adquiere derecho alguno sobre las cuentas o infraestructuras internas del Proveedor.

#### Entregables

Los entregables, su contenido, criterios de aceptación y planificación se detallan en el **Anexo II** (Entregables y Cronograma).

#### Servicios incluidos

Gestión de proyecto, análisis funcional y técnico, desarrollo, QA/Testing, apoyo al go-live y formación básica de uso. El mantenimiento/soporte posterior, de ser contratado, se regirá por el **Anexo V** (SLA).

#### Exclusiones y supuestos

Quedan excluidos los elementos expresamente indicados como tales en la Propuesta (p. ej., costes de licencias de terceros, cuotas de stores, servicios cloud, SMS, mapas, etc.), así como evolutivos no previstos, salvo acuerdo mediante Solicitud de Cambio (CR) conforme al Anexo III.

#### Orden de documentos

En caso de discrepancia, prevalecerá lo previsto en el presente contrato; para alcance y entregables, prevalecerá lo descrito en el Anexo I (Propuesta) frente a comunicaciones o materiales comerciales no anexados.

---

## 2. Definiciones

A efectos de interpretación y aplicación del presente contrato, los siguientes términos tendrán el significado que se indica a continuación:

- **Aplicación**: Se refiere a la aplicación móvil denominada provisionalmente "Proyecto AGRARIA", objeto del presente contrato.

- **Propuesta**: Documento comercial y técnico elaborado por el Proveedor con fecha [dd/mm/aaaa], versión [vX.Y], que detalla el alcance funcional, técnico y económico del proyecto (Anexo I).

- **Entregables**: Resultados parciales o finales del proyecto, descritos en el Anexo II, que deberán cumplir los criterios de aceptación definidos.

- **UAT (User Acceptance Testing)**: Pruebas de Aceptación de Usuario. Fase en la que el Cliente valida los Entregables.

- **SLA (Service Level Agreement)**: Acuerdo de Niveles de Servicio (Anexo V).

- **CR (Change Request)**: Solicitud de Cambio formal (Anexo III).

- **DPA (Data Processing Agreement)**: Acuerdo de Encargado del Tratamiento de datos personales (Anexo IV).

- **Producción**: Entorno operativo definitivo donde la Aplicación estará disponible para los usuarios finales.

- **Fuerza Mayor**: Cualquier causa imprevisible o inevitable ajena a la voluntad de las Partes.

- **Aceptación / Aceptación Tácita**: Conformidad expresa del Cliente respecto de un Entregable o Hito. También se considerará Aceptación la ausencia de objeciones escritas y motivadas por parte del Cliente transcurridos diez (10) días naturales desde la entrega formal.

---

## 3. Alcance y Metodología

### 3.1. Alcance del Proyecto

El Proveedor desarrollará la Aplicación "Proyecto AGRARIA", cuyo objetivo es conectar oferta y demanda de trabajo agrícola, facilitando la interacción entre empleadores y trabajadores del sector rural, conforme a lo definido en la Propuesta (Anexo I).

El alcance funcional y técnico comprenderá:

- Desarrollo de aplicación móvil multiplataforma (iOS y Android) con React Native.
- Desarrollo de backend en .NET, con base de datos SQL Server o MySQL.
- Implementación de una API REST segura para la comunicación entre el frontend y el backend.
- Diseño e integración de interfaces de usuario (UI/UX) conforme a los prototipos aprobados.
- Configuración de entornos de desarrollo, preproducción y producción, con mecanismos de CI/CD.
- Funcionalidades básicas de autenticación, gestión de usuarios, perfiles, ofertas de empleo, postulaciones, mensajería y notificaciones.
- Panel de administración web (si está incluido en la Propuesta).
- Documentación técnica y manual de uso.

> **Nota**: Cualquier elemento no expresamente indicado en la Propuesta se considerará fuera de alcance.

### 3.2. Metodología de Trabajo

El desarrollo se llevará a cabo siguiendo una **metodología ágil**, basada en iteraciones y revisiones continuas.

#### Fases principales:

1. Análisis funcional y técnico detallado.
2. Diseño UI/UX y validación de prototipos.
3. Desarrollo iterativo del frontend y backend.
4. Pruebas internas del Proveedor (QA).
5. Demostración funcional al Cliente (primer hito de avance con pago del 30%).
6. Entrega de versión Beta y pruebas de aceptación (UAT).
7. Corrección de incidencias y entrega final para puesta en producción.

Cada entrega intermedia será objeto de validación por parte del Cliente en el plazo máximo de **diez (10) días naturales**. Transcurrido dicho plazo sin notificación escrita de incidencias bloqueantes, la entrega se considerará aceptada (**Aceptación Tácita**).

### 3.3. Responsabilidades del Cliente

El Cliente se compromete a:

- Designar un interlocutor único con capacidad de decisión técnica y funcional.
- Validar las propuestas de diseño, maquetas y entregables dentro de los plazos acordados.
- Facilitar textos, imágenes, traducciones, credenciales de acceso, licencias o datos requeridos.
- Comunicar con antelación cualquier circunstancia que pueda afectar al calendario del proyecto.

> **Importante**: Los retrasos o falta de colaboración por parte del Cliente durante más de diez (10) días naturales podrán suponer ajustes en los plazos de entrega.

### 3.4. Cronograma y Entregables

El detalle de los entregables, sus criterios de aceptación y el cronograma estimado se incluyen en el **Anexo II** (Entregables y Cronograma).

---

## 4. Criterios de Aceptación y Validación de Entregas (UAT)

### 4.1. Validación por hitos

El proyecto se desarrollará conforme a los hitos establecidos en el Anexo II.

### 4.2. Hito de demostración funcional

Una vez completada una versión con funcionalidades principales operativas, el Proveedor realizará una demostración funcional al Cliente. Este hito constituirá Entregable a efectos de facturación y activará el pago del **30%**.

### 4.3. Pruebas de aceptación (UAT)

Completado el desarrollo, el Proveedor pondrá a disposición del Cliente una versión candidata (Release Candidate). El Cliente dispondrá de **diez (10) días naturales** para realizar las pruebas y comunicar su aceptación o incidencias bloqueantes.

### 4.4. Criterios de aceptación

Un entregable se considerará aceptado cuando:

- Cumpla los requisitos funcionales y técnicos descritos en la Propuesta (Anexo I).
- Las incidencias comunicadas sean menores o no bloqueantes.
- El Cliente emita su conformidad expresa, o transcurra el plazo de validación sin comunicación de incidencias.

### 4.5. Corrección de incidencias

El Proveedor corregirá las incidencias clasificadas como bloqueantes o críticas dentro del plazo razonable acordado.

> **Exclusiones**: Quedan excluidas las observaciones meramente estéticas, de contenido, cambios de criterio funcional posterior o solicitudes de nueva funcionalidad no prevista.

### 4.6. Entrega final y puesta en producción

Una vez aceptados los entregables finales, se procederá a la puesta en producción. Este momento marcará el inicio de la garantía.

---

## 5. Control de Cambios

### 5.1. Alcance cerrado

El proyecto se ejecutará conforme al alcance definido en el **Anexo I**. No se admitirán modificaciones salvo que se formalicen mediante un nuevo contrato o adenda económica firmada por ambas Partes.

### 5.2. No aceptación de cambios no pactados

Cualquier petición que implique alteración, ampliación o sustitución de funcionalidades será considerada fuera del alcance contractual.

### 5.3. Modificaciones por nuevo acuerdo

Solo mediante la firma de una **adenda contractual específica** se podrán incorporar nuevos requerimientos.

### 5.4. Documentación de cambios

Los cambios acordados se documentarán mediante adenda (**Anexo III** – Registro de Cambios Autorizados).

### 5.5. Prohibición de ejecución sin aprobación

El Proveedor no iniciará el desarrollo de ningún cambio hasta recibir la aprobación expresa y por escrito del Cliente.

### 5.6. Salvaguarda de alcance original

La no ejecución de un cambio por parte del Proveedor no constituirá incumplimiento contractual.

---

## 6. Precio y Forma de Pago

### 6.1. Precio total

El precio total del proyecto asciende a **[importe total en euros]**, impuestos no incluidos, conforme al presupuesto detallado en el Anexo I.

### 6.2. Estructura de pagos por hitos

| Hito | Descripción | % Pago | Momento de Facturación |
|------|-------------|--------|------------------------|
| 1 | **Demostración funcional**: versión operativa que muestre las principales pantallas y flujos | 30% | Tras la presentación de la versión funcional |
| 2 | **Versión Beta completa**: incluye todas las funcionalidades previstas | 40% | Tras la entrega de la versión Beta para UAT |
| 3 | **Entrega final / Puesta en producción**: aplicación validada y aceptada | 30% | Tras la aceptación final del proyecto |

### 6.3. Ausencia de anticipo

No se establece ningún pago inicial a la firma del contrato.

### 6.4. Forma de facturación y plazo

El Cliente dispondrá de **diez (10) días naturales** para formular objeciones motivadas. Las facturas serán pagaderas en un plazo máximo de **treinta (30) días naturales** desde su fecha de emisión.

### 6.5. Retrasos en el pago

El retraso superior a **15 días naturales** facultará al Proveedor a suspender temporalmente los trabajos. Los importes impagados devengarán el interés legal del dinero incrementado en dos (2) puntos porcentuales.

### 6.6. Costes adicionales y servicios Cloud

Quedan excluidos del precio:

- Infraestructura Cloud (AWS, Google Cloud o Microsoft Azure)
- Licencias o suscripciones de terceros
- Cuotas de publicación en App Store y Google Play
- Servicios de hosting, monitorización, backups

El Proveedor se compromete a asesorar al Cliente en la selección del servicio Cloud más adecuado, garantizando que los datos permanezcan alojados dentro del Espacio Económico Europeo (EEE).

---

## 7. Propiedad Intelectual y Licencias

### 7.1. Titularidad del desarrollo

Todo el software desarrollado será propiedad intelectual exclusiva del **Proveedor** hasta el pago íntegro del proyecto.

Una vez abonado el **100% del importe**, el Proveedor otorgará al Cliente una **licencia no exclusiva, indefinida y libre de regalías** para el uso y explotación del software.

> **Importante**: La licencia no incluye derechos de modificación, transformación o mantenimiento del código fuente salvo autorización previa y por escrito del Proveedor.

### 7.2. Conservación del know-how del Proveedor

El Proveedor conservará la plena titularidad sobre su know-how, metodologías, frameworks, plantillas y componentes genéricos.

### 7.3. Software y servicios de terceros

El Cliente acepta las condiciones de licencia de componentes, librerías y servicios de terceros incorporados al desarrollo.

### 7.4. Diseños, marcas y contenidos

El Cliente conservará los derechos sobre logotipos, marcas, textos e imágenes proporcionados.

### 7.5. Entrega del código fuente y documentación

Una vez finalizado el proyecto y efectuado el **pago completo**, el Proveedor pondrá a disposición del Cliente:

- El código fuente de la Aplicación
- La documentación técnica y manual de despliegue

> **Nota**: La entrega del código fuente no confiere al Cliente derecho de modificación sin autorización expresa.

### 7.6. Derecho de autoría

El Cliente autoriza al Proveedor a mencionar la participación de CODELIO S.L. como desarrollador del proyecto en su portafolio profesional.

---

## 8. Confidencialidad y Protección de Datos (RGPD)

### 8.1. Confidencialidad

Ambas Partes se comprometen a mantener estricta confidencialidad sobre toda la información a la que tengan acceso. Esta obligación se mantendrá durante la vigencia del contrato y por un periodo adicional de **cinco (5) años**.

### 8.2. Protección de datos personales

El Proveedor (CODELIO S.L.) actuará como **Encargado del Tratamiento** conforme al RGPD.

#### Obligaciones del Proveedor:

- Tratar los datos únicamente siguiendo instrucciones documentadas del Cliente.
- Garantizar la confidencialidad de las personas autorizadas.
- Aplicar medidas técnicas y organizativas adecuadas para la seguridad de los datos.
- No comunicar los datos a terceros salvo autorización expresa.
- Asistir al Cliente en el cumplimiento de sus obligaciones.
- Suprimir o devolver todos los datos personales una vez finalizado el servicio.

### 8.3. Subencargados y servicios Cloud

CODELIO podrá recurrir a subencargados que presten servicios de infraestructura Cloud (AWS, GCP, Azure). Estos proveedores cumplen con el RGPD y alojan los datos dentro del EEE.

### 8.4. Brechas de seguridad

En caso de incidente de seguridad, el Proveedor notificará al Cliente en un máximo de **72 horas** desde que tenga conocimiento.

### 8.5. Documento de Encargado del Tratamiento (DPA)

Los detalles complementarios se desarrollan en el **Anexo IV** (Acuerdo de Encargado del Tratamiento – DPA).

---

## 9. Garantía

### 9.1. Periodo de garantía

El Proveedor garantiza el correcto funcionamiento de la Aplicación durante **cuarenta y cinco (45) días naturales** desde la aceptación del proyecto.

Durante este periodo, el Proveedor corregirá sin coste adicional los defectos de software que:

- Sean reproducibles
- Sean imputables directamente al desarrollo realizado por el Proveedor
- Tengan carácter bloqueante

#### Exclusiones:

- Uso inadecuado de la Aplicación
- Modificaciones realizadas por terceros o por el Cliente
- Incidencias provocadas por servicios externos

### 9.2. Alcance de la garantía

La garantía cubre errores o incidencias funcionales que impidan el correcto uso de las funcionalidades descritas en la Propuesta (Anexo I).

#### Quedan excluidos:

- Cambios de diseño, textos o mejoras no contempladas en el alcance inicial
- Actualizaciones evolutivas, adaptativas o tecnológicas (por ejemplo, nuevas versiones de iOS/Android o librerías externas)
- Incidencias derivadas de configuraciones o integraciones ajenas al Proveedor

Quedan excluidas de la garantía las adaptaciones o cambios requeridos por actualizaciones de terceros (por ejemplo, cambios en políticas de App Store/Google Play, nuevas versiones de sistemas operativos móviles, cambios en APIs externas o librerías de terceros) posteriores a la fecha de Aceptación.

### 9.3. Atención y corrección de errores

Las incidencias comunicadas durante el periodo de garantía serán clasificadas por severidad (bloqueante, crítica o menor) y atendidas en plazos razonables según su impacto, de acuerdo con los tiempos indicados en el Anexo V (SLA de soporte), en caso de existir.

### 9.4. Extensión mediante mantenimiento

Una vez finalizado el periodo de garantía, el Cliente podrá contratar un servicio de mantenimiento y soporte con el Proveedor en las condiciones que se establezcan en el Anexo V, o mediante acuerdo independiente, para cubrir:

- Actualizaciones técnicas
- Soporte funcional
- Pequeños evolutivos
- Ajustes ante cambios en sistemas operativos, librerías o dependencias externas

### 9.5. Limitación

El Proveedor no será responsable por pérdidas de datos, interrupciones de servicio o daños indirectos derivados del uso de la Aplicación.

La responsabilidad total del Proveedor, en cualquier caso, no excederá del importe total abonado por el Cliente en los 12 meses anteriores al incidente.

---

## 10. Mantenimiento, Observabilidad y Evoluciones

### 10.1. Fase posterior al desarrollo

Una vez completado y aceptado el proyecto, la Aplicación requerirá servicios continuados de mantenimiento técnico, observabilidad, soporte y evolución funcional, necesarios para garantizar su correcto funcionamiento, estabilidad, rendimiento y seguridad a lo largo del tiempo.

### 10.2. No incluido en el presente contrato

Estos servicios no forman parte del alcance ni del precio establecidos en el presente contrato.

Su alcance, condiciones técnicas, niveles de servicio (SLA) y tarifas se definirán mediante una nueva propuesta comercial o contrato específico que las Partes formalizarán tras la entrega y aceptación del proyecto.

### 10.3. Compromiso de continuidad

El Proveedor (CODELIO S.L.) podrá ofrecer al Cliente dichos servicios de mantenimiento, soporte, observabilidad o evolutivos tras la entrega del proyecto, en condiciones que se negociarán en su momento.

En ningún caso se entenderá que el Proveedor asume la obligación de prestar dichos servicios si no existe un acuerdo específico y vigente que regule su alcance y contraprestación económica.

### 10.4. Tipos de mantenimiento previstos

A título informativo, los servicios que podrían incluirse en dicho acuerdo posterior comprenden:

- **Mantenimiento correctivo**: resolución de errores o incidencias no cubiertas por la garantía
- **Mantenimiento adaptativo**: actualización de librerías, frameworks, dependencias o compatibilidad con nuevas versiones de sistemas operativos (iOS, Android, .NET, etc.)
- **Mantenimiento evolutivo**: incorporación de nuevas funcionalidades o mejoras
- **Mantenimiento preventivo y observabilidad**: monitorización de la infraestructura Cloud (AWS, Google Cloud o Azure), copias de seguridad, logs, métricas de rendimiento y alertas

### 10.5. Transición o traspaso

En caso de que el Cliente decidiera contratar estos servicios con un tercero, el Proveedor colaborará razonablemente en el traspaso técnico y documental de la Aplicación, según los términos que se acuerden entre las Partes.

Cualquier colaboración en tareas de traspaso, formación técnica, exportación de datos, soporte a terceros designados por el Cliente o acciones equivalentes de reversibilidad será facturada conforme a las tarifas vigentes del Proveedor en ese momento.

---

## 11. Limitación de Responsabilidad y Fuerza Mayor

### 11.1. Limitación de responsabilidad

El Proveedor responderá únicamente de los daños y perjuicios directos ocasionados al Cliente como consecuencia de un incumplimiento probado de sus obligaciones contractuales.

En ningún caso el Proveedor será responsable por:

- Lucro cesante, pérdida de beneficios, pérdida de datos o daños indirectos derivados del uso o imposibilidad de uso de la Aplicación
- Incidencias o caídas provocadas por servicios de terceros, tales como plataformas Cloud (AWS, Google Cloud, Azure), proveedores de correo, SMS, mapas, APIs o tiendas de aplicaciones (App Store, Google Play)
- Errores ocasionados por modificaciones del Cliente o de terceros sobre el código entregado

La responsabilidad total del Proveedor, por cualquier causa y bajo cualquier circunstancia, no podrá exceder del importe total efectivamente abonado por el Cliente durante los doce (12) meses anteriores al hecho que origine la reclamación.

### 11.2. Mitigación de daños

El Cliente se compromete a colaborar activamente para minimizar el impacto de cualquier incidencia o daño potencial, notificando de inmediato al Proveedor cualquier defecto, error o mal funcionamiento detectado.

### 11.3. Fuerza mayor

Ninguna de las Partes será responsable por el incumplimiento o retraso en el cumplimiento de sus obligaciones cuando dicho incumplimiento se deba a causa de fuerza mayor, entendiéndose por tal cualquier evento imprevisible o inevitable ajeno a la voluntad de las Partes, incluyendo, entre otros:

- Fallos generalizados en redes de telecomunicaciones o servicios de terceros
- Desastres naturales, incendios, inundaciones, guerras, huelgas, conflictos laborales o pandemias
- Actos de autoridad o restricciones gubernamentales
- Ciberataques o interrupciones masivas de servicios Cloud

La Parte afectada por una causa de fuerza mayor deberá notificarlo por escrito a la otra Parte en un plazo máximo de cinco (5) días hábiles desde su conocimiento, adoptando las medidas razonables para mitigar sus efectos.

Si la situación de fuerza mayor se prolongara por más de treinta (30) días consecutivos, cualquiera de las Partes podrá resolver el contrato sin penalización alguna.

Durante el periodo en que concurra la causa de fuerza mayor, el Proveedor podrá suspender parcial o totalmente la prestación de los servicios sin que ello constituya incumplimiento ni genere derecho a indemnización alguna por parte del Cliente.

---

## 12. Vigencia y Terminación

### 12.1. Entrada en vigor y duración

El presente contrato entrará en vigor en la fecha de su firma por ambas Partes y permanecerá vigente hasta la aceptación final del proyecto o, en su caso, hasta la finalización de las tareas de entrega y puesta en producción descritas en el Anexo II (Cronograma).

La duración estimada del proyecto se establece en dicho Anexo, pudiendo ajustarse de común acuerdo entre las Partes en función de la evolución técnica y de los hitos alcanzados.

### 12.2. Terminación por cumplimiento

El contrato se considerará cumplido y extinguido una vez:

- El Cliente haya aceptado formalmente la entrega final, y
- El Proveedor haya entregado la documentación técnica y el código fuente,
- Y se haya efectuado el pago total del precio pactado

A partir de ese momento comenzará el periodo de garantía definido en la cláusula 9.

### 12.3. Terminación anticipada por causa justificada

Cualquiera de las Partes podrá resolver el contrato antes de su finalización en los siguientes casos:

a) Incumplimiento grave de las obligaciones contractuales esenciales por la otra Parte, siempre que no haya sido subsanado en un plazo de quince (15) días naturales desde la notificación escrita del incumplimiento.

b) Fuerza mayor prolongada, conforme a lo previsto en la cláusula 11.3, cuando la causa se extienda más de treinta (30) días consecutivos.

c) Falta de pago reiterada de las facturas emitidas conforme a los hitos acordados.

En todos los casos, la Parte cumplidora podrá exigir la compensación de los daños y perjuicios acreditados.

### 12.4. Efectos de la terminación

En caso de terminación anticipada del contrato por causa no imputable al Proveedor, el Cliente deberá abonar:

- Las cantidades devengadas hasta la fecha efectiva de terminación
- Los trabajos en curso o parcialmente completados, y
- Cualesquiera costes no recuperables razonablemente incurridos por el Proveedor

El Proveedor entregará al Cliente, una vez abonadas las cantidades devengadas y los trabajos en curso según lo anterior, los materiales, avances o documentación producidos hasta la fecha, en el estado en que se encuentren, exclusivamente para fines internos de evaluación.

En ningún caso dicha entrega parcial implicará cesión de derechos de explotación, ni obligación de entrega del código fuente completo o credenciales de entornos productivos si el Cliente no ha satisfecho la totalidad de los importes pendientes conforme a la cláusula 6.

### 12.5. Reversibilidad y traspaso

Finalizado el contrato —por cumplimiento o resolución—, CODELIO S.L. entregará al Cliente:

- El código fuente y documentación disponibles
- Las credenciales de acceso a los entornos o repositorios acordados
- Y, en su caso, colaborará razonablemente en el traspaso técnico a otro proveedor, siempre que el Cliente esté al corriente de pago

Toda asistencia adicional de traspaso técnico solicitada por el Cliente tras la terminación será objeto de facturación específica y no estará incluida en el precio del presente contrato.

---

## 13. Comunicaciones y Notificaciones

### 13.1. Forma de comunicación

Todas las comunicaciones entre las Partes relativas al presente contrato deberán realizarse por escrito, a través de los medios acordados (correo electrónico, mensajería profesional o herramienta de gestión del proyecto).

### 13.2. Direcciones válidas

Se considerarán válidas las notificaciones remitidas a las siguientes direcciones, salvo actualización comunicada por escrito:

**Proveedor (CODELIO S.L.)**
- Calle Estrella Denébola 21, 5ºA
- 28045 Madrid
- Correo electrónico: [email del Proveedor]

**Cliente (AGRICULTURAL SERVICES MANAGEMENT, SL)**
- C/ AFORES, 1 BUTSENIT D'URGELL
- 25616 MONTGAI (LLEIDA)
- Correo electrónico: [email del Cliente]

### 13.3. Cambio de direcciones

Cualquier cambio de dirección o correo electrónico deberá ser comunicado a la otra Parte con al menos cinco (5) días hábiles de antelación para que surta efecto.

---

## 14. Ley Aplicable y Jurisdicción

### 14.1. Legislación

El presente contrato se regirá e interpretará de conformidad con la legislación española, en especial el Código Civil y la normativa sobre servicios y contratos electrónicos aplicables.

### 14.2. Jurisdicción

Las Partes acuerdan someter cualquier controversia, discrepancia o reclamación que pudiera surgir en relación con la interpretación o ejecución del presente contrato a los Juzgados y Tribunales de la ciudad de **Madrid**, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, salvo que las Partes acuerden previamente someterse a un procedimiento de mediación o arbitraje de carácter voluntario.

---

## 15. Nulidad Parcial

Si cualquiera de las disposiciones del presente contrato fuese declarada, total o parcialmente, nula o inválida, tal nulidad o invalidez no afectará a las restantes disposiciones del contrato, que permanecerán en pleno vigor.

Las Partes negociarán de buena fe la sustitución de la cláusula afectada por otra válida y de efecto económico lo más equivalente posible.

---

## 16. Aceptación y Firma

En prueba de conformidad, las Partes firman el presente Contrato de Desarrollo de Aplicación Móvil y Servicios Asociados por duplicado y a un solo efecto, en el lugar y fecha indicados en el encabezado.

---

### FIRMAS

**Por el Cliente**

- **Nombre**: JOSEP AMIGO MARSA
- **Cargo**: ADMINISTRADOR ÚNICO
- **Firma**: ________________________
- **Fecha**: ________________________

---

**Por el Proveedor (CODELIO S.L.)**

- **Nombre**: Vicente José Moreno Escobar
- **Cargo**: Representante Legal
- **Firma**: ________________________
- **Fecha**: ________________________

---

## ANEXOS

Forman parte integrante del presente contrato los siguientes anexos:

- **Anexo I**: Propuesta Comercial / Presupuesto
- **Anexo II**: Entregables y Cronograma
- **Anexo III**: Registro de Cambios Autorizados (CR)
- **Anexo IV**: Acuerdo de Encargado del Tratamiento (DPA)
- **Anexo V**: Acuerdo de Niveles de Servicio (SLA) - si aplica

---

© 2025 - Contrato de Desarrollo de Aplicación Móvil - Proyecto AGRARIA
