# ANEXO III - ENTREGABLES Y CRONOGRAMA
## Proyecto AGRARIA - Agricultural Services Management Platform

**Versión:** 1.0
**Fecha:** Octubre 2025
**Duración Estimada Total:** 16-18 semanas
**Metodología:** Ágil con entregas iterativas

---

## TABLA DE CONTENIDOS

1. [Estructura del Proyecto](#1-estructura-del-proyecto)
2. [Fases y Duración](#2-fases-y-duración)
3. [Hitos de Facturación](#3-hitos-de-facturación)
4. [Cronograma Detallado por Fase](#4-cronograma-detallado-por-fase)
5. [Entregables por Fase](#5-entregables-por-fase)
6. [Criterios de Aceptación](#6-criterios-de-aceptación)
7. [Dependencias y Riesgos](#7-dependencias-y-riesgos)

---

## 1. ESTRUCTURA DEL PROYECTO

### 1.1 Componentes Principales

| Componente | Tecnología | Propósito |
|------------|-----------|-----------|
| **App Móvil** | React Native + Expo | Aplicación multiplataforma (iOS + Android) |
| **Backend API** | .NET 8 Web API | Servicios REST y lógica de negocio |
| **Base de Datos** | PostgreSQL | Almacenamiento persistente |
| **Panel Admin** | React Web | Gestión y coordinación administrativa |
| **Infraestructura** | Azure/AWS | Hosting, almacenamiento, notificaciones push |

### 1.2 Módulos Funcionales

- **Autenticación y Usuarios** (Email/Password + Google Sign-In)
- **Gestión de Trabajos** (Publicación, aplicaciones, estados)
- **Gestión de Maquinaria** (Catálogo personal)
- **Sistema de Aplicaciones** (Formularios estructurados)
- **Feed Inteligente** (Ordenamiento por relevancia)
- **Valoraciones y Reputación** (Badges, ratings)
- **Favoritos** (Trabajos y proveedores)
- **Notificaciones Push** (4 tipos críticos)
- **Panel de Administración** (Coordinación y reportes)

---

## 2. FASES Y DURACIÓN

### Resumen Ejecutivo

| Fase | Duración | Entregable Principal | % Proyecto |
|------|----------|---------------------|------------|
| **Fase 0: Preparación** | 1 semana | Infraestructura + Configuración inicial | 5% |
| **Fase 1: Core Backend** | 3 semanas | API con módulos fundamentales | 20% |
| **Fase 2: App Móvil Base** | 3 semanas | App con autenticación + navegación | 15% |
| **Fase 3: Gestión de Trabajos** | 3 semanas | Publicación + Aplicaciones + Estados | 25% |
| **Fase 4: Funcionalidades Avanzadas** | 2 semanas | Feed, Favoritos, Maquinaria | 15% |
| **Fase 5: Valoraciones y Reputación** | 2 semanas | Sistema completo de ratings y badges | 10% |
| **Fase 6: Panel Admin** | 1.5 semanas | Dashboard web de gestión | 5% |
| **Fase 7: UAT y Refinamiento** | 1.5 semanas | Testing, correcciones, ajustes | 5% |

**Total:** 16-18 semanas

---

## 3. HITOS DE FACTURACIÓN

Conforme a la cláusula 6.2 del contrato, se establecen los siguientes hitos:

### Hito 1: Demostración Funcional (30%)
**Momento:** Finalización de Fase 4
**Contenido:**
- Backend API operativa con endpoints principales
- App móvil funcional en ambientes de desarrollo
- Flujo completo: Registro → Publicar trabajo → Aplicar → Visualizar aplicaciones
- Base de datos con estructura completa
- Demostración en vivo de funcionalidades principales

**Criterio de pago:** Tras presentación exitosa al Cliente

---

### Hito 2: Versión Beta Completa (40%)
**Momento:** Finalización de Fase 6
**Contenido:**
- Todas las funcionalidades del Análisis Funcional implementadas
- App móvil disponible en TestFlight (iOS) y distribución interna (Android)
- Panel de administración web operativo
- Sistema de notificaciones push funcional
- Multiidioma completo (ES + CA)
- Documentación técnica preliminar

**Criterio de pago:** Tras entrega de versión Beta para UAT

---

### Hito 3: Entrega Final / Producción (30%)
**Momento:** Finalización de Fase 7
**Contenido:**
- Aplicación validada y aceptada por el Cliente
- Corrección de incidencias detectadas en UAT
- Apps publicadas en App Store y Google Play (proceso iniciado)
- Documentación técnica completa
- Manual de usuario
- Código fuente entregado
- Capacitación básica al equipo del Cliente

**Criterio de pago:** Tras aceptación final y puesta en producción

---

## 4. CRONOGRAMA DETALLADO POR FASE

### FASE 0: PREPARACIÓN E INFRAESTRUCTURA
**Duración:** 1 semana
**Responsable:** Equipo Técnico Proveedor

#### Actividades
- Configuración de repositorios Git (GitHub/Azure DevOps)
- Setup de entornos (Desarrollo, Preproducción, Producción)
- Infraestructura cloud (servidor, base de datos, almacenamiento)
- Creación de proyecto .NET 8 Web API
- Creación de proyecto React Native (Expo)
- Configuración de pipeline CI/CD básico
- Setup de herramientas de gestión (Jira/Trello + Slack/Teams)

#### Entregables
- Repositorios configurados
- Ambientes accesibles
- Base de datos PostgreSQL inicializada
- Proyecto móvil ejecutable (pantalla "Hello World")
- Proyecto backend ejecutable (endpoint /health)

---

### FASE 1: CORE BACKEND - API FUNDAMENTALES
**Duración:** 3 semanas
**Responsable:** Backend Developer + DevOps

#### Semana 1: Autenticación y Usuarios
**Funcionalidades:**
- Registro con Email + Password
- Login con JWT
- Integración Google Sign-In
- Modelo de datos Usuario completo
- CRUD de perfiles
- Sistema de pseudónimos automáticos

**Endpoints implementados:**
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/google-signin`
- `GET /api/users/me`
- `PUT /api/users/me`
- `GET /api/users/{id}/profile` (público con pseudónimo)

#### Semana 2: Trabajos y Categorías
**Funcionalidades:**
- CRUD de trabajos agrícolas
- 10 categorías simplificadas
- Gestión de estados del trabajo
- Ubicación por provincia + municipio
- Fechas flexibles (mes/año/duración)
- Calculadora de estimación de precios

**Endpoints implementados:**
- `POST /api/jobs`
- `GET /api/jobs` (feed con filtros)
- `GET /api/jobs/{id}`
- `PUT /api/jobs/{id}`
- `PATCH /api/jobs/{id}/status`
- `GET /api/categories`

#### Semana 3: Aplicaciones y Maquinaria
**Funcionalidades:**
- Sistema de aplicaciones estructuradas
- CRUD de maquinaria personal
- Vinculación maquinaria ↔ aplicaciones
- Selección de proveedor
- Rechazo automático de no seleccionados

**Endpoints implementados:**
- `POST /api/jobs/{id}/applications`
- `GET /api/jobs/{id}/applications`
- `PUT /api/applications/{id}/select`
- `POST /api/machinery`
- `GET /api/machinery/my-equipment`
- `PUT /api/machinery/{id}`
- `DELETE /api/machinery/{id}`

#### Entregables Fase 1
- ✅ API REST con 30+ endpoints documentados (Swagger)
- ✅ Autenticación JWT funcional
- ✅ Base de datos con 12+ tablas relacionadas
- ✅ Tests unitarios de servicios críticos
- ✅ Documentación API en Postman/Swagger

---

### FASE 2: APP MÓVIL BASE
**Duración:** 3 semanas
**Responsable:** Frontend Mobile Developer + UI/UX

#### Semana 1: Autenticación y Navegación
**Funcionalidades:**
- Pantallas de Login y Registro
- Integración Google Sign-In nativa
- Onboarding de 3 pasos (Bienvenida → Perfil → Intereses)
- Navegación principal (Tab Navigator)
- Gestión de estado global (Context API / Redux)
- Configuración multiidioma (ES + CA)

**Pantallas implementadas:**
- Splash Screen
- Login
- Registro
- Onboarding (3 pasos)
- Home (estructura vacía)

#### Semana 2: Perfiles y Configuración
**Funcionalidades:**
- Perfil público con pseudónimo
- Perfil privado editable
- Configuración de preferencias (categorías, idioma)
- Historial de actividad
- Visualización de badges y rating

**Pantallas implementadas:**
- Mi Perfil
- Editar Perfil
- Configuración
- Perfil Público de Otro Usuario
- Historial de Trabajos

#### Semana 3: Infraestructura Frontend
**Funcionalidades:**
- Cliente HTTP configurado (Axios)
- Gestión de tokens y refresh automático
- Manejo de errores centralizado
- Componentes reutilizables (botones, inputs, cards)
- Sistema de navegación completo
- Caché optimizado (React Query)

#### Entregables Fase 2
- ✅ App móvil ejecutable en iOS y Android
- ✅ Autenticación completa integrada con backend
- ✅ Navegación fluida entre secciones
- ✅ Diseño UI/UX consistente con guía de estilo
- ✅ Multiidioma operativo (ES + CA)

---

### FASE 3: GESTIÓN DE TRABAJOS (MÓDULO PRINCIPAL)
**Duración:** 3 semanas
**Responsable:** Full Team (Backend + Frontend)

#### Semana 1: Publicación de Trabajos
**Funcionalidades:**
- Formulario guiado de creación (5 pasos)
- Selección de categoría (10 opciones)
- Selección de ubicación (provincia + municipio, dropdowns)
- Fechas flexibles (selector mes/año + duración)
- Calculadora de precio orientativo
- Subida de imágenes (máx 5, compresión automática)
- Sugerencias contextuales

**Pantallas/Componentes:**
- Crear Trabajo (wizard multi-paso)
- Selector de Categoría
- Selector de Ubicación
- Selector de Fechas
- Galería de Imágenes
- Vista Previa antes de Publicar

#### Semana 2: Visualización y Aplicaciones
**Funcionalidades:**
- Feed inteligente con ordenamiento por relevancia
- Filtros (categoría, provincia, fechas, precio)
- Detalle de trabajo con toda la información
- Aplicar a trabajo (formulario estructurado)
- Selección de maquinaria del catálogo
- Visualización de aplicaciones recibidas (modo comparativo)

**Pantallas/Componentes:**
- Feed de Trabajos
- Detalle de Trabajo
- Formulario de Aplicación
- Mis Aplicaciones (enviadas)
- Aplicaciones Recibidas (comparativa)
- Selector de Maquinaria

#### Semana 3: Estados y Coordinación
**Funcionalidades:**
- Flujo de estados del trabajo
- Selección de proveedor con un clic
- Notificación de selección
- Cambio manual de estados (En progreso → Completado)
- Visualización de timeline del trabajo
- Integración con admin para coordinación

**Pantallas/Componentes:**
- Timeline de Estados
- Confirmación de Selección
- Panel de Coordinación (móvil)
- Mis Trabajos Activos
- Trabajos Completados

#### Entregables Fase 3
- ✅ Flujo completo: Publicar → Aplicar → Seleccionar → Coordinar
- ✅ Feed inteligente operativo con filtros
- ✅ Aplicaciones estructuradas funcionales
- ✅ Sistema de estados implementado
- ✅ Subida de imágenes con compresión

---

### FASE 4: FUNCIONALIDADES AVANZADAS
**Duración:** 2 semanas
**Responsable:** Full Team

#### Semana 1: Catálogo de Maquinaria y Favoritos
**Funcionalidades Backend:**
- CRUD completo de maquinaria
- Validación de especificaciones técnicas
- Sistema de favoritos (trabajos + proveedores)
- Límites de favoritos (máx 20 activos)

**Funcionalidades Frontend:**
- Gestión de catálogo de maquinaria personal
- Agregar/Editar/Eliminar máquinas
- Galería de imágenes de maquinaria (máx 5)
- Estado operativo (Activo/Inactivo)
- Lista de Favoritos (trabajos)
- Lista de Favoritos (proveedores)
- Botones de "Guardar en favoritos"

**Pantallas:**
- Mi Maquinaria
- Agregar Maquinaria
- Editar Maquinaria
- Detalle de Maquinaria
- Favoritos - Trabajos
- Favoritos - Proveedores

#### Semana 2: Feed Inteligente Optimizado
**Funcionalidades Backend:**
- Algoritmo de relevancia (categoría + ubicación + maquinaria + fecha)
- Caché de feed por usuario
- Paginación eficiente
- Marcadores de "compatibilidad con mi maquinaria"

**Funcionalidades Frontend:**
- Refresh pull-to-refresh
- Carga infinita (infinite scroll)
- Indicadores visuales de relevancia
- Destacado de trabajos compatibles
- Actualización en tiempo real (polling cada 30s)

#### Entregables Fase 4
- ✅ Catálogo de maquinaria operativo
- ✅ Sistema de favoritos funcional
- ✅ Feed inteligente optimizado con relevancia
- ✅ Experiencia de usuario fluida con carga progresiva

---

### FASE 5: VALORACIONES Y REPUTACIÓN
**Duración:** 2 semanas
**Responsable:** Backend + Frontend + QA

#### Semana 1: Sistema de Valoraciones
**Funcionalidades Backend:**
- Crear valoraciones bidireccionales obligatorias
- Validación de permisos (solo trabajos completados)
- Cálculo automático de rating promedio
- Restricciones (no editable tras envío)

**Funcionalidades Frontend:**
- Modal de valoración post-trabajo
- Rating con estrellas (1-5)
- Comentario corto obligatorio (20-200 chars)
- Visualización de valoraciones recibidas
- Historial completo de valoraciones

**Pantallas:**
- Modal Valorar Trabajo
- Mis Valoraciones Recibidas
- Valoraciones Dadas
- Valoraciones en Perfil Público

#### Semana 2: Sistema de Reputación y Badges
**Funcionalidades Backend:**
- Cálculo automático de badges (5 tipos)
- Sistema de confianza progresiva (límites variables)
- Contador de trabajos completados
- Validación de límites según reputación

**Funcionalidades Frontend:**
- Visualización de badges en perfil
- Animaciones al ganar badges
- Indicadores de progreso hacia badges
- Sistema de límites según reputación
- Notificación al ganar badge

**Badges implementados:**
- ✅ Proveedor Verificado (1+ trabajo, rating >3.5)
- ✅ Proveedor Experto (5+ trabajos, rating >4.0)
- ✅ Proveedor Elite (20+ trabajos, rating >4.5)
- ✅ Solicitante Frecuente (3+ trabajos publicados)
- ✅ Puntual (90%+ trabajos en plazo)

#### Entregables Fase 5
- ✅ Sistema de valoraciones bidireccionales operativo
- ✅ Badges automáticos funcionales
- ✅ Sistema de confianza progresiva activo
- ✅ Cálculo correcto de ratings promedio

---

### FASE 6: PANEL DE ADMINISTRACIÓN WEB
**Duración:** 1.5 semanas
**Responsable:** Frontend Web Developer + Backend

#### Sprint Único: Dashboard Completo
**Funcionalidades Backend:**
- Endpoints de administración protegidos
- Acceso a datos reales post-selección
- Cambio de estados manual
- Generación de reportes mensuales
- Gestión de usuarios sancionados
- Moderación de contenido

**Funcionalidades Frontend:**
- Login de admin
- Dashboard principal con métricas
- Lista de trabajos asignados pendientes
- Detalle de trabajo con datos reales (email, teléfono)
- Cambio de estados con confirmación
- Reportes mensuales (trabajos, aplicaciones, conversión, ratings)
- Gestión de usuarios (suspensión/reactivación)
- Moderación de contenido reportado

**Pantallas Web:**
- Login Admin
- Dashboard Principal
- Lista Trabajos Asignados
- Detalle Trabajo (coordinación)
- Reportes Mensuales
- Gestión de Usuarios
- Moderación de Contenido

#### Entregables Fase 6
- ✅ Panel web de administración operativo
- ✅ Coordinación manual funcional
- ✅ Acceso a datos reales post-selección
- ✅ Reportes mensuales automatizados
- ✅ Herramientas de moderación activas

---

### FASE 7: UAT, REFINAMIENTO Y PRODUCCIÓN
**Duración:** 1.5 semanas
**Responsable:** QA + Full Team

#### Semana 1: Testing y Correcciones
**Actividades:**
- Pruebas de aceptación del Cliente (UAT)
- Detección y documentación de incidencias
- Priorización de bugs (bloqueante/crítico/menor)
- Corrección de incidencias bloqueantes y críticas
- Ajustes de UX/UI según feedback
- Optimización de rendimiento

#### Semana 1.5: Preparación para Producción
**Actividades:**
- Revisión final de código
- Tests de regresión completos
- Configuración de entorno productivo
- Migración de base de datos a producción
- Setup de notificaciones push (APNS + FCM)
- Configuración de almacenamiento cloud definitivo
- Documentación técnica completa
- Manual de usuario
- Video tutorial básico

**Entregables Finales:**
- ✅ Aplicación estable sin bugs críticos
- ✅ Apps compiladas para distribución
- ✅ Proceso de publicación iniciado (App Store + Google Play)
- ✅ Documentación técnica completa
- ✅ Manual de usuario en ES y CA
- ✅ Código fuente entregado
- ✅ Capacitación básica al Cliente

---

## 5. ENTREGABLES POR FASE

### Documentación Técnica
- **Fase 1:** Documentación API (Swagger/Postman)
- **Fase 2:** Guía de instalación y configuración móvil
- **Fase 6:** Manual de administrador
- **Fase 7:** Documentación completa consolidada

### Entregables de Código
- **Todas las fases:** Código en repositorio con commits descriptivos
- **Fase 7:** Código fuente completo exportado

### Entregables de Testing
- **Fase 1:** Tests unitarios backend (cobertura >70%)
- **Fase 3:** Tests de integración E2E (flujos críticos)
- **Fase 7:** Reporte de testing completo + casos de prueba

### Entregables de Infraestructura
- **Fase 0:** Ambientes configurados y accesibles
- **Fase 7:** Ambiente productivo operativo

---

## 6. CRITERIOS DE ACEPTACIÓN

### Generales (Todas las Fases)
- ✅ Código funcional sin errores críticos
- ✅ Cumple especificaciones del Análisis Funcional
- ✅ Compatible con iOS 14+ y Android 9+
- ✅ Tiempos de respuesta API <500ms (promedio)
- ✅ Multiidioma completo (ES + CA)
- ✅ Responsive en diferentes tamaños de pantalla

### Específicos del Hito 1 (30%)
- ✅ Demostración en vivo exitosa
- ✅ Flujo completo ejecutable: Registro → Trabajo → Aplicación
- ✅ Backend con endpoints principales operativos
- ✅ App instalable en dispositivos de prueba

### Específicos del Hito 2 (40%)
- ✅ Todas las funcionalidades del Análisis Funcional implementadas
- ✅ App disponible en TestFlight (iOS) y distribución interna (Android)
- ✅ Panel de administración accesible y funcional
- ✅ Sistema de notificaciones push operativo
- ✅ Sin bugs bloqueantes conocidos

### Específicos del Hito 3 (30%)
- ✅ Cliente acepta formalmente la entrega
- ✅ Incidencias de UAT corregidas
- ✅ Documentación completa entregada
- ✅ Proceso de publicación en stores iniciado
- ✅ Capacitación básica completada

---

## 7. DEPENDENCIAS Y RIESGOS

### Dependencias del Cliente

| Dependencia | Fase Afectada | Impacto en Cronograma |
|-------------|---------------|----------------------|
| **Aprobación de diseños UI/UX** | Fase 2 | +1-2 semanas si demora |
| **Validación de categorías y textos** | Fase 1 | +3-5 días si demora |
| **Feedback en UAT** | Fase 7 | +1 semana si demora |
| **Credenciales cloud (Azure/AWS)** | Fase 0 | Bloquea inicio si no disponible |
| **Cuenta Apple Developer** | Fase 7 | Bloquea publicación iOS si no disponible |
| **Cuenta Google Play Developer** | Fase 7 | Bloquea publicación Android si no disponible |

### Dependencias Técnicas

| Dependencia | Mitigación |
|-------------|-----------|
| **API de Google Sign-In** | Configurar claves desde Fase 0 |
| **Servicios de notificaciones push** | Setup APNS + FCM en Fase 0 |
| **Almacenamiento de imágenes** | Configurar bucket cloud en Fase 0 |
| **Servidor de base de datos** | Provisionar PostgreSQL managed en Fase 0 |

### Riesgos Identificados

| Riesgo | Probabilidad | Impacto | Plan de Mitigación |
|--------|--------------|---------|-------------------|
| **Retrasos en aprobación de diseño** | Media | Alto | Presentar mockups tempranos para feedback rápido |
| **Complejidad del algoritmo de relevancia** | Baja | Medio | Implementar versión simple primero, iterar después |
| **Problemas con notificaciones push** | Media | Medio | Reservar tiempo extra en Fase 7 para ajustes |
| **Cambios de alcance solicitados** | Alta | Alto | Documentar como CR (Anexo IV), requiere adenda |
| **Demoras en validación UAT** | Media | Alto | Establecer plazo máximo 10 días para feedback |
| **Rechazo en App Store/Google Play** | Baja | Alto | Seguir guidelines estrictas, revisión previa a envío |

### Supuestos Clave

1. El Cliente proporcionará feedback en plazos acordados (máx 10 días)
2. Las credenciales cloud estarán disponibles en Fase 0
3. No habrá cambios sustanciales de alcance durante desarrollo
4. El Proveedor tendrá acceso a dispositivos iOS y Android para pruebas
5. El Cliente tiene cuentas de desarrollador activas (Apple + Google)

---

## RESUMEN DE HITOS Y PAGOS

| Hito | Fase | Semana | Entregable | % Pago | Acumulado |
|------|------|--------|-----------|--------|-----------|
| **Kickoff** | 0 | 0 | Infraestructura lista | - | 0% |
| **Demostración Funcional** | 4 | 10 | App + Backend operativos con flujo completo | 30% | 30% |
| **Versión Beta Completa** | 6 | 15 | Todas funcionalidades + Panel Admin | 40% | 70% |
| **Entrega Final** | 7 | 17 | Producción + Documentación + Capacitación | 30% | 100% |

---

## CONTACTO Y COORDINACIÓN

### Reuniones Programadas
- **Kickoff:** Inicio de Fase 0
- **Semanales:** Cada lunes 10:00h (revisión de avances)
- **Demostración Funcional:** Fin de Fase 4 (acordar fecha)
- **Presentación Beta:** Fin de Fase 6 (acordar fecha)
- **Entrega Final:** Fin de Fase 7 (acordar fecha)

### Canales de Comunicación
- **Email:** Para comunicaciones formales y cambios
- **Mensajería:** Para coordinación diaria (Slack/WhatsApp/Teams)
- **Videollamadas:** Para reuniones de seguimiento (Zoom/Meet/Teams)

---

**Última actualización:** Octubre 2025
**Próxima revisión:** Tras finalización de cada fase

---

© 2025 CODELIO S.L. - Proyecto AGRARIA
