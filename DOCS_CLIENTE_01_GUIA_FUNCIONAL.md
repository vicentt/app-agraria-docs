# GUÍA FUNCIONAL PARA CLIENTE
## Plataforma de Gestión de Servicios Agrícolas - Versión Optimizada

**Versión:** 1.0 Cliente
**Fecha:** 30 Octubre 2025

---

## INTRODUCCIÓN

Este documento explica de forma sencilla **cómo funcionará la aplicación optimizada** para conectar agricultores que necesitan servicios con proveedores de maquinaria agrícola.

Está pensado para personas sin conocimientos técnicos, explicando:
- ¿Qué puede hacer cada usuario?
- ¿Cómo es la experiencia paso a paso?
- ¿Cómo se protegen las identidades?
- ¿Cómo se coordinan los trabajos?

---

## 1. ¿QUÉ ES LA APLICACIÓN?

Una **app móvil** (iOS y Android) donde:

- **Cualquier usuario** puede publicar trabajos que necesita realizar
- **Cualquier usuario** puede ver trabajos publicados y ofrecer sus servicios
- **Las identidades están protegidas** hasta que se formaliza un trabajo
- **Un administrador coordina** los contactos reales por WhatsApp/teléfono

**Idiomas:** Toda la app funciona en **español y catalán**.

---

## 2. TIPOS DE USUARIOS

No hay roles fijos. **Todos los usuarios pueden hacer ambas cosas:**

### 2.1 Como Solicitante
Publicas un trabajo que necesitas (ej: arar 10 hectáreas).

### 2.2 Como Proveedor
Ves trabajos publicados por otros y ofreces tus servicios con tu maquinaria.

### 2.3 Administrador
Persona del equipo con acceso especial para:
- Ver datos reales de contacto después de una selección
- Coordinar el trabajo vía WhatsApp/teléfono
- Cambiar estados de trabajos manualmente

---

## 3. CASOS DE USO PRINCIPALES

### CASO 1: Juan necesita arar su campo

**Personaje:** Juan, agricultor en Igualada (Barcelona), necesita arar 10 hectáreas antes de marzo.

**Journey completo:**

#### Paso 1: Registro en la app
1. Juan descarga la app
2. Se registra con email y contraseña (o Google)
3. Completa 3 pantallas rápidas:
   - Bienvenida (explicación)
   - Perfil básico: nombre, provincia (Barcelona), municipio (Igualada)
   - Intereses: selecciona "Preparación del Suelo" como categoría de interés

#### Paso 2: Publicar el trabajo
1. Juan clica "Publicar trabajo"
2. Rellena el formulario:
   - **Categoría:** Preparación del Suelo
   - **Descripción:** "Necesito arar 10 hectáreas para siembra de trigo"
   - **Ubicación:** Barcelona → Igualada
   - **Fechas:** Marzo 2025, duración 2-3 días
   - **Superficie:** 10 hectáreas
   - **Maquinaria:** Tractor + Arado
   - **¿Operador incluido?** Sí
   - **Fotos:** Sube 3 fotos del terreno

3. La app le muestra un **precio estimado automático**: "800€ - 1200€"
4. Juan publica el trabajo
5. El sistema genera un **pseudónimo** para Juan: "Agricultor_X7K2"

#### Paso 3: Recibir aplicaciones
1. **Varios proveedores ven el trabajo** en su feed
2. Juan recibe notificación: "Has recibido 5 aplicaciones"
3. Juan abre la app y ve las aplicaciones **anónimas**:

   **Aplicación 1:**
   - Pseudónimo: "Proveedor_M9P4"
   - Rating: ⭐⭐⭐⭐⭐ (4.8 estrellas)
   - Badges: "Proveedor Experto"
   - Trabajos completados: 12
   - Precio: 950€
   - Disponibilidad: Marzo 2025
   - Maquinaria: Tractor John Deere 6150R + Arado reversible
   - Comentario: "Disponible primera semana marzo, experiencia en zona"

   **Aplicación 2:**
   - Pseudónimo: "Proveedor_K3L7"
   - Rating: ⭐⭐⭐⭐ (4.2 estrellas)
   - Badges: "Proveedor Verificado"
   - Trabajos completados: 6
   - Precio: 850€
   - Disponibilidad: Marzo 2025
   - Maquinaria: Tractor Case IH + Arado fijo
   - Comentario: "Precio competitivo, trabajo garantizado"

4. Juan compara aplicaciones y decide seleccionar al **Proveedor_M9P4** por su experiencia

#### Paso 4: Selección
1. Juan clica "Seleccionar proveedor" en la aplicación de Proveedor_M9P4
2. Sistema cambia estado del trabajo a "Asignado"
3. Las otras 4 aplicaciones se rechazan automáticamente

#### Paso 5: Coordinación por administrador
1. **El administrador recibe notificación** con:
   - Datos reales de Juan (nombre, email, teléfono)
   - Datos reales del proveedor (nombre, email, teléfono)
   - Detalles del trabajo
   - Precio propuesto: 950€

2. **El administrador contacta a ambos** vía WhatsApp:
   - Confirma fechas exactas (ej: 5-6 de marzo)
   - Confirma precio final (950€)
   - Envía contrato simple por email
   - Coordina pago (puede ser transferencia, efectivo, etc.)

3. **El administrador actualiza el estado** en la app a "En progreso"

#### Paso 6: Realización del trabajo
1. Juan y el proveedor coordinan directamente (ya tienen contactos reales)
2. El trabajo se realiza los días 5-6 de marzo
3. Una vez finalizado, el administrador cambia estado a "Completado"

#### Paso 7: Valoración
1. Juan y el proveedor reciben notificación: "Valora el trabajo completado"
2. **Juan valora al proveedor:**
   - Estrellas: ⭐⭐⭐⭐⭐ (5)
   - Comentario: "Trabajo excelente, puntual y profesional. Muy recomendable"

3. **Proveedor valora a Juan:**
   - Estrellas: ⭐⭐⭐⭐⭐ (5)
   - Comentario: "Cliente serio, terreno bien preparado, pago puntual"

4. Las valoraciones son públicas y mejoran la reputación de ambos

---

### CASO 2: María quiere ofrecer sus servicios de cosecha

**Personaje:** María, tiene una cosechadora en Lleida y quiere ofrecer servicios de cosecha.

**Journey completo:**

#### Paso 1: Registro y perfil
1. María descarga la app
2. Se registra con Google
3. Completa onboarding:
   - Provincia: Lleida
   - Municipio: Mollerussa
   - Intereses: "Cosecha"

#### Paso 2: Añadir maquinaria
1. María va a "Mi maquinaria" → "Añadir máquina"
2. Rellena:
   - Tipo: Cosechadora
   - Marca: New Holland
   - Modelo: CR9090
   - Año: 2019
   - Especificaciones: "Cabezal de maíz y girasol, capacidad 450 CV"
   - Fotos: Sube 5 fotos de la cosechadora

3. Guarda la máquina (ahora está en su catálogo)

#### Paso 3: Buscar trabajos
1. María abre el **feed inteligente**
2. Ve trabajos ordenados por relevancia:
   - Primero: trabajos de "Cosecha" (su categoría de interés)
   - Segundo: trabajos en Lleida (su provincia)
   - Tercero: trabajos recientes

3. María ve un trabajo:
   - "Agricultor_B7M3"
   - "Cosecha de maíz en 15 hectáreas"
   - Lleida, Tàrrega
   - Julio 2025, 1 semana
   - Precio estimado: 1500€ - 2000€

4. Le interesa, clica "Ver detalles"

#### Paso 4: Aplicar al trabajo
1. María clica "Aplicar"
2. Rellena el formulario de aplicación:
   - **Maquinaria:** Selecciona su New Holland CR9090
   - **Precio propuesto:** 1800€
   - **Disponibilidad:** Primera semana julio 2025
   - **Comentario:** "Experiencia 10 años en maíz, máquina recién revisada"

3. Envía la aplicación
4. Sistema genera pseudónimo para María: "Proveedor_L8K2"
5. El solicitante recibe notificación de nueva aplicación

#### Paso 5: Si es seleccionada
1. María recibe notificación: "¡Tu aplicación fue aceptada!"
2. Ve que el estado cambió a "Asignado"
3. **El administrador la contacta** vía WhatsApp para coordinar

#### Paso 6: Si NO es seleccionada
1. María recibe notificación: "El solicitante eligió otro proveedor"
2. María puede seguir aplicando a otros trabajos

---

### CASO 3: Pedro quiere encontrar un proveedor de confianza para el futuro

**Personaje:** Pedro necesita servicios de fumigación regularmente.

#### Paso 1: Publicar trabajo actual
1. Pedro publica un trabajo de "Tratamientos Fitosanitarios"
2. Recibe 3 aplicaciones
3. Selecciona a "Proveedor_N5T8" porque tiene muy buen rating (4.9)

#### Paso 2: Guardar como favorito
1. Después de ver el perfil del proveedor en la lista de aplicaciones
2. Pedro clica en ⭐ "Guardar proveedor"
3. El proveedor se guarda en su lista de favoritos

#### Paso 3: Uso futuro
1. Dos meses después, Pedro necesita otra fumigación
2. Va a "Favoritos" → "Proveedores guardados"
3. Ve al proveedor que le fue bien la vez anterior
4. Publica nuevo trabajo pensando en contactarlo

**Nota:** Pedro no puede contactar directamente al proveedor. Debe publicar el trabajo y esperar que aplique, manteniendo la protección de identidades y evitando que trabajen fuera de la plataforma.

---

## 4. FLUJOS DETALLADOS CON PANTALLAS

### FLUJO A: REGISTRO Y ONBOARDING

```
[Pantalla 1: Bienvenida]
┌────────────────────────────┐
│   🌾 Agricultural Services │
│                            │
│  Conecta con proveedores   │
│  de servicios agrícolas    │
│                            │
│  [Registrarse con Email]   │
│  [Continuar con Google]    │
│  [¿Ya tienes cuenta?]      │
└────────────────────────────┘

↓ (Registro con email)

[Pantalla 2: Crear cuenta]
┌────────────────────────────┐
│  Crear cuenta              │
│                            │
│  Email: ____________       │
│  Contraseña: ______        │
│  Confirmar: ______         │
│                            │
│  [Continuar]               │
└────────────────────────────┘

↓

[Pantalla 3: Onboarding - Paso 1]
┌────────────────────────────┐
│  👋 ¡Bienvenido!            │
│                            │
│  Publica trabajos que      │
│  necesitas o aplica a      │
│  trabajos de otros.        │
│                            │
│  Tu identidad permanece    │
│  anónima hasta que un      │
│  administrador coordine    │
│  el trabajo.               │
│                            │
│  [Siguiente]      (1/3)    │
└────────────────────────────┘

↓

[Pantalla 4: Onboarding - Paso 2]
┌────────────────────────────┐
│  📝 Completa tu perfil      │
│                            │
│  Nombre: ____________      │
│  Teléfono: __________      │
│                            │
│  Provincia: [Barcelona ▼]  │
│  Municipio: [Igualada ▼]   │
│                            │
│  [Siguiente]      (2/3)    │
└────────────────────────────┘

↓

[Pantalla 5: Onboarding - Paso 3]
┌────────────────────────────┐
│  🏷️ Categorías de interés   │
│                            │
│  Selecciona hasta 3:       │
│                            │
│  ☑️ Preparación del Suelo   │
│  ☐ Siembra y Plantación    │
│  ☑️ Cosecha                 │
│  ☐ Poda y Mantenimiento    │
│  ☐ Riego                   │
│  ...                       │
│                            │
│  [Empezar]        (3/3)    │
└────────────────────────────┘
```

---

### FLUJO B: PUBLICAR TRABAJO

```
[Pantalla 1: Home - Feed]
┌────────────────────────────┐
│  🏠  Feed  💼  📱  👤       │
│                            │
│  [+ Publicar trabajo]      │
│                            │
│  Trabajos recientes:       │
│  ┌──────────────────────┐ │
│  │ 🌾 Arado 10 ha       │ │
│  │ Agricultor_X7K2      │ │
│  │ Barcelona, Igualada  │ │
│  │ 800€ - 1200€         │ │
│  └──────────────────────┘ │
└────────────────────────────┘

↓ (Clic en Publicar trabajo)

[Pantalla 2: Nueva publicación]
┌────────────────────────────┐
│  ← Nuevo trabajo           │
│                            │
│  Categoría *               │
│  [Preparación del Suelo ▼] │
│                            │
│  Descripción *             │
│  ________________________  │
│  ________________________  │
│  (Max 1000 caracteres)     │
│                            │
│  📷 Fotos (0/5)            │
│  [Añadir fotos]            │
│                            │
│  [Siguiente]               │
└────────────────────────────┘

↓

[Pantalla 3: Ubicación]
┌────────────────────────────┐
│  ← Ubicación               │
│                            │
│  Provincia *               │
│  [Barcelona ▼]             │
│                            │
│  Municipio *               │
│  [Igualada ▼]              │
│                            │
│  [Siguiente]               │
└────────────────────────────┘

↓

[Pantalla 4: Fechas]
┌────────────────────────────┐
│  ← Fechas y duración       │
│                            │
│  Mes inicio *              │
│  [Marzo ▼]                 │
│                            │
│  Año *                     │
│  [2025 ▼]                  │
│                            │
│  Duración estimada *       │
│  [2-3 días ▼]              │
│                            │
│  [Siguiente]               │
└────────────────────────────┘

↓

[Pantalla 5: Especificaciones]
┌────────────────────────────┐
│  ← Especificaciones        │
│                            │
│  Superficie (ha)           │
│  [10________]              │
│                            │
│  Maquinaria requerida      │
│  ☑️ Tractor                 │
│  ☑️ Arado                   │
│  ☐ Rastra                  │
│                            │
│  ¿Requiere operador?       │
│  ⚫ Sí  ⚪ No               │
│                            │
│  [Siguiente]               │
└────────────────────────────┘

↓

[Pantalla 6: Confirmación]
┌────────────────────────────┐
│  ← Vista previa            │
│                            │
│  💰 Precio estimado:       │
│  800€ - 1200€              │
│                            │
│  💡 Sugerencia:            │
│  Trabajos similares en tu  │
│  zona cuestan 900€ - 1100€ │
│                            │
│  Resumen:                  │
│  • Preparación del Suelo   │
│  • 10 hectáreas            │
│  • Marzo 2025, 2-3 días    │
│                            │
│  [Publicar trabajo]        │
└────────────────────────────┘
```

---

### FLUJO C: VER Y APLICAR A TRABAJO

```
[Pantalla 1: Feed de trabajos]
┌────────────────────────────┐
│  🏠  Feed  💼  📱  👤       │
│                            │
│  Filtros: [Categoría ▼]    │
│                            │
│  ┌──────────────────────┐ │
│  │ 🌾 Arado 10 ha       │ │
│  │ Agricultor_X7K2      │ │
│  │ ⭐⭐⭐⭐ 4.5 · 8 trab. │ │
│  │ Barcelona, Igualada  │ │
│  │ Marzo 2025           │ │
│  │ 800€ - 1200€         │ │
│  └──────────────────────┘ │
│                            │
│  ┌──────────────────────┐ │
│  │ 🚜 Cosecha maíz 15ha │ │
│  │ Agricultor_B7M3      │ │
│  └──────────────────────┘ │
└────────────────────────────┘

↓ (Clic en trabajo)

[Pantalla 2: Detalle del trabajo]
┌────────────────────────────┐
│  ← Arado 10 hectáreas      │
│                            │
│  📷 [Foto] [Foto] [Foto]   │
│                            │
│  Solicitante:              │
│  Agricultor_X7K2           │
│  ⭐⭐⭐⭐ 4.5 · 8 trabajos  │
│                            │
│  Descripción:              │
│  Necesito arar 10 hectáreas│
│  para siembra de trigo...  │
│                            │
│  📍 Barcelona, Igualada    │
│  📅 Marzo 2025, 2-3 días   │
│  💰 800€ - 1200€           │
│                            │
│  Requiere:                 │
│  • Tractor + Arado         │
│  • Con operador            │
│                            │
│  [Aplicar a este trabajo]  │
└────────────────────────────┘

↓ (Clic en Aplicar)

[Pantalla 3: Formulario aplicación]
┌────────────────────────────┐
│  ← Aplicar al trabajo      │
│                            │
│  Maquinaria disponible *   │
│  ┌──────────────────────┐ │
│  │ ☑️ Tractor JD 6150R  │ │
│  │    + Arado reversible│ │
│  │    (2020)            │ │
│  └──────────────────────┘ │
│  [+ Añadir más máquinas]   │
│                            │
│  Precio propuesto (€) *    │
│  [950________]             │
│                            │
│  Disponibilidad *          │
│  Mes: [Marzo ▼]            │
│  Año: [2025 ▼]             │
│                            │
│  Comentario breve          │
│  ________________________  │
│  (Max 100 caracteres)      │
│                            │
│  [Enviar aplicación]       │
└────────────────────────────┘
```

---

### FLUJO D: VER APLICACIONES Y SELECCIONAR

```
[Pantalla 1: Mis trabajos]
┌────────────────────────────┐
│  🏠  Feed  💼  📱  👤       │
│                            │
│  Mis trabajos publicados:  │
│                            │
│  ┌──────────────────────┐ │
│  │ 🌾 Arado 10 ha       │ │
│  │ Estado: En selección │ │
│  │ 📬 5 aplicaciones    │ │
│  │ [Ver aplicaciones]   │ │
│  └──────────────────────┘ │
└────────────────────────────┘

↓ (Clic en Ver aplicaciones)

[Pantalla 2: Lista de aplicaciones]
┌────────────────────────────┐
│  ← Aplicaciones (5)        │
│                            │
│  ┌──────────────────────┐ │
│  │ Proveedor_M9P4       │ │
│  │ ⭐⭐⭐⭐⭐ 4.8 · 12 trab│ │
│  │ 🏅 Proveedor Experto │ │
│  │                      │ │
│  │ 💰 950€              │ │
│  │ 📅 Marzo 2025        │ │
│  │                      │ │
│  │ 🚜 Tractor JD 6150R  │ │
│  │    + Arado reversible│ │
│  │                      │ │
│  │ "Disponible primera  │ │
│  │  semana marzo..."    │ │
│  │                      │ │
│  │ [Ver detalles]       │ │
│  └──────────────────────┘ │
│                            │
│  ┌──────────────────────┐ │
│  │ Proveedor_K3L7       │ │
│  │ ⭐⭐⭐⭐ 4.2 · 6 trab  │ │
│  │ 850€                 │ │
│  └──────────────────────┘ │
└────────────────────────────┘

↓ (Clic en Ver detalles)

[Pantalla 3: Detalle aplicación]
┌────────────────────────────┐
│  ← Proveedor_M9P4          │
│                            │
│  Rating: ⭐⭐⭐⭐⭐ 4.8      │
│  Trabajos completados: 12  │
│                            │
│  🏅 Badges:                │
│  • Proveedor Experto       │
│  • Puntual                 │
│                            │
│  Propuesta:                │
│  💰 950€                   │
│  📅 Disponible Marzo 2025  │
│                            │
│  Maquinaria:               │
│  📷 [Foto tractor]         │
│  Tractor John Deere 6150R  │
│  Arado reversible (2020)   │
│                            │
│  Comentario:               │
│  "Disponible primera semana│
│   marzo, experiencia en    │
│   zona de Igualada"        │
│                            │
│  Reseñas recientes (3):    │
│  ⭐⭐⭐⭐⭐ "Excelente..."  │
│  ⭐⭐⭐⭐⭐ "Muy profesio..."│
│                            │
│  [Seleccionar proveedor]   │
└────────────────────────────┘

↓ (Clic en Seleccionar)

[Pantalla 4: Confirmación]
┌────────────────────────────┐
│  ✅ Proveedor seleccionado │
│                            │
│  Has seleccionado a:       │
│  Proveedor_M9P4            │
│                            │
│  Nuestro equipo se pondrá  │
│  en contacto contigo pronto│
│  vía WhatsApp/teléfono para│
│  coordinar los detalles.   │
│                            │
│  Recibirás notificaciones  │
│  sobre el estado del       │
│  trabajo.                  │
│                            │
│  [Entendido]               │
└────────────────────────────┘
```

---

### FLUJO E: VALORACIÓN POST-TRABAJO

```
[Pantalla 1: Notificación]
┌────────────────────────────┐
│  🔔 Notificación           │
│                            │
│  ⭐ Tu trabajo se completó │
│                            │
│  "Arado 10 hectáreas"      │
│  ha sido marcado como      │
│  completado.               │
│                            │
│  Por favor, valora al      │
│  proveedor.                │
│                            │
│  [Valorar ahora]           │
└────────────────────────────┘

↓ (Clic en Valorar ahora)

[Pantalla 2: Formulario valoración]
┌────────────────────────────┐
│  ← Valorar trabajo         │
│                            │
│  Trabajo: Arado 10 ha      │
│  Proveedor: Proveedor_M9P4 │
│                            │
│  ¿Cómo fue la experiencia? │
│                            │
│  ⭐⭐⭐⭐⭐                 │
│  (Toca para seleccionar)   │
│                            │
│  Comentario obligatorio:   │
│  ________________________  │
│  ________________________  │
│  ________________________  │
│  (Min 20, max 200 chars)   │
│                            │
│  Ejemplos:                 │
│  • ¿Fue puntual?           │
│  • ¿Calidad del trabajo?   │
│  • ¿Lo recomendarías?      │
│                            │
│  [Enviar valoración]       │
└────────────────────────────┘

↓ (Después de enviar)

[Pantalla 3: Confirmación]
┌────────────────────────────┐
│  ✅ Valoración enviada     │
│                            │
│  Gracias por tu feedback.  │
│                            │
│  Tu valoración ayuda a     │
│  otros usuarios a tomar    │
│  mejores decisiones.       │
│                            │
│  [Volver al inicio]        │
└────────────────────────────┘
```

---

## 5. PROTECCIÓN DE IDENTIDADES

### 5.1 ¿Por qué es importante?

**Problema:** Si los usuarios pueden contactarse directamente, podrían acordar trabajos fuera de la plataforma, lo que:
- Elimina la comisión de la plataforma
- Reduce el control de calidad
- Dificulta resolver disputas

### 5.2 ¿Cómo lo solucionamos?

#### Durante la publicación y aplicaciones:
- **Pseudónimos automáticos:** "Agricultor_X7K2", "Proveedor_M9P4"
- **Sin nombres reales visibles**
- **Sin emails ni teléfonos en la app**
- **Sin chat libre** (solo mensajes predefinidos en aplicaciones)

#### Después de la selección:
- **Solo el administrador** ve los datos reales
- **El administrador coordina** el contacto
- **Usuarios reciben solo actualizaciones de estado** en la app

#### Después del primer trabajo:
- Los usuarios ya tienen contactos reales
- Pueden trabajar directamente en el futuro
- Pero se incentiva usar la app:
  - Reputación crece con trabajos en plataforma
  - Protección ante disputas
  - Sistema de favoritos para encontrar buenos proveedores

---

## 6. PAPEL DEL ADMINISTRADOR

### 6.1 ¿Qué hace el administrador?

El administrador es una persona del equipo que:

1. **Recibe notificaciones** cuando un trabajo es asignado
2. **Accede a datos reales** de ambas partes (email, teléfono)
3. **Contacta por WhatsApp/teléfono** a solicitante y proveedor
4. **Coordina detalles:**
   - Fechas exactas
   - Precio final
   - Condiciones especiales
5. **Formaliza contrato** (documento simple por email)
6. **Gestiona pago** (transferencia, efectivo, etc.)
7. **Actualiza estados** en la app:
   - "En progreso" cuando inicia
   - "Completado" cuando finaliza

### 6.2 Panel de administración

El administrador tiene acceso a un **panel web** donde puede:

- Ver lista de trabajos "Asignados" pendientes de coordinación
- Ver datos completos de cada trabajo (solicitante + proveedor)
- Cambiar estados manualmente
- Ver reportes de actividad mensual
- Gestionar usuarios suspendidos
- Moderar contenido reportado

### 6.3 Carga de trabajo estimada

Con **20-30 coordinaciones al mes**, el administrador necesita:
- **~10-15 horas/mes** dedicadas
- **1-2 horas por coordinación** (contacto inicial + seguimiento)
- **Disponibilidad en horario laboral** para responder rápido

---

## 7. SISTEMA DE REPUTACIÓN

### 7.1 ¿Cómo funciona?

Cada usuario construye su reputación en la plataforma mediante:

#### Valoraciones (1-5 estrellas)
- Después de cada trabajo completado
- Ambas partes se valoran mutuamente
- Comentario obligatorio (20-200 caracteres)
- Promedio visible en perfil público

#### Badges automáticos
Se otorgan automáticamente al alcanzar logros:

- **Proveedor Verificado** 🏅
  - 1+ trabajo completado con valoración >3.5

- **Proveedor Experto** ⭐
  - 5+ trabajos completados con rating >4.0

- **Proveedor Elite** 👑
  - 20+ trabajos completados con rating >4.5

- **Solicitante Frecuente** 📌
  - 3+ trabajos publicados

- **Puntual** ⏰
  - 90%+ trabajos completados en plazo

#### Contador de trabajos completados
- Visible en perfil público
- Indica experiencia del usuario

### 7.2 ¿Por qué es importante?

- **Confianza:** Usuarios pueden elegir proveedores con buena reputación
- **Incentivo:** Proveedores se esfuerzan por mantener buen rating
- **Filtro natural:** Malos proveedores quedan fuera del sistema

### 7.3 Sistema de confianza progresiva

Para evitar spam y abusos:

**Usuario nuevo (0 trabajos completados):**
- Máximo 2 trabajos activos simultáneos
- Si cancela, debe esperar 7 días antes de publicar otro

**Usuario consolidado (3+ trabajos completados):**
- Máximo 5 trabajos activos simultáneos
- Sin restricciones de publicación

**Usuario sancionado (rating <3.0 o cancelaciones >20%):**
- Revisión manual de todas sus aplicaciones
- Límite reducido a 1 trabajo activo

---

## 8. NOTIFICACIONES

La app envía **solo 4 tipos de notificaciones** (las más importantes):

1. **Nuevo trabajo en tu área**
   - Para proveedores
   - Cuando se publica trabajo en su provincia y categoría de interés
   - Ejemplo: "Nuevo trabajo de Cosecha en Lleida"

2. **Aplicación recibida**
   - Para solicitantes
   - Cuando un proveedor aplica a su trabajo
   - Ejemplo: "Has recibido 1 nueva aplicación en 'Arado 10 ha'"

3. **Aplicación aceptada**
   - Para proveedores
   - Cuando el solicitante selecciona su aplicación
   - Ejemplo: "¡Tu aplicación fue aceptada! El administrador te contactará pronto"

4. **Cambio de estado del trabajo**
   - Para ambas partes
   - Cuando admin cambia estado a "En progreso" o "Completado"
   - Ejemplo: "Tu trabajo 'Arado 10 ha' está ahora En progreso"

---

## 9. CATEGORÍAS DE SERVICIOS

10 categorías principales simplificadas:

| Categoría | Ejemplos de servicios |
|-----------|----------------------|
| **Preparación del Suelo** | Arado, rastra, fresado, subsolado |
| **Siembra y Plantación** | Sembradoras, plantadoras, trasplante |
| **Tratamientos Fitosanitarios** | Fumigación, abonado, tratamientos |
| **Riego** | Instalación, reparación, mantenimiento |
| **Cosecha** | Cosechadoras, vendimiadoras, recolección |
| **Poda y Mantenimiento** | Poda, trituración, limpieza |
| **Transporte Agrícola** | Transporte cosecha, materiales, ganado |
| **Gestión de Forraje** | Empacado, henificación, ensilado |
| **Infraestructuras** | Vallado, caminos, drenajes |
| **Otros Servicios** | Servicios no clasificados |

**Detalles adicionales:** Cada trabajo tiene un campo de texto libre (500 caracteres) para especificar exactamente qué se necesita.

---

## 10. PREGUNTAS FRECUENTES

### ¿Puedo ser solicitante y proveedor al mismo tiempo?
**Sí.** No hay roles fijos. Puedes publicar trabajos que necesitas y aplicar a trabajos de otros con la misma cuenta.

### ¿Cuánto cuesta usar la app?
Definido por el cliente (fuera de alcance de este documento).

### ¿Qué pasa si tengo un problema con un trabajo?
Contactas al administrador que gestionó el trabajo. El admin media entre ambas partes.

### ¿Puedo cancelar un trabajo después de publicarlo?
Sí, pero:
- Solo si no tiene aplicaciones aceptadas
- Cancelaciones frecuentes (>20%) activan penalización
- Usuarios nuevos deben esperar 7 días tras cancelación

### ¿Puedo editar un trabajo publicado?
Solo si no tiene aplicaciones todavía. Una vez que alguien aplica, no se puede editar (debes cancelar y republicar).

### ¿Puedo contactar directamente a un proveedor que me gustó?
No directamente. Debes:
1. Guardarlo en favoritos
2. Publicar un nuevo trabajo
3. Esperar que aplique (o invitarlo si se implementa esa función en el futuro)

### ¿Qué pasa si el proveedor seleccionado no cumple?
El administrador interviene para:
- Mediar entre ambas partes
- Buscar solución alternativa
- Sancionar al proveedor si procede (baja rating, suspensión)

### ¿Puedo eliminar mi cuenta?
Sí, desde "Perfil" → "Configuración" → "Eliminar cuenta". Los datos personales se anonimizan pero los trabajos completados permanecen (para mantener historial de la plataforma).

---

## 11. RESUMEN EJECUTIVO

### ¿Qué problema resuelve la app?

Conecta agricultores que necesitan servicios con proveedores de maquinaria, de forma:
- **Rápida:** Publicar trabajo en 2 minutos
- **Segura:** Identidades protegidas hasta coordinación
- **Transparente:** Sistema de reputación público
- **Simple:** Sin complicaciones técnicas (no GPS, no fechas exactas)

### ¿Quién se beneficia?

- **Agricultores sin maquinaria:** Encuentran proveedores de confianza fácilmente
- **Propietarios de maquinaria:** Monetizan equipos ociosos, encuentran clientes
- **Plataforma:** Comisión por cada trabajo coordinado

### ¿Cómo se diferencia de otras soluciones?

- **Híbrido digital-humano:** App + coordinación personal
- **Identidades protegidas:** Evita trabajo fuera de plataforma
- **Específico del sector:** Adaptado a necesidades agrícolas reales
- **Bilingüe:** Español y catalán nativos

### Próximos pasos

1. **Validar este documento** con el cliente
2. **Ajustar funcionalidades** si hay dudas
3. **Iniciar desarrollo** de la nueva versión (10 semanas estimadas)

---

**FIN DEL DOCUMENTO**

¿Alguna pregunta sobre cómo funcionará la aplicación?
