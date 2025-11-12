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

- Cambios de diseño, textos o mejoras no contempladas
- Actualizaciones evolutivas o tecnológicas
- Incidencias derivadas de configuraciones ajenas al Proveedor

---

## 10. Limitación de Responsabilidad

### 10.1. Limitación general

La responsabilidad máxima del Proveedor quedará limitada al importe total facturado por el proyecto.

### 10.2. Exclusiones

El Proveedor no será responsable de:

- Daños indirectos, lucro cesante o pérdida de datos
- Incidencias derivadas de servicios de terceros
- Modificaciones no autorizadas por el Cliente
- Uso inadecuado de la Aplicación

### 10.3. Servicios de terceros

El Proveedor no asume responsabilidad por interrupciones, incidencias o cambios de precio de servicios externos (Cloud, mensajería, pasarelas de pago, etc.).

---

## 11. Duración y Resolución

### 11.1. Duración

El contrato entrará en vigor en la fecha de su firma y se mantendrá vigente hasta la finalización del proyecto y cumplimiento de todas las obligaciones.

### 11.2. Causas de resolución

El contrato podrá resolverse por:

- Mutuo acuerdo de las Partes
- Incumplimiento grave de alguna de las Partes
- Imposibilidad sobrevenida por causa de Fuerza Mayor

### 11.3. Efectos de la resolución

En caso de resolución anticipada:

- El Cliente abonará los trabajos efectivamente realizados hasta la fecha
- El Proveedor conservará la propiedad intelectual sobre todo el desarrollo
- Ambas Partes mantendrán las obligaciones de confidencialidad

---

## 12. Fuerza Mayor

Ninguna de las Partes será responsable por incumplimientos derivados de circunstancias de Fuerza Mayor (catástrofes naturales, guerras, pandemias, etc.).

La Parte afectada notificará a la otra en un plazo de **cinco (5) días naturales** y las obligaciones quedarán suspendidas durante el periodo que dure la causa de Fuerza Mayor.

---

## 13. Notificaciones

Todas las comunicaciones entre las Partes deberán realizarse por escrito mediante:

- Correo electrónico con acuse de recibo
- Correo certificado con acuse de recibo
- Burofax

A las direcciones indicadas en el encabezamiento del contrato.

---

## 14. Legislación Aplicable y Jurisdicción

### 14.1. Legislación

El presente contrato se regirá e interpretará conforme a la legislación española.

### 14.2. Jurisdicción

Las Partes se someten a la jurisdicción de los Juzgados y Tribunales de **Madrid capital**, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.

---

## 15. Anexos

Forman parte integrante del presente contrato los siguientes anexos:

- **Anexo I**: Propuesta Comercial / Presupuesto
- **Anexo II**: Entregables y Cronograma
- **Anexo III**: Registro de Cambios Autorizados (CR)
- **Anexo IV**: Acuerdo de Encargado del Tratamiento (DPA)
- **Anexo V**: Acuerdo de Niveles de Servicio (SLA) - si aplica

---

## FIRMAS

Y en prueba de conformidad con cuanto antecede, las Partes firman el presente contrato en dos ejemplares y a un solo efecto, en el lugar y fecha indicados en el encabezamiento.

**Por CODELIO S.L. (Proveedor)**

Firma:
Nombre: Vicente José Moreno Escobar
Cargo: Representante Legal
Fecha:

---

**Por AGRICULTURAL SERVICES MANAGEMENT, SL (Cliente)**

Firma:
Nombre: JOSEP AMIGO MARSA
Cargo: ADMINISTRADOR ÚNICO
Fecha:

---

© 2025 - Contrato de Desarrollo de Aplicación Móvil - Proyecto AGRARIA
