# DOCS_MVP_04 - Sistema de Emails Transaccionales

> **Versi\u00f3n:** 1.0
> **Fecha:** 2026-02-19
> **Estado:** Especificaci\u00f3n aprobada, pendiente de implementaci\u00f3n

---

## 1. Visi\u00f3n General

Terralia env\u00eda emails transaccionales como complemento a las notificaciones push. Los emails cubren dos necesidades:

1. **Usuarios:** Informar de eventos relevantes para su actividad (aprobaciones, aplicaciones, estado de trabajos).
2. **Admin:** Alertar de acciones que requieren intervenci\u00f3n (aprobaciones pendientes, coordinaci\u00f3n de trabajos asignados).

**Principios:**
- Todo email es transaccional (no marketing). Se env\u00eda como consecuencia de una acci\u00f3n.
- Bilingue: se env\u00eda en el idioma configurado del usuario (ES o CA). Los emails al admin siempre en ES.
- Dise\u00f1o limpio y coherente con la marca Terralia.
- No se env\u00edan emails duplicados con push: el email es un canal complementario, no alternativo.

---

## 2. Stack T\u00e9cnico

### 2.1 Proveedor: Resend

| Aspecto | Detalle |
|---------|---------|
| **Proveedor** | [Resend](https://resend.com) |
| **Free tier** | 3.000 emails/mes (suficiente para MVP) |
| **SDK** | `resend` (paquete oficial Node.js) |
| **Integraci\u00f3n NestJS** | M\u00f3dulo custom `MailModule` con inyecci\u00f3n de dependencias |
| **Plantillas** | Handlebars (.hbs) compiladas a HTML |
| **Dominio de env\u00edo** | `noreply@terralia.es` (configurar DNS en Resend) |

**Justificaci\u00f3n de Resend sobre alternativas:**
- API moderna y simple vs SendGrid (sobrecargado para MVP)
- Free tier generoso (3.000/mes vs 100/d\u00eda de SendGrid)
- SDK oficial limpio, sin dependencias de Nodemailer
- Configuraci\u00f3n de dominio DNS sencilla

### 2.2 Variables de entorno

```env
# api/.env
RESEND_API_KEY=re_xxxxxxxxxxxxx
MAIL_FROM=Terralia <noreply@terralia.es>
MAIL_ADMIN=admin@terralia.es
APP_URL=https://terralia.es
```

### 2.3 Estructura de archivos

```
api/src/mail/
\u251c\u2500\u2500 mail.module.ts          # M\u00f3dulo NestJS
\u251c\u2500\u2500 mail.service.ts         # Servicio principal (wrapper de Resend SDK)
\u251c\u2500\u2500 mail.types.ts           # Tipos e interfaces
\u251c\u2500\u2500 templates/
\u2502   \u251c\u2500\u2500 layouts/
\u2502   \u2502   \u2514\u2500\u2500 base.hbs            # Layout base con header/footer Terralia
\u2502   \u251c\u2500\u2500 user/
\u2502   \u2502   \u251c\u2500\u2500 welcome.hbs         # Bienvenida
\u2502   \u2502   \u251c\u2500\u2500 account-approved.hbs
\u2502   \u2502   \u251c\u2500\u2500 account-rejected.hbs
\u2502   \u2502   \u251c\u2500\u2500 password-reset.hbs
\u2502   \u2502   \u251c\u2500\u2500 password-changed.hbs
\u2502   \u2502   \u251c\u2500\u2500 job-approved.hbs
\u2502   \u2502   \u251c\u2500\u2500 job-rejected.hbs
\u2502   \u2502   \u251c\u2500\u2500 machinery-approved.hbs
\u2502   \u2502   \u251c\u2500\u2500 machinery-rejected.hbs
\u2502   \u2502   \u251c\u2500\u2500 application-received.hbs
\u2502   \u2502   \u251c\u2500\u2500 application-accepted.hbs
\u2502   \u2502   \u251c\u2500\u2500 application-rejected.hbs
\u2502   \u2502   \u251c\u2500\u2500 job-in-progress.hbs
\u2502   \u2502   \u251c\u2500\u2500 job-completed.hbs
\u2502   \u2502   \u251c\u2500\u2500 review-received.hbs
\u2502   \u2502   \u251c\u2500\u2500 account-suspended.hbs
\u2502   \u2502   \u2514\u2500\u2500 account-reactivated.hbs
\u2502   \u2514\u2500\u2500 admin/
\u2502       \u251c\u2500\u2500 new-user.hbs
\u2502       \u251c\u2500\u2500 new-job.hbs
\u2502       \u251c\u2500\u2500 new-machinery.hbs
\u2502       \u251c\u2500\u2500 new-application.hbs
\u2502       \u251c\u2500\u2500 provider-selected.hbs
\u2502       \u251c\u2500\u2500 daily-summary.hbs
\u2502       \u2514\u2500\u2500 low-rating-alert.hbs
\u2514\u2500\u2500 i18n/
    \u251c\u2500\u2500 es.json                 # Textos en espa\u00f1ol
    \u2514\u2500\u2500 ca.json                 # Textos en catal\u00e1n
```

---

## 3. Cat\u00e1logo de Emails - USUARIOS

### U-01: Bienvenida

| Campo | Valor |
|-------|-------|
| **Trigger** | `POST /api/auth/register` o `POST /api/auth/google` (usuario nuevo) |
| **Destinatario** | Usuario reci\u00e9n registrado |
| **Asunto ES** | Bienvenido a Terralia |
| **Asunto CA** | Benvingut a Terralia |
| **Variables** | `{{fullName}}`, `{{appUrl}}` |
| **CTA** | - |
| **Notas** | Informar que la cuenta est\u00e1 pendiente de aprobaci\u00f3n por admin |

**Contenido ES:**
```
Hola {{fullName}},

Gracias por unirte a Terralia, la plataforma que conecta profesionales del campo.

Tu cuenta ha sido creada correctamente. Un administrador revisar\u00e1 tu perfil
y te notificaremos cuando est\u00e9 aprobada. Mientras tanto, puedes explorar
la plataforma en modo lectura.

\u00a1Bienvenido a la comunidad!

El equipo de Terralia
```

---

### U-02: Cuenta aprobada

| Campo | Valor |
|-------|-------|
| **Trigger** | `PATCH /api/admin/users/:id/approve` |
| **Destinatario** | Usuario aprobado |
| **Asunto ES** | Tu cuenta ha sido aprobada |
| **Asunto CA** | El teu compte ha estat aprovat |
| **Variables** | `{{fullName}}`, `{{appUrl}}` |
| **CTA** | "Abrir Terralia" \u2192 deep link a la app |

**Contenido ES:**
```
Hola {{fullName}},

\u00a1Buenas noticias! Tu cuenta en Terralia ha sido aprobada.

Ya puedes:
- Publicar ofertas de trabajo
- Aplicar a trabajos disponibles
- Registrar tu maquinaria

Entra en la app y empieza a conectar con profesionales del campo.

[Abrir Terralia]
```

---

### U-03: Cuenta rechazada

| Campo | Valor |
|-------|-------|
| **Trigger** | `PATCH /api/admin/users/:id/reject` |
| **Destinatario** | Usuario rechazado |
| **Asunto ES** | Informaci\u00f3n sobre tu cuenta en Terralia |
| **Asunto CA** | Informaci\u00f3 sobre el teu compte a Terralia |
| **Variables** | `{{fullName}}`, `{{reason}}`, `{{supportEmail}}` |

**Contenido ES:**
```
Hola {{fullName}},

Hemos revisado tu perfil en Terralia y no hemos podido aprobar tu cuenta
en este momento.

Motivo: {{reason}}

Si crees que ha habido un error o quieres proporcionarnos m\u00e1s informaci\u00f3n,
puedes escribirnos a {{supportEmail}}.

El equipo de Terralia
```

---

### U-04: Recuperaci\u00f3n de contrase\u00f1a

| Campo | Valor |
|-------|-------|
| **Trigger** | `POST /api/auth/forgot-password` (nuevo endpoint) |
| **Destinatario** | Usuario que solicita reset |
| **Asunto ES** | Recupera tu contrase\u00f1a de Terralia |
| **Asunto CA** | Recupera la teva contrasenya de Terralia |
| **Variables** | `{{fullName}}`, `{{resetUrl}}`, `{{expiresIn}}` |
| **Notas** | Token v\u00e1lido 1 hora. Si el email no existe, NO enviar (evitar enumeraci\u00f3n) |

**Contenido ES:**
```
Hola {{fullName}},

Hemos recibido una solicitud para restablecer tu contrase\u00f1a en Terralia.

Haz clic en el siguiente enlace para crear una nueva contrase\u00f1a:

[Restablecer contrase\u00f1a]

Este enlace expira en {{expiresIn}}.

Si no solicitaste este cambio, puedes ignorar este email. Tu contrase\u00f1a
no se modificar\u00e1.

El equipo de Terralia
```

---

### U-05: Contrase\u00f1a cambiada

| Campo | Valor |
|-------|-------|
| **Trigger** | `POST /api/auth/reset-password` (nuevo endpoint) |
| **Destinatario** | Usuario que cambi\u00f3 contrase\u00f1a |
| **Asunto ES** | Tu contrase\u00f1a ha sido actualizada |
| **Asunto CA** | La teva contrasenya ha estat actualitzada |
| **Variables** | `{{fullName}}`, `{{supportEmail}}` |

**Contenido ES:**
```
Hola {{fullName}},

Tu contrase\u00f1a en Terralia ha sido actualizada correctamente.

Si no realizaste este cambio, contacta inmediatamente con nuestro equipo
en {{supportEmail}}.

El equipo de Terralia
```

---

### U-06: Oferta de trabajo aprobada

| Campo | Valor |
|-------|-------|
| **Trigger** | `PATCH /api/admin/jobs/:id/approve` |
| **Destinatario** | Creador de la oferta |
| **Asunto ES** | Tu oferta "{{jobTitle}}" ha sido aprobada |
| **Asunto CA** | La teva oferta "{{jobTitle}}" ha estat aprovada |
| **Variables** | `{{fullName}}`, `{{jobTitle}}`, `{{jobUrl}}` |

**Contenido ES:**
```
Hola {{fullName}},

Tu oferta de trabajo "{{jobTitle}}" ha sido revisada y aprobada.
Ya es visible para los profesionales de la plataforma.

[Ver mi oferta]

El equipo de Terralia
```

---

### U-07: Oferta de trabajo rechazada

| Campo | Valor |
|-------|-------|
| **Trigger** | `PATCH /api/admin/jobs/:id/reject` |
| **Destinatario** | Creador de la oferta |
| **Asunto ES** | Informaci\u00f3n sobre tu oferta "{{jobTitle}}" |
| **Asunto CA** | Informaci\u00f3 sobre la teva oferta "{{jobTitle}}" |
| **Variables** | `{{fullName}}`, `{{jobTitle}}`, `{{reason}}`, `{{supportEmail}}` |

**Contenido ES:**
```
Hola {{fullName}},

Hemos revisado tu oferta "{{jobTitle}}" y no hemos podido aprobarla.

Motivo: {{reason}}

Puedes modificar la oferta y volver a enviarla para revisi\u00f3n, o contactarnos
en {{supportEmail}} si tienes dudas.

El equipo de Terralia
```

---

### U-08: Maquinaria aprobada

| Campo | Valor |
|-------|-------|
| **Trigger** | `PATCH /api/admin/machinery/:id/approve` |
| **Destinatario** | Propietario de la maquinaria |
| **Asunto ES** | Tu maquinaria "{{machineryName}}" ha sido aprobada |
| **Asunto CA** | La teva maquin\u00e0ria "{{machineryName}}" ha estat aprovada |
| **Variables** | `{{fullName}}`, `{{machineryName}}` |

---

### U-09: Maquinaria rechazada

| Campo | Valor |
|-------|-------|
| **Trigger** | `PATCH /api/admin/machinery/:id/reject` |
| **Destinatario** | Propietario de la maquinaria |
| **Asunto ES** | Informaci\u00f3n sobre tu maquinaria "{{machineryName}}" |
| **Variables** | `{{fullName}}`, `{{machineryName}}`, `{{reason}}` |

---

### U-10: Aplicaci\u00f3n recibida en tu trabajo

| Campo | Valor |
|-------|-------|
| **Trigger** | `POST /api/applications` (tras aprobaci\u00f3n de la aplicaci\u00f3n) |
| **Destinatario** | Creador de la oferta de trabajo |
| **Asunto ES** | Nueva aplicaci\u00f3n en tu oferta "{{jobTitle}}" |
| **Asunto CA** | Nova sol\u00b7licitud a la teva oferta "{{jobTitle}}" |
| **Variables** | `{{fullName}}`, `{{jobTitle}}`, `{{applicantPseudonym}}`, `{{proposedPrice}}`, `{{jobUrl}}` |
| **Notas** | Se usa pseudon\u00edmia, NO el nombre real del aplicante |

**Contenido ES:**
```
Hola {{fullName}},

{{applicantPseudonym}} ha aplicado a tu oferta "{{jobTitle}}".

Precio propuesto: {{proposedPrice}} \u20ac

Entra en la app para revisar la aplicaci\u00f3n y el perfil del candidato.

[Ver aplicaciones]

El equipo de Terralia
```

---

### U-11: Tu aplicaci\u00f3n fue aceptada

| Campo | Valor |
|-------|-------|
| **Trigger** | Cuando el solicitante selecciona un proveedor |
| **Destinatario** | Proveedor seleccionado |
| **Asunto ES** | \u00a1Tu aplicaci\u00f3n a "{{jobTitle}}" fue aceptada! |
| **Asunto CA** | La teva sol\u00b7licitud a "{{jobTitle}}" ha estat acceptada! |
| **Variables** | `{{fullName}}`, `{{jobTitle}}` |

**Contenido ES:**
```
Hola {{fullName}},

\u00a1Enhorabuena! Has sido seleccionado para el trabajo "{{jobTitle}}".

Nuestro equipo se pondr\u00e1 en contacto contigo para coordinar los detalles.

[Ver trabajo]

El equipo de Terralia
```

---

### U-12: Tu aplicaci\u00f3n fue rechazada

| Campo | Valor |
|-------|-------|
| **Trigger** | Cuando el solicitante selecciona otro proveedor |
| **Destinatario** | Proveedores no seleccionados |
| **Asunto ES** | Actualizaci\u00f3n sobre tu aplicaci\u00f3n a "{{jobTitle}}" |
| **Asunto CA** | Actualitzaci\u00f3 sobre la teva sol\u00b7licitud a "{{jobTitle}}" |
| **Variables** | `{{fullName}}`, `{{jobTitle}}` |

**Contenido ES:**
```
Hola {{fullName}},

Queremos informarte de que el solicitante ha seleccionado a otro candidato
para el trabajo "{{jobTitle}}".

No te desanimes, hay muchas m\u00e1s oportunidades esperando en Terralia.

[Ver ofertas disponibles]

El equipo de Terralia
```

---

### U-12b: Oferta de trabajo modificada

| Campo | Valor |
|-------|-------|
| **Trigger** | Cuando el solicitante edita un trabajo con aplicaciones activas |
| **Destinatario** | Todos los proveedores que habían aplicado |
| **Asunto ES** | La oferta "{{jobTitle}}" ha sido modificada |
| **Asunto CA** | L'oferta "{{jobTitle}}" ha estat modificada |
| **Variables** | `{{fullName}}`, `{{jobTitle}}` |
| **Template** | `user/job-modified.hbs` |
| **Push** | Sí (`job_modified`) |

**Contenido ES:**
```
Hola {{fullName}},

La oferta "{{jobTitle}}" a la que habías aplicado ha sido modificada por su creador.

Tu candidatura anterior ha sido retirada. Si sigues interesado, puedes volver
a aplicar desde la plataforma.

[Ver ofertas disponibles]

El equipo de Terralia
```

**Comportamiento:**
- Al editar un trabajo (`PATCH /jobs/:id`), todas las aplicaciones activas se eliminan (soft-delete).
- El trabajo vuelve a estado `pending_approval`.
- Cada aplicante recibe notificación push + email.
- El email se envía en el idioma del aplicante (ES/CA).

---

### U-13: Trabajo en progreso

| Campo | Valor |
|-------|-------|
| **Trigger** | Admin cambia estado del trabajo a `in_progress` |
| **Destinatario** | Solicitante Y proveedor |
| **Asunto ES** | Tu trabajo "{{jobTitle}}" ha comenzado |
| **Asunto CA** | La teva feina "{{jobTitle}}" ha comen\u00e7at |
| **Variables** | `{{fullName}}`, `{{jobTitle}}` |

---

### U-14: Trabajo completado

| Campo | Valor |
|-------|-------|
| **Trigger** | Admin cambia estado del trabajo a `completed` |
| **Destinatario** | Solicitante Y proveedor |
| **Asunto ES** | Tu trabajo "{{jobTitle}}" ha finalizado |
| **Asunto CA** | La teva feina "{{jobTitle}}" ha finalitzat |
| **Variables** | `{{fullName}}`, `{{jobTitle}}`, `{{reviewUrl}}` |
| **CTA** | "Valorar la experiencia" |

**Contenido ES:**
```
Hola {{fullName}},

El trabajo "{{jobTitle}}" ha sido marcado como completado.

Tu opini\u00f3n es importante para la comunidad. Por favor, dedica un momento
a valorar tu experiencia.

[Valorar la experiencia]

El equipo de Terralia
```

---

### U-15: Valoraci\u00f3n recibida

| Campo | Valor |
|-------|-------|
| **Trigger** | `POST /api/reviews` |
| **Destinatario** | Usuario valorado |
| **Asunto ES** | Has recibido una nueva valoraci\u00f3n |
| **Asunto CA** | Has rebut una nova valoraci\u00f3 |
| **Variables** | `{{fullName}}`, `{{rating}}`, `{{reviewerPseudonym}}` |
| **Notas** | Se usa pseudon\u00edmia del valorador |

---

### U-16: Cuenta suspendida

| Campo | Valor |
|-------|-------|
| **Trigger** | Admin suspende usuario |
| **Destinatario** | Usuario suspendido |
| **Asunto ES** | Tu cuenta en Terralia ha sido suspendida |
| **Asunto CA** | El teu compte a Terralia ha estat susp\u00e8s |
| **Variables** | `{{fullName}}`, `{{reason}}`, `{{supportEmail}}` |

---

### U-17: Cuenta reactivada

| Campo | Valor |
|-------|-------|
| **Trigger** | Admin reactiva usuario |
| **Destinatario** | Usuario reactivado |
| **Asunto ES** | Tu cuenta en Terralia ha sido reactivada |
| **Asunto CA** | El teu compte a Terralia ha estat reactivat |
| **Variables** | `{{fullName}}`, `{{appUrl}}` |

---

### U-18: Trabajo guardado como favorito

| Campo | Valor |
|-------|-------|
| **Trigger** | Alguien a\u00f1ade un trabajo como favorito (`POST /api/favorites` con tipo `job`) |
| **Destinatario** | Autor del trabajo (requester) |
| **Asunto ES** | Tu trabajo "{{jobTitle}}" ha sido guardado como favorito |
| **Asunto CA** | El teu treball "{{jobTitle}}" ha estat desat com a favorit |
| **Variables** | `{{fullName}}`, `{{jobTitle}}` |

**Contenido ES:**
```
Hola {{fullName}},

Alguien ha guardado tu trabajo "{{jobTitle}}" como favorito.
Esto indica inter\u00e9s en tu publicaci\u00f3n.

Los favoritos son un buen indicador de que tu trabajo est\u00e1
atrayendo atenci\u00f3n en la plataforma.
```

**Template:** `user/job-favorited.hbs`

---

## 4. Cat\u00e1logo de Emails - ADMIN

Todos los emails al admin se env\u00edan en **espa\u00f1ol** a la direcci\u00f3n configurada en `MAIL_ADMIN`.

### A-01: Nuevo usuario registrado

| Campo | Valor |
|-------|-------|
| **Trigger** | `POST /api/auth/register` o `POST /api/auth/google` (usuario nuevo) |
| **Asunto** | [Terralia] Nuevo usuario pendiente: {{userFullName}} |
| **Variables** | `{{userFullName}}`, `{{userEmail}}`, `{{registrationMethod}}`, `{{province}}`, `{{adminUrl}}` |
| **CTA** | "Revisar en panel admin" |

**Contenido:**
```
Nuevo usuario registrado en Terralia.

Nombre: {{userFullName}}
Email: {{userEmail}}
M\u00e9todo: {{registrationMethod}}
Provincia: {{province}}

Requiere aprobaci\u00f3n para poder operar en la plataforma.

[Revisar en panel admin]
```

---

### A-02: Nueva oferta de trabajo creada

| Campo | Valor |
|-------|-------|
| **Trigger** | `POST /api/jobs` |
| **Asunto** | [Terralia] Nueva oferta pendiente: "{{jobTitle}}" |
| **Variables** | `{{jobTitle}}`, `{{categoryName}}`, `{{province}}`, `{{estimatedPrice}}`, `{{creatorName}}`, `{{adminUrl}}` |
| **CTA** | "Revisar oferta" |

**Contenido:**
```
Nueva oferta de trabajo pendiente de aprobaci\u00f3n.

T\u00edtulo: {{jobTitle}}
Categor\u00eda: {{categoryName}}
Provincia: {{province}}
Precio estimado: {{estimatedPrice}} \u20ac
Creado por: {{creatorName}}

[Revisar oferta]
```

---

### A-03: Nueva maquinaria registrada

| Campo | Valor |
|-------|-------|
| **Trigger** | `POST /api/machinery` |
| **Asunto** | [Terralia] Nueva maquinaria pendiente: {{machineryType}} - {{machineryModel}} |
| **Variables** | `{{machineryType}}`, `{{machineryModel}}`, `{{ownerName}}`, `{{province}}`, `{{adminUrl}}` |

---

### A-04: Nueva aplicaci\u00f3n enviada

| Campo | Valor |
|-------|-------|
| **Trigger** | `POST /api/applications` |
| **Asunto** | [Terralia] Nueva aplicaci\u00f3n en "{{jobTitle}}" |
| **Variables** | `{{jobTitle}}`, `{{applicantName}}`, `{{proposedPrice}}`, `{{adminUrl}}` |

---

### A-05: Proveedor seleccionado (REQUIERE ACCI\u00d3N)

| Campo | Valor |
|-------|-------|
| **Trigger** | Solicitante selecciona proveedor |
| **Asunto** | [ACCI\u00d3N] Terralia - Trabajo asignado: "{{jobTitle}}" |
| **Variables** | Ver contenido abajo |
| **Prioridad** | Alta - Requiere coordinaci\u00f3n inmediata |

**Contenido:**
```
\u00a1ACCI\u00d3N REQUERIDA!

El solicitante ha seleccionado un proveedor para el trabajo "{{jobTitle}}".
Necesitas coordinar a ambas partes.

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

DATOS DEL SOLICITANTE:
Nombre: {{requesterFullName}}
Email: {{requesterEmail}}
Tel\u00e9fono: {{requesterPhone}}

DATOS DEL PROVEEDOR SELECCIONADO:
Nombre: {{providerFullName}}
Email: {{providerEmail}}
Tel\u00e9fono: {{providerPhone}}

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

DETALLES DEL TRABAJO:
T\u00edtulo: {{jobTitle}}
Categor\u00eda: {{categoryName}}
Provincia: {{province}}
Precio aceptado: {{acceptedPrice}} \u20ac

[Ver en panel admin]
```

---

### A-06: Resumen diario

| Campo | Valor |
|-------|-------|
| **Trigger** | Cron job diario (08:00). Solo se env\u00eda si hay actividad |
| **Asunto** | [Terralia] Resumen diario - {{date}} |
| **Variables** | `{{date}}`, `{{pendingUsers}}`, `{{pendingJobs}}`, `{{pendingMachinery}}`, `{{activeJobs}}`, `{{completedYesterday}}`, `{{newRegistrations}}` |

**Contenido:**
```
Resumen de actividad en Terralia - {{date}}

PENDIENTES DE APROBACI\u00d3N:
- Usuarios: {{pendingUsers}}
- Ofertas: {{pendingJobs}}
- Maquinaria: {{pendingMachinery}}

ACTIVIDAD DEL D\u00cdA ANTERIOR:
- Nuevos registros: {{newRegistrations}}
- Trabajos activos: {{activeJobs}}
- Trabajos completados: {{completedYesterday}}

{{#if hasPending}}
Tienes elementos pendientes de revisi\u00f3n.

[Ir al panel admin]
{{/if}}
```

---

### A-07: Alerta de valoraci\u00f3n baja

| Campo | Valor |
|-------|-------|
| **Trigger** | `POST /api/reviews` cuando `rating < 3` |
| **Asunto** | [ALERTA] Terralia - Valoraci\u00f3n baja para {{userName}} ({{rating}}/5) |
| **Variables** | `{{userName}}`, `{{rating}}`, `{{reviewText}}`, `{{jobTitle}}`, `{{reviewerName}}`, `{{adminUrl}}` |

---

## 5. Dise\u00f1o de Plantilla Base

### 5.1 Layout HTML

Todos los emails usan un layout base (`base.hbs`) con:

```
\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502         [Logo Terralia]               \u2502
\u2502                                        \u2502
\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502
\u2502  \u2502                                  \u2502  \u2502
\u2502  \u2502  T\u00edtulo / Saludo                \u2502  \u2502
\u2502  \u2502                                  \u2502  \u2502
\u2502  \u2502  Cuerpo del mensaje              \u2502  \u2502
\u2502  \u2502                                  \u2502  \u2502
\u2502  \u2502  [Bot\u00f3n CTA]  (si aplica)        \u2502  \u2502
\u2502  \u2502                                  \u2502  \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502
\u2502                                        \u2502
\u2502  Terralia \u00a9 2026                       \u2502
\u2502  terralia.es                            \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
```

### 5.2 Estilos

| Elemento | Valor |
|----------|-------|
| **Fondo exterior** | `#F9F7F3` (mismo que la app) |
| **Fondo contenido** | `#FFFFFF` |
| **Color texto** | `#1A1A1A` |
| **Color secundario** | `#6B7280` (gris) |
| **Color CTA** | `#2D6A4F` (verde Terralia) |
| **Color CTA hover** | `#1B4332` |
| **Color alerta** | `#D97706` (amarillo) |
| **Color peligro** | `#DC2626` (rojo) |
| **Fuente** | Arial, Helvetica, sans-serif (compatible email) |
| **Ancho m\u00e1ximo** | 600px |
| **Border radius** | 8px |
| **Padding contenido** | 32px |

### 5.3 Emails de admin

Los emails al admin tienen un estilo ligeramente diferente:
- Prefijo `[Terralia]` o `[ACCI\u00d3N]` en el asunto
- Datos presentados en formato tabla/lista clara
- Bot\u00f3n CTA siempre enlaza al panel admin
- Los emails de acci\u00f3n requerida (`A-05`) tienen borde izquierdo rojo

---

## 6. Internacionalizaci\u00f3n (i18n)

Las plantillas Handlebars NO se duplican por idioma. En su lugar:

1. Los textos est\u00e1n en archivos `i18n/es.json` y `i18n/ca.json`
2. El `MailService` carga el JSON del idioma del usuario
3. Se pasan los textos como variables a la plantilla

**Ejemplo `i18n/es.json`:**
```json
{
  "welcome": {
    "subject": "Bienvenido a Terralia",
    "greeting": "Hola {{fullName}},",
    "body": "Gracias por unirte a Terralia, la plataforma que conecta profesionales del campo.",
    "pending": "Tu cuenta ha sido creada correctamente. Un administrador revisar\u00e1 tu perfil y te notificaremos cuando est\u00e9 aprobada.",
    "readOnly": "Mientras tanto, puedes explorar la plataforma en modo lectura.",
    "closing": "\u00a1Bienvenido a la comunidad!",
    "signature": "El equipo de Terralia"
  },
  "accountApproved": {
    "subject": "Tu cuenta ha sido aprobada",
    "greeting": "Hola {{fullName}},",
    "body": "\u00a1Buenas noticias! Tu cuenta en Terralia ha sido aprobada.",
    "canDo": "Ya puedes:",
    "action1": "Publicar ofertas de trabajo",
    "action2": "Aplicar a trabajos disponibles",
    "action3": "Registrar tu maquinaria",
    "cta": "Abrir Terralia"
  }
}
```

---

## 7. Implementaci\u00f3n T\u00e9cnica

### 7.1 MailService API

```typescript
// Interfaz p\u00fablica del servicio
interface MailService {
  // Emails de usuario
  sendWelcome(user: UserBasic): Promise<void>;
  sendAccountApproved(user: UserBasic): Promise<void>;
  sendAccountRejected(user: UserBasic, reason: string): Promise<void>;
  sendPasswordReset(email: string, fullName: string, resetToken: string): Promise<void>;
  sendPasswordChanged(user: UserBasic): Promise<void>;
  sendJobApproved(user: UserBasic, job: { title: string }): Promise<void>;
  sendJobRejected(user: UserBasic, job: { title: string }, reason: string): Promise<void>;
  sendMachineryApproved(user: UserBasic, machinery: { name: string }): Promise<void>;
  sendMachineryRejected(user: UserBasic, machinery: { name: string }, reason: string): Promise<void>;
  sendApplicationReceived(jobCreator: UserBasic, job: { title: string }, applicantPseudonym: string, price: number): Promise<void>;
  sendApplicationAccepted(provider: UserBasic, job: { title: string }): Promise<void>;
  sendApplicationRejected(provider: UserBasic, job: { title: string }): Promise<void>;
  sendJobInProgress(user: UserBasic, job: { title: string }): Promise<void>;
  sendJobCompleted(user: UserBasic, job: { title: string }): Promise<void>;
  sendReviewReceived(user: UserBasic, rating: number, reviewerPseudonym: string): Promise<void>;
  sendAccountSuspended(user: UserBasic, reason: string): Promise<void>;
  sendAccountReactivated(user: UserBasic): Promise<void>;

  // Emails de admin
  sendAdminNewUser(user: { fullName: string; email: string; province: string; method: string }): Promise<void>;
  sendAdminNewJob(job: { title: string; category: string; province: string; price: number; creator: string }): Promise<void>;
  sendAdminNewMachinery(machinery: { type: string; model: string; owner: string; province: string }): Promise<void>;
  sendAdminNewApplication(data: { jobTitle: string; applicant: string; price: number }): Promise<void>;
  sendAdminProviderSelected(data: ProviderSelectedData): Promise<void>;
  sendAdminDailySummary(data: DailySummaryData): Promise<void>;
  sendAdminLowRatingAlert(data: { userName: string; rating: number; text: string; jobTitle: string }): Promise<void>;
}
```

### 7.2 Integraci\u00f3n en servicios existentes

Los emails se env\u00edan desde los servicios que ya existen, inyectando `MailService`:

| Servicio | M\u00e9todos que env\u00edan email |
|----------|-------------------------------|
| `AuthService.register()` | `sendWelcome` + `sendAdminNewUser` |
| `AuthService.googleLogin()` | `sendWelcome` + `sendAdminNewUser` (solo usuario nuevo) |
| `AuthService.forgotPassword()` | `sendPasswordReset` (nuevo m\u00e9todo) |
| `AuthService.resetPassword()` | `sendPasswordChanged` (nuevo m\u00e9todo) |
| `AdminService.approveUser()` | `sendAccountApproved` |
| `AdminService.rejectUser()` | `sendAccountRejected` |
| `AdminService.approveJob()` | `sendJobApproved` |
| `AdminService.rejectJob()` | `sendJobRejected` |
| `AdminService.approveMachinery()` | `sendMachineryApproved` |
| `AdminService.rejectMachinery()` | `sendMachineryRejected` |
| `JobsService.create()` | `sendAdminNewJob` |
| `ApplicationsService.create()` | `sendAdminNewApplication` + `sendApplicationReceived` |
| `ApplicationsService.selectProvider()` | `sendApplicationAccepted` + `sendApplicationRejected` + `sendAdminProviderSelected` |
| `ReviewsService.create()` | `sendReviewReceived` + `sendAdminLowRatingAlert` (si < 3) |
| Cron job (nuevo) | `sendAdminDailySummary` |

### 7.3 Manejo de errores

- Los emails se env\u00edan de forma **as\u00edncrona y no bloqueante**: si falla el env\u00edo, la acci\u00f3n principal NO falla.
- Los errores de env\u00edo se logean con `Logger.warn()`.
- No se reintenta autom\u00e1ticamente en MVP (se puede a\u00f1adir cola con Bull/Redis en el futuro).

```typescript
// Patr\u00f3n: fire-and-forget con logging
try {
  await this.mailService.sendWelcome(user);
} catch (error) {
  this.logger.warn(`Failed to send welcome email to ${user.email}`, error);
}
```

### 7.4 Entorno de desarrollo

- **Dev local:** Resend en modo test (no env\u00eda emails reales, pero logea en dashboard)
- **Testing:** Variable `MAIL_ENABLED=false` para desactivar env\u00edo en tests
- **Producci\u00f3n:** Resend con dominio `terralia.es` verificado

---

## 8. Endpoints Nuevos Requeridos

Para soportar el sistema de emails, se necesitan estos endpoints nuevos:

| Endpoint | M\u00e9todo | Descripci\u00f3n |
|----------|---------|-------------|
| `POST /api/auth/forgot-password` | P\u00fablico | Solicitar reset de contrase\u00f1a. Recibe `{ email }` |
| `POST /api/auth/reset-password` | P\u00fablico | Resetear contrase\u00f1a. Recibe `{ token, newPassword }` |

Estos endpoints se implementar\u00e1n junto al sistema de emails.

---

## 9. Tabla Resumen

| C\u00f3digo | Email | Destinatario | Trigger |
|--------|-------|-------------|---------|
| U-01 | Bienvenida | Usuario | Registro |
| U-02 | Cuenta aprobada | Usuario | Admin aprueba |
| U-03 | Cuenta rechazada | Usuario | Admin rechaza |
| U-04 | Reset contrase\u00f1a | Usuario | Solicitud |
| U-05 | Contrase\u00f1a cambiada | Usuario | Tras reset |
| U-06 | Oferta aprobada | Usuario | Admin aprueba |
| U-07 | Oferta rechazada | Usuario | Admin rechaza |
| U-08 | Maquinaria aprobada | Usuario | Admin aprueba |
| U-09 | Maquinaria rechazada | Usuario | Admin rechaza |
| U-10 | Aplicaci\u00f3n recibida | Creador oferta | Alguien aplica |
| U-11 | Aplicaci\u00f3n aceptada | Proveedor | Seleccionado |
| U-12 | Aplicación rechazada | Proveedor | Otro seleccionado |
| U-12b | Oferta modificada | Aplicantes | Solicitante edita trabajo |
| U-13 | Trabajo en progreso | Ambos | Admin cambia estado |
| U-14 | Trabajo completado | Ambos | Admin cambia estado |
| U-15 | Valoraci\u00f3n recibida | Valorado | Alguien valora |
| U-16 | Cuenta suspendida | Usuario | Admin suspende |
| U-17 | Cuenta reactivada | Usuario | Admin reactiva |
| U-18 | Trabajo guardado como favorito | Autor trabajo | Alguien favorea |
| A-01 | Nuevo usuario | Admin | Registro |
| A-02 | Nueva oferta | Admin | Job creado |
| A-03 | Nueva maquinaria | Admin | Machinery creada |
| A-04 | Nueva aplicaci\u00f3n | Admin | Alguien aplica |
| A-05 | Proveedor seleccionado | Admin | Selecci\u00f3n |
| A-06 | Resumen diario | Admin | Cron 08:00 |
| A-07 | Alerta valoraci\u00f3n baja | Admin | Review < 3 |

**Total: 17 emails de usuario + 7 emails de admin = 24 tipos**

---

## 10. Orden de Implementaci\u00f3n

### Fase A: Infraestructura (primero)
1. Instalar Resend SDK
2. Crear `MailModule` + `MailService`
3. Configurar variables de entorno
4. Crear layout base Handlebars
5. Crear archivos i18n (ES + CA)

### Fase B: Emails cr\u00edticos
6. U-01: Bienvenida
7. U-02 + U-03: Cuenta aprobada/rechazada
8. A-01: Nuevo usuario (admin)
9. U-04 + U-05: Recuperaci\u00f3n de contrase\u00f1a + confirmaci\u00f3n
10. Endpoints `forgot-password` y `reset-password`

### Fase C: Emails de flujo de trabajo
11. U-06 + U-07: Oferta aprobada/rechazada
12. U-08 + U-09: Maquinaria aprobada/rechazada
13. U-10: Aplicaci\u00f3n recibida
14. U-11 + U-12: Aplicaci\u00f3n aceptada/rechazada
15. A-02 a A-05: Todos los emails de admin de entidades

### Fase D: Emails secundarios
16. U-13 + U-14: Trabajo en progreso/completado
17. U-15: Valoraci\u00f3n recibida
18. U-16 + U-17: Cuenta suspendida/reactivada
19. U-18: Trabajo guardado como favorito
20. A-06: Resumen diario (cron)
21. A-07: Alerta valoraci\u00f3n baja
