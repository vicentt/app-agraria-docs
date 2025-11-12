# ANEXO III - ENTREGABLES Y CRONOGRAMA
## Proyecto AGRARIA - Agricultural Services Management Platform

**Versión:** 1.1
**Fecha:** Octubre 2025
**Duración Estimada Total:** 26-30 semanas (6-7.5 meses)
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
| **Diseño UI/UX** | Figma / Papel | Wireframes y guía de estilo visual |
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
| **Fase 0: Preparación** | 1 semana | Infraestructura + Configuración inicial | 3% |
| **Fase 1: Diseño UI/UX** | 2 semanas | Wireframes y Guía de Estilo Visual | 7% |
| **Fase 2: Core Backend** | 4 semanas | API con módulos fundamentales | 15% |
| **Fase 3: App Móvil Base** | 4 semanas | App con autenticación + navegación | 14% |
| **Fase 4: Gestión de Trabajos** | 5 semanas | Publicación + Aplicaciones + Estados | 18% |
| **Fase 5: Funcionalidades Avanzadas** | 3 semanas | Feed, Favoritos, Maquinaria | 11% |
| **Fase 6: Valoraciones y Reputación** | 3 semanas | Sistema completo de ratings y badges | 11% |
| **Fase 7: Panel Admin** | 2 semanas | Dashboard web de gestión | 7% |
| **Fase 8: UAT y Refinamiento** | 4 semanas | Testing, correcciones, producción | 14% |

**Total:** 28 semanas (~7 meses)

---

## 3. HITOS DE FACTURACIÓN

Conforme a la cláusula 6.2 del contrato, se establecen los siguientes hitos:

### Hito 1: Demostración Funcional (30%)
**Momento:** Finalización de Fase 5
**Contenido:**
- Diseño UI/UX completo y aprobado
- Backend API operativa con endpoints principales
- App móvil funcional con diseño implementado
- Flujo completo: Registro → Publicar trabajo → Aplicar → Visualizar aplicaciones
- Feed inteligente operativo
- Sistema de favoritos funcional
- Catálogo de maquinaria implementado
- Base de datos con estructura completa
- Demostración en vivo de funcionalidades principales

**Criterio de pago:** Tras presentación exitosa al Cliente

---

### Hito 2: Versión Beta Completa (40%)
**Momento:** Finalización de Fase 7
**Contenido:**
- Todas las funcionalidades del Análisis Funcional implementadas
- Sistema de valoraciones y reputación operativo
- Badges automáticos funcionales
- App móvil disponible en TestFlight (iOS) y distribución interna (Android)
- Panel de administración web operativo
- Sistema de notificaciones push funcional
- Multiidioma completo (ES + CA)
- Documentación técnica preliminar

**Criterio de pago:** Tras entrega de versión Beta para UAT

---

### Hito 3: Entrega Final / Producción (30%)
**Momento:** Finalización de Fase 8
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
- Preparación de herramientas de diseño (Figma/Sketch o alternativas)

#### Entregables
- ✅ Repositorios configurados
- ✅ Ambientes accesibles
- ✅ Base de datos PostgreSQL inicializada
- ✅ Proyecto móvil ejecutable (pantalla "Hello World")
- ✅ Proyecto backend ejecutable (endpoint /health)
- ✅ Herramientas de diseño preparadas

---

### FASE 1: DISEÑO UI/UX
**Duración:** 2 semanas
**Responsable:** UI/UX Designer + Product Owner

#### Semana 1: Wireframes y Flujos de Usuario
**Actividades:**
- Análisis del público objetivo (agricultores, proveedores)
- Definición de flujos de usuario principales
- Creación de wireframes de baja fidelidad
- Arquitectura de información
- Mapa de navegación completo

**Pantallas diseñadas (wireframes):**
- Onboarding (3 pantallas)
- Autenticación (Login, Registro)
- Home / Feed de Trabajos
- Publicar Trabajo (wizard 5 pasos)
- Detalle de Trabajo
- Aplicar a Trabajo
- Perfil Usuario
- Gestión de Maquinaria
- Favoritos
- Panel de Administración (versión web)

#### Semana 2: Guía de Estilo Visual
**Actividades:**
- Definición de paleta de colores (tonos verdes/tierra para sector agrícola)
- Selección de tipografías (legibilidad en campo, pantallas soleadas)
- Especificación de logos y marca visual
- Definición de iconografía básica
- Documentación de espaciados y tamaños
- Especificación de componentes visuales básicos (botones, inputs, cards)
- **Sesión de aprobación con Cliente**

**Entregables Fase 1:**
- ✅ Wireframes completos de 40+ pantallas principales
- ✅ Guía de estilo visual (colores, tipografías, logos)
- ✅ Especificación de componentes básicos
- ✅ Documentación de marca y diseño visual
- ✅ **Aprobación del Cliente documentada**

#### Dependencia Crítica
⚠️ **El desarrollo móvil (Fase 3) no puede iniciar sin la aprobación del Cliente de los diseños**. Cualquier demora en feedback bloquea el proyecto.

---

### FASE 2: CORE BACKEND - API FUNDAMENTALES
**Duración:** 4 semanas
**Responsable:** Backend Developer + DevOps

#### Semana 1-2: Autenticación y Usuarios
**Funcionalidades:**
- Registro con Email + Password
- Login con JWT
- Integración Google Sign-In
- Modelo de datos Usuario completo
- CRUD de perfiles
- Sistema de pseudónimos automáticos
- Gestión de preferencias (categorías, idioma)

**Endpoints implementados:**
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/google-signin`
- `POST /api/auth/refresh-token`
- `GET /api/users/me`
- `PUT /api/users/me`
- `GET /api/users/{id}/profile` (público con pseudónimo)
- `PUT /api/users/preferences`

#### Semana 2-3: Trabajos y Categorías
**Funcionalidades:**
- CRUD de trabajos agrícolas
- 10 categorías simplificadas
- Gestión de estados del trabajo
- Ubicación por provincia + municipio
- Fechas flexibles (mes/año/duración)
- Calculadora de estimación de precios
- Sistema de imágenes (subida, compresión, almacenamiento)

**Endpoints implementados:**
- `POST /api/jobs`
- `GET /api/jobs` (feed con filtros)
- `GET /api/jobs/{id}`
- `PUT /api/jobs/{id}`
- `PATCH /api/jobs/{id}/status`
- `DELETE /api/jobs/{id}`
- `GET /api/categories`
- `POST /api/jobs/{id}/images`
- `GET /api/jobs/price-estimate` (calculadora)

#### Semana 3-4: Aplicaciones y Maquinaria
**Funcionalidades:**
- Sistema de aplicaciones estructuradas
- CRUD de maquinaria personal
- Vinculación maquinaria ↔ aplicaciones
- Selección de proveedor
- Rechazo automático de no seleccionados
- Gestión de imágenes de maquinaria

**Endpoints implementados:**
- `POST /api/jobs/{id}/applications`
- `GET /api/jobs/{id}/applications`
- `PUT /api/applications/{id}/select`
- `POST /api/machinery`
- `GET /api/machinery/my-equipment`
- `PUT /api/machinery/{id}`
- `DELETE /api/machinery/{id}`
- `POST /api/machinery/{id}/images`

#### Entregables Fase 2
- ✅ API REST con 40+ endpoints documentados (Swagger)
- ✅ Autenticación JWT funcional con refresh tokens
- ✅ Base de datos con 15+ tablas relacionadas
- ✅ Tests unitarios de servicios críticos (cobertura >70%)
- ✅ Documentación API en Postman/Swagger
- ✅ Sistema de almacenamiento de imágenes configurado

---

### FASE 3: APP MÓVIL BASE
**Duración:** 4 semanas
**Responsable:** Frontend Mobile Developer + UI/UX Designer

#### Semana 1: Setup y Autenticación
**Funcionalidades:**
- Implementación del Design System en React Native
- Componentes base reutilizables
- Pantallas de Login y Registro
- Integración Google Sign-In nativa
- Gestión de estado global (Context API / Redux)
- Configuración multiidioma (ES + CA)

**Pantallas implementadas:**
- Splash Screen
- Login
- Registro
- Configuración inicial

#### Semana 2: Onboarding y Navegación
**Funcionalidades:**
- Onboarding de 3 pasos
- Navegación principal (Tab Navigator)
- Drawer/Sidebar menu
- Gestión de sesiones
- Logout y refresh token automático

**Pantallas implementadas:**
- Onboarding (3 pasos: Bienvenida → Perfil → Intereses)
- Home (estructura vacía)
- Navegación bottom tabs
- Menú lateral

#### Semana 3: Perfiles y Configuración
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

#### Semana 4: Infraestructura Frontend
**Funcionalidades:**
- Cliente HTTP configurado (Axios)
- Gestión de tokens y refresh automático
- Manejo de errores centralizado
- Sistema de navegación completo
- Caché optimizado (React Query)
- Componentes de carga y error
- Optimización de rendimiento

#### Entregables Fase 3
- ✅ App móvil ejecutable en iOS y Android
- ✅ Design System implementado consistentemente
- ✅ Autenticación completa integrada con backend
- ✅ Navegación fluida entre secciones
- ✅ Diseño UI/UX implementado según wireframes y guía de estilo aprobados
- ✅ Multiidioma operativo (ES + CA)
- ✅ Gestión de estado y caché configurada

---

### FASE 4: GESTIÓN DE TRABAJOS (MÓDULO PRINCIPAL)
**Duración:** 5 semanas
**Responsable:** Full Team (Backend + Frontend)

#### Semana 1-2: Publicación de Trabajos
**Funcionalidades:**
- Formulario guiado de creación (5 pasos)
- Selección de categoría (10 opciones)
- Selección de ubicación (provincia + municipio, dropdowns)
- Fechas flexibles (selector mes/año + duración)
- Calculadora de precio orientativo integrada
- Subida de imágenes (máx 5, compresión automática)
- Sugerencias contextuales
- Vista previa antes de publicar

**Pantallas/Componentes:**
- Crear Trabajo (wizard multi-paso)
- Selector de Categoría
- Selector de Ubicación
- Selector de Fechas
- Galería de Imágenes con cámara
- Calculadora de Precio
- Vista Previa antes de Publicar

#### Semana 2-3: Visualización y Aplicaciones
**Funcionalidades:**
- Feed inteligente con ordenamiento por relevancia
- Filtros (categoría, provincia, fechas, precio)
- Detalle de trabajo con toda la información
- Aplicar a trabajo (formulario estructurado)
- Selección de maquinaria del catálogo
- Visualización de aplicaciones recibidas (modo comparativo)
- Gestión de trabajos publicados

**Pantallas/Componentes:**
- Feed de Trabajos con filtros
- Detalle de Trabajo (vista completa)
- Formulario de Aplicación
- Mis Aplicaciones (enviadas)
- Aplicaciones Recibidas (comparativa)
- Selector de Maquinaria (multi-select)
- Mis Trabajos Publicados

#### Semana 4-5: Estados y Coordinación
**Funcionalidades:**
- Flujo de estados del trabajo (6 estados)
- Selección de proveedor con un clic
- Notificación de selección (push + in-app)
- Cambio manual de estados
- Visualización de timeline del trabajo
- Integración con admin para coordinación
- Cancelación de trabajos con motivo

**Pantallas/Componentes:**
- Timeline de Estados del Trabajo
- Modal Confirmación de Selección
- Panel de Coordinación (vista móvil)
- Mis Trabajos Activos
- Trabajos Completados
- Detalle de Aplicación Seleccionada

#### Entregables Fase 4
- ✅ Flujo completo: Publicar → Aplicar → Seleccionar → Coordinar
- ✅ Feed inteligente operativo con filtros avanzados
- ✅ Aplicaciones estructuradas funcionales
- ✅ Sistema de estados implementado
- ✅ Subida de imágenes con compresión y preview
- ✅ Calculadora de precios integrada
- ✅ Notificaciones push configuradas

---

### FASE 5: FUNCIONALIDADES AVANZADAS
**Duración:** 3 semanas
**Responsable:** Full Team

#### Semana 1-1.5: Catálogo de Maquinaria
**Funcionalidades Backend:**
- CRUD completo de maquinaria
- Validación de especificaciones técnicas
- Gestión de estado operativo

**Funcionalidades Frontend:**
- Gestión de catálogo de maquinaria personal
- Agregar/Editar/Eliminar máquinas
- Galería de imágenes de maquinaria (máx 5)
- Estado operativo (Activo/Inactivo)
- Especificaciones técnicas detalladas
- Historial de uso en trabajos

**Pantallas:**
- Mi Maquinaria (lista)
- Agregar Maquinaria (formulario)
- Editar Maquinaria
- Detalle de Maquinaria
- Historial de Maquinaria

#### Semana 1.5-2: Sistema de Favoritos
**Funcionalidades Backend:**
- CRUD de favoritos (trabajos + proveedores)
- Límites de favoritos (máx 20 activos)
- Notificaciones de trabajos favoritos

**Funcionalidades Frontend:**
- Lista de Favoritos (trabajos)
- Lista de Favoritos (proveedores)
- Botones de "Guardar en favoritos"
- Gestión de favoritos (eliminar)
- Notificaciones cuando favoritos tienen actualizaciones

**Pantallas:**
- Favoritos - Trabajos
- Favoritos - Proveedores
- Detalle de Proveedor Favorito

#### Semana 2-3: Feed Inteligente Optimizado
**Funcionalidades Backend:**
- Algoritmo de relevancia (categoría + ubicación + maquinaria + fecha)
- Caché de feed por usuario
- Paginación eficiente
- Marcadores de "compatibilidad con mi maquinaria"
- Sistema de recomendaciones

**Funcionalidades Frontend:**
- Refresh pull-to-refresh
- Carga infinita (infinite scroll)
- Indicadores visuales de relevancia
- Destacado de trabajos compatibles
- Badges de "Recomendado para ti"
- Actualización en tiempo real (polling cada 30s)
- Filtros avanzados persistentes

#### Entregables Fase 5
- ✅ Catálogo de maquinaria operativo y completo
- ✅ Sistema de favoritos funcional con límites
- ✅ Feed inteligente optimizado con relevancia
- ✅ Algoritmo de recomendaciones implementado
- ✅ Experiencia de usuario fluida con carga progresiva
- ✅ Notificaciones contextuales activas

---

### FASE 6: VALORACIONES Y REPUTACIÓN
**Duración:** 3 semanas
**Responsable:** Backend + Frontend + QA

#### Semana 1-1.5: Sistema de Valoraciones
**Funcionalidades Backend:**
- Crear valoraciones bidireccionales obligatorias
- Validación de permisos (solo trabajos completados)
- Cálculo automático de rating promedio
- Restricciones (no editable tras envío)
- Estadísticas de valoraciones

**Funcionalidades Frontend:**
- Modal de valoración post-trabajo
- Rating con estrellas (1-5)
- Comentario corto obligatorio (20-200 chars)
- Visualización de valoraciones recibidas
- Historial completo de valoraciones
- Estadísticas personales

**Pantallas:**
- Modal Valorar Trabajo
- Mis Valoraciones Recibidas
- Valoraciones Dadas
- Valoraciones en Perfil Público
- Estadísticas de Reputación

#### Semana 1.5-2.5: Sistema de Reputación y Badges
**Funcionalidades Backend:**
- Cálculo automático de badges (5 tipos)
- Sistema de confianza progresiva (límites variables)
- Contador de trabajos completados
- Validación de límites según reputación
- Algoritmo de detección de puntualidad

**Funcionalidades Frontend:**
- Visualización de badges en perfil
- Animaciones al ganar badges
- Indicadores de progreso hacia badges
- Sistema de límites según reputación
- Notificación al ganar badge
- Tooltip explicativo de cada badge

**Badges implementados:**
- ✅ Proveedor Verificado (1+ trabajo, rating >3.5)
- ✅ Proveedor Experto (5+ trabajos, rating >4.0)
- ✅ Proveedor Elite (20+ trabajos, rating >4.5)
- ✅ Solicitante Frecuente (3+ trabajos publicados)
- ✅ Puntual (90%+ trabajos en plazo)

#### Semana 2.5-3: Testing y Ajustes
**Actividades:**
- Tests de integración del sistema de valoraciones
- Validación de cálculos de reputación
- Ajustes de algoritmos según feedback
- Optimización de rendimiento
- Corrección de bugs menores

#### Entregables Fase 6
- ✅ Sistema de valoraciones bidireccionales operativo
- ✅ Badges automáticos funcionales con animaciones
- ✅ Sistema de confianza progresiva activo
- ✅ Cálculo correcto de ratings promedio
- ✅ Límites variables según reputación implementados
- ✅ Tests de integración completos

---

### FASE 7: PANEL DE ADMINISTRACIÓN WEB
**Duración:** 2 semanas
**Responsable:** Frontend Web Developer + Backend

#### Semana 1: Backend Admin y Dashboard Base
**Funcionalidades Backend:**
- Endpoints de administración protegidos
- Acceso a datos reales post-selección
- Cambio de estados manual
- Generación de reportes mensuales
- Gestión de usuarios sancionados
- Moderación de contenido
- Logs de auditoría

**Funcionalidades Frontend:**
- Login de admin
- Dashboard principal con métricas
- Gráficos de actividad
- KPIs principales

**Pantallas Web:**
- Login Admin
- Dashboard Principal con gráficos

#### Semana 2: Coordinación y Herramientas Admin
**Funcionalidades Frontend:**
- Lista de trabajos asignados pendientes
- Detalle de trabajo con datos reales (email, teléfono)
- Cambio de estados con confirmación
- Reportes mensuales (trabajos, aplicaciones, conversión, ratings)
- Gestión de usuarios (suspensión/reactivación)
- Moderación de contenido reportado
- Envío de notificaciones manuales
- Exportación de datos (CSV/Excel)

**Pantallas Web:**
- Lista Trabajos Asignados (tabla filtrable)
- Detalle Trabajo (coordinación)
- Reportes Mensuales (gráficos + tablas)
- Gestión de Usuarios (búsqueda + acciones)
- Moderación de Contenido (cola de revisión)
- Notificaciones Manuales
- Configuración del Sistema

#### Entregables Fase 7
- ✅ Panel web de administración operativo
- ✅ Coordinación manual funcional
- ✅ Acceso a datos reales post-selección
- ✅ Reportes mensuales automatizados con gráficos
- ✅ Herramientas de moderación activas
- ✅ Sistema de logs de auditoría
- ✅ Exportación de datos implementada

---

### FASE 8: UAT, REFINAMIENTO Y PRODUCCIÓN
**Duración:** 4 semanas
**Responsable:** QA + Full Team

#### Semana 1-2: Testing de Aceptación del Usuario (UAT)
**Actividades:**
- Entrega formal de versión Beta al Cliente
- Creación de cuentas de prueba con datos reales simulados
- Pruebas exhaustivas del Cliente (UAT)
- Documentación de incidencias en sistema de tracking
- Priorización de bugs (bloqueante/crítico/menor)
- Reuniones diarias de seguimiento
- Corrección de incidencias bloqueantes y críticas
- Retesting de correcciones

**Criterios de validación:**
- ✅ Todos los flujos principales funcionales
- ✅ Sin bugs bloqueantes
- ✅ <5 bugs críticos pendientes
- ✅ Diseño implementado según wireframes y guía de estilo
- ✅ Rendimiento aceptable (<2s carga de pantallas)

#### Semana 2-3: Refinamiento y Optimización
**Actividades:**
- Ajustes de UX/UI según feedback del Cliente
- Optimización de rendimiento (tiempos de carga)
- Mejora de animaciones y transiciones
- Revisión completa de textos multiidioma (ES + CA)
- Tests de regresión completos
- Auditoría de seguridad
- Optimización de base de datos (índices, queries)
- Configuración de caches y CDN

**Tests realizados:**
- ✅ Tests funcionales automatizados (E2E)
- ✅ Tests de rendimiento (carga, estrés)
- ✅ Tests de seguridad (penetración básica)
- ✅ Tests de compatibilidad (dispositivos, SO)
- ✅ Tests de accesibilidad básicos

#### Semana 3-4: Preparación para Producción y Go-Live
**Actividades:**
- Configuración de entorno productivo
- Migración de base de datos a producción
- Setup de notificaciones push (APNS + FCM) en producción
- Configuración de almacenamiento cloud definitivo
- Configuración de monitoreo y alertas (logs, métricas)
- Compilación de apps para distribución
- Envío a App Store y Google Play para revisión
- Documentación técnica completa
- Manual de usuario (ES + CA)
- Video tutorial básico
- Capacitación al equipo del Cliente (2 sesiones)

**Documentación entregada:**
- ✅ Manual técnico completo
- ✅ Manual de usuario (ES + CA)
- ✅ Guía de administrador del panel
- ✅ Documentación API actualizada
- ✅ Guía de despliegue y configuración
- ✅ Plan de contingencia y recuperación

**Entregables Finales Fase 8:**
- ✅ Aplicación estable sin bugs críticos
- ✅ Apps compiladas para distribución
- ✅ Proceso de publicación iniciado (App Store + Google Play)
- ✅ Entorno productivo operativo con monitoreo
- ✅ Documentación técnica completa
- ✅ Manual de usuario en ES y CA
- ✅ Video tutorial de 5-10 minutos
- ✅ Código fuente entregado (repositorio completo)
- ✅ Capacitación básica completada (2 sesiones grabadas)
- ✅ Plan de soporte post-lanzamiento definido

---

## 5. ENTREGABLES POR FASE

### Documentación Técnica
- **Fase 1:** Documentación de diseño (wireframes, guía de estilo visual)
- **Fase 2:** Documentación API (Swagger/Postman)
- **Fase 3:** Guía de instalación y configuración móvil
- **Fase 7:** Manual de administrador
- **Fase 8:** Documentación completa consolidada + videos

### Entregables de Diseño
- **Fase 1:** Wireframes + Guía de estilo visual (colores, tipografías, logos)

### Entregables de Código
- **Todas las fases:** Código en repositorio con commits descriptivos
- **Fase 8:** Código fuente completo exportado y empaquetado

### Entregables de Testing
- **Fase 2:** Tests unitarios backend (cobertura >70%)
- **Fase 4:** Tests de integración E2E (flujos críticos)
- **Fase 8:** Reporte de testing completo + casos de prueba + matriz de trazabilidad

### Entregables de Infraestructura
- **Fase 0:** Ambientes configurados y accesibles
- **Fase 8:** Ambiente productivo operativo con monitoreo

### Entregables de Capacitación
- **Fase 8:** Manual de usuario + Video tutorial + Sesiones de capacitación (grabadas)

---

## 6. CRITERIOS DE ACEPTACIÓN

### Generales (Todas las Fases)
- ✅ Código funcional sin errores críticos
- ✅ Cumple especificaciones del Análisis Funcional
- ✅ Diseño implementado según wireframes y guía de estilo aprobados
- ✅ Compatible con iOS 14+ y Android 9+
- ✅ Tiempos de respuesta API <500ms (promedio)
- ✅ Multiidioma completo (ES + CA)
- ✅ Responsive en diferentes tamaños de pantalla
- ✅ Accesibilidad básica implementada

### Específicos del Hito 1 (30%) - Fase 5
- ✅ Diseño UI/UX completo y aprobado por escrito
- ✅ Demostración en vivo exitosa
- ✅ Flujo completo ejecutable: Registro → Trabajo → Aplicación → Feed
- ✅ Backend con endpoints principales operativos y documentados
- ✅ App instalable en dispositivos de prueba (iOS + Android)
- ✅ Feed inteligente funcional con relevancia
- ✅ Sistema de favoritos operativo
- ✅ Catálogo de maquinaria completo
- ✅ Sin bugs bloqueantes conocidos

### Específicos del Hito 2 (40%) - Fase 7
- ✅ Todas las funcionalidades del Análisis Funcional implementadas
- ✅ Sistema de valoraciones y reputación operativo
- ✅ Badges automáticos funcionales
- ✅ App disponible en TestFlight (iOS) y distribución interna (Android)
- ✅ Panel de administración accesible y funcional
- ✅ Sistema de notificaciones push operativo (4 tipos)
- ✅ Reportes mensuales generándose correctamente
- ✅ Sin bugs bloqueantes conocidos
- ✅ Documentación técnica preliminar entregada

### Específicos del Hito 3 (30%) - Fase 8
- ✅ Cliente acepta formalmente la entrega (documento firmado)
- ✅ Incidencias de UAT corregidas (100% bloqueantes, 90% críticas)
- ✅ Documentación completa entregada (técnica + usuario)
- ✅ Video tutorial entregado (ES + CA)
- ✅ Proceso de publicación en stores iniciado
- ✅ Capacitación básica completada (mínimo 2 sesiones)
- ✅ Código fuente empaquetado y entregado
- ✅ Entorno productivo estable y monitoreado

---

## 7. DEPENDENCIAS Y RIESGOS

### Dependencias del Cliente

| Dependencia | Fase Afectada | Impacto en Cronograma | Criticidad |
|-------------|---------------|----------------------|------------|
| **Aprobación de diseños UI/UX** | Fase 1 → Fase 3 | +2-3 semanas si demora | 🔴 ALTA |
| **Feedback en reuniones semanales** | Todas | +1-2 días por reunión perdida | 🟡 MEDIA |
| **Validación de categorías y textos** | Fase 2 | +3-5 días si demora | 🟡 MEDIA |
| **Feedback en UAT** | Fase 8 | +2-4 semanas si demora | 🔴 ALTA |
| **Credenciales cloud (Azure/AWS)** | Fase 0 | Bloquea inicio si no disponible | 🔴 ALTA |
| **Cuenta Apple Developer** | Fase 8 | Bloquea publicación iOS (3-7 días trámite) | 🔴 ALTA |
| **Cuenta Google Play Developer** | Fase 8 | Bloquea publicación Android (1-3 días) | 🟡 MEDIA |
| **Contenido final (textos, imágenes)** | Fase 4 | +1 semana si no disponible | 🟡 MEDIA |

### Dependencias Técnicas

| Dependencia | Mitigación |
|-------------|-----------|
| **API de Google Sign-In** | Configurar claves desde Fase 0, validar en Fase 2 |
| **Servicios de notificaciones push** | Setup APNS + FCM en Fase 0, tests en Fase 4 |
| **Almacenamiento de imágenes** | Configurar bucket cloud en Fase 0, validar en Fase 2 |
| **Servidor de base de datos** | Provisionar PostgreSQL managed en Fase 0 |
| **Herramientas de diseño** | Figma/Sketch o alternativas disponibles desde Fase 0 |
| **Herramientas de testing** | Configurar TestFlight + Firebase App Distribution en Fase 3 |

### Riesgos Identificados

| Riesgo | Probabilidad | Impacto | Plan de Mitigación |
|--------|--------------|---------|-------------------|
| **Retrasos en aprobación de diseño** | Alta | Alto | Presentar wireframes early para feedback rápido, limitar iteraciones a 2 rondas |
| **Cambios de alcance solicitados** | Alta | Alto | Documentar como CR (Anexo IV), requiere adenda contractual, bloquear desarrollo hasta firma |
| **Complejidad del algoritmo de relevancia** | Media | Medio | Implementar versión simple primero (v1), iterar después (v2 post-lanzamiento) |
| **Problemas con notificaciones push** | Media | Medio | Reservar tiempo extra en Fase 8 para ajustes, plan B con notificaciones in-app |
| **Demoras en validación UAT** | Media | Alto | Establecer plazo máximo 10 días para feedback, penalizar demoras con extensión de plazo |
| **Rechazo en App Store/Google Play** | Media | Alto | Seguir guidelines estrictas, revisión previa interna, buffer de 2 semanas |
| **Rotación de personal** | Baja | Alto | Documentación continua, pair programming, conocimiento compartido |
| **Bugs críticos en producción** | Media | Alto | Plan de hotfix, monitoreo 24/7 primera semana, soporte dedicado |
| **Problemas de rendimiento** | Media | Medio | Tests de carga desde Fase 4, optimización continua, caches agresivos |
| **Incompatibilidades de dispositivos** | Baja | Medio | Testing en 10+ dispositivos reales, emuladores múltiples |

### Supuestos Clave

1. El Cliente proporcionará feedback en plazos acordados (máx 10 días hábiles)
2. Las credenciales cloud estarán disponibles en Fase 0
3. No habrá cambios sustanciales de alcance durante desarrollo (solo CR con adenda)
4. El Proveedor tendrá acceso a dispositivos iOS y Android para pruebas
5. El Cliente tiene cuentas de desarrollador activas (Apple + Google) o las tramitará en paralelo
6. El equipo del Proveedor permanecerá estable durante el proyecto
7. No habrá cambios disruptivos en tecnologías base (.NET 8, React Native, PostgreSQL)
8. El Cliente dispondrá de 2-3 usuarios para UAT con tiempo dedicado
9. Las reuniones semanales se respetarán (lunes 10:00h)
10. El presupuesto aprobado cubre el alcance definido en Análisis Funcional

---

## RESUMEN DE HITOS Y PAGOS

| Hito | Fase | Semana Aprox | Entregable | % Pago | Acumulado |
|------|------|--------------|-----------|--------|-----------|
| **Kickoff** | 0 | 0 | Infraestructura lista + Diseño iniciado | - | 0% |
| **Diseño Aprobado** | 1 | 3 | Wireframes y guía de estilo visual aprobados | - | 0% |
| **Demostración Funcional** | 5 | 17 | App + Backend + Feed + Maquinaria + Favoritos | 30% | 30% |
| **Versión Beta Completa** | 7 | 24 | Todas funcionalidades + Reputación + Panel Admin | 40% | 70% |
| **Entrega Final** | 8 | 28 | Producción + Documentación + Capacitación | 30% | 100% |

---

## CONTACTO Y COORDINACIÓN

### Reuniones Programadas
- **Kickoff:** Inicio de Fase 0 (presencial o videollamada)
- **Aprobación Diseño:** Fin de Fase 1 - Semana 3 (presencial recomendado)
- **Semanales:** Cada lunes 10:00h - 30 min (revisión de avances)
- **Demostración Funcional:** Fin de Fase 5 - Semana 17 (presencial, 2h)
- **Presentación Beta:** Fin de Fase 7 - Semana 24 (presencial, 2h)
- **Capacitación:** Fase 8 - Semanas 27-28 (2 sesiones de 2h)
- **Entrega Final:** Fin de Fase 8 - Semana 28 (presencial, 1h)

### Canales de Comunicación
- **Email:** Para comunicaciones formales, cambios y aprobaciones
- **Mensajería:** Para coordinación diaria (Slack/WhatsApp/Teams)
- **Videollamadas:** Para reuniones de seguimiento (Zoom/Meet/Teams)
- **Sistema de Tickets:** Para reporte de bugs y seguimiento de incidencias

### Puntos de Contacto
- **Product Owner (Proveedor):** Decisiones de producto, priorización
- **Tech Lead (Proveedor):** Aspectos técnicos, arquitectura
- **Project Manager (Proveedor):** Coordinación, seguimiento, reporting
- **Stakeholder Principal (Cliente):** Aprobaciones finales, feedback estratégico
- **Usuario Técnico (Cliente):** Validación funcional, UAT

---

**Última actualización:** Octubre 2025 - Versión 1.1
**Próxima revisión:** Tras finalización de cada fase

---

© 2025 CODELIO S.L. - Proyecto AGRARIA
