# ANEXO III - ENTREGABLES Y CRONOGRAMA
## Proyecto AGRARIA - Agricultural Services Management Platform

**Versión:** 2.0
**Fecha:** Octubre 2025
**Duración Estimada Total:** 28 semanas (~7 meses)
**Metodología:** Ágil iterativa

---

## TABLA DE CONTENIDOS

1. [Estructura del Proyecto](#1-estructura-del-proyecto)
2. [Fases y Duración](#2-fases-y-duración)
3. [Hitos de Facturación](#3-hitos-de-facturación)
4. [Cronograma Detallado por Fase](#4-cronograma-detallado-por-fase)
5. [Entregables](#5-entregables)
6. [Dependencias](#6-dependencias)

---

## 1. ESTRUCTURA DEL PROYECTO

### 1.1 Componentes Principales

| Componente | Tecnología | Propósito |
|------------|-----------|-----------|
| **Diseño UI/UX** | Wireframes | Guía visual |
| **App Móvil** | React Native + Expo | Aplicación iOS y Android |
| **Backend API** | .NET 8 Web API | Servicios REST |
| **Base de Datos** | PostgreSQL | Almacenamiento |
| **Panel Admin** | React Web | Gestión administrativa |
| **Hosting** | Cloud | Servidor + Storage |

### 1.2 Módulos Funcionales

- Autenticación (Email + Google)
- Gestión de Trabajos
- Gestión de Maquinaria
- Aplicaciones a trabajos
- Feed Inteligente
- Valoraciones y Badges
- Favoritos
- Notificaciones Push (4 tipos)
- Panel Admin Web

---

## 2. FASES Y DURACIÓN

### Resumen Ejecutivo

| Fase | Duración | Entregable Principal | % Proyecto |
|------|----------|---------------------|------------|
| **Fase 0: Setup** | 1 semana | Repos + DB + Hello World | 3% |
| **Fase 1: Diseño** | 2 semanas | Wireframes + Colores | 7% |
| **Fase 2: Backend Core** | 4 semanas | API funcional | 15% |
| **Fase 3: App Móvil Base** | 4 semanas | Auth + Navegación | 14% |
| **Fase 4: Trabajos** | 5 semanas | Publicar + Aplicar | 18% |
| **Fase 5: Features Avanzadas** | 3 semanas | Feed + Favoritos + Maquinaria | 11% |
| **Fase 6: Reputación** | 3 semanas | Ratings + Badges | 11% |
| **Fase 7: Admin Panel** | 2 semanas | Dashboard | 7% |
| **Fase 8: Testing y Deploy** | 4 semanas | UAT + Producción | 14% |

**Total:** 28 semanas (~7 meses)

---

## 3. HITOS DE FACTURACIÓN

### Hito 1: Demo Funcional (30%)
**Momento:** Fin de Fase 5
**Qué funciona:**
- Registro → Publicar trabajo → Aplicar → Ver aplicaciones
- Feed inteligente
- Favoritos
- Catálogo de maquinaria

**Criterio:** Demo en vivo exitosa

---

### Hito 2: Beta Completa (40%)
**Momento:** Fin de Fase 7
**Qué funciona:**
- TODO del Análisis Funcional
- Valoraciones y badges
- Panel admin
- Notificaciones push
- Apps en TestFlight/distribución interna

**Criterio:** Cliente puede usar la app completa

---

### Hito 3: Producción (30%)
**Momento:** Fin de Fase 8
**Qué se entrega:**
- App funcionando en producción
- Código fuente
- Documentación
- Apps publicadas (o en proceso)

**Criterio:** Cliente acepta y app está viva

---

## 4. CRONOGRAMA DETALLADO POR FASE

### FASE 0: SETUP
**Duración:** 1 semana

**Actividades:**
- Crear repos Git
- Setup DB PostgreSQL
- Proyecto .NET inicial
- Proyecto React Native inicial
- Deploy básico en cloud
- Configuración de herramientas

**Entregables:**
- ✅ Repos accesibles
- ✅ API con endpoint /health
- ✅ App que abre en móvil

---

### FASE 1: DISEÑO
**Duración:** 2 semanas

**Actividades:**
- Wireframes de pantallas principales
- Definir paleta de colores
- Elegir tipografía
- Logo
- Revisión y ajustes con cliente

**Entregables:**
- ✅ Wireframes de ~20 pantallas clave
- ✅ Paleta de colores definida
- ✅ Tipografía elegida
- ✅ Aprobación cliente

---

### FASE 2: BACKEND CORE
**Duración:** 4 semanas

**Semana 1: Autenticación**
- Register, Login, JWT
- Google Sign-In
- CRUD usuarios

**Semana 2: Trabajos**
- CRUD trabajos
- Categorías
- Estados

**Semana 3: Imágenes y Aplicaciones**
- Upload imágenes
- CRUD aplicaciones
- Seleccionar proveedor

**Semana 4: Maquinaria y Ajustes**
- CRUD maquinaria
- Ajustes y optimizaciones
- Testing

**Endpoints:** ~30 endpoints REST

**Entregables:**
- ✅ API funcional con endpoints principales
- ✅ DB con tablas necesarias
- ✅ Swagger auto-generado

---

### FASE 3: APP MÓVIL BASE
**Duración:** 4 semanas

**Semana 1:**
- Login/Register screens
- Google Sign-In nativo
- Navegación básica

**Semana 2:**
- Onboarding (3 pasos)
- Perfil de usuario
- Configuración

**Semana 3:**
- HTTP client + auth
- Manejo de errores
- Estado global

**Semana 4:**
- Integración completa backend
- Pulir UX
- Testing en dispositivos

**Entregables:**
- ✅ App instalable que autentica
- ✅ Navegación funcional
- ✅ Integración con backend

---

### FASE 4: GESTIÓN DE TRABAJOS
**Duración:** 5 semanas

**Semana 1:**
- Publicar trabajo (formulario 5 pasos)
- Upload fotos
- Calculadora precio

**Semana 2:**
- Feed de trabajos
- Filtros
- Detalle trabajo

**Semana 3:**
- Aplicar a trabajo
- Selección de maquinaria
- Ver aplicaciones recibidas

**Semana 4:**
- Seleccionar proveedor
- Estados del trabajo

**Semana 5:**
- Notificaciones push
- Testing y ajustes

**Entregables:**
- ✅ Flujo completo funcional
- ✅ Notificaciones configuradas

---

### FASE 5: FEATURES AVANZADAS
**Duración:** 3 semanas

**Semana 1:**
- Catálogo maquinaria completo
- Sistema de favoritos

**Semana 2:**
- Feed ordenado por relevancia
- Optimizar feed

**Semana 3:**
- Pulir UX
- Ajustes y testing

**Entregables:**
- ✅ Todas las features secundarias funcionando

---

### FASE 6: VALORACIONES Y REPUTACIÓN
**Duración:** 3 semanas

**Semana 1:**
- Sistema de valoraciones bidireccionales
- Cálculo de rating promedio

**Semana 2:**
- Badges automáticos (5 tipos)
- Límites según reputación

**Semana 3:**
- Visualización badges
- Testing y ajustes

**Entregables:**
- ✅ Sistema de reputación completo

---

### FASE 7: PANEL ADMIN
**Duración:** 2 semanas

**Semana 1:**
- Login admin
- Dashboard con métricas
- Lista trabajos asignados

**Semana 2:**
- Cambiar estados
- Ver datos reales post-selección
- Ajustes y testing

**Entregables:**
- ✅ Panel funcional desde ordenador

---

### FASE 8: TESTING Y DEPLOY
**Duración:** 4 semanas

**Semana 1-2:**
- Cliente prueba todo (UAT)
- Fix bugs
- Ajustes UX

**Semana 3:**
- Deploy a producción
- Configurar notificaciones push prod
- Testing en producción

**Semana 4:**
- Subir a stores (iniciar proceso)
- Documentación
- Capacitación cliente

**Entregables:**
- ✅ App en producción funcionando
- ✅ Código entregado
- ✅ Apps en stores (o proceso iniciado)

---

## 5. ENTREGABLES

### Por Fase
- **Fase 0:** Repos + DB + Proyectos iniciales
- **Fase 1:** Wireframes + Paleta de colores
- **Fase 2:** API funcional con Swagger
- **Fase 3:** App base con autenticación
- **Fase 4:** Flujo de trabajos completo
- **Fase 5:** Features avanzadas
- **Fase 6:** Sistema de reputación
- **Fase 7:** Panel admin
- **Fase 8:** App en producción + código

### Documentación
- README con setup
- Swagger auto-generado
- Comentarios en código
- Tutorial de uso

---

## 6. DEPENDENCIAS

### Del Cliente

| Qué se necesita | Cuándo | Impacto si demora |
|-----------------|--------|-------------------|
| **Aprobar wireframes + colores** | Fin Fase 1 | Bloquea Fase 3 |
| **Feedback UAT** | Fase 8 | Demora entrega |
| **Credenciales cloud** | Inicio | Bloquea todo |
| **Cuentas Apple/Google Developer** | Fase 8 | Demora publicación |

### Supuestos
1. Feedback del Cliente en máximo 5 días
2. Sin cambios de alcance (CR requiere adenda)
3. Acceso a dispositivos iOS/Android para pruebas

---

## RESUMEN DE HITOS Y PAGOS

| Hito | Fase | Semana | Entregable | % | Acumulado |
|------|------|--------|------------|---|-----------|
| **Inicio** | 0 | 0 | Setup | - | 0% |
| **Demo Funcional** | 5 | 16 | App funcionando con flujo principal | 30% | 30% |
| **Beta Completa** | 7 | 22 | Todo implementado | 40% | 70% |
| **Producción** | 8 | 28 | App en producción + código | 30% | 100% |

---

**Última actualización:** Octubre 2025

---

© 2025 CODELIO S.L. - Proyecto AGRARIA
