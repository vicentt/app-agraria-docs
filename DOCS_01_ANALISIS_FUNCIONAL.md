# DOCUMENTACIÓN DE ANÁLISIS FUNCIONAL
## Agricultural Services Management Platform - Versión Optimizada

**Versión:** 2.0 Optimizada
**Fecha:** Octubre 2025
**Stack Técnico:** .NET 8 Web API + PostgreSQL + React Native (Expo)
**Idiomas:** Español (ES) + Catalán (CA) - Obligatorio

---

## TABLA DE CONTENIDOS

1. [Visión General del Sistema](#1-visión-general-del-sistema)
2. [Objetivos de Negocio](#2-objetivos-de-negocio)
3. [Alcance Funcional](#3-alcance-funcional)
4. [Actores del Sistema](#4-actores-del-sistema)
5. [Módulos Funcionales](#5-módulos-funcionales)
6. [Requisitos Funcionales Detallados](#6-requisitos-funcionales-detallados)
7. [Casos de Uso](#7-casos-de-uso)
8. [User Stories](#8-user-stories)
9. [Reglas de Negocio](#9-reglas-de-negocio)
10. [Flujos de Proceso](#10-flujos-de-proceso)
11. [Matriz de Trazabilidad](#11-matriz-de-trazabilidad)
12. [Criterios de Aceptación](#12-criterios-de-aceptación)

---

## 1. VISIÓN GENERAL DEL SISTEMA

### 1.1 Descripción General

**Agricultural Services Management** es una plataforma digital optimizada que conecta agricultores que necesitan servicios con proveedores de maquinaria agrícola. La aplicación facilita la publicación de trabajos, recepción de propuestas estructuradas y coordinación administrativa, manteniendo las identidades anónimas hasta la formalización del servicio.

### 1.2 Propósito del Sistema

El sistema tiene como objetivo principal:

- **Simplificar** el proceso de contratación de servicios agrícolas mediante flujos guiados
- **Conectar** solicitantes con proveedores de confianza mediante sistema de reputación
- **Proteger** la identidad de usuarios hasta coordinación administrativa
- **Facilitar** la gestión de maquinaria personal vinculada a servicios
- **Proporcionar** transparencia mediante valoraciones obligatorias post-servicio
- **Optimizar** el matching mediante feed inteligente basado en relevancia

### 1.3 Características Principales

#### Para Todos los Usuarios (Sin Roles Diferenciados):
- Publicación de trabajos agrícolas con especificaciones detalladas
- Visualización de feed inteligente con trabajos relevantes
- Aplicación a trabajos con propuestas estructuradas
- Gestión de catálogo personal de maquinaria
- Sistema de favoritos (trabajos y proveedores)
- Construcción de reputación mediante badges y ratings
- Interacción anónima hasta selección
- Perfil público con pseudónimo

#### Para Administradores:
- Coordinación manual de trabajos asignados
- Acceso a datos reales solo post-selección
- Cambio de estados de trabajos
- Envío de notificaciones críticas
- Panel web con reportes de actividad
- Gestión de usuarios sancionados
- Moderación de contenido

### 1.4 Valor Diferencial de la Versión Optimizada

- **Simplicidad:** 10 categorías vs 200+, sin roles complicados
- **Protección de identidades:** Pseudónimos hasta coordinación administrativa
- **Aplicaciones estructuradas:** Sin chat libre, propuestas comparables
- **Feed inteligente:** Trabajos ordenados por relevancia (categoría + ubicación + maquinaria)
- **Estimación de precios:** Calculadora automática con rangos orientativos
- **Gamificación:** Badges automáticos que incentivan buenas prácticas
- **Costos predecibles:** Servidor fijo vs Firebase variable
- **Multiidioma nativo:** Español + Catalán obligatorio en toda la app
- **Coordinación humana:** Admin media para generar confianza

---

## 2. OBJETIVOS DE NEGOCIO

### 2.1 Objetivos Estratégicos

#### OB-01: Adopción Rápida
**Descripción:** Reducir barreras de entrada mediante auto-verificación y onboarding simplificado de 3 pasos.

**KPIs:**
- Tiempo desde registro hasta primera publicación < 5 minutos
- 80% de usuarios completan onboarding
- Crecimiento de 100+ usuarios en primeros 3 meses

#### OB-02: Retención de Usuarios en Plataforma
**Descripción:** Evitar que usuarios trabajen fuera de la plataforma mediante protección de identidades y coordinación administrativa.

**KPIs:**
- 70%+ de trabajos coordinados a través del admin
- <15% de trabajos cancelados prematuramente
- 60%+ de usuarios activos retornan al día 7

#### OB-03: Calidad mediante Reputación
**Descripción:** Garantizar servicios de calidad mediante sistema de reputación progresiva y valoraciones obligatorias.

**KPIs:**
- Rating promedio de plataforma > 4.0/5.0
- 70%+ de trabajos completados reciben valoración
- Usuarios con rating >4.5 reciben 2x más aplicaciones

#### OB-04: Eficiencia Operativa con Coordinación Manual
**Descripción:** Optimizar carga administrativa mediante flujo digital + coordinación humana solo en fase crítica.

**KPIs:**
- Admin gestiona 20-30 coordinaciones/mes
- Tiempo promedio de coordinación < 48 horas
- 90%+ de coordinaciones resultan en trabajo completado

#### OB-05: Escalabilidad de Costos
**Descripción:** Mantener costos operativos predecibles mediante infraestructura propia vs servicios cloud variables.

**KPIs:**
- Costos mensuales fijos ~50€ (servidor + almacenamiento)
- Reducción de 50-60% vs versión anterior con Firebase
- Sin picos inesperados por uso

### 2.2 Objetivos Funcionales

#### OF-01: Gestión Simplificada de Trabajos
Permitir publicación de trabajos en <5 minutos con categorías simples (10 opciones), fechas flexibles (mes/año/duración) y estimación automática de precio.

#### OF-02: Sistema de Aplicaciones Estructuradas
Facilitar aplicaciones comparables mediante formulario predefinido (maquinaria + precio + disponibilidad + comentario breve) sin chat libre.

#### OF-03: Feed Inteligente por Relevancia
Mostrar trabajos ordenados por: 1) Categorías de interés, 2) Ubicación (provincia), 3) Compatibilidad con maquinaria, 4) Fecha publicación.

#### OF-04: Protección de Identidades
Generar pseudónimos automáticos (ej: "Agricultor_X7K2") y ocultar datos reales (email, teléfono) hasta que admin coordine tras selección.

#### OF-05: Sistema de Reputación Progresiva
Implementar badges automáticos (Verificado, Experto, Elite) y límites variables según historial (usuarios nuevos: 2 trabajos, consolidados: 5 trabajos).

#### OF-06: Coordinación Administrativa Eficiente
Proporcionar panel web donde admin ve trabajos asignados, accede a datos reales y cambia estados manualmente.

---

## 3. ALCANCE FUNCIONAL

### 3.1 Funcionalidades Incluidas - Versión Optimizada

#### Gestión de Usuarios
- ✅ Registro con Email + Password (obligatorio)
- ✅ Google Sign-In (opcional)
- ✅ Onboarding simplificado (3 pasos: Bienvenida → Perfil → Intereses)
- ✅ Auto-verificación al registrarse (sin aprobación manual)
- ✅ Perfil único flexible (sin roles fijos)
- ✅ Gestión de preferencias de categorías (máx 3)
- ✅ Configuración de idioma (ES / CA)
- ✅ Historial de actividad completo

#### Gestión de Trabajos
- ✅ Creación de trabajos con formulario guiado
- ✅ 10 categorías principales simplificadas
- ✅ Ubicación por provincia + municipio (dropdowns, NO GPS)
- ✅ Fechas flexibles (mes + año + duración estimada)
- ✅ Estimación automática de precio (rango orientativo)
- ✅ Galerías de imágenes (máx 5 por trabajo)
- ✅ Pseudónimos automáticos para anonimato
- ✅ Estados: Publicado → En selección → Asignado → En progreso → Completado
- ✅ Sugerencias contextuales durante creación

#### Gestión de Aplicaciones
- ✅ Aplicación con formulario estructurado (no chat libre)
- ✅ Selección de maquinaria del catálogo personal
- ✅ Propuesta de precio
- ✅ Disponibilidad (mes + año)
- ✅ Comentario breve (max 100 caracteres)
- ✅ Visualización comparativa para solicitante
- ✅ Selección con un clic ("Seleccionar proveedor")
- ✅ Rechazo automático de aplicaciones no seleccionadas

#### Gestión de Maquinaria
- ✅ Catálogo personal de maquinaria
- ✅ Registro con especificaciones técnicas (marca, modelo, año, specs)
- ✅ Galerías de imágenes (máx 5 por máquina)
- ✅ Estado operativo (Activo/Inactivo)
- ✅ Vinculación a servicios (NO alquiler independiente)
- ✅ Selección múltiple al aplicar a trabajo

#### Sistema de Valoraciones
- ✅ Reseñas bidireccionales obligatorias (solicitante ↔ proveedor)
- ✅ Rating 1-5 estrellas
- ✅ Comentario corto obligatorio (20-200 caracteres, NO título)
- ✅ No editable tras envío
- ✅ Visible en perfil público
- ✅ Cálculo automático de rating promedio

#### Sistema de Reputación
- ✅ Badges automáticos:
  - Proveedor Verificado (1+ trabajo, rating >3.5)
  - Proveedor Experto (5+ trabajos, rating >4.0)
  - Proveedor Elite (20+ trabajos, rating >4.5)
  - Solicitante Frecuente (3+ trabajos publicados)
  - Puntual (90%+ trabajos en plazo)
- ✅ Contador de trabajos completados
- ✅ Sistema de confianza progresiva (límites según reputación)

#### Feed Inteligente
- ✅ Ordenamiento por relevancia para cada usuario
- ✅ Filtros: Categoría, Provincia, Rango fechas, Rango precio
- ✅ Destacar trabajos compatibles con maquinaria del usuario
- ✅ Actualización en tiempo real con React Query (polling)

#### Sistema de Favoritos
- ✅ Guardar trabajos interesantes (máx 20 activos)
- ✅ Guardar proveedores de confianza (máx 20 activos)
- ✅ Lista rápida de acceso

#### Notificaciones Push (Solo 4 Críticas)
- ✅ Nuevo trabajo en tu área (categoría + provincia)
- ✅ Aplicación recibida en tu trabajo
- ✅ Tu aplicación fue aceptada
- ✅ Cambio de estado del trabajo

#### Panel de Administración (Web)
- ✅ Lista de trabajos asignados pendientes de coordinación
- ✅ Acceso a datos reales (email, teléfono) post-selección
- ✅ Cambio manual de estados
- ✅ Reportes mensuales (trabajos, aplicaciones, conversión, ratings)
- ✅ Gestión de usuarios sancionados
- ✅ Moderación de contenido reportado

### 3.2 Funcionalidades ELIMINADAS (vs Versión Anterior)

#### Autenticación
- ❌ Apple Sign-In (complejidad adicional, <10% uso)
- ❌ Phone OTP (costos altos SMS, poco usado)

#### Ubicación y Mapas
- ❌ GPS/Coordenadas exactas (no usado por agricultores)
- ❌ Mapas interactivos (peso app, rara vez usado)
- ❌ Cálculo de distancias (no relevante, proveedores trabajan en su provincia)

#### Contratos y Pagos
- ❌ Generación automática de contratos PDF (complejidad legal)
- ❌ Pasarelas de pago integradas (Stripe, Braintree - comisiones altas, poco usado)
- ❌ Firma digital (no legal en todos casos agrícolas)
- ❌ Cálculo automático de IVA y comisiones

#### Comunicación
- ❌ Chat en tiempo real entre usuarios (intercambiaban contactos, trabajaban fuera de app)
- ❌ Envío de archivos (riesgo malware, poco usado)
- ❌ Mensajería libre

#### Gestión Compleja
- ❌ Roles de usuario diferenciados (Proveedor vs Solicitante fijos)
- ❌ Búsqueda de proveedores (modelo no encaja con sector)
- ❌ Alquiler de maquinaria independiente (sin servicio)
- ❌ Validación manual de usuarios (cuello de botella)
- ❌ 200+ categorías y subcategorías (confusión)
- ❌ Calendario con fechas exactas (agricultores no planifican así)

#### Multiidioma Extensivo
- ❌ Inglés y otros idiomas (solo ES + CA necesario)

### 3.3 Funcionalidades CAMBIADAS (Simplificadas)

#### Fechas: Exactas → Flexibles
- **Antes:** Fecha exacta en calendario (ej: 15 marzo 2025)
- **Ahora:** Mes + Año + Duración estimada (ej: Marzo 2025, 2-3 días)
- **Razón:** Agricultores dependen del clima, no pueden comprometerse a fecha exacta

#### Imágenes: Ilimitadas → Máximo 5
- **Antes:** Sin límite explícito
- **Ahora:** Máx 5 por entidad (trabajo o máquina)
- **Razón:** Control de costos almacenamiento, usuarios eligen mejores fotos

#### Notificaciones: 15+ tipos → 4 críticas
- **Antes:** Notificaciones frecuentes (spam)
- **Ahora:** Solo 4 tipos críticos
- **Razón:** Evitar que usuarios desactiven notificaciones

#### Reseñas: Largas → Cortas
- **Antes:** Título + Comentario ilimitado
- **Ahora:** Solo comentario corto (20-200 chars, obligatorio)
- **Razón:** Más usuarios completan, comentarios concisos y útiles

#### Categorías: 200+ → 10
- **Antes:** 3 niveles de categorización
- **Ahora:** 10 categorías principales + texto libre para detalles
- **Razón:** Simplicidad, usuarios eligen en 5 segundos

### 3.4 Funcionalidades NUEVAS (Añadidas)

#### Feed Inteligente
Ordenamiento por relevancia (categoría + ubicación + maquinaria) vs cronológico.

#### Pseudónimos Anónimos
Generación automática ("Agricultor_X7K2") para proteger identidades.

#### Estimación de Precio Automática
Calculadora que muestra rango orientativo según categoría, superficie, duración.

#### Sistema de Favoritos
Guardar trabajos y proveedores para uso futuro (max 20 activos).

#### Badges de Reputación
Insignias automáticas (Verificado, Experto, Elite, Frecuente, Puntual).

#### Sugerencias Contextuales
Tips durante creación de trabajo ("Trabajos con fotos reciben +40% aplicaciones").

#### Sistema de Confianza Progresiva
Límites variables según reputación (nuevos: 2 trabajos, consolidados: 5 trabajos).

#### Panel Admin Web
Dashboard profesional para gestión desde ordenador.

---

## 4. ACTORES DEL SISTEMA

### 4.1 Usuario Genérico (Sin Rol Fijo)

**Descripción:** Cualquier usuario registrado puede actuar como solicitante O proveedor según contexto.

**Responsabilidades:**
- Publicar trabajos que necesita
- Aplicar a trabajos de otros con su maquinaria
- Gestionar su catálogo de maquinaria personal
- Valorar trabajos completados
- Construir reputación

**Características:**
- Email verificado (auto-verificado al registrarse)
- Perfil completo (nombre, provincia, municipio)
- Rating promedio visible
- Badges ganados
- Contador de trabajos completados

**Interacciones principales:**
- Publica trabajos → Recibe aplicaciones → Selecciona proveedor
- Ve trabajos → Aplica con maquinaria → Espera selección
- Valora mutuamente tras completar trabajo

### 4.2 Administrador

**Descripción:** Persona del equipo con acceso al panel web de administración.

**Responsabilidades:**
- Coordinar trabajos asignados (contacto vía WhatsApp/teléfono)
- Cambiar estados de trabajos manualmente
- Acceder a datos reales solo post-selección
- Gestionar usuarios sancionados
- Moderar contenido reportado
- Generar reportes de actividad

**Características:**
- Acceso al panel web (no app móvil)
- Permisos especiales en base de datos
- Puede ver datos sensibles (emails, teléfonos)
- Auditoría de todas sus acciones

**Interacciones principales:**
- Recibe notificación de trabajo asignado
- Contacta ambas partes con datos reales
- Coordina fechas exactas, precio final, condiciones
- Actualiza estado a "En progreso" y luego "Completado"

### 4.3 Sistema Automatizado

**Descripción:** Procesos automáticos ejecutados por backend.

**Responsabilidades:**
- Generar pseudónimos únicos
- Calcular estimaciones de precio
- Asignar badges automáticamente
- Enviar notificaciones push
- Actualizar ratings tras nuevas valoraciones
- Aplicar límites de confianza progresiva

**Características:**
- Jobs en background (Hangfire)
- Triggers en base de datos
- Cron jobs para mantenimiento

---

## 5. MÓDULOS FUNCIONALES

### 5.1 Módulo de Autenticación y Perfil

**Responsable:** Backend (.NET) + Frontend (React Native)

**Componentes:**
- Registro con Email + Password
- Login con Email + Password
- Google OAuth Sign-In
- Gestión de tokens JWT (access + refresh)
- Onboarding de 3 pasos
- Edición de perfil
- Configuración de idioma y preferencias

**Dependencias:**
- Firebase Cloud Messaging (tokens de dispositivo)
- Azure Blob Storage (avatar)

**Reglas de negocio:**
- Email único en sistema
- Password min 8 caracteres
- Auto-verificado al completar registro
- Onboarding obligatorio antes de usar app

### 5.2 Módulo de Gestión de Trabajos

**Responsable:** Backend (.NET) + Frontend (React Native)

**Componentes:**
- Creación de trabajos (formulario guiado)
- Edición de trabajos (solo si no tiene aplicaciones)
- Cancelación de trabajos
- Visualización de trabajos propios
- Feed inteligente de trabajos
- Filtrado y búsqueda

**Dependencias:**
- Módulo de Categorías (10 principales)
- Módulo de Estimación de Precios
- Servicio de Pseudónimos
- Azure Blob Storage (imágenes)

**Reglas de negocio:**
- Máx 2 trabajos activos (usuarios nuevos), 5 (consolidados)
- Fotos opcionales pero recomendadas
- Descripción min 50 caracteres
- Categoría obligatoria

### 5.3 Módulo de Gestión de Aplicaciones

**Responsable:** Backend (.NET) + Frontend (React Native)

**Componentes:**
- Aplicar a trabajo (formulario estructurado)
- Visualización de aplicaciones recibidas
- Selección de proveedor
- Rechazo automático de no seleccionados
- Historial de aplicaciones enviadas

**Dependencias:**
- Módulo de Maquinaria (catálogo personal)
- Servicio de Pseudónimos
- Módulo de Notificaciones

**Reglas de negocio:**
- Un proveedor solo puede aplicar una vez al mismo trabajo
- Debe tener al menos 1 máquina en categoría del trabajo
- Precio propuesto >0
- No puede retirar aplicación tras enviar
- No puede aplicar a sus propios trabajos

### 5.4 Módulo de Gestión de Maquinaria

**Responsable:** Backend (.NET) + Frontend (React Native)

**Componentes:**
- Registro de máquinas (catálogo personal)
- Edición de especificaciones
- Gestión de imágenes (máx 5)
- Activación/desactivación de máquinas
- Selección al aplicar a trabajos

**Dependencias:**
- Módulo de Categorías
- Azure Blob Storage (imágenes)

**Reglas de negocio:**
- Vinculada siempre a usuario propietario
- No se alquila de forma independiente
- Estado operativo (Activo/Inactivo)
- Máx 5 imágenes por máquina

### 5.5 Módulo de Valoraciones

**Responsable:** Backend (.NET) + Frontend (React Native)

**Componentes:**
- Creación de valoración (rating + comentario)
- Visualización de valoraciones recibidas
- Cálculo automático de rating promedio
- Validación de longitud de comentario

**Dependencias:**
- Módulo de Trabajos (estado completado)
- Módulo de Reputación (actualización de badges)

**Reglas de negocio:**
- Solo si trabajo está completado
- Ambas partes deben valorar (mutuo)
- Comentario obligatorio (20-200 chars)
- No editable tras envío
- Rating 1-5 estrellas

### 5.6 Módulo de Reputación

**Responsable:** Backend (.NET) con jobs automáticos

**Componentes:**
- Asignación automática de badges
- Cálculo de límites de trabajos activos
- Detección de usuarios sancionados
- Sistema de confianza progresiva

**Dependencias:**
- Módulo de Valoraciones (ratings)
- Módulo de Trabajos (completados, cancelados)

**Reglas de negocio:**
- Badges se otorgan automáticamente al alcanzar umbrales
- Rating <3.0 con 5+ trabajos activa revisión manual
- Cancelaciones >20% activa penalización
- Límites: 2 (nuevo) → 5 (consolidado 3+ trabajos)

### 5.7 Módulo de Notificaciones

**Responsable:** Backend (.NET) + Firebase Cloud Messaging

**Componentes:**
- Registro de tokens de dispositivo
- Envío de notificaciones push
- Gestión de plantillas multiidioma (ES/CA)
- Historial de notificaciones en app
- Marcar como leído

**Dependencias:**
- Firebase Cloud Messaging (delivery)
- Módulo de Trabajos (eventos)
- Módulo de Aplicaciones (eventos)

**Reglas de negocio:**
- Solo 4 tipos de notificaciones
- Notificaciones antiguas (>30 días leídas) se borran
- Respeta configuración de idioma del usuario

### 5.8 Módulo de Favoritos

**Responsable:** Backend (.NET) + Frontend (React Native)

**Componentes:**
- Añadir trabajo a favoritos
- Añadir proveedor a favoritos
- Eliminar de favoritos
- Lista de favoritos

**Dependencias:**
- Módulo de Trabajos
- Módulo de Usuarios

**Reglas de negocio:**
- Máx 20 favoritos activos totales
- No duplicar favoritos
- Eliminar automáticamente si trabajo se completa

### 5.9 Módulo de Administración

**Responsable:** Panel Web (React/Next.js) + Backend (.NET)

**Componentes:**
- Dashboard con KPIs
- Lista de trabajos asignados
- Acceso a datos reales
- Cambio de estados de trabajos
- Gestión de usuarios sancionados
- Reportes de actividad

**Dependencias:**
- Módulo de Trabajos
- Módulo de Usuarios
- Módulo de Valoraciones (reportes)

**Reglas de negocio:**
- Solo admin accede a datos reales
- Cambios de estado auditados
- Admin no puede valorar trabajos

### 5.10 Módulo de Estimación de Precios

**Responsable:** Backend (.NET) con algoritmo de cálculo

**Componentes:**
- Calculadora de precio estimado
- Histórico de precios de trabajos similares
- Sugerencias contextuales

**Dependencias:**
- Módulo de Categorías
- Módulo de Trabajos (histórico)

**Reglas de negocio:**
- Rango orientativo (min - max)
- Basado en: categoría, superficie, duración, maquinaria
- Actualiza con histórico cada 30 días

---

## 6. REQUISITOS FUNCIONALES DETALLADOS

### 6.1 Autenticación y Registro

#### RF-001: Registro con Email y Contraseña
**Prioridad:** Alta
**Complejidad:** Media

**Descripción:**
El sistema debe permitir a los usuarios registrarse proporcionando email y contraseña.

**Criterios de aceptación:**
- Email debe ser único en el sistema
- Contraseña debe tener mínimo 8 caracteres
- Se envía email de verificación automáticamente
- Usuario es auto-verificado tras completar onboarding

**Precondiciones:**
- Email no registrado previamente

**Postcondiciones:**
- Usuario creado en base de datos con estado "pendiente_onboarding"
- Email de verificación enviado

---

#### RF-002: Login con Email y Contraseña
**Prioridad:** Alta
**Complejidad:** Media

**Descripción:**
El sistema debe permitir a usuarios registrados iniciar sesión con email y contraseña.

**Criterios de aceptación:**
- Validar credenciales contra base de datos
- Generar access token JWT (15 min) y refresh token (7 días)
- Actualizar campo last_login_at

**Precondiciones:**
- Usuario registrado y verificado
- Credenciales correctas

**Postcondiciones:**
- Tokens JWT generados y devueltos
- Usuario autenticado en app

---

#### RF-003: Google Sign-In
**Prioridad:** Media
**Complejidad:** Media

**Descripción:**
El sistema debe permitir registro/login mediante Google OAuth.

**Criterios de aceptación:**
- Integración con Google OAuth 2.0
- Si email ya existe, hacer login
- Si email nuevo, crear usuario con datos de Google
- No requiere contraseña

**Precondiciones:**
- Usuario tiene cuenta de Google

**Postcondiciones:**
- Usuario autenticado
- Datos básicos importados de Google (nombre, email, avatar)

---

#### RF-004: Onboarding de 3 Pasos
**Prioridad:** Alta
**Complejidad:** Baja

**Descripción:**
El sistema debe guiar a nuevos usuarios por onboarding de 3 pantallas antes de usar la app.

**Criterios de aceptación:**
- Pantalla 1: Bienvenida (explicación funcionamiento)
- Pantalla 2: Perfil básico (nombre, provincia, municipio)
- Pantalla 3: Intereses (seleccionar hasta 3 categorías)
- No se puede saltar onboarding

**Precondiciones:**
- Usuario recién registrado

**Postcondiciones:**
- Usuario tiene perfil completo
- Estado cambiado a "activo"
- Puede usar la app

---

### 6.2 Gestión de Trabajos

#### RF-005: Crear Trabajo
**Prioridad:** Alta
**Complejidad:** Alta

**Descripción:**
El sistema debe permitir a usuarios crear trabajos con información detallada.

**Criterios de aceptación:**
- Formulario guiado multi-paso
- Campos obligatorios: categoría, descripción, provincia, municipio, mes inicio, año inicio, duración
- Campos opcionales: superficie, maquinaria requerida, operador, fotos (máx 5)
- Sistema genera pseudónimo único automáticamente
- Sistema calcula y muestra precio estimado

**Precondiciones:**
- Usuario con perfil completo
- No ha alcanzado límite de trabajos activos (2 nuevo, 5 consolidado)

**Postcondiciones:**
- Trabajo creado en estado "published"
- Pseudónimo asignado
- Visible en feed para proveedores
- Notificación enviada a proveedores relevantes

**Validaciones:**
- Descripción min 50 caracteres, max 1000
- Fotos max 5, tamaño max 1MB cada una
- Superficie >0 si se proporciona
- Mes inicio válido (1-12)
- Año inicio >= año actual

---

#### RF-006: Editar Trabajo
**Prioridad:** Media
**Complejidad:** Media

**Descripción:**
El sistema debe permitir editar trabajos solo si no tienen aplicaciones.

**Criterios de aceptación:**
- Solo editable por creador
- Solo si estado = "published" y aplicaciones = 0
- Puede modificar todos los campos excepto pseudónimo
- Se muestra warning si cambian datos que afectan precio

**Precondiciones:**
- Usuario es creador del trabajo
- Trabajo sin aplicaciones

**Postcondiciones:**
- Trabajo actualizado
- Timestamp updated_at actualizado

---

#### RF-007: Cancelar Trabajo
**Prioridad:** Media
**Complejidad:** Media

**Descripción:**
El sistema debe permitir cancelar trabajos.

**Criterios de aceptación:**
- Solo cancelable por creador
- Si tiene aplicaciones, se rechazan automáticamente
- Estado cambia a "cancelled"
- Incrementa contador cancelled_jobs_count del usuario
- Si usuario nuevo cancela >1 trabajo, debe esperar 7 días antes de publicar otro

**Precondiciones:**
- Usuario es creador
- Trabajo no está en estado "in_progress" o "completed"

**Postcondiciones:**
- Trabajo cancelado
- Aplicaciones rechazadas
- Notificaciones enviadas a aplicantes

---

#### RF-008: Ver Feed Inteligente de Trabajos
**Prioridad:** Alta
**Complejidad:** Alta

**Descripción:**
El sistema debe mostrar trabajos ordenados por relevancia para cada usuario.

**Criterios de aceptación:**
- Ordenamiento por puntuación:
  - +3 puntos: categoría en intereses del usuario
  - +2 puntos: misma provincia que usuario
  - +1 punto: compatible con maquinaria del usuario
  - +0.5 puntos: publicado últimas 48h
- Filtros disponibles: categoría, provincia, rango fechas, rango precio
- Paginación de 20 trabajos por página
- Cache de 1 minuto (React Query)

**Precondiciones:**
- Usuario autenticado

**Postcondiciones:**
- Lista de trabajos ordenados por relevancia

---

#### RF-009: Ver Detalle de Trabajo
**Prioridad:** Alta
**Complejidad:** Baja

**Descripción:**
El sistema debe mostrar información completa de un trabajo.

**Criterios de aceptación:**
- Muestra todos los datos públicos (con pseudónimo)
- Muestra galería de fotos
- Muestra rating del solicitante
- Muestra badges del solicitante
- Muestra contador de aplicaciones recibidas
- Botón "Aplicar" solo si usuario no es creador

**Precondiciones:**
- Trabajo existe y no está eliminado

**Postcondiciones:**
- Usuario ve detalles completos

---

### 6.3 Gestión de Aplicaciones

#### RF-010: Aplicar a Trabajo
**Prioridad:** Alta
**Complejidad:** Alta

**Descripción:**
El sistema debe permitir aplicar a trabajos con formulario estructurado.

**Criterios de aceptación:**
- Formulario con campos:
  - Maquinaria disponible (selección múltiple de catálogo personal)
  - Precio propuesto (número >0)
  - Disponibilidad (mes + año)
  - Comentario breve (max 100 chars)
- Sistema genera pseudónimo para el proveedor
- Validación: usuario tiene al menos 1 máquina en categoría del trabajo
- No puede aplicar a sus propios trabajos
- No puede aplicar dos veces al mismo trabajo

**Precondiciones:**
- Usuario tiene maquinaria registrada en categoría correcta
- Trabajo en estado "published" o "selecting"
- Usuario no es creador del trabajo
- Usuario no ha aplicado previamente a este trabajo

**Postcondiciones:**
- Aplicación creada con estado "pending"
- Solicitante recibe notificación push
- Estado del trabajo cambia a "selecting" si era "published"

**Validaciones:**
- Precio propuesto >0
- Comentario max 100 caracteres
- Disponibilidad >= fecha actual

---

#### RF-011: Ver Aplicaciones Recibidas
**Prioridad:** Alta
**Complejidad:** Media

**Descripción:**
El sistema debe mostrar lista de aplicaciones recibidas en un trabajo.

**Criterios de aceptación:**
- Solo visible por creador del trabajo
- Muestra por cada aplicación:
  - Pseudónimo del proveedor
  - Rating y badges del proveedor
  - Trabajos completados
  - Precio propuesto
  - Disponibilidad
  - Maquinaria ofrecida (con fotos)
  - Comentario breve
- Ordenadas por fecha de aplicación (más reciente primero)
- Botón "Seleccionar" en cada aplicación

**Precondiciones:**
- Usuario es creador del trabajo
- Trabajo tiene aplicaciones

**Postcondiciones:**
- Lista de aplicaciones comparables

---

#### RF-012: Seleccionar Proveedor
**Prioridad:** Alta
**Complejidad:** Alta

**Descripción:**
El sistema debe permitir seleccionar una aplicación y coordinar con admin.

**Criterios de aceptación:**
- Solo creador del trabajo puede seleccionar
- Solo puede seleccionar 1 aplicación
- Al seleccionar:
  - Estado de la aplicación seleccionada → "accepted"
  - Estado de las demás aplicaciones → "rejected"
  - Estado del trabajo → "assigned"
  - Notificación al admin con datos reales de ambos (email, teléfono)
  - Notificación al proveedor seleccionado
  - Notificaciones a proveedores rechazados

**Precondiciones:**
- Usuario es creador
- Trabajo tiene aplicaciones
- Trabajo no tiene proveedor ya seleccionado

**Postcondiciones:**
- Proveedor asignado al trabajo
- Admin recibe tarea de coordinación
- Notificaciones enviadas

---

### 6.4 Gestión de Maquinaria

#### RF-013: Registrar Maquinaria
**Prioridad:** Alta
**Complejidad:** Media

**Descripción:**
El sistema debe permitir a usuarios registrar maquinaria en su catálogo personal.

**Criterios de aceptación:**
- Campos obligatorios: categoría, tipo
- Campos opcionales: marca, modelo, año, especificaciones técnicas
- Galerías de fotos (máx 5 imágenes)
- Estado operativo (Activo por defecto)

**Precondiciones:**
- Usuario autenticado

**Postcondiciones:**
- Maquinaria registrada en catálogo personal
- Disponible para seleccionar al aplicar a trabajos

**Validaciones:**
- Año entre 1950 y 2100
- Especificaciones max 500 caracteres
- Fotos max 5, tamaño max 1MB cada una

---

#### RF-014: Editar Maquinaria
**Prioridad:** Media
**Complejidad:** Baja

**Descripción:**
El sistema debe permitir editar maquinaria del catálogo personal.

**Criterios de aceptación:**
- Solo propietario puede editar
- Puede cambiar todos los campos
- Puede activar/desactivar

**Precondiciones:**
- Usuario es propietario

**Postcondiciones:**
- Maquinaria actualizada

---

#### RF-015: Eliminar Maquinaria
**Prioridad:** Baja
**Complejidad:** Baja

**Descripción:**
El sistema debe permitir eliminar maquinaria (soft delete).

**Criterios de aceptación:**
- Solo propietario puede eliminar
- Soft delete (marca deleted_at)
- No se elimina físicamente (mantiene histórico de aplicaciones)

**Precondiciones:**
- Usuario es propietario

**Postcondiciones:**
- Maquinaria marcada como eliminada
- No aparece en catálogo personal
- Histórico de aplicaciones mantiene referencia

---

### 6.5 Valoraciones y Reputación

#### RF-016: Crear Valoración
**Prioridad:** Alta
**Complejidad:** Media

**Descripción:**
El sistema debe permitir valorar mutuamente tras completar trabajo.

**Criterios de aceptación:**
- Solo si trabajo en estado "completed"
- Ambas partes deben valorar (mutuo)
- Campos:
  - Rating (1-5 estrellas)
  - Comentario obligatorio (20-200 caracteres)
- No editable tras envío
- Actualiza automáticamente rating promedio del valorado

**Precondiciones:**
- Trabajo completado
- Usuario participó en el trabajo (como solicitante o proveedor)
- No ha valorado previamente

**Postcondiciones:**
- Valoración creada
- Rating promedio del valorado actualizado
- Trigger de asignación de badges ejecutado

**Validaciones:**
- Rating entre 1 y 5
- Comentario entre 20 y 200 caracteres

---

#### RF-017: Asignación Automática de Badges
**Prioridad:** Media
**Complejidad:** Alta

**Descripción:**
El sistema debe asignar badges automáticamente al alcanzar umbrales.

**Criterios de aceptación:**
- Se ejecuta tras cada nueva valoración o trabajo completado
- Badges disponibles:
  - Proveedor Verificado: 1+ trabajo completado y rating >3.5
  - Proveedor Experto: 5+ trabajos completados y rating >4.0
  - Proveedor Elite: 20+ trabajos completados y rating >4.5
  - Solicitante Frecuente: 3+ trabajos publicados
  - Puntual: 90%+ trabajos completados en plazo
- Una vez ganado, badge permanece (no se quita)

**Precondiciones:**
- Usuario tiene actividad en plataforma

**Postcondiciones:**
- Badges asignados visibles en perfil público

---

#### RF-018: Sistema de Confianza Progresiva
**Prioridad:** Alta
**Complejidad:** Media

**Descripción:**
El sistema debe aplicar límites variables según reputación del usuario.

**Criterios de aceptación:**
- Usuario nuevo (0 trabajos completados):
  - Máx 2 trabajos activos simultáneos
  - Si cancela, debe esperar 7 días antes de publicar otro
- Usuario consolidado (3+ trabajos completados):
  - Máx 5 trabajos activos simultáneos
  - Sin restricciones de publicación
- Usuario sancionado (rating <3.0 con 5+ trabajos o cancelaciones >20%):
  - Revisión manual de aplicaciones por admin
  - Máx 1 trabajo activo

**Precondiciones:**
- Usuario intenta publicar trabajo

**Postcondiciones:**
- Sistema valida límites y acepta/rechaza publicación

---

### 6.6 Notificaciones

#### RF-019: Enviar Notificación Push
**Prioridad:** Alta
**Complejidad:** Media

**Descripción:**
El sistema debe enviar notificaciones push en 4 eventos críticos.

**Criterios de aceptación:**
- Tipos de notificaciones:
  1. Nuevo trabajo en tu área (filtrado por categorías de interés + provincia)
  2. Aplicación recibida en tu trabajo
  3. Tu aplicación fue aceptada
  4. Cambio de estado del trabajo (assigned → in_progress → completed)
- Notificaciones multiidioma (ES/CA según configuración usuario)
- Incluye datos para deep linking (abrir trabajo específico)
- Respeta configuración de notificaciones del dispositivo

**Precondiciones:**
- Usuario tiene token FCM registrado
- Evento crítico ocurre

**Postcondiciones:**
- Notificación enviada vía FCM
- Registro en tabla notifications para historial en app

---

#### RF-020: Ver Historial de Notificaciones
**Prioridad:** Baja
**Complejidad:** Baja

**Descripción:**
El sistema debe mostrar historial de notificaciones en app.

**Criterios de aceptación:**
- Lista de notificaciones ordenadas por fecha (más reciente primero)
- Marcar como leída al abrir
- Badge con contador de no leídas

**Precondiciones:**
- Usuario autenticado

**Postcondiciones:**
- Lista de notificaciones

---

### 6.7 Favoritos

#### RF-021: Añadir a Favoritos
**Prioridad:** Media
**Complejidad:** Baja

**Descripción:**
El sistema debe permitir guardar trabajos y proveedores como favoritos.

**Criterios de aceptación:**
- Puede guardar trabajos (para aplicar después)
- Puede guardar proveedores (para trabajos futuros)
- Máximo 20 favoritos activos totales

**Precondiciones:**
- Usuario autenticado
- No ha alcanzado límite de 20 favoritos

**Postcondiciones:**
- Favorito añadido
- Visible en lista de favoritos

---

#### RF-022: Eliminar de Favoritos
**Prioridad:** Baja
**Complejidad:** Baja

**Descripción:**
El sistema debe permitir eliminar favoritos.

**Criterios de aceptación:**
- Usuario puede eliminar manualmente
- Sistema elimina automáticamente trabajos completados tras 90 días

**Precondiciones:**
- Usuario tiene favoritos

**Postcondiciones:**
- Favorito eliminado

---

### 6.8 Administración

#### RF-023: Ver Trabajos Asignados (Admin)
**Prioridad:** Alta
**Complejidad:** Media

**Descripción:**
El panel admin debe mostrar lista de trabajos pendientes de coordinación.

**Criterios de aceptación:**
- Lista de trabajos en estado "assigned"
- Muestra:
  - Datos reales del solicitante (nombre, email, teléfono)
  - Datos reales del proveedor (nombre, email, teléfono)
  - Detalles del trabajo
  - Propuesta aceptada (precio, disponibilidad, maquinaria)
- Ordenados por fecha de asignación (más reciente primero)

**Precondiciones:**
- Usuario con rol admin autenticado en panel web

**Postcondiciones:**
- Lista de coordinaciones pendientes

---

#### RF-024: Cambiar Estado de Trabajo (Admin)
**Prioridad:** Alta
**Complejidad:** Baja

**Descripción:**
El admin debe poder cambiar manualmente estados de trabajos.

**Criterios de aceptación:**
- Puede cambiar:
  - "assigned" → "in_progress" (tras coordinar inicio)
  - "in_progress" → "completed" (tras finalizar trabajo)
  - Cualquier estado → "cancelled" (en casos excepcionales)
- Cambio auditado en tabla admin_actions
- Notificaciones enviadas a ambas partes tras cambio

**Precondiciones:**
- Usuario con rol admin
- Trabajo existe

**Postcondiciones:**
- Estado actualizado
- Notificaciones enviadas
- Auditoría registrada

---

#### RF-025: Ver Reportes de Actividad (Admin)
**Prioridad:** Media
**Complejidad:** Media

**Descripción:**
El panel admin debe mostrar reportes mensuales de actividad.

**Criterios de aceptación:**
- Métricas mostradas:
  - Trabajos publicados por mes
  - Aplicaciones enviadas por mes
  - Tasa de conversión (trabajos completados / publicados)
  - Rating promedio de plataforma
  - Usuarios registrados
  - Usuarios activos (publicaron o aplicaron último mes)
- Filtros por rango de fechas
- Exportable a CSV

**Precondiciones:**
- Usuario con rol admin

**Postcondiciones:**
- Reportes visualizados

---

#### RF-026: Gestionar Usuarios Sancionados (Admin)
**Prioridad:** Media
**Complejidad:** Media

**Descripción:**
El admin debe poder suspender/reactivar usuarios.

**Criterios de aceptación:**
- Lista de usuarios con rating <3.0 o cancelaciones >20%
- Puede suspender usuario (bloquea acceso a app)
- Puede reactivar usuario suspendido
- Debe proporcionar razón de suspensión

**Precondiciones:**
- Usuario con rol admin

**Postcondiciones:**
- Usuario suspendido/reactivado
- Email notificación enviado al usuario

---

### 6.9 Estimación de Precios

#### RF-027: Calcular Precio Estimado
**Prioridad:** Alta
**Complejidad:** Alta

**Descripción:**
El sistema debe calcular y mostrar rango de precio estimado al crear trabajo.

**Criterios de aceptación:**
- Se calcula basado en:
  - Categoría del trabajo (precios base por categoría)
  - Superficie (hectáreas)
  - Duración estimada
  - Maquinaria requerida
  - Histórico de trabajos similares completados
- Muestra rango (min - max)
- Ejemplo: "800€ - 1200€"
- Actualiza en tiempo real conforme usuario completa formulario

**Precondiciones:**
- Usuario está creando trabajo

**Postcondiciones:**
- Precio estimado mostrado

**Algoritmo:**
```
precio_base = PRECIOS_CATEGORIA[categoria]
factor_superficie = superficie * PRECIO_POR_HECTAREA[categoria]
factor_duracion = MULTIPLICADOR_DURACION[duracion]
factor_maquinaria = SUM(PRECIO_MAQUINARIA[maquina])

precio_min = (precio_base + factor_superficie) * factor_duracion * 0.8
precio_max = (precio_base + factor_superficie + factor_maquinaria) * factor_duracion * 1.2
```

---

#### RF-028: Mostrar Sugerencias Contextuales
**Prioridad:** Baja
**Complejidad:** Baja

**Descripción:**
El sistema debe mostrar tips durante creación de trabajo.

**Criterios de aceptación:**
- Sugerencias según contexto:
  - "Trabajos con fotos reciben +40% más aplicaciones"
  - "Para esta superficie, la mayoría indica 2-3 días de duración"
  - "Especifica si el terreno tiene pendientes pronunciadas"
- Mostradas en momento relevante del formulario

**Precondiciones:**
- Usuario está creando trabajo

**Postcondiciones:**
- Tips mostrados

---

## 7. CASOS DE USO

### 7.1 CU-001: Registrarse en la Plataforma

**Actor principal:** Usuario nuevo

**Precondiciones:**
- Usuario no tiene cuenta

**Flujo principal:**
1. Usuario abre la app
2. Usuario clica "Registrarse"
3. Usuario ingresa email y contraseña
4. Sistema valida email único
5. Sistema crea cuenta con estado "pendiente_onboarding"
6. Sistema inicia onboarding

**Flujo alternativo 3a: Registro con Google**
- 3a1. Usuario clica "Continuar con Google"
- 3a2. Sistema redirige a Google OAuth
- 3a3. Usuario autoriza acceso
- 3a4. Sistema crea cuenta con datos de Google
- 3a5. Continúa paso 6

**Postcondiciones:**
- Usuario registrado
- Onboarding iniciado

---

### 7.2 CU-002: Completar Onboarding

**Actor principal:** Usuario recién registrado

**Precondiciones:**
- Usuario registrado pero onboarding pendiente

**Flujo principal:**
1. Sistema muestra pantalla 1: Bienvenida
2. Usuario clica "Siguiente"
3. Sistema muestra pantalla 2: Perfil básico
4. Usuario ingresa nombre, provincia, municipio
5. Usuario clica "Siguiente"
6. Sistema muestra pantalla 3: Intereses
7. Usuario selecciona hasta 3 categorías de interés
8. Usuario clica "Empezar"
9. Sistema actualiza estado a "activo"
10. Sistema muestra home de la app

**Flujo alternativo:**
- No hay saltos de onboarding permitidos

**Postcondiciones:**
- Usuario con perfil completo
- Puede usar la app

---

### 7.3 CU-003: Publicar Trabajo Agrícola

**Actor principal:** Usuario (Solicitante)

**Precondiciones:**
- Usuario con perfil completo
- No ha alcanzado límite de trabajos activos

**Flujo principal:**
1. Usuario clica "Publicar trabajo"
2. Sistema muestra formulario paso 1: Categoría y descripción
3. Usuario selecciona categoría (1 de 10)
4. Usuario escribe descripción
5. Usuario opcionalmente añade fotos (máx 5)
6. Usuario clica "Siguiente"
7. Sistema muestra paso 2: Ubicación
8. Usuario selecciona provincia
9. Usuario selecciona municipio
10. Usuario clica "Siguiente"
11. Sistema muestra paso 3: Fechas
12. Usuario selecciona mes inicio, año inicio, duración estimada
13. Usuario clica "Siguiente"
14. Sistema muestra paso 4: Especificaciones
15. Usuario ingresa superficie (opcional)
16. Usuario selecciona maquinaria requerida
17. Usuario indica si requiere operador
18. Usuario clica "Siguiente"
19. Sistema calcula precio estimado
20. Sistema muestra paso 5: Confirmación con precio estimado
21. Sistema muestra sugerencias contextuales
22. Usuario revisa y clica "Publicar trabajo"
23. Sistema genera pseudónimo único
24. Sistema crea trabajo en estado "published"
25. Sistema envía notificaciones a proveedores relevantes
26. Sistema muestra confirmación

**Flujo alternativo 22a: Usuario cancela**
- 22a1. Usuario clica "Cancelar"
- 22a2. Sistema descarta borrador
- 22a3. Usuario vuelve al home

**Postcondiciones:**
- Trabajo publicado y visible en feed
- Notificaciones enviadas

---

### 7.4 CU-004: Aplicar a Trabajo

**Actor principal:** Usuario (Proveedor)

**Precondiciones:**
- Usuario tiene maquinaria registrada en categoría del trabajo
- Usuario no es creador del trabajo
- Usuario no ha aplicado previamente

**Flujo principal:**
1. Usuario ve trabajo en feed
2. Usuario clica trabajo para ver detalles
3. Sistema muestra detalles completos con pseudónimo
4. Usuario clica "Aplicar"
5. Sistema muestra formulario de aplicación
6. Usuario selecciona maquinaria de su catálogo (checkbox múltiple)
7. Usuario ingresa precio propuesto
8. Usuario selecciona disponibilidad (mes + año)
9. Usuario escribe comentario breve (max 100 chars)
10. Usuario clica "Enviar aplicación"
11. Sistema valida precio >0
12. Sistema genera pseudónimo para proveedor
13. Sistema crea aplicación en estado "pending"
14. Sistema cambia estado del trabajo a "selecting" (si era "published")
15. Sistema envía notificación al solicitante
16. Sistema muestra confirmación

**Flujo alternativo 6a: Usuario no tiene maquinaria adecuada**
- 6a1. Sistema muestra mensaje "Necesitas registrar maquinaria para esta categoría"
- 6a2. Usuario puede ir a "Mi maquinaria" para registrar

**Postcondiciones:**
- Aplicación enviada
- Solicitante notificado

---

### 7.5 CU-005: Seleccionar Proveedor

**Actor principal:** Usuario (Solicitante)

**Precondiciones:**
- Usuario es creador del trabajo
- Trabajo tiene al menos 1 aplicación
- Trabajo no tiene proveedor ya seleccionado

**Flujo principal:**
1. Usuario clica notificación "Aplicación recibida"
2. Sistema abre trabajo con lista de aplicaciones
3. Usuario revisa aplicaciones comparando:
   - Rating y badges
   - Precio propuesto
   - Maquinaria ofrecida
   - Disponibilidad
   - Comentarios
4. Usuario clica "Ver detalles" en aplicación de interés
5. Sistema muestra perfil público del proveedor (con pseudónimo)
6. Usuario clica "Seleccionar proveedor"
7. Sistema muestra confirmación "¿Estás seguro?"
8. Usuario confirma
9. Sistema actualiza aplicación seleccionada a "accepted"
10. Sistema actualiza demás aplicaciones a "rejected"
11. Sistema actualiza trabajo a "assigned"
12. Sistema envía notificación a admin con datos reales:
    - Solicitante: nombre, email, teléfono
    - Proveedor: nombre, email, teléfono
    - Detalles trabajo + propuesta aceptada
13. Sistema envía notificación al proveedor seleccionado
14. Sistema envía notificaciones a proveedores rechazados
15. Sistema muestra confirmación "Proveedor seleccionado. Nuestro equipo te contactará pronto"

**Postcondiciones:**
- Proveedor asignado
- Admin recibe tarea de coordinación
- Notificaciones enviadas

---

### 7.6 CU-006: Coordinar Trabajo (Admin)

**Actor principal:** Administrador

**Precondiciones:**
- Trabajo en estado "assigned"

**Flujo principal:**
1. Admin recibe notificación de nuevo trabajo asignado
2. Admin abre panel web de administración
3. Admin ve trabajo en lista "Pendientes de coordinación"
4. Admin clica trabajo para ver detalles completos
5. Sistema muestra datos reales de ambas partes
6. Admin contacta solicitante vía WhatsApp/teléfono
7. Admin contacta proveedor vía WhatsApp/teléfono
8. Admin coordina:
   - Fechas exactas de realización
   - Precio final acordado
   - Condiciones especiales
9. Admin envía contrato simple por email (Word/PDF)
10. Ambas partes acuerdan forma de pago
11. Admin en panel web cambia estado a "in_progress"
12. Sistema envía notificaciones a ambas partes
13. Trabajo se realiza (offline)
14. Admin recibe confirmación de finalización (WhatsApp)
15. Admin en panel web cambia estado a "completed"
16. Sistema envía notificaciones de valoración a ambas partes

**Postcondiciones:**
- Trabajo coordinado y completado
- Notificaciones de valoración enviadas

---

### 7.7 CU-007: Valorar Trabajo Completado

**Actor principal:** Usuario (Solicitante o Proveedor)

**Precondiciones:**
- Trabajo en estado "completed"
- Usuario participó en el trabajo
- Usuario no ha valorado previamente

**Flujo principal:**
1. Usuario recibe notificación "Tu trabajo se completó. Por favor valora"
2. Usuario clica notificación
3. Sistema abre formulario de valoración
4. Usuario selecciona rating (1-5 estrellas)
5. Usuario escribe comentario (20-200 caracteres)
6. Usuario clica "Enviar valoración"
7. Sistema valida longitud de comentario
8. Sistema crea valoración
9. Sistema actualiza rating_avg y rating_count del valorado
10. Sistema ejecuta trigger de asignación de badges
11. Sistema muestra confirmación "Valoración enviada"

**Flujo alternativo 6a: Comentario muy corto**
- 6a1. Sistema muestra error "Comentario debe tener al menos 20 caracteres"
- 6a2. Usuario edita comentario
- 6a3. Vuelve a paso 6

**Postcondiciones:**
- Valoración creada
- Rating del valorado actualizado
- Posibles badges asignados

---

### 7.8 CU-008: Gestionar Maquinaria Personal

**Actor principal:** Usuario

**Precondiciones:**
- Usuario autenticado

**Flujo principal:**
1. Usuario va a "Mi maquinaria"
2. Sistema muestra lista de maquinaria registrada
3. Usuario clica "Añadir máquina"
4. Sistema muestra formulario
5. Usuario selecciona categoría
6. Usuario ingresa tipo (ej: Tractor, Cosechadora)
7. Usuario opcionalmente ingresa marca, modelo, año
8. Usuario opcionalmente ingresa especificaciones técnicas
9. Usuario opcionalmente añade fotos (máx 5)
10. Usuario clica "Guardar"
11. Sistema crea máquina en estado "activo"
12. Sistema muestra confirmación
13. Máquina disponible para seleccionar al aplicar a trabajos

**Flujo alternativo 3a: Editar máquina existente**
- 3a1. Usuario clica máquina existente
- 3a2. Sistema muestra formulario con datos actuales
- 3a3. Usuario modifica campos
- 3a4. Usuario clica "Guardar"
- 3a5. Sistema actualiza máquina

**Flujo alternativo 3b: Eliminar máquina**
- 3b1. Usuario clica "Eliminar" en máquina
- 3b2. Sistema solicita confirmación
- 3b3. Usuario confirma
- 3b4. Sistema marca deleted_at
- 3b5. Máquina no aparece en catálogo

**Postcondiciones:**
- Maquinaria registrada/actualizada/eliminada

---

### 7.9 CU-009: Añadir a Favoritos

**Actor principal:** Usuario

**Precondiciones:**
- Usuario autenticado
- No ha alcanzado límite de 20 favoritos

**Flujo principal:**
1. Usuario ve trabajo o perfil de proveedor
2. Usuario clica icono estrella "Añadir a favoritos"
3. Sistema crea favorito
4. Sistema muestra confirmación "Añadido a favoritos"
5. Icono estrella cambia a lleno

**Flujo alternativo 2a: Ya está en favoritos**
- 2a1. Sistema elimina de favoritos
- 2a2. Sistema muestra "Eliminado de favoritos"
- 2a3. Icono estrella cambia a vacío

**Postcondiciones:**
- Favorito añadido/eliminado

---

### 7.10 CU-010: Ver Reportes de Actividad (Admin)

**Actor principal:** Administrador

**Precondiciones:**
- Usuario con rol admin autenticado

**Flujo principal:**
1. Admin abre panel web
2. Admin va a "Reportes"
3. Sistema muestra dashboard con métricas:
   - Trabajos publicados (gráfica mensual)
   - Aplicaciones enviadas (gráfica mensual)
   - Tasa de conversión (%)
   - Rating promedio plataforma
   - Usuarios registrados (total)
   - Usuarios activos (último mes)
4. Admin selecciona rango de fechas
5. Sistema actualiza gráficas
6. Admin clica "Exportar CSV"
7. Sistema genera CSV con datos
8. Admin descarga archivo

**Postcondiciones:**
- Reportes visualizados
- Opcionalmente exportados

---

## 8. USER STORIES

### 8.1 Épica: Gestión de Usuarios

**US-001:** Como usuario nuevo, quiero registrarme con mi email en menos de 1 minuto para empezar a usar la app rápidamente.

**Criterios de aceptación:**
- Formulario simple (email + contraseña)
- Validación en tiempo real
- Confirmación automática (sin email verificación manual)

---

**US-002:** Como usuario, quiero completar un onboarding de 3 pasos para entender cómo funciona la app antes de usarla.

**Criterios de aceptación:**
- Pantalla 1: Explicación clara del funcionamiento
- Pantalla 2: Completar perfil básico (nombre, provincia, municipio)
- Pantalla 3: Seleccionar hasta 3 categorías de interés
- No se puede saltar onboarding

---

**US-003:** Como usuario, quiero iniciar sesión con Google para no tener que recordar contraseñas.

**Criterios de aceptación:**
- Botón "Continuar con Google" visible
- Un clic para autenticar
- Importa datos básicos de Google (nombre, email, avatar)

---

### 8.2 Épica: Publicación de Trabajos

**US-004:** Como agricultor, quiero publicar un trabajo en menos de 5 minutos para recibir propuestas rápidamente.

**Criterios de aceptación:**
- Formulario guiado multi-paso
- Campos con valores por defecto razonables
- Sugerencias contextuales durante llenado
- Precio estimado mostrado automáticamente

---

**US-005:** Como solicitante, quiero ver un precio estimado antes de publicar para saber si mi presupuesto es realista.

**Criterios de aceptación:**
- Calculadora automática basada en: categoría, superficie, duración, maquinaria
- Muestra rango (min - max)
- Actualiza en tiempo real conforme completo formulario
- Muestra comparación con trabajos similares

---

**US-006:** Como solicitante, quiero elegir categoría de una lista simple de 10 opciones para no perderme en subcategorías.

**Criterios de aceptación:**
- 10 categorías principales claras
- Texto libre para detalles específicos (max 500 chars)
- No hay subcategorías obligatorias

---

**US-007:** Como solicitante, quiero indicar fechas flexibles (mes + año) porque dependo del clima.

**Criterios de aceptación:**
- Selección de mes (Enero-Diciembre)
- Selección de año (2025+)
- Duración estimada (dropdown: 1 día, 2-3 días, 1 semana, etc.)
- No requiere fecha exacta

---

### 8.3 Épica: Aplicaciones

**US-008:** Como proveedor, quiero ver un feed de trabajos relevantes primero para no perder tiempo buscando.

**Criterios de aceptación:**
- Trabajos ordenados por: categorías de interés, provincia, compatibilidad maquinaria, fecha publicación
- Filtros rápidos por categoría, provincia, rango precio
- Paginación de 20 trabajos
- Cache de 1 minuto

---

**US-009:** Como proveedor, quiero aplicar con un formulario simple para que el solicitante compare fácilmente.

**Criterios de aceptación:**
- Selección de maquinaria de mi catálogo
- Precio propuesto (número)
- Disponibilidad (mes + año)
- Comentario breve (max 100 chars)
- No chat libre

---

**US-010:** Como solicitante, quiero ver aplicaciones en formato comparable para elegir rápidamente.

**Criterios de aceptación:**
- Lista de aplicaciones mostrando: rating, badges, precio, disponibilidad, maquinaria
- Ordenadas por fecha
- Botón "Seleccionar" en cada una
- Puedo ver perfil público (con pseudónimo) antes de seleccionar

---

**US-011:** Como usuario, quiero que mi identidad real esté oculta hasta que seleccionen mi aplicación para proteger mi privacidad.

**Criterios de aceptación:**
- Pseudónimo generado automáticamente (ej: "Proveedor_M9P4")
- Email y teléfono NO visibles en app
- Solo admin ve datos reales DESPUÉS de selección

---

### 8.4 Épica: Coordinación

**US-012:** Como admin, quiero recibir notificación con datos reales solo cuando un trabajo es asignado para coordinar eficientemente.

**Criterios de aceptación:**
- Notificación incluye: nombres reales, emails, teléfonos de ambas partes
- Incluye detalles del trabajo y propuesta aceptada
- Visible en panel web en "Pendientes de coordinación"

---

**US-013:** Como admin, quiero cambiar estados de trabajos manualmente para reflejar el progreso real.

**Criterios de aceptación:**
- Puede cambiar: assigned → in_progress → completed
- Cambio auditado (quién, cuándo, razón)
- Notificaciones automáticas a ambas partes tras cambio

---

**US-014:** Como solicitante, quiero recibir actualización cuando el admin cambie el estado para saber cómo va mi trabajo.

**Criterios de aceptación:**
- Notificación push cuando cambia a "in_progress"
- Notificación push cuando cambia a "completed"
- En app veo timeline de estados

---

### 8.5 Épica: Reputación

**US-015:** Como proveedor, quiero ganar badges automáticamente para destacar en aplicaciones.

**Criterios de aceptación:**
- Badges se asignan sin intervención manual
- Aparecen en mi perfil público
- Visibles en lista de aplicaciones para solicitantes
- Una vez ganados, no se quitan

---

**US-016:** Como solicitante, quiero ver rating y badges de proveedores para elegir con confianza.

**Criterios de aceptación:**
- Rating promedio (estrellas) visible en lista de aplicaciones
- Badges destacados (íconos + tooltips)
- Contador de trabajos completados
- Puedo ver reseñas recientes

---

**US-017:** Como usuario, quiero valorar mutuamente tras completar un trabajo para construir reputación.

**Criterios de aceptación:**
- Notificación cuando trabajo se completa
- Formulario simple (rating + comentario corto)
- Comentario obligatorio (min 20 chars)
- No editable tras enviar

---

### 8.6 Épica: Maquinaria

**US-018:** Como proveedor, quiero mantener un catálogo de mi maquinaria para seleccionarla rápidamente al aplicar.

**Criterios de aceptación:**
- Registro con fotos (max 5)
- Especificaciones técnicas (texto libre)
- Estado activo/inactivo
- Editable en cualquier momento

---

**US-019:** Como proveedor, quiero que la maquinaria siempre esté vinculada a servicios para no tener responsabilidad de alquiler directo.

**Criterios de aceptación:**
- NO hay opción de "alquilar maquinaria sin servicio"
- Solo se selecciona al aplicar a un trabajo
- Yo opero mi maquinaria

---

### 8.7 Épica: Favoritos

**US-020:** Como usuario, quiero guardar proveedores que me gustaron para trabajos futuros.

**Criterios de aceptación:**
- Icono estrella en perfil de proveedor
- Lista de favoritos accesible desde perfil
- Máximo 20 favoritos activos

---

**US-021:** Como proveedor, quiero guardar trabajos interesantes para aplicar después.

**Criterios de aceptación:**
- Icono estrella en trabajo
- Lista de favoritos accesible
- Se eliminan automáticamente si trabajo se completa

---

### 8.8 Épica: Notificaciones

**US-022:** Como proveedor, quiero recibir notificación de nuevos trabajos en mi área para no perderlos.

**Criterios de aceptación:**
- Solo si trabajo está en mis categorías de interés Y mi provincia
- Notificación incluye título, ubicación, precio estimado
- Deep link abre trabajo directamente

---

**US-023:** Como solicitante, quiero recibir notificación cuando alguien aplica para revisar rápidamente.

**Criterios de aceptación:**
- Notificación push inmediata
- Muestra pseudónimo del proveedor y precio propuesto
- Deep link abre lista de aplicaciones

---

**US-024:** Como proveedor, quiero recibir notificación si mi aplicación fue aceptada para prepararme.

**Criterios de aceptación:**
- Notificación push cuando solicitante selecciona
- Mensaje: "Tu aplicación fue aceptada. El administrador te contactará pronto"
- Deep link abre detalles del trabajo

---

### 8.9 Épica: Administración

**US-025:** Como admin, quiero ver reportes mensuales de actividad para tomar decisiones.

**Criterios de aceptación:**
- Gráficas de trabajos publicados por mes
- Gráficas de aplicaciones por mes
- Tasa de conversión (completados / publicados)
- Rating promedio plataforma
- Exportable a CSV

---

**US-026:** Como admin, quiero suspender usuarios con mal comportamiento para proteger la plataforma.

**Criterios de aceptación:**
- Lista de usuarios con rating <3.0 o cancelaciones >20%
- Puede suspender con razón
- Usuario suspendido no puede acceder a app
- Email de notificación enviado

---

## 9. REGLAS DE NEGOCIO

### 9.1 Reglas de Registro y Autenticación

**RN-001: Unicidad de Email**
- Cada email solo puede estar asociado a una cuenta
- Validación case-insensitive (juan@example.com = JUAN@example.com)

**RN-002: Fortaleza de Contraseña**
- Mínimo 8 caracteres
- Recomendado: combinación de mayúsculas, minúsculas, números

**RN-003: Auto-Verificación**
- Usuarios verificados automáticamente al completar onboarding
- No se requiere validación manual por admin

**RN-004: Onboarding Obligatorio**
- No se puede usar app sin completar onboarding
- No se puede saltar pasos

---

### 9.2 Reglas de Publicación de Trabajos

**RN-005: Límites de Trabajos Activos**
- Usuario nuevo (0 trabajos completados): máx 2 trabajos activos
- Usuario consolidado (3+ trabajos completados): máx 5 trabajos activos
- Usuario sancionado: máx 1 trabajo activo

**RN-006: Penalización por Cancelación**
- Si usuario nuevo cancela >1 trabajo, debe esperar 7 días antes de publicar otro
- Usuarios consolidados sin penalización

**RN-007: Campos Obligatorios**
- Categoría, descripción, provincia, municipio, mes inicio, año inicio, duración son obligatorios
- Descripción mín 50 caracteres
- Superficie, fotos, maquinaria requerida son opcionales pero recomendados

**RN-008: Límite de Imágenes**
- Máximo 5 imágenes por trabajo
- Tamaño máximo 1 MB por imagen
- Formatos permitidos: JPG, PNG

**RN-009: Generación de Pseudónimos**
- Pseudónimo único generado automáticamente al publicar
- Formato: "Agricultor_" + 4 caracteres alfanuméricos aleatorios
- No repetible en plataforma

**RN-010: Edición Limitada**
- Solo editable por creador
- Solo si estado = "published" Y aplicaciones = 0
- Pseudónimo NO editable

---

### 9.3 Reglas de Aplicaciones

**RN-011: Requisito de Maquinaria**
- Proveedor debe tener al menos 1 máquina registrada en categoría del trabajo
- Validación antes de permitir aplicar

**RN-012: Aplicación Única**
- Un proveedor solo puede aplicar UNA vez al mismo trabajo
- Constraint UNIQUE en base de datos (job_id, provider_id)

**RN-013: No Auto-Aplicación**
- Usuario no puede aplicar a sus propios trabajos
- Validación en backend

**RN-014: Precio Propuesto Válido**
- Precio propuesto debe ser >0
- No hay límite superior

**RN-015: Comentario Breve**
- Máximo 100 caracteres en comentario de aplicación
- Opcional (puede estar vacío)

**RN-016: Irreversibilidad**
- Aplicación no se puede retirar tras enviar
- Evita spam de aplicaciones

**RN-017: Cambio de Estado Automático**
- Primera aplicación recibida cambia trabajo de "published" → "selecting"

---

### 9.4 Reglas de Selección

**RN-018: Selección Única**
- Solo 1 aplicación puede ser aceptada por trabajo
- Al seleccionar, demás aplicaciones se rechazan automáticamente

**RN-019: Irreversibilidad de Selección**
- Una vez seleccionado proveedor, no se puede cambiar
- Si hay problema, debe cancelar trabajo y republicar

**RN-020: Acceso a Datos Reales**
- Admin solo accede a datos reales (email, teléfono) DESPUÉS de selección
- Usuarios NUNCA ven datos reales de otros usuarios en app

**RN-021: Notificación Obligatoria a Admin**
- Al seleccionar proveedor, sistema DEBE notificar a admin con:
  - Datos reales de solicitante (nombre, email, teléfono)
  - Datos reales de proveedor (nombre, email, teléfono)
  - Detalles del trabajo
  - Propuesta aceptada

---

### 9.5 Reglas de Estados de Trabajos

**RN-022: Flujo de Estados**
- Flujo válido: published → selecting → assigned → in_progress → completed
- Estados alternativos: cualquier estado → cancelled

**RN-023: Cambio Manual de Estados**
- Solo admin puede cambiar estados manualmente
- Excepciones automáticas:
  - published → selecting (primera aplicación)
  - selecting → assigned (selección de proveedor)

**RN-024: Auditoría de Cambios**
- Todos los cambios de estado se registran en admin_actions
- Incluye: quién, cuándo, estado anterior, estado nuevo, razón

---

### 9.6 Reglas de Valoraciones

**RN-025: Valoración Post-Completado**
- Solo se puede valorar si trabajo en estado "completed"
- No se puede valorar trabajos en progreso o cancelados

**RN-026: Valoración Mutua Obligatoria**
- Ambas partes (solicitante y proveedor) deben valorar
- Valoración aparece como "pendiente" hasta que ambos valoren

**RN-027: Comentario Obligatorio**
- Comentario entre 20 y 200 caracteres
- Sin comentario no se puede enviar valoración

**RN-028: Irreversibilidad de Valoración**
- Valoración NO editable tras envío
- Previene chantaje ("mejora mi trabajo o cambio rating")

**RN-029: Actualización de Rating Promedio**
- Rating promedio se recalcula automáticamente tras cada nueva valoración
- Fórmula: SUM(ratings) / COUNT(ratings)

---

### 9.7 Reglas de Reputación

**RN-030: Asignación Automática de Badges**
- Badges se asignan automáticamente al alcanzar umbrales
- Se ejecuta tras: valoración nueva, trabajo completado
- Una vez ganado, badge es permanente

**RN-031: Umbral Proveedor Verificado**
- 1+ trabajo completado Y rating promedio >3.5

**RN-032: Umbral Proveedor Experto**
- 5+ trabajos completados Y rating promedio >4.0

**RN-033: Umbral Proveedor Elite**
- 20+ trabajos completados Y rating promedio >4.5

**RN-034: Umbral Solicitante Frecuente**
- 3+ trabajos publicados (total, no necesariamente completados)

**RN-035: Umbral Puntual**
- 90%+ trabajos completados en plazo
- Plazo = duración estimada * 1.5

**RN-036: Usuario Sancionado**
- Rating promedio <3.0 con 5+ trabajos completados
- O cancelaciones >20% de trabajos publicados
- Activa: revisión manual, límite 1 trabajo activo

---

### 9.8 Reglas de Maquinaria

**RN-037: Vinculación a Usuario**
- Maquinaria siempre vinculada a usuario propietario
- No se puede transferir propiedad

**RN-038: Vinculación a Servicios**
- Maquinaria NO se alquila de forma independiente
- Solo se usa al aplicar a trabajos

**RN-039: Límite de Imágenes**
- Máximo 5 imágenes por máquina
- Tamaño máximo 1 MB por imagen

**RN-040: Especificaciones Técnicas**
- Texto libre, máximo 500 caracteres
- Opcional

**RN-041: Soft Delete**
- Eliminación lógica (marca deleted_at)
- Mantiene histórico de aplicaciones

---

### 9.9 Reglas de Notificaciones

**RN-042: Solo 4 Tipos Críticos**
- Nuevo trabajo en tu área
- Aplicación recibida
- Aplicación aceptada
- Cambio de estado de trabajo

**RN-043: Filtrado Inteligente**
- "Nuevo trabajo en tu área" solo si:
  - Categoría en intereses del usuario
  - Provincia = provincia del usuario
  - Usuario no es creador

**RN-044: Multiidioma**
- Notificaciones en idioma configurado del usuario (ES o CA)
- Plantillas duplicadas para ambos idiomas

**RN-045: Limpieza Automática**
- Notificaciones leídas >30 días se eliminan automáticamente
- Job ejecutado diariamente

---

### 9.10 Reglas de Favoritos

**RN-046: Límite Total**
- Máximo 20 favoritos activos (trabajos + proveedores combinados)

**RN-047: No Duplicados**
- No se puede añadir mismo favorito dos veces
- Constraint UNIQUE en base de datos

**RN-048: Limpieza Automática de Trabajos**
- Favoritos de trabajos completados se eliminan tras 90 días
- Job ejecutado semanalmente

---

### 9.11 Reglas de Administración

**RN-049: Acceso Exclusivo a Datos Reales**
- Solo usuarios con rol "admin" acceden a emails y teléfonos
- Validación en backend + base de datos

**RN-050: Auditoría Obligatoria**
- Todas las acciones de admin se registran en admin_actions
- Incluye: acción, usuario afectado, valores anteriores/nuevos, timestamp

**RN-051: Suspensión con Razón**
- Al suspender usuario, admin DEBE proporcionar razón
- Razón visible para el usuario

---

### 9.12 Reglas de Estimación de Precios

**RN-052: Rango Orientativo**
- Precio estimado es ORIENTATIVO, no vinculante
- Muestra rango (min - max)

**RN-053: Actualización de Histórico**
- Precios base se recalculan cada 30 días basados en histórico
- Solo se consideran trabajos completados

**RN-054: Factores de Cálculo**
- Categoría (precio base)
- Superficie (precio por hectárea)
- Duración (multiplicador)
- Maquinaria requerida (suma de costos)

---

### 9.13 Reglas de Privacidad y Seguridad

**RN-055: Protección de Identidades**
- Nombres reales, emails, teléfonos NUNCA visibles en app para usuarios
- Solo admin accede post-selección

**RN-056: Pseudónimos Únicos**
- Pseudónimos generados aleatoriamente
- No repetibles en plataforma
- No adivinables

**RN-057: Cifrado de Datos Sensibles**
- Emails y teléfonos cifrados en base de datos
- Solo descifrados cuando admin los necesita

**RN-058: Logs Sin Información Sensible**
- Logs de aplicación NO contienen passwords, tokens completos, datos personales
- Solo IDs y pseudónimos

---

## 10. FLUJOS DE PROCESO

### 10.1 Flujo Completo de Trabajo (Happy Path)

```
┌─────────────────────────────────────────────────────────────┐
│                    FASE 1: PUBLICACIÓN                      │
└─────────────────────────────────────────────────────────────┘

[Solicitante]
    │
    ├─> Publica trabajo (categoría, ubicación, fechas, especificaciones)
    │
    ├─> Sistema genera pseudónimo "Agricultor_X7K2"
    │
    ├─> Sistema calcula precio estimado: "800€ - 1200€"
    │
    └─> Trabajo publicado en estado "published"
             │
             └─> Notificaciones enviadas a proveedores relevantes
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│              FASE 2: RECEPCIÓN DE APLICACIONES              │
└─────────────────────────────────────────────────────────────┘

[Proveedor 1]                [Proveedor 2]              [Proveedor 3]
    │                             │                          │
    ├─> Ve trabajo en feed        ├─> Ve trabajo en feed    ├─> Ve trabajo en feed
    │                             │                          │
    ├─> Aplica con:               ├─> Aplica con:           ├─> Aplica con:
    │   - Tractor JD 6150R        │   - Tractor Case        │   - Tractor NH
    │   - 950€                    │   - 850€                │   - 900€
    │   - Marzo 2025              │   - Marzo 2025          │   - Abril 2025
    │                             │                          │
    └─> Sistema genera            └─> Sistema genera        └─> Sistema genera
        "Proveedor_M9P4"              "Proveedor_K3L7"          "Proveedor_N5T8"
             │                             │                          │
             └─────────────────┬───────────┴──────────────────────────┘
                               │
                    Estado trabajo → "selecting"
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                  FASE 3: SELECCIÓN                          │
└─────────────────────────────────────────────────────────────┘

[Solicitante]
    │
    ├─> Recibe notificación "3 aplicaciones recibidas"
    │
    ├─> Revisa aplicaciones comparando:
    │   - Ratings, badges, trabajos completados
    │   - Precios propuestos
    │   - Maquinaria ofrecida
    │   - Disponibilidad
    │
    ├─> Selecciona "Proveedor_M9P4" (mejor rating)
    │
    └─> Sistema:
         ├─> Aplicación M9P4 → "accepted"
         ├─> Aplicaciones K3L7, N5T8 → "rejected"
         ├─> Estado trabajo → "assigned"
         ├─> Notificación a admin con datos reales:
         │   - Solicitante: Juan Pérez, juan@example.com, 600123456
         │   - Proveedor: María García, maria@example.com, 600654321
         │   - Propuesta: 950€, Tractor JD 6150R, Marzo 2025
         ├─> Notificación a proveedor M9P4: "Aplicación aceptada"
         └─> Notificaciones a K3L7, N5T8: "Otra aplicación fue aceptada"
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│            FASE 4: COORDINACIÓN ADMINISTRATIVA              │
└─────────────────────────────────────────────────────────────┘

[Admin]
    │
    ├─> Recibe notificación en panel web
    │
    ├─> Ve trabajo en "Pendientes de coordinación"
    │
    ├─> Contacta solicitante vía WhatsApp: +34 600123456
    │   "Hola Juan, tu trabajo ha sido asignado a María García..."
    │
    ├─> Contacta proveedor vía WhatsApp: +34 600654321
    │   "Hola María, tu aplicación fue aceptada por Juan Pérez..."
    │
    ├─> Coordina:
    │   - Fechas exactas: 5-6 de marzo 2025
    │   - Precio final: 950€
    │   - Forma de pago: Transferencia tras finalizar
    │   - Envía contrato simple por email
    │
    ├─> Ambas partes acuerdan
    │
    └─> Admin en panel web:
         └─> Cambia estado a "in_progress"
                  │
                  ├─> Notificación a solicitante: "Tu trabajo está en progreso"
                  └─> Notificación a proveedor: "El trabajo ha iniciado"
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              FASE 5: REALIZACIÓN DEL TRABAJO                │
└─────────────────────────────────────────────────────────────┘

[Proveedor María]
    │
    ├─> 5 marzo: Llega al terreno con Tractor
    │
    ├─> Realiza arado de 10 hectáreas
    │
    └─> 6 marzo: Finaliza trabajo
         │
         └─> Contacta admin vía WhatsApp: "Trabajo completado"
                  │
                  ▼
[Admin]
    │
    ├─> Verifica con solicitante Juan vía WhatsApp
    │
    ├─> Juan confirma: "Todo perfecto"
    │
    └─> Admin en panel web:
         └─> Cambia estado a "completed"
                  │
                  ├─> Notificación a Juan: "Trabajo completado. Por favor valora"
                  └─> Notificación a María: "Trabajo completado. Por favor valora"
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                 FASE 6: VALORACIÓN MUTUA                    │
└─────────────────────────────────────────────────────────────┘

[Solicitante Juan]                    [Proveedor María]
    │                                       │
    ├─> Abre app, clica notificación       ├─> Abre app, clica notificación
    │                                       │
    ├─> Valora a María:                    ├─> Valora a Juan:
    │   ⭐⭐⭐⭐⭐ (5 estrellas)              │   ⭐⭐⭐⭐⭐ (5 estrellas)
    │   "Trabajo excelente, puntual         │   "Cliente serio, terreno bien
    │    y profesional. Muy recomendable"   │    preparado, pago puntual"
    │                                       │
    └─> Sistema:                           └─> Sistema:
         ├─> Actualiza rating María            ├─> Actualiza rating Juan
         │   4.6 → 4.8                         │   4.4 → 4.5
         ├─> Incrementa completed_jobs         ├─> Incrementa completed_jobs
         │   María: 11 → 12                    │   Juan: 7 → 8
         └─> Ejecuta asignación badges         └─> Ejecuta asignación badges
              │                                      │
              ├─> María gana "Proveedor Experto"   ├─> Juan mantiene "Solicitante Frecuente"
              └─> María mantiene "Puntual"         └─> Juan gana "Puntual"
                       │                                    │
                       └────────────┬───────────────────────┘
                                    │
                           ✅ FLUJO COMPLETADO
```

---

### 10.2 Diagrama de Estados de Trabajo

```
                    ┌──────────────┐
                    │  PUBLISHED   │ ← Trabajo recién creado
                    └──────┬───────┘
                           │
                           │ Primera aplicación recibida
                           │
                    ┌──────▼───────┐
                    │  SELECTING   │ ← Recibiendo aplicaciones
                    └──────┬───────┘
                           │
                           │ Solicitante selecciona proveedor
                           │
                    ┌──────▼───────┐
                    │  ASSIGNED    │ ← Admin coordina (WhatsApp/teléfono)
                    └──────┬───────┘
                           │
                           │ Admin cambia tras acordar inicio
                           │
                    ┌──────▼───────┐
                    │ IN_PROGRESS  │ ← Trabajo en realización
                    └──────┬───────┘
                           │
                           │ Admin cambia tras finalizar
                           │
                    ┌──────▼───────┐
                    │  COMPLETED   │ ← Trabajo terminado, pendiente valoraciones
                    └──────────────┘
                           │
                           │ Ambas partes valoran
                           │
                           ✅ Flujo completado

Camino alternativo desde cualquier estado:
                    ┌──────────────┐
                    │  CANCELLED   │ ← Solicitante o admin cancelan
                    └──────────────┘
```

---

### 10.3 Flujo de Notificaciones Push

```
┌─────────────────────────────────────────────────────────────┐
│           TIPO 1: Nuevo trabajo en tu área                  │
└─────────────────────────────────────────────────────────────┘

Evento: Trabajo publicado
    │
    ├─> Sistema consulta usuarios que cumplen:
    │   - Categoría del trabajo en preferred_categories del usuario
    │   - Usuario.province = Trabajo.province
    │   - Usuario NO es creador del trabajo
    │
    ├─> Sistema genera notificación para cada usuario:
    │   Título (ES): "Nuevo trabajo de [categoría] en [provincia]"
    │   Título (CA): "Nova feina de [categoria] a [província]"
    │   Cuerpo (ES): "[Pseudónimo] necesita [categoría]. Presupuesto: [precio estimado]"
    │   Data: { job_id, category_id }
    │
    └─> Sistema envía vía FCM
         └─> Usuario clica → App abre detalles del trabajo

┌─────────────────────────────────────────────────────────────┐
│           TIPO 2: Aplicación recibida                       │
└─────────────────────────────────────────────────────────────┘

Evento: Proveedor aplica a trabajo
    │
    ├─> Sistema genera notificación para solicitante:
    │   Título (ES): "Nueva aplicación en tu trabajo"
    │   Título (CA): "Nova sol·licitud a la teva feina"
    │   Cuerpo (ES): "[Pseudónimo proveedor] ha aplicado a "[título trabajo]". Precio: [precio propuesto]"
    │   Data: { job_id, application_id }
    │
    └─> Sistema envía vía FCM
         └─> Usuario clica → App abre lista de aplicaciones del trabajo

┌─────────────────────────────────────────────────────────────┐
│           TIPO 3: Aplicación aceptada                       │
└─────────────────────────────────────────────────────────────┘

Evento: Solicitante selecciona proveedor
    │
    ├─> Sistema genera notificación para proveedor seleccionado:
    │   Título (ES): "¡Tu aplicación fue aceptada!"
    │   Título (CA): "La teva sol·licitud ha estat acceptada!"
    │   Cuerpo (ES): "El solicitante te ha seleccionado para "[título trabajo]". Nuestro equipo te contactará pronto."
    │   Data: { job_id, application_id }
    │
    └─> Sistema envía vía FCM
         └─> Usuario clica → App abre detalles del trabajo

┌─────────────────────────────────────────────────────────────┐
│           TIPO 4: Cambio de estado del trabajo              │
└─────────────────────────────────────────────────────────────┘

Evento: Admin cambia estado (assigned → in_progress → completed)
    │
    ├─> Sistema genera notificaciones para solicitante Y proveedor:
    │
    │   Si estado = "in_progress":
    │   Título (ES): "Tu trabajo ha iniciado"
    │   Título (CA): "La teva feina ha començat"
    │   Cuerpo (ES): "El trabajo "[título]" está ahora en progreso"
    │
    │   Si estado = "completed":
    │   Título (ES): "Tu trabajo se completó"
    │   Título (CA): "La teva feina s'ha completat"
    │   Cuerpo (ES): "El trabajo "[título]" ha finalizado. Por favor valora la experiencia"
    │
    │   Data: { job_id }
    │
    └─> Sistema envía vía FCM
         └─> Usuario clica → App abre detalles del trabajo
```

---

### 10.4 Flujo de Asignación de Badges

```
Evento: Trabajo completado O Nueva valoración recibida
    │
    ├─> Sistema ejecuta función assign_badges_to_user(user_id)
    │
    ├─> Consulta stats del usuario:
    │   - completed_jobs_count
    │   - rating_avg
    │   - cancelled_jobs_count
    │
    ├─> Evalúa umbrales:
    │
    │   ┌─────────────────────────────────────────────┐
    │   │ Badge: Proveedor Verificado                 │
    │   │ Condición: completed_jobs >= 1 AND rating > 3.5 │
    │   └─────────────────────────────────────────────┘
    │        │
    │        ├─> Si cumple Y no tiene badge → ASIGNAR
    │        └─> Si no cumple → No hacer nada
    │
    │   ┌─────────────────────────────────────────────┐
    │   │ Badge: Proveedor Experto                    │
    │   │ Condición: completed_jobs >= 5 AND rating > 4.0 │
    │   └─────────────────────────────────────────────┘
    │        │
    │        ├─> Si cumple Y no tiene badge → ASIGNAR
    │        └─> Si no cumple → No hacer nada
    │
    │   ┌─────────────────────────────────────────────┐
    │   │ Badge: Proveedor Elite                      │
    │   │ Condición: completed_jobs >= 20 AND rating > 4.5 │
    │   └─────────────────────────────────────────────┘
    │        │
    │        ├─> Si cumple Y no tiene badge → ASIGNAR
    │        └─> Si no cumple → No hacer nada
    │
    │   ┌─────────────────────────────────────────────┐
    │   │ Badge: Solicitante Frecuente                │
    │   │ Condición: COUNT(jobs published) >= 3       │
    │   └─────────────────────────────────────────────┘
    │        │
    │        ├─> Si cumple Y no tiene badge → ASIGNAR
    │        └─> Si no cumple → No hacer nada
    │
    │   ┌─────────────────────────────────────────────┐
    │   │ Badge: Puntual                              │
    │   │ Condición: (trabajos en plazo / total) > 0.9│
    │   └─────────────────────────────────────────────┘
    │        │
    │        ├─> Si cumple Y no tiene badge → ASIGNAR
    │        └─> Si no cumple → No hacer nada
    │
    └─> Badges asignados aparecen en perfil inmediatamente
```

---

### 10.5 Flujo de Sistema de Confianza Progresiva

```
Evento: Usuario intenta publicar trabajo
    │
    ├─> Sistema consulta stats del usuario:
    │   - completed_jobs_count
    │   - cancelled_jobs_count
    │   - rating_avg
    │   - COUNT(trabajos activos actuales)
    │
    ├─> Evalúa categoría de usuario:
    │
    │   ┌───────────────────────────────────────┐
    │   │ Usuario NUEVO                         │
    │   │ completed_jobs_count = 0              │
    │   │ Límites: máx 2 trabajos activos       │
    │   └───────────────────────────────────────┘
    │        │
    │        ├─> Si trabajos activos < 2 → ✅ PERMITIR publicar
    │        ├─> Si trabajos activos >= 2 → ❌ RECHAZAR con mensaje
    │        │    "Has alcanzado el límite de 2 trabajos activos.
    │        │     Completa un trabajo para publicar más."
    │        │
    │        └─> Si canceló >1 trabajo:
    │             └─> Verificar si han pasado 7 días desde última cancelación
    │                  ├─> Si < 7 días → ❌ RECHAZAR con mensaje
    │                  │    "Debes esperar [X días restantes] antes de publicar otro trabajo"
    │                  └─> Si >= 7 días → ✅ PERMITIR
    │
    │   ┌───────────────────────────────────────┐
    │   │ Usuario CONSOLIDADO                   │
    │   │ completed_jobs_count >= 3             │
    │   │ Límites: máx 5 trabajos activos       │
    │   └───────────────────────────────────────┘
    │        │
    │        ├─> Si trabajos activos < 5 → ✅ PERMITIR publicar
    │        └─> Si trabajos activos >= 5 → ❌ RECHAZAR con mensaje
    │             "Has alcanzado el límite de 5 trabajos activos.
    │              Completa un trabajo para publicar más."
    │
    │   ┌───────────────────────────────────────┐
    │   │ Usuario SANCIONADO                    │
    │   │ rating_avg < 3.0 con 5+ trabajos      │
    │   │ O cancelled_jobs > 20% de publicados  │
    │   │ Límites: máx 1 trabajo activo         │
    │   └───────────────────────────────────────┘
    │        │
    │        ├─> Si trabajos activos < 1 → ⚠️ PERMITIR con revisión manual
    │        │    └─> Notificación a admin: "Usuario sancionado publicó trabajo. Revisar."
    │        │
    │        └─> Si trabajos activos >= 1 → ❌ RECHAZAR con mensaje
    │             "Tu cuenta está en revisión. Solo puedes tener 1 trabajo activo.
    │              Contacta con soporte para más información."
    │
    └─> Resultado: Trabajo publicado o error mostrado
```

---

## 11. MATRIZ DE TRAZABILIDAD

| Objetivo Negocio | Requisito Funcional | Caso de Uso | User Story | Regla Negocio |
|------------------|---------------------|-------------|------------|---------------|
| OB-01: Adopción Rápida | RF-001, RF-004 | CU-001, CU-002 | US-001, US-002 | RN-003, RN-004 |
| OB-02: Retención en Plataforma | RF-009, RF-012, RF-023 | CU-005, CU-006 | US-011, US-014 | RN-020, RN-055 |
| OB-03: Calidad mediante Reputación | RF-016, RF-017, RF-018 | CU-007 | US-015, US-016, US-017 | RN-029, RN-030 |
| OB-04: Eficiencia con Coordinación Manual | RF-023, RF-024 | CU-006 | US-012, US-013 | RN-021, RN-023 |
| OB-05: Escalabilidad de Costos | - | - | - | - |
| OF-01: Gestión Simplificada de Trabajos | RF-005, RF-006, RF-007, RF-008 | CU-003 | US-004, US-005, US-006, US-007 | RN-005 a RN-010 |
| OF-02: Aplicaciones Estructuradas | RF-010, RF-011, RF-012 | CU-004, CU-005 | US-009, US-010 | RN-011 a RN-017 |
| OF-03: Feed Inteligente | RF-008 | - | US-008 | RN-043 |
| OF-04: Protección de Identidades | RF-012, RF-023 | CU-005, CU-006 | US-011, US-012 | RN-020, RN-055 |
| OF-05: Reputación Progresiva | RF-017, RF-018 | - | US-015, US-016 | RN-030 a RN-036 |
| OF-06: Coordinación Admin Eficiente | RF-023, RF-024, RF-025 | CU-006, CU-010 | US-012, US-013, US-025 | RN-049, RN-050 |

---

## 12. CRITERIOS DE ACEPTACIÓN GLOBALES

### 12.1 Funcionalidad

- ✅ Todos los RF implementados según especificación
- ✅ Todos los CU ejecutables end-to-end
- ✅ Todas las RN validadas en backend
- ✅ Cero defectos críticos en producción
- ✅ <5 defectos menores por módulo

### 12.2 Usabilidad

- ✅ Onboarding completado por 80%+ de usuarios nuevos
- ✅ Tiempo para publicar primer trabajo < 5 minutos
- ✅ Tiempo para aplicar a trabajo < 3 minutos
- ✅ Satisfacción de usuario >4.0/5.0 en encuestas
- ✅ App funciona sin conexión (caché local)

### 12.3 Performance

- ✅ Tiempo de carga inicial < 3 segundos
- ✅ Respuesta API < 500ms (P95)
- ✅ Feed carga en < 2 segundos
- ✅ Subida de imágenes < 5 segundos (5 imágenes)
- ✅ Soporte de 1000 usuarios simultáneos sin degradación

### 12.4 Seguridad

- ✅ Autenticación JWT con refresh tokens
- ✅ HTTPS obligatorio en producción
- ✅ Rate limiting (100 req/min por usuario)
- ✅ Datos sensibles cifrados en DB
- ✅ Sin información sensible en logs
- ✅ Protección contra SQL injection (EF Core)
- ✅ Protección contra XSS (sanitización inputs)

### 12.5 Multiidioma

- ✅ 100% de strings traducidos ES + CA
- ✅ Detección automática de idioma según config dispositivo
- ✅ Cambio de idioma en tiempo real (sin reiniciar app)
- ✅ Notificaciones en idioma configurado del usuario

### 12.6 Compatibilidad

- ✅ iOS 13+ soportado
- ✅ Android 8.0+ soportado
- ✅ React Native con Expo (OTA updates)
- ✅ Panel admin funciona en Chrome, Safari, Firefox

### 12.7 Calidad de Código

- ✅ Cobertura de tests unitarios >70%
- ✅ Cobertura de tests de integración >50%
- ✅ Sin warnings en compilación
- ✅ Código sigue estándares C# (.NET) y TypeScript (React Native)
- ✅ Documentación técnica completa (este documento + swagger API)

---

**FIN DEL DOCUMENTO**

Este análisis funcional detallado guiará todo el desarrollo de la versión optimizada de la plataforma.
